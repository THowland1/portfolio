import React from 'react';
import { Badge } from './badge';

interface Props {
  logo: string;
  title: string;
  size?: 'regular' | 'small';
}

export const SkillBadge = ({ logo, title, size = 'regular' }: Props) => (
  <Badge logo={logo} title={title} size={size} rounded={true} />
);
