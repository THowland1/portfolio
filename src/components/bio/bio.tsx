import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import * as styles from './bio.module.scss';
import { FadeInSection } from '../fade-in-section/fade-in-section';

const BGImage = () => (
  <StaticImage
    src='../../images/white-background.jpg'
    alt=''
    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
  />
);

export const Bio = () => {
  return (
    <>
      <section className={styles.bio}>
        <BGImage />
        <div className={styles.content}>
          <div className={styles.headingContainer}>
            <FadeInSection>
              <h2 className={styles.heading}>Hi, I'm Tom</h2>
            </FadeInSection>
          </div>
          <FadeInSection transitionDelay='.3s'>
            <p className={styles.text}>
              I am a Warwickshire-based{' '}
              <mark>full&#8209;stack&nbsp;developer</mark> who loves making
              websites. I live to use knowledge and creativity to find{' '}
              <mark>beautiful solutions</mark> to all flavours of
              problems/requirements.
            </p>
          </FadeInSection>
          <FadeInSection transitionDelay='.6s'>
            <div className={styles.image}>
              <StaticImage
                src='../../images/tom-howland.jpg'
                alt='Me with my better half'
              />
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};
