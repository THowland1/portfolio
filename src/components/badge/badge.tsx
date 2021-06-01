import React from 'react';

import * as styles from './badge.module.scss';
import classnames from 'classnames';

interface Props {
  logo: string;
  title: string;
  size?: 'regular' | 'small';
  rounded: boolean;
}

export const Badge = ({ logo, title, size = 'regular', rounded }: Props) => {
  return (
    <div
      className={classnames(styles.badge, {
        [styles.small]: size === 'small',
        [styles.rounded]: rounded,
      })}
    >
      <img className={styles.icon} src={logo} alt={`${title} logo`} />
      <div className={styles.name}>{title}</div>
    </div>
  );
};
