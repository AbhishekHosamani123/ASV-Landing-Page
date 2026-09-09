import institutionIcon from '../assets/institution.png'
import listenImg from '../assets/listen.png'
import understandImg from '../assets/understand.png'
import validateImg from '../assets/validate.png'
import improveImg from '../assets/improve.png'
import evolveImg from '../assets/evolve.png'

/** All content extracted verbatim from https://zono.framer.ai/ */

export interface SessionPoint {
  iconType: string
  text: string
}

export interface SessionItem {
  number?: string
  icon?: string
  title: string
  desc: string
  points?: SessionPoint[]
  date?: string
  time?: string
  duration?: string
  platform?: string
  price?: string
  cta: string
}

export const SESSIONS: SessionItem[] = [
  {
    icon: institutionIcon,
    title: 'Institutions',
    desc: 'Strengthen institutional readiness with evidence.',
    points: [
      {
        iconType: 'assessment',
        text: 'Identify strengths and gaps.',
      },
      {
        iconType: 'insights',
        text: 'Turn evidence into insights.',
      },
      {
        iconType: 'improvement',
        text: 'Set practical improvement priorities.',
      },
      {
        iconType: 'outcomes',
        text: 'Track progress over time.',
      },
    ],
    cta: 'Explore →',
  },
  {
    icon: 'https://framerusercontent.com/images/GxKmStLwQDP1gh9H4bTVD5y218.png?scale-down-to=512',
    title: 'Learners',
    desc: 'Build skills and demonstrate career readiness.',
    points: [
      {
        iconType: 'readiness',
        text: 'Understand readiness and gaps.',
      },
      {
        iconType: 'skills',
        text: 'Build relevant skills.',
      },
      {
        iconType: 'capabilities',
        text: 'Develop practical capabilities.',
      },
      {
        iconType: 'evidence',
        text: 'Submit verified evidence.',
      },
    ],
    cta: 'Explore →',
  },
  {
    icon: 'https://framerusercontent.com/images/ZUs3UcVzORGfUFRnr322bDDhCAQ.png?scale-down-to=512',
    title: 'Employers & Partners',
    desc: 'Connect industry expectations with graduate readiness.',
    points: [
      {
        iconType: 'expectations',
        text: 'Share workplace expectations.',
      },
      {
        iconType: 'insights',
        text: 'Provide industry insights.',
      },
      {
        iconType: 'exposure',
        text: 'Create meaningful exposure.',
      },
      {
        iconType: 'talent',
        text: 'Engage with prepared talent.',
      },
    ],
    cta: 'Explore →',
  },
]

export interface LearnItem {
  img?: string | null
  bg?: string
  variant: 'image' | 'pattern'
  title: string
  desc: string
  titleColor?: string
}

export const LEARN_ITEMS: LearnItem[] = [
  {
    img: listenImg,
    variant: 'image',
    title: 'Listen',
    desc: 'Engage leadership, faculty, students, employers and support teams.',
  },
  {
    img: understandImg,
    variant: 'image',
    title: 'Understand',
    desc: 'Identify patterns, strengths, gaps and differing stakeholder perspectives.',
  },
  {
    img: validateImg,
    variant: 'image',
    title: 'Validate',
    desc: 'Cross-check findings with available institutional evidence and context.',
    titleColor: '#ffffff',
  },
  {
    img: improveImg,
    variant: 'image',
    title: 'Improve',
    desc: 'Translate insights into focused, practical institutional priorities.',
    titleColor: '#000000',
  },
  {
    img: evolveImg,
    variant: 'image',
    title: 'Evolve',
    desc: 'Review progress, learn continuously and strengthen the system over time.',
  },
]

export interface StatItem {
  value: number
  suffix: string
  label: string
  icon: string
}

export const STATS: StatItem[] = [
  {
    value: 16,
    suffix: ' Weeks',
    label: 'Structured programme',
    icon: 'https://framerusercontent.com/images/wL3gFGdvFKnBDEAtALgd21nxY.png',
  },
  {
    value: 5,
    suffix: '+',
    label: 'Areas of employability development',
    icon: 'https://framerusercontent.com/images/KFODyDPMf85CInVsmz95yO4c.png',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Skills-focused learning',
    icon: 'https://framerusercontent.com/images/pkRgS6EqUrjkbv3C1CJ7RRwj4.png',
  },
  {
    value: 1,
    suffix: '',
    label: 'Standard AERS framework',
    icon: 'https://framerusercontent.com/images/s31aqBKTKv0nAkB6APEyx26maY.png',
  },
]

export const ZONO_FEATURES = [
  '16-week structured employability programme',
  'Structured assessments & personalised development',
  'Continuous practice, feedback & progress tracking',
  'Practical skills for the workplace',
  'Expert guidance, mentoring & real-world support',
] as const

export const OTHER_FEATURES = [
  'Fragmented preparation without a structured journey',
  'Limited understanding of individual readiness',
  'Little ongoing tracking or development roadmap',
  'One-size-fits-all placement preparation',
  'Limited personalised guidance and feedback',
] as const

