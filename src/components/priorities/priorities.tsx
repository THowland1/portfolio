import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { priorities } from '../../data/priorities';
import { FadeInSection } from '../fade-in-section/fade-in-section';
import * as styles from './priorities.module.scss';

const BGImage = () => (
  <StaticImage
    src='../../images/lightgreen-background.jpg'
    alt=''
    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
  />
);

export const Priorities = () => {
  return (
    <>
      <div className={styles.priorities}>
        <BGImage />
        <div className={styles.content}>
          {priorities.map((priority) => (
            <FadeInSection>
              <section className={styles.priorityCard}>
                <h2 className={styles.priorityCardHeading}>{priority.name}</h2>
                <img
                  className={styles.priorityCardIcon}
                  src={priority.icon}
                  aria-hidden
                />
                <p className={styles.priorityCardDescription}>
                  {priority.description}
                </p>
              </section>
            </FadeInSection>
          ))}
        </div>
      </div>
    </>
  );
};
