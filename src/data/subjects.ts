import { Subject } from '@/types';

export const STATIC_SUBJECTS: Subject[] = [
  {
    id: 'psychology',
    name: 'Psychology',
    description: 'Understand the core principles of human mind, behavior, cognition, and social interaction.',
    category: 'Social Sciences',
    topics: [
      {
        id: 'intro-to-mind-behavior',
        title: '1. Introduction to Mind & Behavior',
        shortDescription: 'Discover what psychology is and how scientific methods explore human behavior.',
        notes: [
          'Psychology is the scientific study of mind, mental processes, and human behavior. It seeks to answer how we perceive the world, why we feel emotions, and what drives human choices.',
          'Rather than relying on intuition or common sense, psychological science uses empirical observation, structured experiments, and statistical analysis to validate theories about human experience.'
        ],
        keyPoints: [
          'Psychology bridges biological science, cognitive research, and social behavior.',
          'Scientific methods separate validated psychological insights from popular myths.',
          'Human development is shaped by the constant interaction of genetic predisposition and environment.'
        ],
        resources: [
          {
            title: 'OpenStax Psychology (Free Open Textbook)',
            url: 'https://openstax.org/details/books/psychology-2e',
            type: 'Read'
          },
          {
            title: 'Simply Psychology: Core Concepts Guide',
            url: 'https://www.simplypsychology.org',
            type: 'Reference'
          }
        ]
      },
      {
        id: 'cognitive-processes-memory',
        title: '2. Cognitive Processes & Memory',
        shortDescription: 'Explore how the brain encodes, stores, retrieves, and processes information.',
        notes: [
          'Cognitive psychology focuses on internal mental operations such as perception, attention, language processing, problem-solving, and memory formation.',
          'Memory operates in distinct stages: sensory encoding, short-term working memory, and long-term consolidation. Understanding these mechanisms helps improve learning efficiency.'
        ],
        keyPoints: [
          'Working memory has limited capacity and requires focused attention.',
          'Active retrieval and spaced repetition significantly enhance long-term memory retention.',
          'Cognitive heuristics allow fast decision-making but can introduce systematic mental biases.'
        ],
        resources: [
          {
            title: 'Scholarpedia: Cognitive Psychology Overview',
            url: 'http://www.scholarpedia.org/article/Cognitive_psychology',
            type: 'Article'
          }
        ]
      },
      {
        id: 'social-psychology-dynamics',
        title: '3. Social Psychology & Group Dynamics',
        shortDescription: 'Examine how social environments and group interactions influence individual behavior.',
        notes: [
          'Social psychology studies how individual thoughts, feelings, and actions are shaped by the presence, expectations, and influences of other people.',
          'Key phenomena include conformity, persuasion, group decision-making, and the powerful impact of social roles and immediate situations on personal conduct.'
        ],
        keyPoints: [
          'Situational context often exerts a stronger influence on behavior than internal personality traits alone.',
          'Cognitive dissonance occurs when actions contradict beliefs, driving people to change their attitudes.',
          'Group dynamics can foster cooperation or lead to uncritical consensus (groupthink).'
        ],
        resources: [
          {
            title: 'Social Psychology Network Resources',
            url: 'https://www.socialpsychology.org',
            type: 'Guide'
          }
        ]
      },
      {
        id: 'biological-basis-behavior',
        title: '4. Biological Basis of Behavior',
        shortDescription: 'Learn how neural circuits, neurotransmitters, and brain anatomy generate experiences.',
        notes: [
          'Biological psychology explores the physical foundation of thoughts and feelings. Neurons communicate via electrical signals and chemical neurotransmitters across synapses.',
          'Brain structures like the amygdala, hippocampus, and prefrontal cortex specialized functions that govern emotion, memory formation, and executive planning.'
        ],
        keyPoints: [
          'Neuroplasticity enables the adult brain to continuously adapt and form new neural pathways.',
          'Neurotransmitters such as dopamine, serotonin, and GABA regulate mood, reward, and anxiety.',
          'The central nervous system coordinates physical actions with internal mental states.'
        ],
        resources: [
          {
            title: 'BrainFacts.org: Fundamentals of Brain & Behavior',
            url: 'https://www.brainfacts.org',
            type: 'Resource'
          }
        ]
      }
    ]
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Learn how modern websites and web applications are structured, styled, and programmed.',
    category: 'Technology',
    topics: [
      {
        id: 'html-semantic-structure',
        title: '1. HTML & Semantic Web Structure',
        shortDescription: 'Master the foundation of the web by structuring accessible content with HTML tags.',
        notes: [
          'HyperText Markup Language (HTML) provides the raw building blocks for web pages. Semantic tags describe the meaning of content to browsers, search engines, and screen readers.',
          'Using proper elements like <main>, <article>, <nav>, and <header> improves document accessibility, SEO, and maintainability.'
        ],
        keyPoints: [
          'HTML forms the structural backbone of every page on the web.',
          'Semantic tags provide contextual meaning rather than purely visual formatting.',
          'Proper heading hierarchies and ARIA attributes make web pages accessible to all users.'
        ],
        resources: [
          {
            title: 'MDN Web Docs: HTML Basics',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
            type: 'Documentation'
          }
        ]
      },
      {
        id: 'css-layouts-styling',
        title: '2. CSS Layouts & Responsive Design',
        shortDescription: 'Transform plain HTML into visually engaging interfaces using Flexbox and Grid.',
        notes: [
          'Cascading Style Sheets (CSS) control typography, colors, spacing, and page layout across different screen sizes.',
          'Modern layout systems like CSS Flexbox (one-dimensional) and CSS Grid (two-dimensional) enable flexible, mobile-friendly user interfaces.'
        ],
        keyPoints: [
          'Mobile-first responsive design ensures content adapts smoothly from mobile screens to desktop monitors.',
          'Flexbox handles linear component alignment, while CSS Grid manages overall page layouts.',
          'CSS variables and clean utility classes keep design tokens consistent.'
        ],
        resources: [
          {
            title: 'MDN Web Docs: Learn CSS',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
            type: 'Documentation'
          }
        ]
      },
      {
        id: 'javascript-core-logic',
        title: '3. JavaScript Core Concepts',
        shortDescription: 'Add interactivity and logic to web applications with modern JavaScript.',
        notes: [
          'JavaScript is the programming language of the web. It enables dynamic user interactions, data fetching, DOM manipulation, and asynchronous tasks.',
          'Understanding variables, functions, scope, event loops, promises, and array operations forms the cornerstone of frontend development.'
        ],
        keyPoints: [
          'Events listen for user interactions like clicks, inputs, and scrolls.',
          'Asynchronous operations (Promises and async/await) handle network requests without blocking UI.',
          'Functions and immutability foster clean, predictable code structures.'
        ],
        resources: [
          {
            title: 'javascript.info: The Modern JavaScript Tutorial',
            url: 'https://javascript.info',
            type: 'Tutorial'
          }
        ]
      },
      {
        id: 'frontend-frameworks-architecture',
        title: '4. Frontend Component Architecture',
        shortDescription: 'Build modular, reusable UI components using modern frontend frameworks like React.',
        notes: [
          'Modern web applications rely on component-based architecture to split complex interfaces into manageable, stateful pieces.',
          'Frameworks manage UI updates efficiently by reacting to state changes and re-rendering only modified components.'
        ],
        keyPoints: [
          'Components encapsulate structure, styling, and behavior into reusable units.',
          'State represents dynamic data that changes over time based on user action.',
          'Declarative programming allows developers to specify what the UI should look like for a given state.'
        ],
        resources: [
          {
            title: 'React Official Documentation',
            url: 'https://react.dev/learn',
            type: 'Documentation'
          }
        ]
      }
    ]
  },
  {
    id: 'financial-literacy',
    name: 'Financial Literacy',
    description: 'Build practical habits for budgeting, managing debt, investing, and long-term stability.',
    category: 'Personal Development',
    topics: [
      {
        id: 'budgeting-cash-flow',
        title: '1. Budgeting & Cash Flow Management',
        shortDescription: 'Track income and expenses to take direct control of your personal finances.',
        notes: [
          'Financial literacy starts with understanding cash flow—the balance between income coming in and expenses going out each month.',
          'Budgeting frameworks (such as 50/30/20 or zero-based budgeting) help prioritize essential needs, intentional savings, and lifestyle choices.'
        ],
        keyPoints: [
          'Tracking monthly cash flow prevents unintentional overspending.',
          'Separating fixed needs from variable wants creates financial clarity.',
          'Automating monthly savings ensures consistency without daily willpower.'
        ],
        resources: [
          {
            title: 'Consumer Financial Protection Bureau: Budgeting Tools',
            url: 'https://www.consumerfinance.gov/consumer-tools/educator-resources/youth-financial-education/teach-about-managing-money/budgeting',
            type: 'Guide'
          }
        ]
      },
      {
        id: 'credit-debt-management',
        title: '2. Understanding Credit & Debt',
        shortDescription: 'Learn how credit scores work and strategies to pay down high-interest debt efficiently.',
        notes: [
          'Credit reflects your borrowing reliability. Maintaining a strong credit score lowers borrowing costs for major life purchases like housing or vehicles.',
          'High-interest debt (like credit cards) can compound rapidly. Strategies like the debt avalanche or debt snowball provide structured payoff plans.'
        ],
        keyPoints: [
          'Payment history and credit utilization ratio are the largest factors in credit scores.',
          'High-interest consumer debt should be prioritized and eliminated quickly.',
          'Borrowing responsibly is a tool for building long-term options, not funding daily inflation.'
        ],
        resources: [
          {
            title: 'CFPB: Managing Credit & Debt',
            url: 'https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores',
            type: 'Resource'
          }
        ]
      },
      {
        id: 'investing-fundamentals',
        title: '3. Investing Fundamentals & Asset Classes',
        shortDescription: 'Discover how compound interest and index investing build wealth over time.',
        notes: [
          'Investing puts money to work in assets like stocks, bonds, and broad market index funds to beat inflation and compound returns over decades.',
          'Diversification reduces risk by spreading investments across hundreds of companies rather than picking individual stocks.'
        ],
        keyPoints: [
          'Compound growth relies heavily on starting early and remaining consistent.',
          'Low-cost broad index funds offer simple, highly effective market diversification.',
          'Risk tolerance determines the balance between growth assets (stocks) and stability assets (bonds).'
        ],
        resources: [
          {
            title: 'SEC Investor.gov: Introduction to Investing',
            url: 'https://www.investor.gov/introduction-investing',
            type: 'Educational'
          }
        ]
      },
      {
        id: 'emergency-funds-risk',
        title: '4. Emergency Funds & Risk Management',
        shortDescription: 'Protect your financial plan against unexpected life events and market down turns.',
        notes: [
          'An emergency fund consists of 3 to 6 months of liquid expenses saved in a high-yield account, shielding investments from panic selling during job loss or emergency expenses.',
          'Insurance products (health, auto, disability, property) protect high-cost catastrophic risks.'
        ],
        keyPoints: [
          'An emergency fund provides psychological peace of mind and liquid safety.',
          'Insurance should cover catastrophic losses that would otherwise break personal solvency.',
          'A resilient financial plan anticipates unexpected economic disruptions.'
        ],
        resources: [
          {
            title: 'Investor.gov: Building an Emergency Savings Plan',
            url: 'https://www.investor.gov',
            type: 'Guide'
          }
        ]
      }
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Learn how to analyze raw data, extract insights, and make data-driven predictions.',
    category: 'Computer Science',
    topics: [
      {
        id: 'data-fundamentals-stats',
        title: '1. Data Fundamentals & Statistics',
        shortDescription: 'Understand summary statistics, probability, and hypothesis testing.',
        notes: [
          'Data science combines domain context, computer programming, and statistical theory to extract meaningful knowledge from noisy datasets.',
          'Descriptive statistics (mean, median, standard deviation) summarize data distributions, while inferential statistics let you draw broader conclusions.'
        ],
        keyPoints: [
          'Clean data and sound statistical reasoning prevent misleading conclusions.',
          'Understanding variance and correlation is fundamental to pattern recognition.',
          'Sample representation determines whether insights generalize to larger populations.'
        ],
        resources: [
          {
            title: 'Khan Academy: Statistics & Probability',
            url: 'https://www.khanacademy.org/math/statistics-probability',
            type: 'Course'
          }
        ]
      },
      {
        id: 'eda-visualization',
        title: '2. Exploratory Data Analysis & Visualization',
        shortDescription: 'Clean raw data and communicate patterns through clear charts and graphics.',
        notes: [
          'Exploratory Data Analysis (EDA) involves inspecting datasets for missing values, outliers, distributions, and hidden relationships.',
          'Data visualization translates numerical distributions into intuitive charts (histograms, scatter plots, bar charts) that tell a clear story.'
        ],
        keyPoints: [
          'Data cleaning usually consumes the majority of a data project timeline.',
          'Visualizations should make key trends immediately obvious without clutter.',
          'Detecting outliers early protects models from severe skew.'
        ],
        resources: [
          {
            title: 'Kaggle Learn: Data Visualization',
            url: 'https://www.kaggle.com/learn/data-visualization',
            type: 'Interactive'
          }
        ]
      },
      {
        id: 'machine-learning-basics',
        title: '3. Machine Learning Principles',
        shortDescription: 'Explore supervised learning, classification, regression, and model evaluation.',
        notes: [
          'Machine Learning algorithms detect patterns in training data to make predictions on unseen future data without explicit step-by-step rules.',
          'Supervised learning trains on labeled data (e.g. regression for price prediction, classification for spam detection).'
        ],
        keyPoints: [
          'Train/test splits prevent models from memorizing data (overfitting).',
          'Feature selection dictates model quality as much as algorithm selection.',
          'Evaluation metrics (precision, recall, RMSE) measure real-world performance.'
        ],
        resources: [
          {
            title: 'Scikit-Learn Machine Learning Guide',
            url: 'https://scikit-learn.org/stable/tutorial/index.html',
            type: 'Documentation'
          }
        ]
      },
      {
        id: 'data-ethics-storytelling',
        title: '4. Data Ethics & Storytelling',
        shortDescription: 'Deliver actionable recommendations responsibly with attention to bias and privacy.',
        notes: [
          'Technical insights are only valuable if stakeholders can understand them and act on them safely and ethically.',
          'Data ethics considers user privacy, algorithmic bias, fairness, transparency, and the societal consequences of automated models.'
        ],
        keyPoints: [
          'Algorithmic models can amplify historical biases present in training data.',
          'Clear data storytelling translates technical metrics into real-world choices.',
          'Privacy and security must be designed into data systems from the start.'
        ],
        resources: [
          {
            title: 'Data Ethics Guidelines (The Royal Statistical Society)',
            url: 'https://rss.org.uk',
            type: 'Article'
          }
        ]
      }
    ]
  }
];

export function getSubjectById(id: string, customSubjects: Subject[] = []): Subject | undefined {
  const normalizedId = id.toLowerCase();
  const staticMatch = STATIC_SUBJECTS.find((s) => s.id === normalizedId);
  if (staticMatch) return staticMatch;

  const customMatch = customSubjects.find((s) => s.id === normalizedId);
  if (customMatch) return customMatch;

  // Fallback: Generate a structured path dynamically for any custom subject title!
  return createCustomSubject(id);
}

export function createCustomSubject(title: string): Subject {
  const cleanTitle = title.trim();
  const id = cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'custom-subject';
  
  const formattedName = cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);

  return {
    id,
    name: formattedName,
    description: `A structured step-by-step beginner path to master ${formattedName}.`,
    category: 'Custom Learning Path',
    isCustom: true,
    topics: [
      {
        id: `${id}-1`,
        title: `1. Fundamentals of ${formattedName}`,
        shortDescription: `Understand the basic concepts, terminology, and core scope of ${formattedName}.`,
        notes: [
          `${formattedName} is a broad domain with key foundational concepts. Learning starts by establishing a clear vocabulary and understanding the big picture.`,
          `By breaking ${formattedName} into structured components, you build a mental framework that makes advanced concepts much easier to absorb.`
        ],
        keyPoints: [
          `Identify the core objectives and main branches of ${formattedName}.`,
          `Master fundamental terminology before moving into practical application.`,
          `Establish a consistent daily or weekly review habit to solidify basic ideas.`
        ],
        resources: [
          {
            title: `Wikipedia: ${formattedName} Overview`,
            url: `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(formattedName)}`,
            type: 'Reference'
          },
          {
            title: `Open Educational Resources for ${formattedName}`,
            url: `https://www.merlot.org/merlot/materials.htm?keywords=${encodeURIComponent(formattedName)}`,
            type: 'Library'
          }
        ]
      },
      {
        id: `${id}-2`,
        title: `2. Core Principles & Frameworks`,
        shortDescription: `Explore the key mechanisms and models that govern ${formattedName}.`,
        notes: [
          `Once basic terminology is clear, focus turns to how concepts in ${formattedName} connect and operate in practice.`,
          `Analyzing real-world examples helps transition theoretical knowledge into practical comprehension.`
        ],
        keyPoints: [
          `Understand cause-and-effect relationships within ${formattedName}.`,
          `Study standard methods and frameworks used by practitioners.`,
          `Practice explaining core concepts in simple terms to test your understanding.`
        ],
        resources: [
          {
            title: `Khan Academy Search: ${formattedName}`,
            url: `https://www.khanacademy.org/search?page_search_query=${encodeURIComponent(formattedName)}`,
            type: 'Tutorial'
          }
        ]
      },
      {
        id: `${id}-3`,
        title: `3. Practical Applications & Exercises`,
        shortDescription: `Apply your understanding of ${formattedName} through hands-on practice.`,
        notes: [
          `Passive reading is helpful, but active application is where deep learning occurs in ${formattedName}.`,
          `Work through simple exercises, case studies, or small projects that isolate specific skills.`
        ],
        keyPoints: [
          `Solve beginner-level problems to test theoretical understanding.`,
          `Review mistakes carefully to pinpoint knowledge gaps.`,
          `Combine multiple sub-concepts into a small cohesive project.`
        ],
        resources: [
          {
            title: `Coursera Courses on ${formattedName}`,
            url: `https://www.coursera.org/search?query=${encodeURIComponent(formattedName)}`,
            type: 'Course Directory'
          }
        ]
      },
      {
        id: `${id}-4`,
        title: `4. Advanced Concepts & Next Steps`,
        shortDescription: `Explore specialized sub-topics and continue your journey in ${formattedName}.`,
        notes: [
          `With a solid foundation in ${formattedName}, you can now dive into specialized areas that match your personal or professional interests.`,
          `Continued growth comes from engaging with communities, advanced guides, and ongoing practice.`
        ],
        keyPoints: [
          `Identify specialized areas within ${formattedName} for deeper study.`,
          `Keep up with recent developments and recommended reading.`,
          `Apply acquired knowledge to real-world scenarios.`
        ],
        resources: [
          {
            title: `Google Scholar Research Papers: ${formattedName}`,
            url: `https://scholar.google.com/scholar?q=${encodeURIComponent(formattedName)}`,
            type: 'Academic'
          }
        ]
      }
    ]
  };
}
