import React from 'react';

import ForDevelopers from '../images/for-developers.svg';
import ForEveryone from '../images/for-everyone.svg';
import ForTheFuture from '../images/for-the-future.svg';
import ForUsers from '../images/for-users.svg';

export const priorities = [
  {
    name: 'For users',
    icon: ForUsers,
    description: (
      <>
        I know that UX and UI are worth their weight in gold. I insist that
        everything I make looks good and <em>feels</em> good.
      </>
    ),
  },
  {
    name: 'For developers',
    icon: ForDevelopers,
    description: (
      <>
        Clean code is the mission. Us developers spend more time reading code
        than writing it, so I always follow best practices and principles to
        make sure my code is always as readable as possible.
      </>
    ),
  },
  {
    name: 'For everyone',
    icon: ForEveryone,
    description: (
      <>
        I make websites that work on all devices and all screen sizes with
        constant care around accessibility (no <em>&lt;div&gt; soup</em> for me,
        please).
      </>
    ),
  },
  {
    name: 'For the future',
    icon: ForTheFuture,
    description: (
      <>
        I keep my finger on the pulse with a constant stream of podcasts and
        tweets, always seeing what's new and what's in fashion: code-wise and
        style-wise.
      </>
    ),
  },
];
