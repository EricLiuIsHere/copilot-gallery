export interface Doc {
    docUrl: string;
    title: string;
    description: string;
    type: string;
    tags?: string[];
  }
  
  const Docs: Doc[] = [
    {
      docUrl: 'https://docs.github.com/en/copilot/getting-started-with-github-copilot',
      title: 'Welcome to GitHub Copilot!',
      description: 'Let us start the journey to discover the beauty of Github Copilot.',
      type: 'misc',
      tags: ['misc', 'frontend']
    },
    
  ];
  
  export default Docs;