import { type FC } from 'react';
import './AnimatedCheckbox.scss';
import type { TAnimatedCheckbox } from 'components/ToggleSwitch/types.ts';

const AnimatedCheckbox: FC<TAnimatedCheckbox> = ({
  id,
  register,
  label,
  className,
  disabled,
}) => {
  return (
    <div
      className={`checkbox-wrapper-19 ${className || ''} ${disabled ? 'disabled' : ''}`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        id={id}
        {...register(id)}
        name={id}
        className="hidden-checkbox"
      />
      <label htmlFor={id} className="check-box"></label>
    </div>
  );
};

export default AnimatedCheckbox;
