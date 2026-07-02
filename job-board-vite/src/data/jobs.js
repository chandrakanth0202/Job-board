// Seed data for the job board.
// id must be a string since it's read from the URL (useParams).
export const jobs = [
  {
    id: '1',
    title: 'Frontend Engineer',
    company: 'Nightwave Studio',
    location: 'Hitech City, Hyderabad',
    type: 'Full-time',
    shift: 'Night',
    workMode: 'Onsite',
    category: 'Engineering',
    salaryMin: 800000,
    salaryMax: 1400000,
    postedAt: '2026-06-25',
    description:
      'Build and maintain customer-facing interfaces for a fast-growing SaaS product. Work closely with design and backend teams to ship features every sprint.',
    responsibilities: [
      'Implement responsive UI components using React',
      'Collaborate with designers to translate mockups into accessible interfaces',
      'Write unit and integration tests for critical user flows',
      'Participate in code reviews and mentor junior engineers',
    ],
    requirements: [
      '2+ years experience with React or a similar framework',
      'Strong understanding of HTML, CSS, and modern JavaScript',
      'Familiarity with REST APIs and version control (Git)',
      'Comfortable working night shift hours onsite',
    ],
    tags: ['React', 'JavaScript', 'CSS'],
  },
  {
    id: '2',
    title: 'Backend Engineer (Node.js)',
    company: 'Globalco Systems',
    location: 'Hitech City, Hyderabad',
    type: 'Full-time',
    shift: 'Night',
    workMode: 'Onsite',
    category: 'Engineering',
    salaryMin: 900000,
    salaryMax: 1600000,
    postedAt: '2026-06-27',
    description:
      'Design and maintain scalable APIs and services that power our global coordination platform.',
    responsibilities: [
      'Design REST and GraphQL APIs',
      'Own database schema design and query performance',
      'Set up and maintain CI/CD pipelines',
      'Monitor production systems and resolve incidents',
    ],
    requirements: [
      '3+ years building backend services in Node.js or similar',
      'Experience with PostgreSQL or another relational database',
      'Understanding of CI/CD and cloud deployment practices',
      'Comfortable working night shift hours onsite',
    ],
    tags: ['Node.js', 'PostgreSQL', 'CI/CD'],
  },
  {
    id: '3',
    title: 'QA Automation Engineer',
    company: 'Globalco Systems',
    location: 'Hitech City, Hyderabad',
    type: 'Contract',
    shift: 'Night',
    workMode: 'Onsite',
    category: 'Quality Assurance',
    salaryMin: 600000,
    salaryMax: 1000000,
    postedAt: '2026-06-28',
    description:
      'Build and maintain automated test suites that keep our release pipeline reliable.',
    responsibilities: [
      'Write end-to-end and integration tests',
      'Integrate automated tests into the CI/CD pipeline',
      'Triage and report defects with clear reproduction steps',
      'Work with engineers to improve testability of new features',
    ],
    requirements: [
      'Experience with Playwright, Cypress, or similar tools',
      'Basic scripting ability in JavaScript or Python',
      'Attention to detail and a quality-first mindset',
      'Comfortable working night shift hours onsite',
    ],
    tags: ['Playwright', 'Testing', 'Automation'],
  },
  {
    id: '4',
    title: 'Product Designer',
    company: 'Nightwave Studio',
    location: 'Hitech City, Hyderabad',
    type: 'Full-time',
    shift: 'Day',
    workMode: 'Onsite',
    category: 'Design',
    salaryMin: 700000,
    salaryMax: 1200000,
    postedAt: '2026-06-20',
    description:
      'Shape the end-to-end experience of our products, from research through to polished UI.',
    responsibilities: [
      'Run lightweight user research and synthesize findings',
      'Produce wireframes, prototypes, and high-fidelity UI',
      'Maintain and grow the design system',
      'Partner with engineers during implementation',
    ],
    requirements: [
      'Portfolio demonstrating end-to-end product design work',
      'Proficiency with Figma',
      'Solid grasp of accessibility and interaction design principles',
      'Comfortable working onsite',
    ],
    tags: ['Figma', 'UX Research', 'Design Systems'],
  },
];

export function getJobById(id) {
  return jobs.find((job) => job.id === String(id));
}

export function formatSalary(min, max) {
  const fmt = (n) => `₹${(n / 100000).toFixed(1)}L`;
  return `${fmt(min)} – ${fmt(max)}`;
}
