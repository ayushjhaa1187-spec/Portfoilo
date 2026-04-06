export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: 'founder' | 'tech' | 'case-study' | 'philosophy' | 'competition';
  publishedAt: string;
  readTime: number;
  excerpt: string;
  content: string;
  tags: string[];
  linkedinImpressions?: number;
  featured: boolean;
}

function calcReadTime(content: string): number {
  return Math.ceil(content.trim().split(/\s+/).length / 200);
}

const changethonContent = `## Intro
I don't compete at hackathons to win. I compete to watch my ideas die, because every weak idea that collapses in a high-pressure room saves me months of wrong execution later. Changethon at IIT Roorkee gave me exactly that kind of brutal mirror. I entered with confidence, a polished framing, and a solution that sounded right in my head. Within hours, mentors and judges exposed assumptions I had not stress-tested deeply enough.

The room was intense, but it was the right kind of intensity. Every team was trying to solve for real constraints, not just slide-deck perfection. I learned that a social impact solution is not valid because it is inspiring. It is valid only when the user at the far edge of the system can adopt it without friction, confusion, or trust barriers.

My initial model looked elegant. The real-world scenario did not. Field-level constraints changed priorities quickly, and we had to rebuild core logic around access, not features.

## Key Learnings
The first learning was ruthless clarity: if you can't explain the failure mode in one sentence, you do not understand your own product yet. The second learning was execution humility. A working demo can hide serious deployment blind spots in operations, support, and onboarding.

The third learning was about decision speed. Under time pressure, teams often overbuild. We instead started removing layers and asked, what is the smallest version that still creates measurable value? This question made our choices cleaner.

Fourth, collaboration quality matters more than individual brilliance in fast cycles. The best moments came when someone challenged an assumption before we invested more effort.

## What This Means
For my founder journey, Changethon reinforced one operating principle: test ideas where they can fail fast and publicly. That is how resilient products are born. I now treat competitions as compressed validation labs rather than trophy hunts. The scoreboard is useful, but the real metric is how many wrong assumptions you can eliminate per week.

This event also shaped how I evaluate product quality. I now ask three questions first: who gets excluded, what breaks at scale, and what cannot be maintained by a small team. If answers are weak, the concept is still immature.

## Closing Thought
Hackathons are not just events for certificates. They are high-signal environments for founder training. If your idea survives criticism, constraints, and user reality, then maybe it deserves your next six months.`;

const startupAuctionContent = `## Intro
Your startup idea sounds brilliant at 2 AM. It dies at 2 PM when a judge asks one sharp question on unit economics. That was the core lesson from Startup Auction 2.0 at IIT Delhi. The format simulated investor thinking under uncertainty. Teams had to evaluate opportunities, price conviction, and defend assumptions while data changed in real time.

I enjoyed this challenge because it forced a blend of founder instinct and analytical discipline. In product competitions, teams can hide behind prototypes. In auction formats, logic is exposed quickly. If your valuation story is weak, confidence collapses.

Our team prepared with market narratives, risk framing, and quick scenario modeling. But once the round started, we realized that speed alone was not enough. Precision in communication determined whether our reasoning sounded credible.

## Key Learnings
First, valuation without a distribution thesis is fragile. Judges consistently pushed on customer acquisition pathways, not only product novelty. Second, storytelling is not decoration; it is a decision tool. A clean narrative helps others trust your prioritization under uncertainty.

Third, simple financial models outperform complicated ones in high-pressure rounds. We kept assumptions visible and adjustable so we could defend changes quickly. Fourth, competition formats that imitate investor behavior are excellent training for real founder conversations because they punish vague confidence.

## What This Means
This experience changed how I build and pitch. I now frame products around value capture and execution feasibility from day one. Instead of saying, this feature is exciting, I ask, who pays, why now, and what adoption path is realistic in the first ninety days.

It also improved my decision rhythm. When faced with limited time and incomplete information, I now prefer transparent assumptions and reversible bets. That balance keeps momentum while protecting downside.

## Closing Thought
Startup Auction taught me that founder credibility comes from disciplined thinking, not loud optimism. If you can defend your logic when the room pushes back, you are building more than a pitch. You are building judgment.`;

const enableContent = `## Intro
True inclusion means designing for the most excluded users first, not adding accessibility as a final sprint task. That was the spirit behind our Enable Ideathon journey at IIT Madras. We explored accessible banking workflows for users who face friction with digital-first products because of language barriers, trust deficits, and device limitations.

At first, we focused on feature breadth. Then mentor feedback redirected us toward friction depth: where does a user drop off in minute one, and why? That single shift improved our solution dramatically. We simplified onboarding, reduced cognitive load, and aligned every flow with confidence-building cues.

The best part of this challenge was seeing how interdisciplinary thinking improves product quality. Inclusion is not only a UX challenge. It is policy, communication, risk management, and behavioral design in one system.

## Key Learnings
First, inclusive fintech starts with context mapping. You must understand user constraints before drawing interfaces. Second, trust signals matter as much as usability. Clear language, transparent prompts, and predictable actions reduce fear and confusion.

Third, accessibility improvements can strengthen mainstream experience too. Simpler flows help everyone. Fourth, the gap between prototype success and operational success is large unless support and escalation pathways are designed early.

## What This Means
Enable Ideathon shaped my product philosophy deeply. I now treat inclusion as a performance criterion, not a social add-on. If a solution excludes edge users, it is architecturally incomplete.

This event also pushed me toward measurable design decisions. Rather than saying the product is easier, I now ask how many fewer steps, how much less ambiguity, and how much faster trust is established for first-time users.

## Closing Thought
Building for inclusion is not charity. It is good systems thinking. When you solve for the hardest user journey, you build products that are stronger, clearer, and more resilient for everyone.`;

