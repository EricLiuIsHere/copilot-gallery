export interface Limitation {
    title: string;
    description: string;
  }
  
  const Limitations: Limitation[] = [
    {
        title: 'disadvantange',
        description: 'Distracting - as it can suggest many different things, which can be overwhelming for some developers.'
    },
    {
        title: 'disadvantange',
        description: 'Bad habits - suggest code is unoptimized, inefficient or event insecure.'
    },
    {
        title: 'disadvantange',
        description: 'Versioin detect - suggest code is not well based on existing code of workspace.'
    },
    {
        title: 'disadvantange',
        description: "Incomplete code suggestion - Oops, your response got filtered. Vote down if you think this shouldn't have happened."
    },
    {
        title: 'disadvantange',
        description: 'Contrains on the HTML tags generation as per ulimited loop'
    }
  ];
  
  export default Limitations;