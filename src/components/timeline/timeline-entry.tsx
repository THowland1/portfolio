import React from 'react';
import { timelineEntries, TimelineEntryData } from '../../data/timeline';
import { SkillBadge } from '../badge/skill-badge';
import { ToolBadge } from '../badge/tool-badge';
import { FadeInSection } from '../fade-in-section/fade-in-section';

import * as styles from './timeline-entry.module.scss';

interface Props {
  timelineEntry: TimelineEntryData;
}

export const TimelineEntry = ({ timelineEntry }: Props) => {
  return (
    <>
      <div className={styles.timeRange}>
        <FadeInSection>
          <span>{timelineEntry.timeRange}</span>
        </FadeInSection>
      </div>

      <div className={styles.right}>
        <FadeInSection>
          <div>
            <span className={styles.companyName}>
              {timelineEntry.companyName}
            </span>
            <span className={styles.roleName}>{timelineEntry.roleName}</span>
          </div>
        </FadeInSection>
        <ul>
          <FadeInSection>
            <li>
              <ul>
                {timelineEntry.skills.map((skill) => (
                  <li>
                    <SkillBadge
                      logo={skill.logo}
                      title={skill.title}
                      size='small'
                    />
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <ul>
                {timelineEntry.tools.map((tool) => (
                  <li>
                    <ToolBadge
                      logo={tool.logo}
                      title={tool.title}
                      size='small'
                    />
                  </li>
                ))}
              </ul>
            </li>
          </FadeInSection>

          {timelineEntry.responsibilities.map(([emoji, responsibility]) => (
            <FadeInSection>
              <li className={styles.responsibility}>
                <span>{emoji}</span>
                &nbsp;
                <span>{responsibility}</span>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </>
  );
};
