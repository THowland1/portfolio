import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Bio } from '../components/bio/bio';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { Priorities } from '../components/priorities/priorities';
import { Skills } from '../components/skills/skills';
import { Timeline } from '../components/timeline/timeline';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Tom Howland | Full-stack developer in Warwickshire</title>
        <meta charSet='utf-8' />
        <meta property='og:title' content='Tom Howland' />
        <meta name='author' content='Tom Howland' />
        <meta property='og:locale' content='en_GB' />
        <meta
          name='description'
          content='Full-stack developer in Warwickshire'
        />
        <meta
          property='og:description'
          content='Full-stack developer in Warwickshire'
        />
        <meta property='og:url' content='https://tomhowland.com' />
        <meta property='og:site_name' content='Tom Howland' />
        <meta property='og:image' content='../images/tom-howland.jpg' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@tomdoestweet' />
        <meta name='twitter:creator' content='@tomdoestweet' />
        <meta name='twitter:title' content='Tom Howland' />

        <meta
          name='twitter:description'
          content='I am a Warwickshire-based full&#8209;stack&nbsp;developer who loves making websites. I live to use knowledge and creativity to find beautiful solutions to all flavours of problems/requirements.'
        />
        <meta name='twitter:image' content='/images/tom-howland.jpg' />
        <meta name='twitter:image:alt' content='Tom Howland' />

        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Dancing%20Script:wght@400&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <Header />
      <Bio />
      <Priorities />
      <Skills />
      <Timeline />
      <Footer />
    </>
  );
};

export default IndexPage;