export const WHY_FEATURES = [
  {
    title: 'AI-First Approach',
    desc: 'Learn how to use tools like ChatGPT, Notion, and Zapier to run your business smarter.',
    img: 'https://framerusercontent.com/images/JiXOtExupcESVTOpPzsuc4qlU.png?scale-down-to=1024',
  },
  {
    title: 'Plug & play templates',
    desc: 'Get access to ready to use funnels, scripts and workflows.',
    img: 'https://framerusercontent.com/images/Bd0e897JJbD4ONh9FbDvVrSsM.png?scale-down-to=1024',
  },
  {
    title: 'Real Results',
    desc: 'Built by a coach who’s done it not just taught it.',
    img: 'https://framerusercontent.com/images/1Ht1iGKf3E0B9evxzgmQiWUgEf0.png?scale-down-to=1024',
  },
  {
    title: 'Zero Audience Needed',
    desc: 'No followers? No problem. This system works even if you\u2019re starting from zero.',
    img: 'https://framerusercontent.com/images/Ir6SlVds2Xm6vfnFOzR1miwGA.png?scale-down-to=1024',
  },
] as const

export const FIT_ITEMS = [
  'Want to start coaching but don’t know how',
  'Want to grow with AI, minus tech stress',
  'Done chasing followers for results',
  'Ready to monetize your expertise',
  'Need a clear roadmap from zero',
] as const

export const NOT_FIT_ITEMS = [
  'Expect overnight success without effort',
  'Unwilling to take action or implement',
  'Believe coaching needs a big following',
  'Not ready to act after the masterclass',
  'Avoid AI or new tools',
] as const

export interface Testimonial {
  name: string
  quote: string
  avatar: string
}

export const TESTIMONIALS_ROW1: Testimonial[] = [
  {
    name: 'Arun',
    quote:
      '“Coach Rahul helped me simplify my coaching business using AI in a way I never thought possible. Clear guidance and real results.”',
    avatar: 'https://framerusercontent.com/images/TT3Ef71CBpBMiXBszT6eJt1sTdU.jpg',
  },
  {
    name: 'Anita',
    quote:
      '“Learning from Coach Rahul gave me confidence and clarity to scale my coaching without stress. His approach is practical and powerful.”',
    avatar: 'https://framerusercontent.com/images/tmR7t3585k01AoFlAYp3Cpzdc.jpg',
  },
  {
    name: 'Kaviya',
    quote:
      '“Coach Rahul doesn’t just teach AI he shows how to use it smartly in real business situations. Truly eye-opening.”',
    avatar: 'https://framerusercontent.com/images/TlWV3Gj7WqoihbnDPwMXbbJY.jpg',
  },
  {
    name: 'Aditi',
    quote:
      '“Learning from Coach Rahul gave me clarity, structure, and confidence to grow step by step. Highly recommended.”',
    avatar: 'https://framerusercontent.com/images/hOMiTqi7ouMUVyW9aNPhho6ypYc.jpg',
  },
]

export const TESTIMONIALS_ROW2: Testimonial[] = [
  {
    name: 'Murali',
    quote:
      '“Coach Rahul’s coaching is simple, honest, and action-oriented. I saw results faster than expected.”',
    avatar: 'https://framerusercontent.com/images/nOKl7CKvDMEakfDhxvQO0D0jfE.jpg',
  },
  {
    name: 'Shathini',
    quote:
      '“The way Coach Rahul explains AI and automation is very easy to understand, even for beginners like me.”',
    avatar: 'https://framerusercontent.com/images/TT3Ef71CBpBMiXBszT6eJt1sTdU.jpg',
  },
  {
    name: 'Shathini',
    quote:
      '“Coach Rahul helped me build systems instead of struggling daily. My coaching journey feels lighter now.”',
    avatar: 'https://framerusercontent.com/images/tmR7t3585k01AoFlAYp3Cpzdc.jpg',
  },
  {
    name: 'Jeevee',
    quote:
      '“With Coach Rahul’s guidance, I saved time, reduced confusion, and started focusing on what really matters in my business.”',
    avatar: 'https://framerusercontent.com/images/TlWV3Gj7WqoihbnDPwMXbbJY.jpg',
  },
]

export const FAQS = [
  {
    q: 'Do I need to be tech savvy to join?',
    a: 'Not at all. The tools are beginner-friendly, and everything is explained step-by-step.',
  },
  {
    q: 'Is this a live or recorded session?',
    a: 'It’s a recorded masterclass you can watch anytime, at your own pace.',
  },
  {
    q: 'Will I get templates and tools?',
    a: 'Yes — you’ll receive plug-and-play templates, AI workflows, and funnel scripts.',
  },
  {
    q: 'What if I don’t have a niche yet?',
    a: 'We’ll show you how to find and validate your niche using AI tools.',
  },
  {
    q: 'Is this suitable for experienced coaches?',
    a: 'Absolutely. Even seasoned coaches can benefit from the automation and scaling strategies.',
  },
] as const
