
export interface Quote {
  id: string;
  text: string;
  author: string;
  source?: string;
  tags: string[];
  createdAt: number;
}

export enum Theme {
  DISCIPLINE = 'Discipline',
  SUFFERING = 'Suffering',
  WAR = 'War',
  FATHERHOOD = 'Fatherhood',
  LEGACY = 'Legacy',
  STRENGTH = 'Strength',
  PHILOSOPHY = 'Philosophy',
  GRIT = 'Grit',
  LEADERSHIP = 'Leadership',
  SILENCE = 'Silence',
  RESILIENCE = 'Resilience',
  HONOR = 'Honor',
  CHAOS = 'Chaos',
  ORDER = 'Order',
  BROTHERHOOD = 'Brotherhood',
  SOLITUDE = 'Solitude',
  TRUTH = 'Truth',
  SACRIFICE = 'Sacrifice',
  MORTALITY = 'Mortality',
  STOICISM = 'Stoicism'
}

export interface DoctrineInsight {
  title: string;
  content: string;
  callToAction: string;
}
