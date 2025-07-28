import type { TCurrentGuest } from 'types/index.ts';

export type TSurvey = {
  currentUser: TCurrentGuest;
  onStopPollButtonClick: () => void;
};

export type TPoll = {
  isComing?: boolean;
  withChildren?: boolean;
  hasAllergies?: string;
  additionalInfo?: string;
};
export type TPollRequestBody = TPoll & {
  guestId: string;
  name: string;
};
