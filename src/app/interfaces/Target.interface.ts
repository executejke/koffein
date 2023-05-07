export interface Target {
  description: string;
  rewards: {
    coins: number;
    carma: number;
  },
  until: string;
  id: string;
  currentProgress: number;
  totalProgress: number;
}
