import { ValuesType } from 'utility-types';

export const ACTIONS = {
  ACTIVE: "ACTIVE",
  FRAME: 'FRAME'
};

export const FRAMES = {
  SAFARI: "Safari",
};


export type Frame = ValuesType<typeof FRAMES>