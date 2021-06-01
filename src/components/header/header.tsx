import React from 'react';
import classnames from 'classnames';
import * as styles from './header.module.scss';
import { FadeInSection } from '../fade-in-section/fade-in-section';
import { StaticImage } from 'gatsby-plugin-image';

const BGImage = () => (
  <StaticImage
    src='../../images/leafy-background.jpg'
    alt=''
    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
  />
);

export const Header = () => {
  return (
    <header className={styles.header}>
      <BGImage />
      <h1 className={classnames(styles.header_text)}>
        <FadeInSection>
          <div className={styles.flom}>Hi, I make websites</div>
        </FadeInSection>
        <FadeInSection transitionDelay='.5s'>
          <div className={styles.cursive}>for humans</div>
        </FadeInSection>
      </h1>
      <FadeInSection transitionDelay='7s'>
        <span className={styles.scrollMessage}>Scroll to see more</span>
      </FadeInSection>
    </header>
  );
};
