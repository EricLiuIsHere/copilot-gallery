import Card from './videoCard';
import { Video } from '../common/videos';


interface VideoSectionProps {
  title: string;
  description: string;
  videos: Video[];
}

function VideoSection({ title, description,videos }: VideoSectionProps) {
  return (
    <div className="py-10 px-4 my-4 border border-gray-300 rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-500 mb-4">{description}</p>
      <div className="grid grid-cols-3 gap-9 place-items-center">
        {videos.map((video: Video) => (
          <Card
            key={video.videoUrl}
            title={video.title}
            description={video.description}
            videoUrl={video.videoUrl}
            tags={video.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoSection;