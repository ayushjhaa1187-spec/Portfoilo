export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  category: 'AI' | 'Full-Stack' | 'founder' | 'tech' | 'case-study' | 'philosophy' | 'competition';
  publishedAt: string;
  date?: string; // Fallback for my UI
  readTime: string | number;
  excerpt: string;
  content: string;
  tags: string[];
  impressions?: number;
  linkedinImpressions?: number;
  featured: boolean;
  image?: string;
}

function calcReadTime(content: string): number {
  return Math.ceil(content.trim().split(/\s+/).length / 200);
}

const pinnsContent = `## Physics Meets Neural Nets — Not on Slides, in Real Equations

Got an invite from Computational and Data Sciences (CDS), Indian Institute of Science (IISc Bangalore) for a talk on:
**“Adaptive Physics-Informed Neural Network Modeling Framework for Dual-Porosity Flow”** by Prof. Kalyana Nakshatrala (University of Houston).

For a student builder in AI/ML, this isn’t just another seminar. It’s a front-row seat to how physics-informed neural networks (PINNs) are being used to solve complex flow problems that traditional models struggle with — dual-porosity, real-world constraints, and all the messy mathematical details.

## Why This Matters for AI Builders
I went in with one overarching goal: to understand how researchers at the intersection of numerical methods, fluid mechanics, and deep learning are thinking about modeling — and then pull those ideas back into the kind of AI agents and data systems I’m engineering.

Traditional deep learning is data-hungry and prone to physical unreality. PINNs bridge this gap by embedding conservation laws, differential equations, and boundary conditions directly into the loss function.

## Representing IIT Madras
Happy to represent the IIT Madras BS in Data Science Programme across these research forums.
Date: 13 July 2026 | Venue: CDS #102, Indian Institute of Science (IISc Bangalore) / Online Teams.

If you’re into applied math, fluid dynamics, AI for science, or PINNs, this is exactly the intersection you don’t skip. Still a student, but learning like a practitioner.`;

const franceContent = `## Not Every Passport is Stamped at the Airport — Some are Stamped by Effort

Ideas don’t need visas. They need velocity.
A screen. A student. A stubborn dream. Late nights turned into one passport moment.
And this one feels bigger than travel — it feels like a signal.

## Selected for Bharat Innovates 2026 (Nice, France)
I’ve been selected for **Bharat Innovates** in Nice, France.
This isn’t just a stage; it’s a global accelerator created to connect India’s deep-tech innovation ecosystem with world-class international collaborators.

The first edition is bringing **120 Indian deep-tech startups and 15 premier institutions** into one global room. That means builders, researchers, students, and founders won’t just showcase ideas — we’ll build partnerships, pilots, research bridges, and sustainable ecosystems.

## Indian Solutions for Global Problems
Proud to represent the Indian Institute of Technology, Madras spirit in this larger wave of innovation. From Indian classrooms to global conversations — yeh bas shuruaat hai. 🚀

The world doesn’t just need Indian innovation right now. It needs Indian innovation in AI, education, climate, health, and deep-tech at scale. If this is where focused building can take me today, this is just one checkpoint in a very long race. Built in India. Meant for the world. 🌍`;

const vicharanashalaContent = `## A Guru Doesn’t Always Stand at a Blackboard — Sometimes, They Change How You Think

Reflecting on what my internship at the **Indian Institute of Technology, Ropar** is teaching me beyond tasks, tools, and deliverables.

At **Vicharanashala (Lab for Education Design / VLED)**, the learning has been transformative:
* How to listen before building.
* How to break a problem into first principles before attempting to solve it.
* How education can be designed — not just delivered.

## Mentorship in Practice
The conversations, feedback, daily discipline, and people who challenge your assumptions quietly become the lessons you carry forward. For a student like me building in AI and technology, this matters deeply.

The best mentors don’t hand you answers. They make you capable of finding better questions.

Special gratitude to Prof. Sudarshan Iyengar, Dr. Pavani Ayinampudi, Vaishali Kalotra ma'am, Prakash Hegade, Rohit Sharma, Meenakshi V, Sakshi Sharma, Jinal Gupta, Mukund Aditya BV, Jatin Kumar, and everyone at Vicharanashala for fostering a space where growth comes through inquiry and rigorous building.

The right guidance does not make your journey easier. It makes you strong enough to walk it.`;

const skillbridgeContent = `## We Didn’t Stop at What They Asked Us to Build

We took one problem statement and stretched it as far as we could.
Glad to share that our project **SkillBridge**, built by me and my teammate Jahnvi Chauhan, was shortlisted in the **Top 10 at DevFusion: The Developer Hackathon by IIT Bombay**.

## Going Far Beyond the Brief
We chose Problem Statement 2, which asked for a peer learning doubt-resolution platform with AI help, mentor sessions, practice tests, reputation, and profiles.

Instead of covering just the 8-9 line requirement list, we pushed it to product-grade depth:
* Instant multimodal AI doubt resolution.
* Peer community Q&A with credit escrow logic.
* Verified mentor scheduling and live sessions.
* Dynamic, adaptive test generation.
* Gamified reputation tiers and institutional monetization architecture.

Jahnvi handled the frontend, UI/UX, and Framer Motion micro-interactions, while I engineered the full-stack system, AI orchestration, and backend architecture.

We didn’t build for “just enough to demo.” We built with product depth, scalability, and industry-ready thinking. Representing IIT Madras and building far beyond the brief.`;

const eliteHackContent = `## She Led. I Built. We Finaled. CoCreate > Everything

Thousands of coders. One question: Can you build under pressure and trust?
Elite Coders threw us into the deep end with **Elite Hack 1.0** — 7,400+ participants across India.

We finished in the **Top 10 teams** by building an end-to-end event management platform — live, functional, and deployed on Vercel at \`elite-hack-1-0.vercel.app\`.

## What Hackathons Actually Test
The code isn’t the hardest part. It’s the 24-hour decisions. It’s trusting your teammate when things break at 3 AM. It’s the silent understanding between two builders who refuse to quit.

None of this happens without Jahnvi Chauhan — a leader who stayed sharp when debugging got intense and reminded me that building together beats building alone.

To every college student: You don’t need to wait until you feel 'ready'. You need to register, show up, and build.`;

const dealRoomContent = `## When You’re Handed Virtual Capital and One Question: Which Startup Gets Your Money?

Competed in **The Deal Room: The Investment Pitch Challenge** at Building India Inc. 2026, organized by Finazards and Department of Management Studies (DMS), IIT Delhi (₹25,000 prize pool).

## The Three Elimination Rounds
1. **Finance Fundamentals Sprint:** 20 questions in 10 minutes — fast logical analysis under pressure. Placed in the Top 30.
2. **Virtual Capital Allocation:** Given 3 detailed startup profiles. Deciding exact capital splits based on unit economics, burn rate, and competitive moats.
3. **Defending Your Thesis to DMS IIT Delhi Faculty:** Cross-examination on downside protection, customer acquisition costs, and LTV multiples.

## Core Takeaway
Investing isn’t about 'liking' an idea. It’s about stress-testing assumptions and defending why this business model survives when the others collapse. You can't pitch on gut feel when the jury asks: *'Show me the math.'*`;

export const blogPosts: BlogPost[] = [
  {
    slug: 'physics-meets-neural-nets-iisc-pinns',
    title: 'Physics Meets Neural Nets: Exploring PINNs at IISc CDS',
    subtitle: 'Notes from the invited talk on Adaptive PINNs for Dual-Porosity Flow at IISc Bangalore.',
    category: 'AI',
    publishedAt: '2026-07-14T10:00:00.000Z',
    date: 'July 2026',
    readTime: calcReadTime(pinnsContent),
    excerpt: 'Front-row insights on how Physics-Informed Neural Networks (PINNs) bridge conservation laws with deep learning to solve complex flow equations.',
    content: pinnsContent,
    tags: ['IISc Bangalore', 'PINNs', 'Physics-Informed ML', 'Dual-Porosity', 'AI for Science', 'IIT Madras'],
    linkedinImpressions: 34490,
    impressions: 34490,
    featured: true
  },
  {
    slug: 'skillbridge-devfusion-iit-bombay-top-10',
    title: 'Building SkillBridge: Pushing Past the Brief to Top 10 at IIT Bombay',
    subtitle: 'How going beyond a 9-line hackathon requirement turned into an enterprise ed-tech system.',
    category: 'Full-Stack',
    publishedAt: '2026-04-12T11:00:00.000Z',
    date: 'April 2026',
    readTime: calcReadTime(skillbridgeContent),
    excerpt: 'How we engineered SkillBridge — an AI-first peer learning platform with instant doubt solving and credit economics at IIT Bombay DevFusion.',
    content: skillbridgeContent,
    tags: ['IIT Bombay', 'DevFusion', 'Hackathon Top 10', 'AI EdTech', 'Full-Stack', 'Supabase'],
    linkedinImpressions: 1601,
    impressions: 1601,
    featured: true
  },
  {
    slug: 'bharat-innovates-france-deeptech',
    title: 'Selected for Bharat Innovates (Nice, France): Indian Solutions for Global Problems',
    subtitle: 'Representing IIT Madras deep-tech on a global accelerator stage in Europe.',
    category: 'founder',
    publishedAt: '2026-06-16T09:30:00.000Z',
    date: 'June 2026',
    readTime: calcReadTime(franceContent),
    excerpt: 'Selected among top deep-tech builders across 15 premier Indian institutions for Bharat Innovates in Nice, France.',
    content: franceContent,
    tags: ['Bharat Innovates', 'Nice France', 'DeepTech', 'IIT Madras', 'Global Innovation', 'Founder Journey'],
    linkedinImpressions: 1369,
    impressions: 1369,
    featured: true
  },
  {
    slug: 'vicharanashala-iit-ropar-internship-learnings',
    title: 'Reflections from Vicharanashala, IIT Ropar: Designing Education Through Questions',
    subtitle: 'What research at the Lab for Education Design teaches you about listening before building.',
    category: 'philosophy',
    publishedAt: '2026-07-20T14:00:00.000Z',
    date: 'July 2026',
    readTime: calcReadTime(vicharanashalaContent),
    excerpt: 'Reflecting on education design, AI pedagogy, and first-principles problem architecture under Prof. Sudarshan Iyengar at IIT Ropar.',
    content: vicharanashalaContent,
    tags: ['IIT Ropar', 'Vicharanashala', 'Education Design', 'Mentorship', 'Pedagogy', 'AI'],
    linkedinImpressions: 1357,
    impressions: 1357,
    featured: true
  },
  {
    slug: 'elite-hack-1-top-10-event-platform',
    title: 'She Led, I Built: From 7.4k+ Builders to Top 10 at Elite Hack 1.0',
    subtitle: 'Deploying a live full-stack event platform in 48 hours under high pressure.',
    category: 'competition',
    publishedAt: '2026-04-06T15:00:00.000Z',
    date: 'April 2026',
    readTime: calcReadTime(eliteHackContent),
    excerpt: 'How we finished in the top 10 out of 7,400+ participants by shipping a production-ready hackathon platform live on Vercel.',
    content: eliteHackContent,
    tags: ['Elite Hack', 'Hackathon Top 10', 'Next.js', 'Vercel', 'Live Deployment', 'Teamwork'],
    linkedinImpressions: 1086,
    impressions: 1086,
    featured: true
  },
  {
    slug: 'the-deal-room-iit-delhi-vc-simulation',
    title: 'Surviving The Deal Room at IIT Delhi: What Happens When You’re the VC',
    subtitle: 'Analyzing burn rates, moats, and capital allocation in front of DMS IIT Delhi faculty.',
    category: 'case-study',
    publishedAt: '2026-03-22T12:00:00.000Z',
    date: 'March 2026',
    readTime: calcReadTime(dealRoomContent),
    excerpt: 'Defending startup valuation theses and unit economics under jury cross-examination at DMS IIT Delhi.',
    content: dealRoomContent,
    tags: ['IIT Delhi', 'DMS', 'VC Thinking', 'Unit Economics', 'Capital Allocation', 'Case Competition'],
    linkedinImpressions: 259,
    impressions: 259,
    featured: false
  }
];
