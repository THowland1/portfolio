import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { timelineEntries } from '../../data/timeline';
import { TimelineEntry } from './timeline-entry';

import * as styles from './timeline.module.scss';

const BGImage = () => (
  <StaticImage
    src='../../images/calendar-background.jpg'
    alt=''
    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
  />
);

export const Timeline = () => {
  return (
    <>
      <section className={styles.timeline}>
        <BGImage />
        <div className={styles.blurBackground}>
          <div className={styles.timelineContent}>
            <div></div>
            <h2 className={styles.heading}>The history of me</h2>
            {timelineEntries.map((timelineEntry) => (
              <TimelineEntry timelineEntry={timelineEntry} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
