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

interface Skill {
  logo: string;
  title: string;
}

interface SkillLevel {
  name: string;
  skills: Skill[];
}

export const skills: SkillLevel[] = [
  {
    name: 'I am very good at',
    skills: [
      { title: 'CSS', logo: Css3Logo },
      { title: 'HTML', logo: Html5Logo },
      { title: 'Javascript', logo: JavascriptLogo },
      { title: 'Typescript', logo: TypescriptLogo },
      { title: 'Angular', logo: AngularLogo },
      { title: '.Net Core', logo: DotnetLogo },
      { title: 'Sass', logo: SassLogo },
      { title: 'SQL', logo: SqlLogo },
      { title: 'C#', logo: CsharpLogo },
    ],
  },
  {
    name: 'I dabble in',
    skills: [
      { title: 'React', logo: ReactLogo },
      { title: 'Node.js', logo: NodejsLogo },
      { title: 'MongoDB', logo: MongodbLogo },
      { title: 'Adobe XD', logo: XDLogo },
      { title: 'Gatsby', logo: GatsbyLogo },
    ],
  },
  {
    name: 'I am looking into',
    skills: [
      { title: 'Docker', logo: DockerLogo },
      { title: 'Kubernetes', logo: KubernetesLogo },
      { title: 'GraphQL', logo: GraphqlLogo },
      { title: 'React Native', logo: ReactLogo },
    ],
  },
];
