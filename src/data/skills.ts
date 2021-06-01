import AngularLogo from '../images/logos/angular.svg';
import CsharpLogo from '../images/logos/csharp.svg';
import Css3Logo from '../images/logos/css3.svg';
import DockerLogo from '../images/logos/docker.svg';
import DotnetLogo from '../images/logos/dotnet.svg';
import GatsbyLogo from '../images/logos/gatsby.svg';
import GraphqlLogo from '../images/logos/graphql.svg';
import Html5Logo from '../images/logos/html5.svg';
import JavascriptLogo from '../images/logos/javascript.svg';
import KubernetesLogo from '../images/logos/kubernetes.svg';
import MongodbLogo from '../images/logos/mongodb.svg';
import NodejsLogo from '../images/logos/nodejs.svg';
import ReactLogo from '../images/logos/react.svg';
import SassLogo from '../images/logos/sass.svg';
import SqlLogo from '../images/logos/sql.svg';
import TypescriptLogo from '../images/logos/typescript.svg';
import XDLogo from '../images/logos/xd.svg';
import MatlabLogo from '../images/logos/matlab.svg';

export interface Skill {
  logo: string;
  title: string;
}

interface SkillLevel {
  name: string;
  skills: Skill[];
}

export const css3 = { title: 'CSS', logo: Css3Logo };
export const html5 = { title: 'HTML', logo: Html5Logo };
export const javascript = { title: 'Javascript', logo: JavascriptLogo };
export const typescript = { title: 'Typescript', logo: TypescriptLogo };
export const angular = { title: 'Angular', logo: AngularLogo };
export const dotnet = { title: '.Net Core', logo: DotnetLogo };
export const sass = { title: 'Sass', logo: SassLogo };
export const sql = { title: 'SQL', logo: SqlLogo };
export const csharp = { title: 'C#', logo: CsharpLogo };
export const react = { title: 'React', logo: ReactLogo };
export const nodejs = { title: 'Node.js', logo: NodejsLogo };
export const mongodb = { title: 'MongoDB', logo: MongodbLogo };
export const xd = { title: 'Adobe XD', logo: XDLogo };
export const gatsby = { title: 'Gatsby', logo: GatsbyLogo };
export const docker = { title: 'Docker', logo: DockerLogo };
export const kubernetes = { title: 'Kubernetes', logo: KubernetesLogo };
export const graphql = { title: 'GraphQL', logo: GraphqlLogo };
export const reactnative = { title: 'React Native', logo: ReactLogo };
export const matlab = { title: 'MATLAB', logo: MatlabLogo };

export const skills: SkillLevel[] = [
  {
    name: 'I am very good at',
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
  },
  {
    name: 'I dabble in',
    skills: [react, nodejs, mongodb, xd, gatsby],
  },
  {
    name: 'I am looking into',
    skills: [docker, kubernetes, graphql, reactnative],
  },
];
