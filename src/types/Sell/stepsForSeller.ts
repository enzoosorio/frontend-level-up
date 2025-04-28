export interface Step {
    title: string;
    description: string;
    icon?: React.ReactNode; 
  }

export interface StepForCard extends Step {
    index: number;
    active: boolean;
  }
