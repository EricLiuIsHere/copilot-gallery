'use client'
import React, { useState } from 'react';
import styles from './videoCard.module.css';
import { useRouter } from 'next/navigation'

interface CardProps {
  title: string;
  description: string;
  videoUrl: string;
  tags?: string[];
  author?: string;
  id: number;
}

function Card({ title, description, videoUrl, tags, id }: CardProps) {
  const [showVideo, setShowVideo] = useState(false);
  const router = useRouter();
  const handleVideoClick = () => {
    router.push(`/gallery/video/${id}`)
  };
  return (
    <div className={`${styles.card} max-w-sm rounded overflow-hidden shadow-lg`} onClick={handleVideoClick}>
      {showVideo ? (
        <div>
          <div className={`${styles.videoWrapper} pb-9/16`}>
            <video
              className={`${styles.video} w-full h-full h-216`}
              title={title}
              controls
              preload="none"
              autoPlay={true}
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
      ) : (
        <>
          <div className={`${styles.videoWrapper} pb-9/16`}>
            <img
              className={`${styles.video} w-full h-full h-216`}
              src="https://via.placeholder.com/640x360.png?text=Click+to+play"
              alt="Click to play"
            />
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
        </>
      )}
    </div>
  );
}

export default Card;