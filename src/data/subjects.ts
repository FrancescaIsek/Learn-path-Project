import { Subject } from '@/types';
import { createCustomSubject } from '@/lib/customPath';
import { slugify } from '@/lib/theme';

/**
 * Starter learning paths. Deliberately simple, everyday subjects.
 * Each path has 4 topics; each topic has notes, exactly 3 key points and resources.
 * Links are starting points (mostly Wikipedia + a few well-known sites) - worth a quick
 * click-through before launch.
 */
export const STATIC_SUBJECTS: Subject[] = [
  {
    id: 'cooking-basics',
    name: 'Cooking Basics',
    tagline: 'Cook simple meals with confidence',
    description:
      'Learn the everyday skills that make cooking at home easy: knives, heat, seasoning and a few meals you can repeat.',
    category: 'Food & Home',
    color: 'tangerine',
    art: 'cooking',
    keywords: ['cooking', 'cook', 'cooking basics', 'learn to cook', 'kitchen basics', 'home cooking'],
    topics: [
      {
        id: 'kitchen-setup-knife-safety',
        title: 'Kitchen setup & knife safety',
        shortDescription: 'Set up a simple kitchen and learn to handle a knife safely.',
        minutes: 35,
        notes: [
          'You do not need a fancy kitchen to cook well. A sharp knife, a chopping board, one frying pan, one pot and a wooden spoon are enough for most everyday meals.',
          'A sharp knife is safer than a dull one because it cuts with less force. Curl your fingertips under, keep the tip of the knife on the board, and cut slowly before you try to cut fast.',
        ],
        keyPoints: [
          'Start with five basics: a knife, a board, a pan, a pot and a spoon.',
          'Hold the food with curled fingertips (the "claw grip") to protect your hand.',
          'Set out and prep all your ingredients before you turn on the heat.',
        ],
        resources: [
          { title: 'Kitchen knife (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Kitchen_knife', type: 'Reference' },
          { title: 'Mise en place (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Mise_en_place', type: 'Reference' },
        ],
      },
      {
        id: 'heat-pans-simple-techniques',
        title: 'Heat, pans & simple techniques',
        shortDescription: 'Understand heat and try boiling, sautéing and roasting.',
        minutes: 40,
        notes: [
          'Most home cooking uses just a few methods. Boiling cooks food in bubbling water, sautéing cooks small pieces quickly in a little oil, and roasting cooks food in the dry heat of an oven.',
          'Heat is your main tool. High heat browns food and adds flavour, medium heat cooks food through gently, and low heat keeps sauces from burning. Preheating the pan is what stops food from sticking.',
        ],
        keyPoints: [
          'Learn three methods first: boil, sauté and roast.',
          'Preheat your pan before adding food, and do not overcrowd it.',
          'Turn the heat down if food browns too fast on the outside but is raw inside.',
        ],
        resources: [
          { title: 'Sauté (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Saut%C3%A9', type: 'Reference' },
          { title: 'Cooking (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Cooking', type: 'Overview' },
        ],
      },
      {
        id: 'seasoning-and-tasting',
        title: 'Seasoning & tasting',
        shortDescription: 'Learn how salt, acid, fat and herbs make food taste right.',
        minutes: 30,
        notes: [
          'Good cooking is mostly good seasoning. Salt makes flavours stronger, acid (like lemon juice or vinegar) makes food taste bright, and fat (like oil or butter) makes it feel rich.',
          'Taste as you cook, not only at the end. Add a small amount, stir, taste again, and adjust. It is much easier to add more than to fix food that is too salty.',
        ],
        keyPoints: [
          'Season in small steps and taste after each one.',
          'If food tastes flat, try a pinch of salt or a squeeze of lemon.',
          'Fresh herbs go in near the end; dried herbs can go in earlier.',
        ],
        resources: [{ title: 'Seasoning (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Seasoning', type: 'Reference' }],
      },
      {
        id: 'first-five-meals',
        title: 'Your first five meals',
        shortDescription: 'Put it all together with simple meals you can repeat.',
        minutes: 45,
        notes: [
          'Pick a small set of meals and repeat them until they feel easy. Scrambled eggs, a simple pasta, a vegetable stir-fry, rice with a sauce, and a tray of roasted vegetables and chicken cover a lot of ground.',
          'Plan for the week, shop once, and cook one base (like rice or roasted vegetables) that works in more than one meal. This saves time and money and builds confidence.',
        ],
        keyPoints: [
          'Master a few easy meals before trying new recipes.',
          'Read the whole recipe before you start.',
          'Cook a bigger batch of one base ingredient to use in two meals.',
        ],
        resources: [
          { title: 'BBC Good Food', url: 'https://www.bbcgoodfood.com/', type: 'Recipes' },
          { title: 'Serious Eats', url: 'https://www.seriouseats.com/', type: 'Guide' },
        ],
      },
    ],
  },
  {
    id: 'budgeting-basics',
    name: 'Budgeting Basics',
    tagline: 'Take control of your money, one step at a time',
    description: 'See where your money goes, plan each month and build a small safety cushion.',
    category: 'Money',
    color: 'cobalt',
    art: 'budget',
    keywords: ['budgeting', 'budget', 'money', 'saving', 'saving money', 'personal finance', 'financial literacy', 'finance'],
    topics: [
      {
        id: 'know-where-money-goes',
        title: 'Know where your money goes',
        shortDescription: 'Track a month of spending to see what is really happening.',
        minutes: 30,
        notes: [
          'A budget starts with facts, not rules. For one month, write down everything you spend, even small things like snacks and transport. You can use a notebook, a notes app or a spreadsheet.',
          'At the end of the month, sort what you spent into groups such as rent, food, transport, bills and fun. Most people are surprised by one or two groups.',
        ],
        keyPoints: [
          'Track every expense for 30 days, big or small.',
          'Sort spending into a few simple groups.',
          'Look for one or two groups that are bigger than you expected.',
        ],
        resources: [{ title: 'Budget (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Budget', type: 'Reference' }],
      },
      {
        id: 'build-a-monthly-budget',
        title: 'Build a simple monthly budget',
        shortDescription: 'Give your income a plan for the month.',
        minutes: 40,
        notes: [
          'A budget is a plan for your money, written before the month starts. Start with your income, subtract the costs you must pay (needs), then decide how much goes to wants and to savings.',
          'A popular starting point is the 50/30/20 idea: about half of income for needs, 30% for wants and 20% for savings or paying off debt. Treat it as a guide and adjust it to your life.',
        ],
        keyPoints: [
          'List your income first, then your must-pay costs (needs).',
          'Give wants and savings a set amount so they do not happen by accident.',
          'Review the plan at the end of each month and adjust.',
        ],
        resources: [
          {
            title: 'Khan Academy: Personal finance',
            url: 'https://www.khanacademy.org/college-careers-more/personal-finance',
            type: 'Course',
          },
        ],
      },
      {
        id: 'start-an-emergency-fund',
        title: 'Start an emergency fund',
        shortDescription: 'Build a small cushion for surprises.',
        minutes: 30,
        notes: [
          'An emergency fund is money set aside for surprises, like a medical bill or a broken phone. Having it means a bad week does not turn into a debt problem.',
          'Start small. Even a first goal of one week of expenses helps. Keep the money somewhere safe that you can reach quickly but will not spend by habit.',
        ],
        keyPoints: [
          'Start with a small goal, such as one week of basic expenses.',
          'Save a fixed amount as soon as you are paid, before you spend.',
          'Only use the fund for real emergencies.',
        ],
        resources: [{ title: 'Emergency fund (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Emergency_fund', type: 'Reference' }],
      },
      {
        id: 'spend-smart-avoid-debt',
        title: 'Spend smart & avoid debt traps',
        shortDescription: 'Make better spending choices and understand debt.',
        minutes: 35,
        notes: [
          'Small habits add up. Waiting a day before a non-essential purchase, comparing prices and checking subscriptions can free up money without making life feel restricted.',
          'Debt is money you borrow and pay back with extra cost (interest). Borrowing is not always bad, but expensive debt grows fast, so pay off the highest-interest debt first when you can.',
        ],
        keyPoints: [
          'Wait 24 hours before buying anything that is not a need.',
          'Cancel subscriptions and services you no longer use.',
          'Understand the interest cost before you borrow.',
        ],
        resources: [
          { title: 'Debt (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Debt', type: 'Reference' },
          { title: 'Compound interest (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Compound_interest', type: 'Reference' },
        ],
      },
    ],
  },
  {
    id: 'home-gardening',
    name: 'Home Gardening',
    tagline: 'Grow your first herbs and vegetables',
    description: 'Grow herbs and vegetables at home, even in a small space like a balcony or windowsill.',
    category: 'Outdoors',
    color: 'pine',
    art: 'garden',
    keywords: ['gardening', 'garden', 'home gardening', 'plants', 'growing plants', 'vegetables', 'herbs'],
    topics: [
      {
        id: 'sun-soil-space',
        title: 'Sun, soil & space',
        shortDescription: 'Choose a good spot and understand what plants need.',
        minutes: 30,
        notes: [
          'Plants need light, water and good soil. Before buying anything, watch your space for a few days and note how many hours of direct sun it gets. Most vegetables and herbs want six or more hours.',
          'You do not need a big yard. A sunny balcony, windowsill or a few containers with drainage holes work well. Good soil is loose, holds some moisture and lets extra water drain away.',
        ],
        keyPoints: [
          'Check how many hours of sun your space gets.',
          'Use containers with drainage holes if you have no ground space.',
          'Good soil is loose and drains well.',
        ],
        resources: [
          { title: 'Gardening (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Gardening', type: 'Overview' },
          { title: 'Soil (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Soil', type: 'Reference' },
        ],
      },
      {
        id: 'choose-easy-plants',
        title: 'Choose easy plants',
        shortDescription: 'Pick forgiving plants that give quick wins.',
        minutes: 30,
        notes: [
          'Start with plants that grow fast and forgive mistakes. Mint, basil, spring onions, lettuce, tomatoes and peppers are popular first choices.',
          'Match the plant to your space and sun. Leafy herbs and lettuce cope with less light, while tomatoes and peppers need plenty of sun. Buying small seedlings is easier than starting from seed.',
        ],
        keyPoints: [
          'Start with two or three easy plants, not ten.',
          'Match each plant to the light you have.',
          'Seedlings are easier than seeds for a first try.',
        ],
        resources: [{ title: 'Container gardening (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Container_gardening', type: 'Reference' }],
      },
      {
        id: 'planting-and-watering',
        title: 'Planting & watering',
        shortDescription: 'Plant properly and build a simple watering habit.',
        minutes: 35,
        notes: [
          'Fill the pot with soil, make a hole about the size of the seedling’s roots, set the plant in, and press the soil gently around it. Water well after planting.',
          'Overwatering is a common beginner mistake. Push a finger about two centimetres into the soil: if it feels dry, water; if it is damp, wait. Water at the base of the plant, ideally in the morning.',
        ],
        keyPoints: [
          'Plant at the same depth the seedling was growing before.',
          'Check the soil with your finger before you water.',
          'Water at the base, in the morning if you can.',
        ],
        resources: [{ title: 'Royal Horticultural Society', url: 'https://www.rhs.org.uk/', type: 'Guide' }],
      },
      {
        id: 'care-pests-harvest',
        title: 'Care, pests & harvest',
        shortDescription: 'Look after your plants and enjoy what you grow.',
        minutes: 35,
        notes: [
          'Check your plants a little every day. Remove yellow leaves, pick off pests by hand, and rinse leaves with water. A small routine catches problems early.',
          'Harvest often. Picking herbs and leaves regularly encourages new growth, and ripe vegetables taste best when picked at the right time. Kitchen scraps can become compost to feed future plants.',
        ],
        keyPoints: [
          'Spend a few minutes each day checking your plants.',
          'Harvest herbs and leaves often to help them grow more.',
          'Compost kitchen scraps to make free plant food.',
        ],
        resources: [{ title: 'Compost (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Compost', type: 'Reference' }],
      },
    ],
  },
  {
    id: 'learn-to-draw',
    name: 'Learn to Draw',
    tagline: 'Learn to draw, one line at a time',
    description: 'Build a steady drawing habit with simple shapes, careful looking and basic shading.',
    category: 'Creative',
    color: 'blush',
    art: 'drawing',
    keywords: ['drawing', 'draw', 'learn to draw', 'sketching', 'sketch', 'how to draw'],
    topics: [
      {
        id: 'lines-shapes-pencil',
        title: 'Lines, shapes & holding the pencil',
        shortDescription: 'Warm up with lines, circles and basic shapes.',
        minutes: 30,
        notes: [
          'Every drawing is built from simple shapes: circles, squares, triangles and lines. Practising them loosens your hand and builds control.',
          'Hold the pencil lightly, a little back from the tip, and draw long lines from your shoulder and elbow instead of only your wrist. Light lines are easy to fix.',
        ],
        keyPoints: [
          'Practise straight lines, curves, circles and boxes every day.',
          'Draw lightly first, then darken the lines you want to keep.',
          'Ten minutes a day beats one long session a week.',
        ],
        resources: [
          { title: 'Drawing (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Drawing', type: 'Overview' },
          { title: 'Drawabox: free lessons', url: 'https://drawabox.com/', type: 'Course' },
        ],
      },
      {
        id: 'seeing-like-an-artist',
        title: 'Seeing like an artist',
        shortDescription: 'Learn to look carefully and get proportions right.',
        minutes: 35,
        notes: [
          'Beginners often draw what they think something looks like instead of what they actually see. Slow down and study the object: its overall shape, its edges, and how big each part is compared with the others.',
          'Break an object into simple shapes first. Compare sizes by holding your pencil up, and check angles and distances before adding any detail.',
        ],
        keyPoints: [
          'Draw what you see, not what you think you see.',
          'Start with big simple shapes, then add details.',
          'Compare sizes and angles by measuring with your pencil.',
        ],
        resources: [{ title: 'Perspective (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Perspective_(graphical)', type: 'Reference' }],
      },
      {
        id: 'light-and-shadow',
        title: 'Light & shadow',
        shortDescription: 'Add depth with simple shading.',
        minutes: 35,
        notes: [
          'Shading makes flat shapes look solid. Decide where the light is coming from, then make the side facing away from the light darker and add a soft shadow on the ground.',
          'Practise with a value scale: a row of boxes going from very light to very dark. Build the dark slowly with layers instead of pressing hard.',
        ],
        keyPoints: [
          'Pick one light direction and keep it the same.',
          'Use light layers to build darker areas.',
          'Add a shadow on the ground so objects do not float.',
        ],
        resources: [{ title: 'Shading (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Shading', type: 'Reference' }],
      },
      {
        id: 'draw-a-still-life',
        title: 'Draw a still life',
        shortDescription: 'Put it all together with a few everyday objects.',
        minutes: 45,
        notes: [
          'A still life is a drawing of objects that stay still, like a cup, a fruit and a bottle. Put them near a window or lamp so the light is clear.',
          'Work in stages: a light outline of the shapes, check proportions, add shading, then finish with a few darker lines. It does not need to be perfect; notice what you would change next time.',
        ],
        keyPoints: [
          'Choose two or three simple objects with a clear light.',
          'Work in stages: shapes, proportions, shading, details.',
          'Keep your drawings so you can compare your progress.',
        ],
        resources: [{ title: 'Still life (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Still_life', type: 'Reference' }],
      },
    ],
  },
  {
    id: 'public-speaking',
    name: 'Public Speaking',
    tagline: 'Speak clearly, even when you are nervous',
    description: 'Speak with clarity and confidence, from short talks at work to bigger presentations.',
    category: 'Communication',
    color: 'marigold',
    art: 'speaking',
    keywords: ['public speaking', 'speaking', 'presentation', 'presentations', 'presenting', 'speech'],
    topics: [
      {
        id: 'calm-your-nerves',
        title: 'Calm your nerves',
        shortDescription: 'Understand nerves and use simple ways to settle them.',
        minutes: 30,
        notes: [
          'Feeling nervous before speaking is normal. Your body releases energy to help you perform, which can feel like a racing heart or shaky hands.',
          'Slow breathing, a short warm-up, and knowing your first sentence by heart help a lot. Thinking about helping your audience, instead of being judged, also takes pressure off.',
        ],
        keyPoints: [
          'Nerves are normal and are often invisible to the audience.',
          'Breathe in for four counts and out for six before you begin.',
          'Memorise your first sentence so you start strongly.',
        ],
        resources: [{ title: 'Glossophobia (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Glossophobia', type: 'Reference' }],
      },
      {
        id: 'structure-a-simple-talk',
        title: 'Structure a simple talk',
        shortDescription: 'Use an easy opening, three points and a closing.',
        minutes: 40,
        notes: [
          'A clear structure helps both you and the audience. A simple shape is: an opening that says what the talk is about, up to three main points, and a closing that repeats the key message.',
          'Three is a useful number because people remember short lists easily. For each point, add one example or short story so it feels real.',
        ],
        keyPoints: [
          'Say what you will talk about, talk about it, then say what you talked about.',
          'Limit yourself to three main points.',
          'Support each point with one example or story.',
        ],
        resources: [{ title: 'Rule of three (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Rule_of_three_(writing)', type: 'Reference' }],
      },
      {
        id: 'voice-pace-body-language',
        title: 'Voice, pace & body language',
        shortDescription: 'Sound clear and look relaxed.',
        minutes: 35,
        notes: [
          'Speak a little slower than feels natural and pause between ideas. Pauses give the audience time to think and give you time to breathe.',
          'Stand steady, keep your shoulders relaxed, look at people in different parts of the room, and use your hands naturally. Aim to sound like yourself, just a bit more deliberate.',
        ],
        keyPoints: [
          'Slow down and use pauses.',
          'Make eye contact with different people, one at a time.',
          'Keep your posture open and your hands relaxed.',
        ],
        resources: [{ title: 'Nonverbal communication (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Nonverbal_communication', type: 'Reference' }],
      },
      {
        id: 'practise-and-get-feedback',
        title: 'Practise & get feedback',
        shortDescription: 'Rehearse, record yourself and improve.',
        minutes: 40,
        notes: [
          'Practise out loud, not just in your head. Speak your talk to a mirror or a friend, or record it on your phone, then watch it once and choose one thing to improve.',
          'Look for low-pressure chances to speak, such as a team meeting or a local club like Toastmasters. Every short talk builds experience.',
        ],
        keyPoints: [
          'Practise out loud at least three times.',
          'Record yourself and change one thing at a time.',
          'Take small speaking chances to build confidence.',
        ],
        resources: [{ title: 'Toastmasters International', url: 'https://www.toastmasters.org/', type: 'Community' }],
      },
    ],
  },
  {
    id: 'photography-basics',
    name: 'Photography Basics',
    tagline: 'Take better photos with what you already have',
    description: 'Take better photos with the phone or camera you already own.',
    category: 'Creative',
    color: 'ink',
    art: 'photo',
    keywords: ['photography', 'photography basics', 'photo', 'photos', 'taking photos', 'camera'],
    topics: [
      {
        id: 'know-your-camera',
        title: 'Know your camera',
        shortDescription: 'Learn the basics of your phone or camera.',
        minutes: 30,
        notes: [
          'The best camera is the one you have with you. Learn where your controls are: how to focus, change exposure, switch lenses and turn on the grid lines.',
          'Exposure simply means how bright or dark a photo is. Tap the screen to focus, then slide up or down to make the picture brighter or darker before you shoot. Clean your lens first.',
        ],
        keyPoints: [
          'Turn on the grid lines in your camera settings.',
          'Tap to focus and slide to adjust brightness.',
          'Wipe the lens before you shoot.',
        ],
        resources: [{ title: 'Exposure (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Exposure_(photography)', type: 'Reference' }],
      },
      {
        id: 'work-with-light',
        title: 'Work with light',
        shortDescription: 'Notice light and use it to make photos look better.',
        minutes: 35,
        notes: [
          'Photography means writing with light. Soft light, such as near a window or on a cloudy day, is flattering and easy to use. Harsh midday sun creates strong shadows.',
          'The hour after sunrise and the hour before sunset, often called golden hour, gives warm, soft light that makes almost everything look better. Try to keep the light coming from the side or slightly behind your subject.',
        ],
        keyPoints: [
          'Soft light is easiest for beginners.',
          'Try shooting in the hour after sunrise or before sunset.',
          'Avoid pointing the camera straight at bright light unless you want a silhouette.',
        ],
        resources: [{ title: 'Golden hour (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Golden_hour_(photography)', type: 'Reference' }],
      },
      {
        id: 'composition-basics',
        title: 'Composition basics',
        shortDescription: 'Frame your photos so they look balanced and interesting.',
        minutes: 35,
        notes: [
          'Composition is how you arrange things inside the frame. A popular guide is the rule of thirds: imagine the frame split into a grid of nine, and place your subject on a line or where lines cross instead of dead centre.',
          'Also try getting closer, changing your angle, and looking for leading lines such as roads or fences that guide the eye. Remove distractions from the background before you press the button.',
        ],
        keyPoints: [
          'Place your subject off-centre using the rule of thirds.',
          'Get closer and change your angle.',
          'Check the background before you shoot.',
        ],
        resources: [
          { title: 'Rule of thirds (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Rule_of_thirds', type: 'Reference' },
          { title: 'Composition (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Composition_(visual_arts)', type: 'Reference' },
        ],
      },
      {
        id: 'edit-and-share',
        title: 'Edit & share',
        shortDescription: 'Do simple edits and choose your best photos.',
        minutes: 30,
        notes: [
          'Editing can be simple. Crop to improve the composition, straighten the horizon, and gently adjust brightness and contrast. Small changes look more natural than big ones.',
          'Take many photos but share only your best. Compare similar shots, pick one, and keep a folder of favourites to see how you improve over time.',
        ],
        keyPoints: [
          'Crop, straighten and adjust brightness first.',
          'Make small edits so the photo still looks natural.',
          'Share your best few, not all of them.',
        ],
        resources: [{ title: 'Photography (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Photography', type: 'Overview' }],
      },
    ],
  },
];

