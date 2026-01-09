
import React from 'react';
import { Quote, Theme } from './types';

export const SEED_QUOTES: Quote[] = [
  {
    id: 'q1',
    text: "A Man, who walks through hell, doesn't walk the same",
    author: "Bane",
    source: "Dark Knight Rises",
    tags: [Theme.STRENGTH, Theme.GRIT, Theme.SUFFERING],
    createdAt: Date.now() - 1000
  },
  {
    id: 'q2',
    text: "I assess the power of a will by how much resistance, pain, torture it endures and knows how to turn to its advantage",
    author: "Friedrich Nietzsche",
    source: "Philosophy",
    tags: [Theme.PHILOSOPHY, Theme.STOICISM, Theme.STRENGTH],
    createdAt: Date.now() - 2000
  },
  {
    id: 'q3',
    text: "Life should not be a journey to the grave with the intention of arriving safely in a pretty and well preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming, 'Wow! What a Ride'",
    author: "Hunter S. Thompson",
    tags: [Theme.CHAOS, Theme.TRUTH, Theme.LEGACY],
    createdAt: Date.now() - 3000
  },
  {
    id: 'q4',
    text: "I hate to advocate drugs, alcohol, violence, or insanity to anyone, but they've always worked for me.",
    author: "Hunter S. Thompson",
    tags: [Theme.CHAOS, Theme.TRUTH],
    createdAt: Date.now() - 4000
  },
  {
    id: 'q5',
    text: "So we shall let the reader answer this question for himself: who is the happier man, he who has braved the storm of life and lived or he who has stayed securely on shore and merely existed?",
    author: "Hunter S. Thompson",
    tags: [Theme.GRIT, Theme.STRENGTH, Theme.TRUTH],
    createdAt: Date.now() - 5000
  },
  {
    id: 'q6',
    text: "Life has become immeasurably better since I have been forced to stop taking it seriously.",
    author: "Hunter S. Thompson",
    tags: [Theme.TRUTH, Theme.CHAOS],
    createdAt: Date.now() - 6000
  },
  {
    id: 'q7',
    text: "I am crazy, but I am not dumb.",
    author: "Ben Askran",
    tags: [Theme.GRIT, Theme.TRUTH],
    createdAt: Date.now() - 7000
  },
  {
    id: 'q8',
    text: "Turn your pain into power. To grow, is to suffer.",
    author: "David Goggins",
    tags: [Theme.SUFFERING, Theme.STRENGTH, Theme.RESILIENCE],
    createdAt: Date.now() - 8000
  },
  {
    id: 'q9',
    text: "I am happy because I am not afraid of the thing that lurks behind the door that wants to attack me.",
    author: "David Goggins",
    tags: [Theme.STRENGTH, Theme.STOICISM],
    createdAt: Date.now() - 9000
  },
  {
    id: 'q10',
    text: "We are all fucked up. Stop judging yourself against other fucked up people who have hidden it better than you. Life is one big head game. And once you learn how to play the head game, it’s no longer a game anymore at all.",
    author: "David Goggins",
    tags: [Theme.TRUTH, Theme.GRIT, Theme.PHILOSOPHY],
    createdAt: Date.now() - 10000
  },
  {
    id: 'q11',
    text: "Hate is the only feeling that makes sense. It’s hard not to hate. But I know what hate does to a man. It tears him apart, turns him into somebody he’s not.",
    author: "Jax Teller",
    source: "Sons of Anarchy",
    tags: [Theme.CHAOS, Theme.SUFFERING, Theme.TRUTH],
    createdAt: Date.now() - 11000
  },
  {
    id: 'q12',
    text: "Tough times never last, only tough people last.",
    author: "Ryan Holiday",
    tags: [Theme.RESILIENCE, Theme.STRENGTH, Theme.GRIT],
    createdAt: Date.now() - 12000
  },
  {
    id: 'q13',
    text: "Luther held a cynical view of humans that was known for his temper, especially going after corrupt people.",
    author: "Martin Luther",
    tags: [Theme.PHILOSOPHY, Theme.TRUTH, Theme.ORDER],
    createdAt: Date.now() - 13000
  },
  {
    id: 'q14',
    text: "You have to build calluses on your brain just like you build calluses on your hands. Callus your mind through pain and suffering.",
    author: "David Goggins",
    tags: [Theme.SUFFERING, Theme.DISCIPLINE, Theme.STRENGTH],
    createdAt: Date.now() - 14000
  },
  {
    id: 'q15',
    text: "A man is made from pain, disrespect, rejection, failure, and losses.",
    author: "Jax Teller",
    tags: [Theme.SUFFERING, Theme.STRENGTH, Theme.GRIT],
    createdAt: Date.now() - 15000
  },
  {
    id: 'q16',
    text: "Thresholds are meant to be broken. When you think you hit your limit, you are only at 40%. Pain is the only way to grow. The mind is the battlefield.",
    author: "David Goggins",
    tags: [Theme.STRENGTH, Theme.DISCIPLINE, Theme.RESILIENCE],
    createdAt: Date.now() - 16000
  },
  {
    id: 'q17',
    text: "When there’s abuse, injustice, and harm being done, then I’ll keep the peace. Until those in charge use violence against the people they are victimizing — make a disturbance.",
    author: "Unknown",
    tags: [Theme.HONOR, Theme.CHAOS, Theme.WAR],
    createdAt: Date.now() - 17000
  },
  {
    id: 'q18',
    text: "I wasn’t born as this motherfucker. I was made, beaten at the bottom of insecurities, fear, and passion. Go to war with yourself.",
    author: "David Goggins",
    tags: [Theme.GRIT, Theme.STRENGTH, Theme.WAR],
    createdAt: Date.now() - 18000
  },
  {
    id: 'q19',
    text: "Loss is part of life. If you don’t have loss, you don’t grow. This is life.",
    author: "Dominick Cruz",
    tags: [Theme.RESILIENCE, Theme.SUFFERING, Theme.MORTALITY],
    createdAt: Date.now() - 19000
  },
  {
    id: 'q20',
    text: "Assume the worst. About everybody. But don't let this poisoned outlook affect your job performance. Just because someone you work with is a miserable, self-serving ass*h*le shouldn't prevent you from finding them entertaining.",
    author: "Anthony Bourdain",
    tags: [Theme.TRUTH, Theme.PHILOSOPHY, Theme.STOICISM],
    createdAt: Date.now() - 20000
  },
  {
    id: 'q21',
    text: "I don't hold grudges. I hold you accountable and change how I deal with you.",
    author: "Alpha Mindset",
    tags: [Theme.DISCIPLINE, Theme.STRENGTH, Theme.ORDER],
    createdAt: Date.now() - 21000
  },
  {
    id: 'q22',
    text: "A good commander is benevolent and unconcerned with fame.",
    author: "Sun Tzu",
    tags: [Theme.LEADERSHIP, Theme.HONOR, Theme.PHILOSOPHY],
    createdAt: Date.now() - 22000
  },
  {
    id: 'q23',
    text: "I'm proud of myself for not being fake. I'm difficult sometimes and have a few screws loose but. I'm 100% me.",
    author: "Unknown",
    source: "Peaky Blinders",
    tags: [Theme.TRUTH, Theme.CHAOS],
    createdAt: Date.now() - 23000
  },
  {
    id: 'q24',
    text: "The problem with the world is that intelligent people are full of doubts, while the stupid ones are full of confidence.",
    author: "Charles Bukowski",
    tags: [Theme.PHILOSOPHY, Theme.TRUTH, Theme.CHAOS],
    createdAt: Date.now() - 24000
  },
  {
    id: 'q25',
    text: "He who has never learned to obey cannot be a good commander.",
    author: "Aristotle",
    tags: [Theme.LEADERSHIP, Theme.DISCIPLINE, Theme.ORDER],
    createdAt: Date.now() - 25000
  },
  {
    id: 'q26',
    text: "Everybody says they're grown and mature until it's time to apologize or communicate.",
    author: "Rhea Ripley",
    tags: [Theme.TRUTH, Theme.HONOR, Theme.LEADERSHIP],
    createdAt: Date.now() - 26000
  },
  {
    id: 'q27',
    text: "Most people are not seeking truth—they are searching for comfort in illusions.",
    author: "Friedrich Nietzsche",
    tags: [Theme.TRUTH, Theme.STOICISM, Theme.PHILOSOPHY],
    createdAt: Date.now() - 27000
  },
  {
    id: 'q28',
    text: "A time to love and a time to hate, a time for war and a time for peace.",
    author: "Ecclesiastes 3:8",
    tags: [Theme.WAR, Theme.ORDER, Theme.PHILOSOPHY],
    createdAt: Date.now() - 28000
  },
  {
    id: 'q29',
    text: "Life is already hard, and I don't want to be around people who make it even harder. I need people who feel like home, who bring comfort, calm and a sense of peace.",
    author: "Alpha Mindset",
    tags: [Theme.RESILIENCE, Theme.ORDER, Theme.SILENCE],
    createdAt: Date.now() - 29000
  },
  {
    id: 'q30',
    text: "He who laughs at himself never runs out of things to laugh at.",
    author: "Epictetus",
    tags: [Theme.STOICISM, Theme.PHILOSOPHY, Theme.SILENCE],
    createdAt: Date.now() - 30000
  },
  {
    id: 'q31',
    text: "I used to tell myself, 'maybe they're going through something,' to justify the way people treated me. But then I realized—I was going through a lot too, and I still never treated anyone that way.",
    author: "Alpha Mindset",
    tags: [Theme.RESILIENCE, Theme.STRENGTH, Theme.HONOR],
    createdAt: Date.now() - 31000
  },
  {
    id: 'q32',
    text: "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
    author: "Khalil Gibran",
    tags: [Theme.SUFFERING, Theme.STRENGTH, Theme.LEGACY],
    createdAt: Date.now() - 32000
  },
  {
    id: 'q33',
    text: "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
    author: "Carl Jung",
    tags: [Theme.PHILOSOPHY, Theme.TRUTH, Theme.SOLITUDE],
    createdAt: Date.now() - 33000
  },
  {
    id: 'q34',
    text: "Find what you love and let it kill you.",
    author: "Charles Bukowski",
    tags: [Theme.SACRIFICE, Theme.PHILOSOPHY, Theme.MORTALITY],
    createdAt: Date.now() - 34000
  },
  {
    id: 'q35',
    text: "Ideals are peaceful, history is violent.",
    author: "Unknown",
    source: "Fury (Movie)",
    tags: [Theme.WAR, Theme.HONOR, Theme.TRUTH],
    createdAt: Date.now() - 35000
  },
  {
    id: 'q36',
    text: "Whoever fights monsters should see to it that in the process he does not become a monster.",
    author: "Friedrich Nietzsche",
    tags: [Theme.WAR, Theme.PHILOSOPHY, Theme.HONOR],
    createdAt: Date.now() - 36000
  },
  {
    id: 'q37',
    text: "The longer we live, the greater the chance to accumulate painful memories. And the more unwanted memories we carry, the smaller our sense of choice or freedom feels.",
    author: "Kevin Quiles",
    source: "Conversing with the death",
    tags: [Theme.SUFFERING, Theme.MORTALITY, Theme.PHILOSOPHY],
    createdAt: Date.now() - 37000
  },
  {
    id: 'q38',
    text: "Walking through the unwanted and the most feared is the only way to attain enlightenment.",
    author: "Kevin Quiles",
    source: "Conversing with the death",
    tags: [Theme.SUFFERING, Theme.TRUTH, Theme.GRIT],
    createdAt: Date.now() - 38000
  },
  {
    id: 'q39',
    text: "To repeat, meaning must be found and cannot be given.",
    author: "Viktor Frankl",
    source: "The Unconscious God",
    tags: [Theme.PHILOSOPHY, Theme.STOICISM, Theme.TRUTH],
    createdAt: Date.now() - 39000
  },
  {
    id: 'q40',
    text: "The most dangerous form of blindness is believing that your perspective is the only reality.",
    author: "Friedrich Nietzsche",
    tags: [Theme.TRUTH, Theme.PHILOSOPHY, Theme.SILENCE],
    createdAt: Date.now() - 40000
  }
];

export const ICONS = {
  Logo: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L4 5V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V5L12 2Z" fill="none" />
    </svg>
  ),
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  ),
  Plus: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
  ),
  Trash: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
  ),
  Bulk: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>
  )
};
