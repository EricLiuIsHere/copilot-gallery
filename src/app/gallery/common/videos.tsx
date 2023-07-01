interface Video {
  videoUrl: string;
  title: string;
  description: string;
}

const Videos: Video[] = [
  {
    videoUrl: '/videos/0.mp4',
    title: 'Welcome to GitHub Copilot!',
    description: 'Let us start the journey to discover the beauty of Github Copilot.',
  },
  {
    videoUrl: '/videos/1.mp4',
    title: 'Generate a code snepet',
    description: 'Ask Copilot to create a simple HTML element with real resource.',
  },
  {
    videoUrl: '/videos/2.mp4',
    title: 'Fix a bug',
    description: 'Copilot has the abilities to fix code issues. The more you use it, the more it learns.',
  },
  {
    videoUrl: '/videos/3.mp4',
    title: 'Refactor code',
    description: 'Copilot able to refactor code. The video demonstate how it refactors a tsx script to use tailwind css.',
  },
  {
    videoUrl: '/videos/4.mp4',
    title: 'CSS styling',
    description: 'As of css styling, Copilot is able to provide useful suggestions, it works the best when it comes to small code snepets.',
  },
  {
    videoUrl: '/videos/5.mp4',
    title: 'Structural data generation',
    description: 'Github Copilot can generate structural data when you gives clear instructions.',
  },
  {
    videoUrl: '/videos/6.mp4',
    title: 'Function generation',
    description: 'Util function can be generated easily via Copilot.',
  },
];

export default Videos;