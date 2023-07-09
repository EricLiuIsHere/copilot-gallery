import React from 'react';
import styles from './videoCard.module.css';

interface CardProps {
  title: string;
  description: string;
  videoUrl: string;
  tags?: string[];
}

function Card({ title, description, videoUrl, tags }: CardProps) {
  return (
    <div className={`${styles.card} max-w-sm rounded overflow-hidden shadow-lg`}>
      <div className={`${styles.videoWrapper} pb-9/16`}>
        <video
          className={`${styles.video} w-full h-full h-216`}
          title={title}
          controls
          preload="none"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;