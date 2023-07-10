import Card from './videoCard';
import Videos from '../common/videos';
import { Video } from '../common/videos';


interface VideoSectionProps {
  title: string;
  description: string;
  filter: string;
}

function VideoSection({ title, description,filter }: VideoSectionProps) {
  const filteredVideos = Videos.filter((video) => {
    const { title, description, tags } = video;
    const lowerCaseFilter = filter.toLowerCase();

    // Check if the filter matches the video title, description, or tags
    return (
      title.toLowerCase().includes(lowerCaseFilter) ||
      description.toLowerCase().includes(lowerCaseFilter) ||
      tags?.some((tag) => tag.toLowerCase().includes(lowerCaseFilter))
    );
  });

  return (
    <div className="py-10 px-4 my-4 border border-gray-300 rounded-lg bg-white shadow-md">
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
            tags={video.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoSection;