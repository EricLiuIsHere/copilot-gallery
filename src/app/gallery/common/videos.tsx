export interface Video {
  videoUrl: string;
  title: string;
  description: string;
  type: string;
  tags?: string[];
}

const Videos: Video[] = [
  {
    videoUrl: '/videos/0.mp4',
    title: 'Welcome to GitHub Copilot!',
    description: 'Let us start the journey to discover the beauty of Github Copilot.',
    type: 'misc',
    tags: ['misc']
  },
  {
    videoUrl: '/videos/1.mp4',
    title: 'Generate a code snepet',
    description: 'Ask Copilot to create a simple HTML element with real resource.',
    type: 'html',
    tags: ['html']
  },
  {
    videoUrl: '/videos/2.mp4',
    title: 'Fix a bug',
    description: 'Copilot has the abilities to fix code issues. The more you use it, the more it learns.',
    type: 'bugFix',
    tags: ['bugFix']
  },
  {
    videoUrl: '/videos/3.mp4',
    title: 'Refactor code',
    description: 'Copilot able to refactor code. The video demonstate how it refactors a tsx script to use tailwind css.',
    type: 'javascript',
    tags: ['javascript']
  },
  {
    videoUrl: '/videos/4.mp4',
    title: 'CSS styling',
    description: 'As of css styling, Copilot is able to provide useful suggestions, it works the best when it comes to small code snepets.',
    type: 'css',
    tags: ['css']
  },
  {
    videoUrl: '/videos/5.mp4',
    title: 'Structural data generation',
    description: 'Github Copilot can generate structural data when you gives clear instructions.',
    type: 'javascript',
    tags: ['javascript', 'data structure']
  },
  {
    videoUrl: '/videos/6.mp4',
    title: 'Function generation',
    description: 'Util function can be generated easily via Copilot.',
    type: 'javascript',
    tags: ['javascript', 'Util function']
  },
  {
    videoUrl: '/videos/7.mp4',
    title: 'Pattern generation',
    description: 'When there are samples, Copilot can use it as a pattern the generate more data.',
    type: 'misc',
    tags: ['misc']
  },
  {
    videoUrl: '/videos/8.mp4',
    title: 'CSS generation',
    description: 'Provide suggestions to css styles.',
    type: 'css',
    tags: ['css']
  },
  {
    videoUrl: '/videos/9.mp4',
    title: 'Generate code snepets across files',
    description: 'To generate codes across files, Copilot can even gives you what you have in mind directly.',
    type: 'misc',
    tags: ['across files']
  },
  {
    videoUrl: '/videos/10.mp4',
    title: 'Auto complete',
    description: 'Complete code based on your context.',
    type: 'misc',
    tags: ['Auto complete']
  },
  {
    videoUrl: '/videos/11.mp4',
    title: 'Add style to element',
    description: 'Copilot add styles as you want.',
    type: 'css',
    tags: ['css']
  },
  {
    videoUrl: '/videos/12.mp4',
    title: 'Multipe css classes',
    description: 'It can provide mutiple class names and makes the element block as you want it to be.',
    type: 'css',
    tags: ['css']
  },
  {
    videoUrl: '/videos/13.mp4',
    title: 'Refactor code',
    description: 'Copilot can provide suggestions to refactor code.',
    type: 'misc',
    tags: ['misc']
  },
];

export default Videos;