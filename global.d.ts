declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export = classes;
}

declare module '*.inline.svg' {
  const content: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
