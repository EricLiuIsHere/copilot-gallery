import Card from './components/videoCard';
import Videos from './common/videos';


function GalleryPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Videos.map((video) => (
        <Card
          key={video.videoUrl}
          title={video.title}
          description={video.description}
          videoUrl={video.videoUrl}
        />
      ))}
    </div>
  );
}

export default GalleryPage;