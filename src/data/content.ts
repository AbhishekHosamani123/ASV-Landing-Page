/** All content extracted verbatim from https://zono.framer.ai/ */

export const SESSIONS = [
  {
    icon: 'https://framerusercontent.com/images/ZUs3UcVzORGfUFRnr322bDDhCAQ.png?scale-down-to=512',
    title: 'Weekday',
    desc: 'Perfect for students & house wife’s.',
    date: '02nd Feb 2026',
    time: '5:00pm - 7:00pm (IST)',
    duration: '3 Hours (Live)',
    platform: 'Zoom (Link shared after booking)',
    price: '$15',
    cta: 'Join the Weekday Batch',
  },
  {
    icon: 'https://framerusercontent.com/images/GxKmStLwQDP1gh9H4bTVD5y218.png?scale-down-to=512',
    title: 'Weekdays',
    desc: 'Perfect for buys professionals & entrepreneurs.',
    date: '08th Feb 2026',
    time: '9:00am - 12:00pm (IST)',
    duration: '3 Hours (Live)',
    platform: 'Zoom (Link shared after booking)',
    price: '$15',
    cta: 'Join the Weekend Spot',
  },
] as const

export const LEARN_ITEMS = [
  {
    img: 'https://framerusercontent.com/images/4DyP7dGycGNolBY8T272aJfT64.png?scale-down-to=1024',
    variant: 'image',
    title: 'Finding your niche with AI',
    desc: 'Use AI tools to research and validate profitable coaching niches.',
  },
  {
    img: null,
    bg: '#e9f1f2',
    variant: 'pattern',
    title: 'Building funnels without code',
    desc: 'Create automated sales funnels using AI and no-code tools.',
  },
  {
    img: 'https://framerusercontent.com/images/xYx1fs8Jisc7NmOLbPJb2K1Aww.jpg?scale-down-to=1024',
    variant: 'image',
    title: 'Content creation on autopilot',
    desc: 'Generate emails, posts, and landing pages with AI in minutes.',
  },
  {
    img: null,
    bg: '#e7f3e7',
    variant: 'pattern',
    title: 'Scaling to ₹1 Cr systems',
    desc: 'Discover how to grow sustainably with systems, not hustle.',
  },
] as const

export const STATS = [
  {
    value: 2500,
    suffix: '+',
    label: 'Members trained',
    icon: 'https://framerusercontent.com/images/wL3gFGdvFKnBDEAtALgd21nxY.png',
  },
  {
    value: 150,
    suffix: '+',
    label: '5 Star reviews',
    icon: 'https://framerusercontent.com/images/KFODyDPMf85CInVsmz95yO4c.png',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Sessions Hosted',
    icon: 'https://framerusercontent.com/images/pkRgS6EqUrjkbv3C1CJ7RRwj4.png',
  },
  {
    value: 18,
    suffix: 'K',
    label: 'Active members',
    icon: 'https://framerusercontent.com/images/s31aqBKTKv0nAkB6APEyx26maY.png',
  },
] as const

export const ZONO_FEATURES = [
  '3-hour structured masterclass',
  'Personalized insights & action plan',
  'Ongoing reminders & accountability',
  'Practical tools you can use today',
  'High-quality guidance with real support',
] as const

export const OTHER_FEATURES = [
  'No clear learning path',
  'Limited goal understanding',
  'No follow-up or roadmap',
  'Generic, unstructured advice',
  'Little to no real support',
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
