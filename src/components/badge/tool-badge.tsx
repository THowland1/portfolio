import React from 'react';
import { Badge } from './badge';

interface Props {
  logo: string;
  title: string;
  size?: 'regular' | 'small';
}

export const ToolBadge = ({ logo, title, size }: Props) => (
  <Badge logo={logo} title={title} size={size} rounded={false} />
);
