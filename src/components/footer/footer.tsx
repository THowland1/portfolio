import React from 'react';
import { socialLinks } from '../../data/social-links';

import * as styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.subheading}>Feel free to get in touch!</div>
        <div className={styles.socialLinks}>
          {socialLinks.map(({ href, icon: Icon, background }) => (
            <a
              className={styles.socialLink}
              href={href}
              style={{ '--background': background } as any}
            >
              <div className={styles.socialLinkBg}></div>
              <Icon className={styles.socialIcon} />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.iconBiblio}>
        <div className={styles.subheading}>Icons &amp; images from</div>
        <div>
          <a className={styles.iconReference} href='https://devicon.dev/'>
            Devicon
          </a>
          <a className={styles.iconReference} href='https://pexels.com/'>
            Pexels
          </a>
          <a className={styles.iconReference} href='https://unsplash.com/'>
            Unsplash
          </a>
          <a
            className={styles.iconReference}
            href='http://code.benco.io/icon-collection/azure-icons/'
          >
            Ben Coleman
          </a>
          <a
            className={styles.iconReference}
            href='https://octopus.com/company/brand'
          >
            Octopus Deploy
          </a>
          <a className={styles.iconReference} href='https://seeklogo.com/'>
            seeklogo
          </a>
          <span className={styles.iconReference}>
            <a href='https://www.flaticon.com/' title='Flaticon'>
              www.flaticon.com
            </a>{' '}
            (made by{' '}
            <a href='https://www.freepik.com' title='Freepik'>
              Freepik
            </a>
            )
          </span>
        </div>
      </div>
    </footer>
  );
};
