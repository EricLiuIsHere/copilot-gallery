'use client'
import VideoSection from './components/videoSection';
import Search from './components/search';
import React, { useState } from 'react';
import DocSection from './components/docSection';
function GalleryPage() {
  const [query, setQuery] = useState('');
  function handleSearch(query: string) {
    setQuery(query);
  }

  return (
    <div className="w-full min-h-screen">
      <Search onSearch={handleSearch} />
      <VideoSection
        key={'Videos'}
        title={'Videos'}
        filter={query}
        description={'Video collection to demonstrate the use of Copilot'}
      />
      <DocSection
        key={'Docs'}
        title={'Docs'}
        filter={query}
        description={'Documentation collection to demonstrate the use of Copilot'}
      />
    </div>
  );
}

export default GalleryPage;