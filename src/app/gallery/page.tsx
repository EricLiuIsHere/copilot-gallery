'use client'
import VideoSection from './components/videoSection';
import VideoTypes, { VideoType } from './common/videoTypes';
import Search from './components/search';
import React, { useState } from 'react';
function GalleryPage() {
  const [query, setQuery] = useState('');
  function handleSearch(query: string) {
    setQuery(query);
  }

  return (
    <div className="w-full">
      <Search onSearch={handleSearch} />
        <VideoSection
          key={'Videos'}
          title={'Videos' }
          filter={query}
          description={'Video collection to demonstrate the use of Copilot'}
        />
    </div>
  );
      }

export default GalleryPage;