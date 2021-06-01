import { CSSProperties } from 'react';
import EmailIcon from '../images/contact-icons/email.inline.svg';
import InstagramIcon from '../images/contact-icons/instagram.inline.svg';
import LinkedinIcon from '../images/contact-icons/linkedin.inline.svg';
import TwitterIcon from '../images/contact-icons/twitter.inline.svg';
import GithubIcon from '../images/contact-icons/github.inline.svg';

const GMAIL_RED = '#BB011C';
const LINKEDIN_BLUE = '#0A66C2';
const TWITTER_BLUE = '#1FA1F1';
const INSTAGRAM_GRADIENT =
  'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)';
const GITHUB_BLACK = '#242A2E';

export interface SocialLink {
  icon: typeof EmailIcon;
  href: string;
  background: CSSProperties['background'];
}

export const email: SocialLink = {
  icon: EmailIcon,
  href: 'mailto:tomhowland9@gmail.com',
  background: GMAIL_RED,
};
export const linkedin: SocialLink = {
  icon: LinkedinIcon,
  href: 'https://www.linkedin.com/in/tomhowland9',
  background: LINKEDIN_BLUE,
};
export const twitter: SocialLink = {
  icon: TwitterIcon,
  href: 'https://twitter.com/TomDoesTweet',
  background: TWITTER_BLUE,
};
export const instagram: SocialLink = {
  icon: InstagramIcon,
  href: 'https://www.instagram.com/tomhowland9',
  background: INSTAGRAM_GRADIENT,
};
export const github: SocialLink = {
  icon: GithubIcon,
  href: 'https://github.com/THowland1',
  background: GITHUB_BLACK,
};

export const socialLinks = [linkedin, email, twitter, instagram, github];
