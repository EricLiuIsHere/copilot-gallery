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
    tags: ['misc', 'frontend']
  },
  {
    videoUrl: '/videos/8.mp4',
    title: 'CSS generation',
    description: 'Provide suggestions to css styles.',
    type: 'css',
    tags: ['css', 'frontend']
  },
  {
    videoUrl: '/videos/5.mp4',
    title: 'Structural data generation',
    description: 'Github Copilot can generate structural data when you gives clear instructions.',
    type: 'javascript',
    tags: ['javascript', 'data structure', 'frontend']
  },
  {
    videoUrl: '/videos_hua/code_explaination.mp4',
    title: 'Code explaination',
    description: 'Explain the code in a simple way. E.x. two obj compare util',
    type: 'javascript',
    tags: ['javascript' ,'frontend']
  },
  {
    videoUrl: '/videos/2.mp4',
    title: 'Fix a bug',
    description: 'Copilot has the abilities to fix code issues. The more you use it, the more it learns.',
    type: 'bugFix',
    tags: ['bugFix', 'frontend']
  },
  {
    videoUrl: '/videos_hua/ux_design.mp4',
    title: 'UX Design',
    description: 'Suggest on existing design. E.x. forgot password, remember me',
    type: 'misc',
    tags: ['misc' ,'frontend']
  },
  {
    videoUrl: '/videos_hua/functional_test_case.mp4',
    title: 'Functional Test Case',
    description: 'Suggest/add test case on a function by short key ctrl/command + i',
    type: 'test',
    tags: ['test' ,'frontend']
  },
  {
    videoUrl: '/videos/1.mp4',
    title: 'Generate a code snepet',
    description: 'Ask Copilot to create a simple HTML element with real resource.',
    type: 'html',
    tags: ['html', 'frontend']
  },
  {
    videoUrl: '/videos/3.mp4',
    title: 'Refactor code',
    description: 'Copilot able to refactor code. The video demonstate how it refactors a tsx script to use tailwind css.',
    type: 'javascript',
    tags: ['javascript', 'frontend']
  },
  {
    videoUrl: '/videos/4.mp4',
    title: 'CSS styling',
    description: 'As of css styling, Copilot is able to provide useful suggestions, it works the best when it comes to small code snepets.',
    type: 'css',
    tags: ['css', 'frontend']
  },
  {
    videoUrl: '/videos/6.mp4',
    title: 'Function generation',
    description: 'Util function can be generated easily via Copilot.',
    type: 'javascript',
    tags: ['javascript', 'Util function', 'frontend']
  },
  {
    videoUrl: '/videos/7.mp4',
    title: 'Pattern generation',
    description: 'When there are samples, Copilot can use it as a pattern the generate more data.',
    type: 'misc',
    tags: ['misc', 'frontend']
  },
  {
    videoUrl: '/videos/9.mp4',
    title: 'Generate code snepets across files',
    description: 'To generate codes across files, Copilot can even gives you what you have in mind directly.',
    type: 'misc',
    tags: ['across files', 'frontend']
  },
  {
    videoUrl: '/videos/10.mp4',
    title: 'Auto complete',
    description: 'Complete code based on your context.',
    type: 'misc',
    tags: ['Auto complete', 'frontend']
  },
  {
    videoUrl: '/videos/11.mp4',
    title: 'Add style to element',
    description: 'Copilot add styles as you want.',
    type: 'css',
    tags: ['css', 'frontend']
  },
  {
    videoUrl: '/videos/12.mp4',
    title: 'Multipe css classes',
    description: 'It can provide mutiple class names and makes the element block as you want it to be.',
    type: 'css',
    tags: ['css', 'frontend']
  },
  {
    videoUrl: '/videos/13.mp4',
    title: 'Refactor code',
    description: 'Copilot can provide suggestions to refactor code.',
    type: 'misc',
    tags: ['misc', 'frontend']
  },
  {
    videoUrl: '/videos_hua/code_suggestion.mp4',
    title: 'Code Suggestion/Refactor',
    description: 'Code Suggestions/Refactor base on existing code. E.x. add more documentation',
    type: 'javascript',
    tags: ['javascript' ,'frontend']
  },
  {
    videoUrl: '/videos_hua/component_test_case.mp4',
    title: 'Component Test Case',
    description: 'Suggest/add test case on a simple component',
    type: 'test',
    tags: ['test' ,'frontend']
  },
  {
    videoUrl: '/videos_hua/git_histories.mp4',
    title: 'Git Command Guidance',
    description: 'Show me on how to preserve specific file histoies from one repo to another repo',
    type: 'misc',
    tags: ['misc' ,'frontend']
  },
  {
    videoUrl: '/videos/400.mp4',
    title: 'limit on suggstions',
    description: 'Let us start the journey to discover the beauty of Github Copilot.',
    type: 'limit',
    tags: ['limit', 'frontend']
  },

  {
    videoUrl: '/videos/401.mp4',
    title: 'limit on css generation',
    description: 'Let us start the journey to discover the beauty of Github Copilot.',
    type: 'limit',
    tags: ['limit', 'css']
  },

];

export default Videos;