import React, {
  Children,
  cloneElement,
  CSSProperties,
  isValidElement,
  PropsWithChildren,
} from 'react';
import classnames from 'classnames';
import { useInView } from 'react-intersection-observer';

import * as styles from './fade-in-section.module.scss';

export const FadeInSection = (
  props: PropsWithChildren<{
    transitionDelay?: CSSProperties['transitionDelay'];
  }>
) => {
  const children = Children.map(props.children, (child) => {
    const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });

    if (!isValidElement(child)) {
      return null;
    }

    return cloneElement(child, {
      className: classnames(child.props.className, styles.section, {
        [styles.visible]: inView,
      }),
      style: { transitionDelay: props.transitionDelay } as CSSProperties,
      ref,
    });
  });
  return (
    <>
      {' '}
      {children?.map((child) => (
        <>{child}</>
      ))}{' '}
    </>
  );
};
