import React from 'react';
import videos, { Video } from '../../common/videos';


const Tag = ({ text }: { text: string }) => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {text}
    </span>
  );
};

const Page = ({ params }: { params: { id: number } }) => {
  const videoObj: Video = videos[params.id];

  if (!videoObj) {
    return <div>Video not found</div>;
  }
  const tags = videoObj.tags.map((tag, index) => <Tag key={index} text={tag} />);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* <div className="md:w-3/4 md:pr-4"> */}
        <div className="md:w-4/4 md:pr-4">
          <div className="relative">
            <video
              className={` w-full h-full h-216`}
              title={videoObj.title}
              controls
              preload="none"
              autoPlay={true}
            >
              <source src={videoObj.videoUrl} type="video/mp4" />
            </video>
          </div>
          <h1 className="text-2xl font-bold mt-4">{videoObj.title}</h1>
          {/* <p className="text-gray-500 mt-2">{videoObj.views} views • {videoObj.uploadDate}</p> */}
          <hr className="my-4" />
          <p className="text-gray-500">{videoObj.description}</p>
          <div className="flex flex-wrap mt-4">{tags}</div>

        </div>
        {/* <div className="md:w-1/4">
          <h2 className="text-lg font-bold mb-2">Up next</h2>
          {videos.slice(0, 5).map((v,index) => (
            <div key={index} className="flex mb-4">
              <div className="w-1/3">
                <img src={v.thumbnailUrl} alt={v.title} className="w-full" />
              </div>
              <div className="w-2/3 pl-2">
                <p className="text-sm font-bold">{v.title}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Page;