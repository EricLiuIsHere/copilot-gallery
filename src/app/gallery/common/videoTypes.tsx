

export interface VideoType {
  title: string;
  description: string;
  type: string;
}

const VideoTypes: VideoType[] = [
  {
    title: 'CSS Videos',
    description: 'Below are the videos demonstrate how copilot is helping to make a difference to the styles I am anticipate.',
    type: 'css',
  },
  {
    title: 'HTML Videos',
    description: 'Copilot is able to generate HTML code blocks (i.e. HTML inside tsx file).',
    type: 'html',
  },
  {
    title: 'JavaScript Videos',
    description: 'JavaScript is the most popular language in Github Copilot training set. With the help of Copilot, devs are able to write code faster and more efficiently in JavaScript.',
    type: 'javascript',
  },
  {
    title: 'Bug Fix Videos',
    description: 'When there are issues, copilot will provide suggestions how to fix.',
    type: 'bugFix',
  },
  {
    title: 'Test Videos',
    description: 'Generate test are the basic feature to Copilot.',
    type: 'test',
  },
  {
    title: 'Misc Videos',
    description: 'With Github Copilot, you can do more than you think.',
    type: 'misc',
  },
];

export default VideoTypes;