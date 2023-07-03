import React from 'react';

interface CardProps {
  title: string;
  description: string;
  videoUrl: string;
  author?: string;
}

function Card({ title, description, videoUrl, author }: CardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="pb-9/16">
        <video
          className="w-full h-full h-216"
          style={{height: '216px'}}
          title={title}
          controls
        >
            <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      {
        author == 'Hua' ? (
          <div className="px-6 py-4 bg-gray-300">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        ) : (
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        )
      }
    </div>
  );
}

export default Card;