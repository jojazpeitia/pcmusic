'use client'
import React, { useState, useEffect } from 'react';
import DialogBox from '@/components/ui/DialogBox';
import { PC10, PClogo } from '@/components/svg';

export default function Home() {
  const [isDialogOpen, setDialogOpen] = useState(true);
  const [hasRandomPosition, setHasRandomPosition] = useState(false);
  const [dialogPosition, setDialogPosition] = useState(getRandomPosition());

  useEffect(() => {
    // Update random position values on page reload
    setDialogPosition(getRandomPosition());
    setHasRandomPosition(true);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  function getRandomPosition() {
    return {
      x: Math.floor(Math.random() * 800), // Adjust the values as needed
      y: Math.floor(Math.random() * 600), // Adjust the values as needed
    };
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

    <div className='flex justify-center items-center h-screen'>
        <PClogo className="shrink invert w-40 h-40 md:w-72 md:h-72 hover:cursor-pointer hover:drop-shadow-3xl" />
        <PClogo className="shrink invert w-40 h-40 md:w-72 md:h-72" /> 
        <PC10 className="shrink invert w-40 h-40 md:w-72 md:h-72 hover:cursor-pointer hover:drop-shadow-3xl" /> 
      </div>

      {/* Dialog for large screens */}
      {hasRandomPosition && (
        <div
          className='hidden md:block'
          style={{ position: 'absolute', top: `${dialogPosition.y}px`, left: `${dialogPosition.x}px` }}>
          <DialogBox isOpen={isDialogOpen} onClose={handleCloseDialog} title="2013-2023">
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
          <DialogBox isOpen={isDialogOpen} onClose={handleCloseDialog} title="2013-2023">
            <p className='mb-5'>After a decade of activity, 2023 will be PC Music&rsquo;s final year of new releases. Following that, the label will be dedicated to archival projects and special reissues. </p>
            <p className='mb-5'>We have an undisclosed number of new albums and singles coming very soon.</p>
            <p className='mb-5'>For now, 10 x 10 minutes of content from the past, present & future.</p>
            <p className='mb-5'>Personal Computer Music forever.</p>
          </DialogBox>
        </div>
      )}
    </main>
  )
}
