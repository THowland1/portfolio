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
        'π§βπ»',
        'Developing civil engineering management systems for top UK companies',
      ],
      ['π', 'Peer reviewing teammatesβ code'],
      [
        'πΊ',
        'Architecting entire projects and sub-projects to work with existing solutions',
      ],
      [
        'π¨βπ«',
        'Giving talks on potential tooling within weekly developer meetings',
      ],
      [
        'π«',
        'Working closely with business analysts to create exactly what the users need',
      ],
      [
        'π',
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
        'π§βπ»',
        'Developed bespoke internal systems and SaaS products for leading UK companies',
      ],
      [
        'π',
        ' Worked towards client specifications and in-house public API specifications',
      ],
      [
        'π¬',
        'Interacted with live clients/UAT users via a helpdesk ticketing system, resolving issues in a timely and professional manner',
      ],
      ['βοΈ', 'Maintained and wrote living specifications and release notes'],
      ['π§ͺ', 'Performed cross-browser and cross-device manual testing'],
      ['π§ͺ', 'Adhered to the principles of test-driven development (TDD)'],
      ['π?ββοΈ', 'Adhered to OWASPβs standards of security'],
      ['π', 'Peer reviewed teammatesβ code'],
      [
        'π«',
        ' Worked in an agile, team-based environment, meeting set deadlines',
      ],
      [
        'π',
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
      ['π§?', 'Worked with complex mathematical concepts on a regular basis'],
      ['π¬', 'Gathered and processed lab data'],
      ['π¨', 'Created GUIs and descriptive display graphics for simulations'],
      [
        'π',
        'Achievement: Nominated for the Tessella Prize for Software following development of a 3D ray-tracing Monte Carlo simulation program',
      ],
    ],
  },
];
