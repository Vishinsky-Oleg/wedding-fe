import type { TCurrentGuest } from 'types/index.ts';

export type TSurvey = {
  currentUser: TCurrentGuest;
  onStopPollButtonClick: () => void;
};
