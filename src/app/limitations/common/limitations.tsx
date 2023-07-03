export interface Limitation {
    title: string;
    description: string;
    author?: string;
  }
  
  const Limitations: Limitation[] = [
    {
      title: 'issue',
      description: 'Version control is not good, for example I want to generate a angular project base on specific version',
      author: 'Hua'
    },
    {
      title: 'issue',
      description: 'Not able to detect obvious VA issue',
      author: 'Hua'
    },
    {
        title: 'issue',
        description: "Incomplete code suggestion - Oops, your response got filtered. Vote down if you think this shouldn't have happened.",
        author: 'Hua'
    },
    {
        title: 'issue',
        description: 'Not well-equipped with exsiting code',
        author: 'Hua'
    },
    {
        title: 'issue',
        description: 'Code suggestion is based on old code',
        author: 'Hua'
    },
  
  ];
  
  export default Limitations;