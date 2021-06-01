import React from 'react';
import { skills } from '../../data/skills';
import { SkillBadge } from '../badge/skill-badge';
import { FadeInSection } from '../fade-in-section/fade-in-section';

import * as styles from './skills.module.scss';

export const Skills = () => {
  return (
    <>
      <section className={styles.skills}>
        <div className={styles.skillsContent}>
          <FadeInSection>
            <h2 className={styles.skillsHeading}>Skills</h2>
          </FadeInSection>
          <FadeInSection>
            <div className={styles.skillsTagline}>
              A life of working, playing, and reading has lead me to rub
              shoulders with these lovely frameworks, languages, and concepts
            </div>
          </FadeInSection>
          {skills.map((skillLevel) => (
            <ul className={styles.skillLevel}>
              <FadeInSection>
                <li>
                  <h3 className={styles.skillsSubheading}>{skillLevel.name}</h3>
                  <ul className={styles.skillBadges}>
                    {skillLevel.skills.map((skill) => (
                      <li className={styles.skillBadgeContainer}>
                        <SkillBadge title={skill.title} logo={skill.logo} />
                      </li>
                    ))}
                  </ul>
                </li>
              </FadeInSection>
            </ul>
          ))}
        </div>
      </section>
    </>
  );
};
