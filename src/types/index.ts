export type TGender = 'h' | 's' | 't';

export type TCurrentGuest = {
  _id: string;
  name: string;
  isPolled: boolean;
  withC: boolean;
  gen: TGender;
  res: boolean;
  createdAt: number;
};
