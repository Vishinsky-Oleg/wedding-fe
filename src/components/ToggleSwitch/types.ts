import type { UseFormRegister } from 'react-hook-form';

export type TAnimatedCheckbox = {
  id: string;
  register: UseFormRegister<any>; // or specify your form type instead of 'any'
  label: string;
  className?: string;
  disabled?: boolean;
};
