export interface DocType {
  title: string;
  description: string;
  type: string;
}

const DocTypes: DocType[] = [
  {
    title: 'Tutorial for Copilot',
    description: 'This doc will guide you through the journey how can get started with github copilot.',
    type: 'tutorial',
  },
  {
    title: 'Instructions for how to make a proper prompt',
    description: 'While using github copilot, it is essential to use proper prompt to get results as you want.',
    type: 'instructions',
  }
];

export default DocTypes;