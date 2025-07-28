import type { FC } from 'react';
import type { TInfo } from 'pages/Info/types.ts';
import { INFO_TEXTS } from 'pages/Info/constants.ts';
import { Hero } from 'components/Hero';
import CSS from './Info.module.scss';

const Info: FC<TInfo> = ({ variant }) => (
  <Hero customText={INFO_TEXTS[variant]} classes={CSS.info} />
);

export default Info;
