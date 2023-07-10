'use client'
import VideoSection from './components/videoSection';
import Search from './components/search';
import React, { useState, useEffect, useMemo } from 'react';
import DocSection from './components/docSection';
import TagArray from './components/tagArray';
import videos from './common/videos';
import Docs from './common/docs';
function GalleryPage() {
  const [query, setQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [tagArrayTags, setTagArrayTags] = useState<string[]>([]);
  function handleSearch(query: string) {
    setQuery(query);
  }

  function handleTagToggle(tags: string[]) {
    setSelectedTags(tags);
  }

  useEffect(() => {
    const distinctTags = Array.from(
      new Set([...videos.flatMap((video) => video.tags), ...Docs.flatMap((doc)=> doc.tags)])
    ).filter((tag) => tag !== undefined) as string[];
    setTagArrayTags(distinctTags);
  }, []);

  useEffect(() => {
    const distinctTags = Array.from(
      new Set([...videos.filter((video) => {
        const { title, description } = video;
        const lowerCaseFilter = query.toLowerCase();
    
        // Check if the filter matches the video title, description, or tags
        return (
          title.toLowerCase().includes(lowerCaseFilter) ||
          description.toLowerCase().includes(lowerCaseFilter) 
        );
      }).flatMap((video) => video.tags), ...Docs.filter((doc) => {
        const { title, description } = doc;
        const lowerCaseFilter = query.toLowerCase();
    
        // Check if the filter matches the video title, description, or tags
        return (
          title.toLowerCase().includes(lowerCaseFilter) ||
          description.toLowerCase().includes(lowerCaseFilter) 
        );
       }).flatMap((doc) => doc.tags)])
    ).filter((tag) => tag !== undefined) as string[];
    setTagArrayTags(distinctTags);
  }, [query]);


  
  const filteredVideos = useMemo(() => {
   return videos.filter((video) => {
    const { title, description, tags } = video;
    const lowerCaseFilter = query.toLowerCase();

    // Check if the filter matches the video title, description, or tags
    return (
      title.toLowerCase().includes(lowerCaseFilter) ||
      description.toLowerCase().includes(lowerCaseFilter) 
    ) && (selectedTags.length === 0 || selectedTags?.every((tag) => tags?.includes(tag)));
  }); 

  }, [query, selectedTags]);

  const filteredDocs = useMemo(() => {
    return Docs.filter((doc) => {
     const { title, description, tags } = doc;
     const lowerCaseFilter = query.toLowerCase();
 
     // Check if the filter matches the video title, description, or tags
     return (
       title.toLowerCase().includes(lowerCaseFilter) ||
       description.toLowerCase().includes(lowerCaseFilter) 
     ) && (selectedTags.length === 0 || selectedTags?.every((tag) => tags?.includes(tag)));
   }); 
 
   }, [query, selectedTags]);
  

  return (
    <div className="w-full min-h-screen">
      <Search onSearch={handleSearch} />
      <TagArray tags={tagArrayTags} onTagToggle={handleTagToggle} />
      <VideoSection
        key={'Videos'}
        title={'Videos'}
        videos={filteredVideos}
        description={'Video collection to demonstrate the use of Copilot'}
      />
      <DocSection
        key={'Docs'}
        title={'Docs'}
        docs={filteredDocs}
        description={'Documentation collection to demonstrate the use of Copilot'}
      />
    </div>
  );
}

export default GalleryPage;