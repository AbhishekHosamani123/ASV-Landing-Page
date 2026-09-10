import institutionIcon from '../assets/institution.png'
import listenIcon from '../assets/listen-icon.png'
import listenImg from '../assets/listen.png'
import understandImg from '../assets/understand.png'
import validateImg from '../assets/validate.png'
import improveImg from '../assets/improve.png'
import evolveImg from '../assets/evolve.png'
import studentsImg from '../assets/students.png'
import listenFeatureImg from '../assets/listen-feature.png'
import validateFeatureImg from '../assets/validate-feature.png'

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
    title: 'Understand',
    desc: 'Use evidence to identify the learner’s and institution’s actual readiness needs.',
    titleColor: '#ffffff',
  },
  {
    img: understandImg,
    variant: 'image',
    title: 'Improve',
    desc: 'Build capability through structured learning, practical activities, guided practice and continuous improvement.',
    titleColor: '#ffffff',
  },
  {
    img: validateImg,
    variant: 'image',
    title: 'Human Review',
    desc: 'Keep evidence, feedback and readiness decisions subject to authorised human judgement.',
    titleColor: '#ffffff',
  },
  {
    img: improveImg,
    variant: 'image',
    title: 'Use Tech',
    desc: 'Use technology to support delivery, personalisation, tracking and reporting without replacing accountable human decisions.',
    titleColor: '#ffffff',
  },
  {
    img: evolveImg,
    variant: 'image',
    title: 'Measurable Outcomes',
    desc: 'Track participation, capability development, evidence completion and meaningful readiness improvement.',
    titleColor: '#ffffff',
  },
]

export interface StatItem {
  value?: number
  suffix?: string
  title?: string
  label: string
  icon: string
}

export const STATS: StatItem[] = [
  {
    title: 'Listen',
    label: 'Engage leadership, faculty, learners, employers and support teams.',
    icon: listenIcon,
  },
  {
    title: 'Understand',
    label: 'Identify patterns, strengths, gaps and differing stakeholder perspectives.',
    icon: 'https://framerusercontent.com/images/KFODyDPMf85CInVsmz95yO4c.png',
  },
  {
    title: 'Validate',
    label: 'Cross-check findings with available institutional evidence and context.',
    icon: 'https://framerusercontent.com/images/s31aqBKTKv0nAkB6APEyx26maY.png',
  },
  {
    title: 'Improve',
    label: 'Translate insights into focused, practical institutional priorities.',
    icon: 'https://framerusercontent.com/images/pkRgS6EqUrjkbv3C1CJ7RRwj4.png',
  },
  {
    title: 'Evolve',
    label: 'Review progress, learn continuously and strengthen the system over time.',
    icon: 'https://framerusercontent.com/images/wL3gFGdvFKnBDEAtALgd21nxY.png',
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
    title: 'Listen',
    desc: 'Engage leadership, faculty, learners, employers and support teams.',
    img: listenFeatureImg,
  },
  {
    title: 'Understand',
    desc: 'Identify patterns, strengths, gaps and differing stakeholder perspectives.',
    img: 'https://framerusercontent.com/images/Bd0e897JJbD4ONh9FbDvVrSsM.png?scale-down-to=1024',
  },
  {
    title: 'Validate',
    desc: 'Cross-check findings with available institutional evidence and context.',
    img: validateFeatureImg,
  },
  {
    title: 'Improve',
    desc: 'Translate insights into focused, practical institutional priorities.',
    img: studentsImg,
  },
] as const

export const FIT_ITEMS = [
  'Baseline assessment',
  'Stakeholder inputs',
  'Gap identification',
  'Priority profile',
] as const

export const TRANSFORM_ITEMS = [
  'Personalised pathway',
  'Active learning & practice',
  'Weekly guided review',
  'Evidence & resubmission',
] as const

export const NOT_FIT_ITEMS = TRANSFORM_ITEMS

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
    q: 'What is AERS?',
    a: 'AERS is an employability ecosystem designed to help students explore their strengths, develop relevant skills, and build evidence for their future careers.',
  },
  {
    q: 'How does the AERS journey work?',
    a: 'AERS guides students through Explore → Transform → Evidence, helping them move from self-discovery to skill development and demonstrated capability.',
  },
  {
    q: 'Is AERS only for students?',
    a: 'No. AERS connects students, educators, institutions, and employers to create a stronger employability ecosystem.',
  },
  {
    q: 'What do students gain from AERS?',
    a: 'Students gain clearer career direction, practical development pathways, and evidence of their skills and progress.',
  },
  {
    q: 'How does AERS help institutions?',
    a: 'AERS helps institutions understand student progress, strengthen employability development, and continuously improve their support systems.',
  },
  {
    q: 'How does AERS connect with employers?',
    a: 'AERS helps translate student development into meaningful evidence, making it easier to connect emerging talent with employer needs.',
  },
] as const
