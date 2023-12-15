'use client'
import React, { useState, useEffect } from 'react';
import DialogBox from '@/components/ui/DialogBox';
import { PC10, PClogo } from '@/components/svg';
import Image from 'next/image';

export default function Home() {
  const [isDialogOpen, setDialogOpen] = useState(true);
  const [isTracklistDialogOpen, setTracklistDialogOpen] = useState(false);
  const [hasRandomPosition, setHasRandomPosition] = useState(false);
  const [dialogPosition, setDialogPosition] = useState(getRandomPosition());
  const [tracklistDialogPosition, setTracklistDialogPosition] = useState(getRandomPosition());

  useEffect(() => {
    // Update random position values on page reload
    setDialogPosition(getRandomPosition());
    setHasRandomPosition(true);
  }, []); // Empty dependency array ensures this effect runs only once on mount


  const handleOpenMainDialog = (event: MouseEvent) => {
    // Get the click coordinates relative to the document
    const { pageX, pageY } = event;
    setDialogPosition({ x: pageX, y: pageY });
    setDialogOpen(true);
  };

  const handleCloseMainDialog = () => {
    setDialogOpen(false);
  };

  const handleOpenTracklistDialog = (event: MouseEvent) => {
    setTracklistDialogOpen(true);
    const { pageX, pageY } = event;
    setTracklistDialogPosition({ x: pageX, y: pageY });
  }

  const handleCloseTracklistDialog = () => {
    setTracklistDialogOpen(false);
  };


  function getRandomPosition() {
    return {
      x: Math.floor(Math.random() * 800), // Adjust the values as needed
      y: Math.floor(Math.random() * 600), // Adjust the values as needed
    };
  }

  return (
    <main>
      <div className='flex justify-center items-center h-screen'>
        <PClogo onClick={handleOpenMainDialog} className="shrink-0 invert w-40 h-40 md:w-72 md:h-72 hover:cursor-pointer hover:drop-shadow-3xl"/>
        <div className='box shrink w-40 h-40 md:w-72 md:h-72 hover:cursor-pointer hover:drop-shadow-3xl ml-6'/>
        <PC10 onClick={handleOpenTracklistDialog} className="shrink-0 invert w-40 h-40 md:w-72 md:h-72 hover:cursor-pointer hover:drop-shadow-3xl" /> 
      </div>
      
      {/* Tracklist dialog for large screens */}
      <div
        className='hidden md:block'
        style={{ position: 'absolute', top: `${tracklistDialogPosition.y}px`, left: `${tracklistDialogPosition.x}px` }}
        >
        <DialogBox isOpen={isTracklistDialogOpen} onClose={handleCloseTracklistDialog} title="Tracklist">
          <h3 className='font-bold'>A. G. Cook</h3>
            {/* <ol className='list-decimal'> 
              <li>Untitled (Merlyn)</li>
              <li>Untitled (0000ff)</li> 
              <li>Untitled (Untitled)</li> 
              <li>Untitled (Once)</li> 
            </ol> */}
          <p className='mb-5'>  </p>
        </DialogBox>
      </div>

      {/* Tracklist dialog for small screens */}
      <div className='md:hidden fixed top-0 left-0 w-full h-full flex justify-center items-center'>
        <DialogBox isOpen={isTracklistDialogOpen} onClose={handleCloseTracklistDialog} title="Tracklist">
          <p className='mb-5'> yo </p>
        </DialogBox>
      </div>

      {/* Dialog for large screens */}
      {hasRandomPosition && (
        <div
          className='hidden md:block'
          style={{ position: 'absolute', top: `${dialogPosition.y}px`, left: `${dialogPosition.x}px` }}>
          <DialogBox isOpen={isDialogOpen} onClose={handleCloseMainDialog} title="2013-2023">
            <p className='mb-5'>After a decade of activity, 2023 will be PC Music&rsquo;s final year of new releases. Following that, the label will be dedicated to archival projects and special reissues. </p>
            <p className='mb-5'>We have an undisclosed number of new albums and singles coming very soon.</p>
            <p className='mb-5'>For now, 10 x 10 minutes of content from the past, present & future.</p>
            <p className='mb-5'>Personal Computer Music forever.</p>
          </DialogBox>
        </div>
      )}

      {/* Dialog for smaller screens */}
      {hasRandomPosition && (
        <div className='md:hidden fixed top-0 left-0 w-full h-full flex justify-center items-center'>
          <DialogBox isOpen={isDialogOpen} onClose={handleCloseMainDialog} title="2013-2023">
            <p className='mb-5'>After a decade of activity, 2023 will be PC Music&rsquo;s final year of new releases. Following that, the label will be dedicated to archival projects and special reissues. </p>
            <p className='mb-5'>We have an undisclosed number of new albums and singles coming very soon.</p>
            <p className='mb-5'>For now, 10 x 10 minutes of content from the past, present & future.</p>
            <p className='mb-5'>Personal Computer Music forever.</p>
          </DialogBox>
        </div>
      )}

      {/* Tracklist Dialog */}
    </main>
  )
}
