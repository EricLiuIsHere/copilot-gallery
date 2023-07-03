import Card from './videoCard';
import Videos from '../common/videos';
import { Video } from '../common/videos';


interface VideoSectionProps {
  title: string;
  description: string;
  type: string;
}

function VideoSection({ title, description, type }: VideoSectionProps) {
  const filteredVideos = Videos.filter((video: Video) => video.type === type);

  return (
    <div className="py-4 px-4 my-4 border border-gray-300 rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-500 mb-4">{description}</p>
      <div className="grid grid-cols-3 gap-4">
        {filteredVideos.map((video: Video) => (
          <Card
            key={video.videoUrl}
            title={video.title}
            description={video.description}
            videoUrl={video.videoUrl}
            author={video.author}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoSection;