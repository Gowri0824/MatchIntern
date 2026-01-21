export const JOB_ROLES = [
    {
        id: 'frontend',
        title: 'Frontend Developer',
        description: 'Build beautiful user interfaces using React, Vue, or Angular.',
        requiredSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design'],
        questions: {
            basic: [
                {
                    question: 'What does HTML stand for?',
                    options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
                    answer: 0
                },
                {
                    question: 'Which tag is used to define an internal style sheet?',
                    options: ['<script>', '<style>', '<css>'],
                    answer: 1
                }
            ],
            medium: [
                {
                    question: 'What is the purpose of React.useEffect?',
                    options: ['To handle side effects', 'To create a new component', 'To style elements'],
                    answer: 0
                },
                {
                    question: 'Difference between "==" and "===" in JavaScript?',
                    options: ['No difference', 'Type coercion vs Strict equality', 'Assignment vs Equality'],
                    answer: 1
                }
            ],
            hard: [
                {
                    question: 'What is the Virtual DOM?',
                    options: ['A direct copy of the browser DOM', 'A lightweight copy of the DOM kept in memory', 'A browser plugin'],
                    answer: 1
                },
                {
                    question: 'Explain the concept of closures in JavaScript.',
                    options: ['Variables declared inside a function', 'A function having access to the parent scope even after parent function has closed', 'Connecting two files'],
                    answer: 1
                }
            ]
        },
        interviewTips: [
            'Brush up on React Hooks and Component Lifecycle.',
            'Practice building a small todo app or weather app.',
            'Be ready to explain CSS Box Model and Flexbox.',
            'Prepare for questions about DOM manipulation.'
        ]
    },
    {
        id: 'backend',
        title: 'Backend Developer',
        description: 'Design robust APIs and manage databases.',
        requiredSkills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs', 'Git'],
        questions: {
            basic: [
                { question: 'What does SQL stand for?', options: ['Structured Query Language', 'Strong Question Language', 'Structured Question Language'], answer: 0 },
                { question: 'Which is a NoSQL database?', options: ['MySQL', 'PostgreSQL', 'MongoDB'], answer: 2 }
            ],
            medium: [
                { question: 'What is middleware in Express.js?', options: ['A database', 'Functions that execute during the request-response cycle', 'A frontend framework'], answer: 1 },
                { question: 'What is the difference between GET and POST?', options: ['GET is for sending data, POST for retrieving', 'GET is for retrieving, POST for sending/creating', 'No difference'], answer: 1 }
            ],
            hard: [
                { question: 'What is the CAP theorem?', options: ['Consistency, Availability, Partition Tolerance', 'Consistency, Accuracy, Performance', 'Create, Add, Push'], answer: 0 },
                { question: 'Explain horizontal vs vertical scaling.', options: ['Adding more machines vs adding more power to one machine', 'Adding power vs adding machines', 'No difference'], answer: 0 }
            ]
        },
        interviewTips: [
            'Understand RESTful API design principles.',
            'Revise Database normalization and SQL queries.',
            'Practice simple API coding challenges.',
            'Know the difference between SQL and NoSQL.'
        ]
    },
    {
        id: 'data-analyst',
        title: 'Data Analyst',
        description: 'Analyze data to help companies make better decisions.',
        requiredSkills: ['Python', 'SQL', 'Excel', 'Data Visualization', 'Statistics'],
        questions: {
            basic: [
                { question: 'Which Python library is used for data manipulation?', options: ['NumPy', 'Pandas', 'Matplotlib'], answer: 1 },
                { question: 'What is the average of 2, 4, and 6?', options: ['3', '4', '5'], answer: 1 }
            ],
            medium: [
                { question: 'What is a "Left Join" in SQL?', options: ['Returns all records from left table', 'Returns all from right table', 'Returns only matches'], answer: 0 },
                { question: 'What is variance?', options: ['The average', 'Measure of how data points differ from the mean', 'The middle value'], answer: 1 }
            ],
            hard: [
                { question: 'Difference between Supervised and Unsupervised learning?', options: ['Labeled vs Unlabeled data', 'Fast vs Slow', 'Big vs Small data'], answer: 0 },
                { question: 'What is a p-value?', options: ['Probability of observing results assuming null hypothesis is true', 'The probability that the null hypothesis is false', 'The power of the test'], answer: 0 }
            ]
        },
        interviewTips: [
            'Practice SQL queries for data extraction.',
            'Be prepared to explain your past data projects.',
            'Know basics of Pandas and Matplotlib.',
            'Understand data cleaning techniques.'
        ]
    },
    {
        id: 'ui-ux',
        title: 'UI/UX Designer',
        description: 'Design intuitive and accessible user experiences.',
        requiredSkills: ['Figma', 'Prototyping', 'User Research', 'Wireframing', 'Color Theory'],
        questions: {
            basic: [
                { question: 'What does UI stand for?', options: ['User Interface', 'User Interaction', 'User Integration'], answer: 0 },
                { question: 'Which tool is primarily used for vector design?', options: ['Photoshop', 'Illustrator', 'Premiere'], answer: 1 }
            ],
            medium: [
                { question: 'What is "White Space"?', options: ['Empty space around elements', 'The color white', 'A coding error'], answer: 0 },
                { question: 'What is validity in User Research?', options: ['If users like it', 'If the method measures what it is intended to measure', 'If it is fast'], answer: 1 }
            ],
            hard: [
                { question: 'Explain the Atomic Design methodology.', options: ['Designing with atoms', 'Breaking interface into atoms, molecules, organisms, templates, pages', 'Designing for science'], answer: 1 },
                { question: 'What is WCAG?', options: ['Web Content Accessibility Guidelines', 'Web Color Contrast Guidelines', 'World Creative Art Group'], answer: 0 }
            ]
        },
        interviewTips: [
            'Have your portfolio ready to present.',
            'Be ready to explain your design process.',
            'Critique a popular app\'s design.',
            'Understant accessibility (a11y) standards.'
        ]
    },
    {
        id: 'mobile-dev',
        title: 'Mobile Developer',
        description: 'Create apps for iOS and Android.',
        requiredSkills: ['React Native', 'Flutter', 'JavaScript', 'Mobile UI', 'API Integration'],
        questions: {
            basic: [
                { question: 'What language is used for native iOS?', options: ['Java', 'Swift', 'Kotlin'], answer: 1 },
                { question: 'What is an APK?', options: ['Android Package Kit', 'Apple Package Kit', 'App Private Key'], answer: 0 }
            ],
            medium: [
                { question: 'Difference between State and Props in React Native?', options: ['State is mutable, Props are read-only', 'State is external, Props are internal', 'No difference'], answer: 0 },
                { question: 'What is the bridge in React Native?', options: ['A UI component', 'Connection between JS and Native code', 'A network tool'], answer: 1 }
            ],
            hard: [
                { question: 'How do you handle memory leaks in Android?', options: ['Restart app', 'Using weak references and proper lifecycle management', 'Ignore them'], answer: 1 },
                { question: 'Explain the Widget tree in Flutter.', options: ['Hierarchy of widgets', 'A file structure', 'A database for widgets'], answer: 0 }
            ]
        },
        interviewTips: [
            'Understand the mobile app lifecycle.',
            'Practice state management in mobile apps.',
            'Know guidelines for iOS and Android design.',
            'Be ready to debug on a simulator/device.'
        ]
    },
    {
        id: 'devops',
        title: 'DevOps Engineer',
        description: 'Streamline development and operations.',
        requiredSkills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Linux', 'Scripting'],
        questions: {
            basic: [
                { question: 'What does CI stand for?', options: ['Continuous Integration', 'Code Integration', 'Cloud Integration'], answer: 0 },
                { question: 'Which command lists files in Linux?', options: ['ls', 'dir', 'list'], answer: 0 }
            ],
            medium: [
                { question: 'What is a Docker container?', options: ['A virtual machine', 'A lightweight, standalone package of software', 'A database'], answer: 1 },
                { question: 'What is the purpose of Kubernetes?', options: ['Code editing', 'Container orchestration', 'Database management'], answer: 1 }
            ],
            hard: [
                { question: 'Explain Blue-Green Deployment.', options: ['Using blue and green colors', 'Running two identical environments, one live, one idle', 'Deploying to the ocean'], answer: 1 },
                { question: 'What is Infrastructure as Code (IaC)?', options: ['Managing infrastructure through code files', 'Writing code for infrastructure companies', 'Building servers physically'], answer: 0 }
            ]
        },
        interviewTips: [
            'Explain what CI/CD is and why it matters.',
            'Know basic Linux commands.',
            'Understand containerization concepts.',
            'Be familiar with cloud basics (AWS/Azure).'
        ]
    },
    {
        id: 'product-manager',
        title: 'Product Manager',
        description: 'Guide the success of a product.',
        requiredSkills: ['Agile', 'Scrum', 'User Stories', 'Roadmapping', 'Communication'],
        questions: {
            basic: [
                { question: 'What is a User Story?', options: ['A novel', 'A short description of a feature from user perspective', 'A bug report'], answer: 1 },
                { question: 'What does MVP stand for?', options: ['Minimum Viable Product', 'Most Valuable Player', 'Max Valid Product'], answer: 0 }
            ],
            medium: [
                { question: 'What is the role of a Scrum Master?', options: ['To code', 'To facilitate the Scrum process', 'To manage the product'], answer: 1 },
                { question: 'Prioritization technique: RICE?', options: ['Reach, Impact, Confidence, Effort', 'Rice, Ice, Cream, Eat', 'Real, Important, Critical, Easy'], answer: 0 }
            ],
            hard: [
                { question: 'Difference between Product Manager and Project Manager?', options: ['Start vs Finish', 'What/Why vs How/When', 'No difference'], answer: 1 },
                { question: 'How do you measure Product-Market Fit?', options: ['NPS score, retention curves', 'More features', 'Employee satisfaction'], answer: 0 }
            ]
        },
        interviewTips: [
            'Practice product sense questions.',
            'Know how to prioritize features.',
            'Be ready to discuss metrics and KPIs.',
            'Understand the user journey.'
        ]
    },
];

const companies = [
    'TechFlow', 'CloudSys', 'InnovateX', 'WebWizards', 'DataMind', 'Appify', 'SecureNet',
    'DesignHub', 'Productive', 'GreenTech', 'FinServe', 'EdLearn', 'HealthPlus', 'RetailIo', 'LogiWiz'
];

const locations = ['Remote', 'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune', 'Chennai'];

export const MOCK_INTERNSHIPS = Array.from({ length: 30 }).map((_, i) => {
    const roleIdx = i % JOB_ROLES.length;
    const role = JOB_ROLES[roleIdx];
    return {
        id: i + 1,
        roleId: role.id,
        title: `${role.title} Intern`,
        company: companies[i % companies.length],
        location: locations[i % locations.length],
        stipend: `₹${10000 + (i % 5) * 5000}/mo`,
        minMatch: 40 + (i % 4) * 10 // Varies between 40 and 70
    };
});
