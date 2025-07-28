import { type FC, useEffect, useState } from 'react';
import styles from './CircularProgress.module.scss';
import type { TCircularProgress } from 'components/CircularProgress/types.ts';
import { ACCENT_COLOR } from 'constants/index.ts';

const CircularProgress: FC<TCircularProgress> = ({
  progress,
  size = 70,
  strokeWidth = 6,
  circleColor = '#c7c7c7',
  gradientColors = ['#b5d38d', ACCENT_COLOR],
  theNumber,
  thePropertyName,
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedProgress((prev) => {
        if (prev >= progress) {
          clearInterval(timer);
          return progress;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [progress]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (animatedProgress / 100) * circumference;

  return (
    <div className={styles.container} style={{ width: size, height: size }}>
      <svg className={styles.svg} width={size} height={size}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {gradientColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index * 100) / (gradientColors.length - 1)}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>

        <circle
          className={styles.circle_background}
          stroke={circleColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        <circle
          className={styles.circle_progress}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
      <div className={styles.content}>
        <div className={styles.number}>{theNumber}</div>
        <div className={styles.property}>{thePropertyName}</div>
      </div>
    </div>
  );
};

export default CircularProgress;
