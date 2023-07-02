import VideoSection from './components/videoSection';

function GalleryPage() {
  return (
    <div className="w-full">
      <VideoSection
        title="CSS Videos"
        description="Below are the videos demonstrate how copilot is helping to make a difference to the styles I am anticipate."
        type="css"
      />
      <VideoSection
        title="HTML Videos"
        description="Copilot is able to generate HTML code blocks (i.e. HTML inside tsx file)."
        type="html"
      />
      <VideoSection
        title="JavaScript Videos"
        description="JavaScript is the most popular language in Github Copilot training set. With the help of Copilot, devs are able to write code faster and more efficiently in JavaScript."
        type="javascript"
      />
      <VideoSection
        title="Bug Fix Videos"
        description="When there are issues, copilot will provide suggestions how to fix."
        type="bugFix"
      />
      <VideoSection
        title="Test Videos"
        description="Generate test are the basic feature to Copilot."
        type="test"
      />
      <VideoSection
        title="Misc Videos"
        description="With Github Copilot, you can do more than you think."
        type="misc"
      />
    </div>
  );
}

export default GalleryPage;