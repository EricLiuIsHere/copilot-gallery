import VideoSection from './components/videoSection';
import VideoTypes, { VideoType } from './common/videoTypes';

function GalleryPage() {
  return (
    <div className="w-full">
      {VideoTypes.map((videoType: VideoType) => (
        <VideoSection
          key={videoType.type}
          title={videoType.title}
          description={videoType.description}
          type={videoType.type}
        />
      ))}
    </div>
  );
}

export default GalleryPage;