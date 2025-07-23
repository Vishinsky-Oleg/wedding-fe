import type { TCurrentGuest } from 'types/index.ts';

export type THome = {
  onStartPollButtonClick: () => void;
  currentUser: TCurrentGuest;
};