/**
 * Words that are too wide to build a good path from. When someone types one of these
 * the composer suggests narrower, everyday alternatives (they can still continue anyway).
 */
export const BROAD_TOPICS: Record<string, string[]> = {
  science: ['Basic chemistry', 'Astronomy basics', 'Human body basics', 'Weather and climate'],
  art: ['Watercolor basics', 'Color theory', 'Sketching', 'Calligraphy'],
  math: ['Fractions', 'Basic algebra', 'Mental math', 'Percentages'],
  maths: ['Fractions', 'Basic algebra', 'Mental math', 'Percentages'],
  mathematics: ['Fractions', 'Basic algebra', 'Mental math', 'Percentages'],
  history: ['Ancient Egypt', 'The Roman Empire', 'World War 2 basics', 'The history of money'],
  business: ['Starting a small business', 'Basic marketing', 'Customer service', 'Bookkeeping basics'],
  language: ['Basic French', 'Basic Spanish', 'English grammar', 'Better writing'],
  languages: ['Basic French', 'Basic Spanish', 'English grammar', 'Better writing'],
  music: ['Guitar basics', 'Piano basics', 'Reading music', 'Singing basics'],
  health: ['Healthy eating', 'Better sleep', 'Home workouts', 'Stretching basics'],
  fitness: ['Home workouts', 'Running for beginners', 'Stretching basics', 'Basic yoga'],
  technology: ['Using a smartphone', 'Typing', 'Email basics', 'Spreadsheet basics'],
  tech: ['Using a smartphone', 'Typing', 'Email basics', 'Spreadsheet basics'],
  sports: ['Running for beginners', 'Swimming basics', 'Football basics', 'Basic yoga'],
  everything: ['Cooking basics', 'Budgeting basics', 'Home gardening', 'Learn to draw'],
};

function normalise(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

/** If what someone types clearly means one of the starter paths, use that path. */
export function findStaticSubject(query: string): Subject | undefined {
  const q = normalise(query);
  if (!q) return undefined;
  return STATIC_SUBJECTS.find(
    (s) =>
      s.id === slugify(q) ||
      normalise(s.name) === q ||
      (s.keywords ?? []).some((k) => normalise(k) === q)
  );
}

export function getBroadSuggestions(query: string): string[] | null {
  return BROAD_TOPICS[normalise(query)] ?? null;
}

export function isStaticId(id: string): boolean {
  return STATIC_SUBJECTS.some((s) => s.id === id.toLowerCase());
}

export function getSubjectById(id: string, customSubjects: Subject[] = []): Subject | undefined {
  const normalizedId = id.toLowerCase();
  const staticMatch = STATIC_SUBJECTS.find((s) => s.id === normalizedId);
  if (staticMatch) return staticMatch;

  const customMatch = customSubjects.find((s) => s.id === normalizedId);
  if (customMatch) return customMatch;

  // Same fallback as V1: a link to /path/some-topic still builds a path on any device.
  return createCustomSubject(id.replace(/-/g, ' '));
}
