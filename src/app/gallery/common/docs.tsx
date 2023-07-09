export interface Doc {
    docUrl: string;
    title: string;
    description: string;
    type: string;
    tags?: string[];
  }
  
  const Docs: Doc[] = [
    {
      docUrl: '/docs/sample.doc',
      title: 'Welcome to GitHub Copilot!',
      description: 'Let us start the journey to discover the beauty of Github Copilot.',
      type: 'misc',
      tags: ['misc', 'frontend']
    },
    
  ];
  
  export default Docs;