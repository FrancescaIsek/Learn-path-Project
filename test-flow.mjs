import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTests() {
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=375,812'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });

  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`Console error: ${msg.text()}`);
  });
  page.on('pageerror', (err) => {
    errors.push(`Page error: ${err.message}`);
  });

  const checkOverflow = async (stepName) => {
    const overflow = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const bodyWidth = document.body.scrollWidth;
      const winWidth = window.innerWidth;
      const hasOverflow = docWidth > winWidth || bodyWidth > winWidth;
      
      const overflowingElements = [];
      const all = document.querySelectorAll('*');
      for (const el of all) {
        const rect = el.getBoundingClientRect();
        if (rect.right > winWidth + 1 || rect.left < -1) {
          overflowingElements.push({
            tag: el.tagName,
            id: el.id,
            className: el.className,
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
          });
        }
      }
      return { docWidth, bodyWidth, winWidth, hasOverflow, overflowingElements: overflowingElements.slice(0, 5) };
    });

    console.log(`[${stepName}] Win: ${overflow.winWidth}px | Doc: ${overflow.docWidth}px | Body: ${overflow.bodyWidth}px | Overflow: ${overflow.hasOverflow}`);
    if (overflow.hasOverflow) {
      console.log('  Overflowing elements:', JSON.stringify(overflow.overflowingElements, null, 2));
    }
    return overflow;
  };

  try {
    // 1. Landing page at 375px
    console.log('\n--- 1. Testing Landing Page (375px) ---');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    await checkOverflow('Landing Page');

    // 2. Type into composer
    console.log('\n--- 2. Typing into Composer ---');
    const inputSelector = '#topic';
    await page.waitForSelector(inputSelector);
    await page.type(inputSelector, 'Cooking Basics');
    await checkOverflow('Composer typed "Cooking Basics"');

    // Check with long input too
    await page.evaluate(() => {
      const input = document.querySelector('#topic');
      input.value = 'A very long subject name to test composer sizing';
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await checkOverflow('Composer with long input');

    // Reset back to Cooking Basics
    await page.evaluate(() => {
      const input = document.querySelector('#topic');
      input.value = 'Cooking Basics';
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });

    // 3. Submit Composer and check Building View
    console.log('\n--- 3. Submitting to Building View ---');
    await page.click('button[type="submit"]');
    await page.waitForSelector('.edge-live, [class*="BuildingView"]', { timeout: 3000 });
    await checkOverflow('Building View');

    // Wait for redirect to /path/cooking-basics
    console.log('\n--- 4. Waiting for Path Page (/path/cooking-basics) ---');
    await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 15000 });
    console.log('Navigated to:', page.url());
    await checkOverflow('Finished Path Page (/path/cooking-basics)');

    // 4. Test Topic Page navigation
    console.log('\n--- 5. Navigating to Topic Detail Page ---');
    await page.waitForSelector('a[href*="/path/cooking-basics/"]');
    const topicLink = await page.$('a[href*="/path/cooking-basics/"]');
    await topicLink.click();
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    console.log('Navigated to:', page.url());
    await checkOverflow('Topic Page');

    // 5. Mark Complete
    console.log('\n--- 6. Testing Mark as Complete ---');
    await page.waitForSelector('#toggle-completion');
    const beforeText = await page.$eval('#toggle-completion', el => el.textContent);
    console.log('Before toggle:', beforeText.trim());
    await page.click('#toggle-completion');
    await page.waitForFunction(() => {
      const el = document.querySelector('#toggle-completion');
      return el && el.textContent.includes('Marked complete');
    });
    const afterText = await page.$eval('#toggle-completion', el => el.textContent);
    console.log('After toggle:', afterText.trim());
    await checkOverflow('Topic Page (Marked Complete)');

    // 6. Navigate to My paths
    console.log('\n--- 7. Navigating to My paths ---');
    await page.goto('http://localhost:3000/paths', { waitUntil: 'networkidle0' });
    await checkOverflow('My paths (/paths)');

    const pathsCardCount = await page.evaluate(() => {
      return document.querySelectorAll('a[href*="/path/"]').length;
    });
    console.log('Paths shown in My paths:', pathsCardCount);

    // 7. Desktop test
    console.log('\n--- 8. Testing Desktop Viewport (1280x800) ---');
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    await checkOverflow('Landing Page (1280px)');

    // Custom path generation on desktop
    await page.waitForSelector(inputSelector);
    await page.type(inputSelector, 'Pottery Making');
    await page.click('button[type="submit"]');
    await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 15000 });
    console.log('Navigated to custom path:', page.url());
    await checkOverflow('Custom Path Page (1280px)');

    console.log('\n--- All Automated Checks Finished ---');
    if (errors.length > 0) {
      console.log('Errors caught during run:');
      errors.forEach(e => console.log(' ', e));
    } else {
      console.log('No console or page errors caught!');
    }
  } catch (err) {
    console.error('Test run failed:', err);
  } finally {
    await browser.close();
  }
}

runTests();
