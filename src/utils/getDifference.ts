import dayjs from 'dayjs';

export const getDifference = () => {
  const currentDate = dayjs();
  const weddingDate = dayjs('2025-10-04 15:00');

  const diff = weddingDate.diff(currentDate);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = dayjs(diff).format('HH');
  const minutes = dayjs(diff).format('mm');
  const seconds = dayjs(diff).format('ss');

  return `${days}, ${hours}:${minutes}:${seconds}`;
};