const founderJourneyContent = `## Intro
I'm still a second semester student, but the last four months felt like a compressed founder degree across eight IIT ecosystems. The headline is not the number of events. The real story is how repeated exposure to different judging styles, problem statements, and team dynamics changed how I think and build.

Each campus had a distinct rhythm. Some prioritized social impact viability. Others emphasized venture readiness or technical rigor. Moving through these environments taught me that product truth is contextual. A pitch that works in one room can fail in another if assumptions are not explicit.

This journey was physically intense and mentally stretching. Travel, deadlines, prototypes, and feedback loops stacked fast. But that density accelerated my learning curve.

## Key Learnings
First, networking is not collecting LinkedIn connections. It is building trust through consistent contribution and honest collaboration. The strongest relationships came from solving hard problems together, not exchanging cards.

Second, the best founders are not people with perfect decks. They are people who can absorb criticism without losing execution speed. Third, knowledge expansion does not come from passive content consumption. It comes from active build-test-reflect cycles.

Fourth, identity clarity matters. Competing often made me sharper about what kind of builder I want to become: someone who blends technical depth with real-world usability and business discipline.

## What This Means
Going forward, I am doubling down on three tracks: AI systems that solve real workflow bottlenecks, accessible product design, and founder-grade communication. I want every project to demonstrate both technical rigor and operational awareness.

This journey also reinforced a practical rule: compress feedback loops wherever possible. The faster you convert feedback into iteration, the faster your judgment compounds.

## Closing Thought
Eight IITs in four months was not about collecting lines for a profile. It was about building founder reflexes early. I am still learning, but now I learn with more structure, more urgency, and more respect for real-world constraints.`;

export const blogPosts: BlogPost[] = [
  {
    slug: 'compete-to-fail-changethon',
    title: 'Compete to Fail: Why Changethon Changed My Founder Lens',
    subtitle: 'A high-pressure social innovation sprint that rewired my execution philosophy.',
    category: 'competition',
    publishedAt: '2026-03-11T10:30:00.000Z',
    excerpt:
      "I don't compete at hackathons to win. I compete to watch my ideas die, because weak assumptions are expensive outside the arena.",
    content: changethonContent,
    readTime: calcReadTime(changethonContent),
    tags: ['IIT Roorkee', 'Changethon', 'Founder Mindset', 'Social Impact'],
    linkedinImpressions: 1133,
    featured: true
  },
  {
    slug: 'vc-simulation-startup-auction-iitd',
    title: 'Inside a VC Simulation: Startup Auction 2.0 at IIT Delhi',
    subtitle: 'What fast investor-style rounds taught me about clarity and conviction.',
    category: 'case-study',
    publishedAt: '2026-02-19T12:00:00.000Z',
    excerpt:
      'Your startup idea sounds brilliant at 2 AM. It dies at 2 PM when someone challenges your economics with one hard question.',
    content: startupAuctionContent,
    readTime: calcReadTime(startupAuctionContent),
    tags: ['IIT Delhi', 'BECon', 'Startup Auction', 'Venture Thinking'],
    linkedinImpressions: 386,
    featured: true
  },
  {
    slug: 'accessible-banking-enable-iitm',
    title: 'Designing Accessible Banking at Enable Ideathon',
    subtitle: 'Why inclusion-first design produced our strongest product decisions.',
    category: 'tech',
    publishedAt: '2026-02-03T09:00:00.000Z',
    excerpt:
      'True inclusion means designing for the most excluded users first, then scaling those decisions into mainstream product quality.',
    content: enableContent,
    readTime: calcReadTime(enableContent),
    tags: ['IIT Madras', 'Fintech', 'Accessibility', 'Product Design'],
    linkedinImpressions: 501,
    featured: true
  },
  {
    slug: '4-months-8-iits-founder-journey',
    title: '4 Months, 8 IITs: Notes from an Early Founder Journey',
    subtitle: 'What repeated competition cycles taught me about building under pressure.',
    category: 'founder',
    publishedAt: '2026-03-20T14:30:00.000Z',
    excerpt:
      "I'm still a second semester student, but this run across IIT ecosystems gave me practical founder lessons no classroom can compress as quickly.",
    content: founderJourneyContent,
    readTime: calcReadTime(founderJourneyContent),
    tags: ['Founder Journey', 'IIT Ecosystem', 'Learning in Public', 'Execution'],
    linkedinImpressions: 382,
    featured: false
  }
];
