import {
  angular,
  csharp,
  css3,
  dotnet,
  html5,
  javascript,
  matlab,
  sass,
  Skill,
  sql,
  typescript,
} from './skills';
import {
  azureappservices,
  azuredevops,
  jira,
  octupusdeploy,
  Tool,
} from './tools';

export interface TimelineEntryData {
  timeRange: string;
  companyName: string;
  roleName: string;
  skills: Skill[];
  tools: Tool[];
  responsibilities: [string, string][];
}

export const timelineEntries: TimelineEntryData[] = [
  {
    timeRange: '2020-Now',
    companyName: 'Depotnet Ltd',
    roleName: 'Software Engineer',
    skills: [
      css3,
      html5,
      javascript,
      typescript,
      angular,
      dotnet,
      sass,
      sql,
      csharp,
    ],
    tools: [azuredevops, jira],
    responsibilities: [
      [
        '🧑‍💻',
        'Developing civil engineering management systems for top UK companies',
      ],
      ['👀', 'Peer reviewing teammates’ code'],
      [
        '🐺',
        'Architecting entire projects and sub-projects to work with existing solutions',
      ],
      [
        '👨‍🏫',
        'Giving talks on potential tooling within weekly developer meetings',
      ],
      [
        '👫',
        'Working closely with business analysts to create exactly what the users need',
      ],
      [
        '🌟',
        'Achievement: Implemented a data warehouse with an API to allow clients to integrate their data into their own BI platforms',
      ],
    ],
  },
  {
    timeRange: '2017-2020',
    companyName: 'Enable International Ltd.',
    roleName: 'Software Engineer',
    skills: [
      css3,
      html5,
      javascript,
      typescript,
      angular,
      dotnet,
      sass,
      sql,
      csharp,
    ],
    tools: [azuredevops, azureappservices, octupusdeploy],
    responsibilities: [
      [
        '🧑‍💻',
        'Developed bespoke internal systems and SaaS products for leading UK companies',
      ],
      [
        '📚',
        ' Worked towards client specifications and in-house public API specifications',
      ],
      [
        '💬',
        'Interacted with live clients/UAT users via a helpdesk ticketing system, resolving issues in a timely and professional manner',
      ],
      ['✏️', 'Maintained and wrote living specifications and release notes'],
      ['🧪', 'Performed cross-browser and cross-device manual testing'],
      ['🧪', 'Adhered to the principles of test-driven development (TDD)'],
      ['👮‍♂️', 'Adhered to OWASP’s standards of security'],
      ['👀', 'Peer reviewed teammates’ code'],
      [
        '👫',
        ' Worked in an agile, team-based environment, meeting set deadlines',
      ],
      [
        '🌟',
        'Achievement: Implemented a script for obtaining the hierarchy of items in a self-referencing SQL table while avoiding infinite loops  ',
      ],
    ],
  },
  {
    timeRange: '2014-2017',
    companyName: 'University of Manchester',
    roleName: 'MPhys in Physics',
    skills: [matlab],
    tools: [],
    responsibilities: [
      ['🧮', 'Worked with complex mathematical concepts on a regular basis'],
      ['🔬', 'Gathered and processed lab data'],
      ['🎨', 'Created GUIs and descriptive display graphics for simulations'],
      [
        '🌟',
        'Achievement: Nominated for the Tessella Prize for Software following development of a 3D ray-tracing Monte Carlo simulation program',
      ],
    ],
  },
];
