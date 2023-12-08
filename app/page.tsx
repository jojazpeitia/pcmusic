'use client'
import React, { useState } from 'react';
import DialogBox from '@/components/ui/DialogBox';


export default function Home() {
  const [isDialogOpen, setDialogOpen] = useState(true);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const getRandomPosition = () => ({
    x: Math.floor(Math.random() * 800), // Adjust the values as needed
    y: Math.floor(Math.random() * 600), // Adjust the values as needed
  });

  // Use getRandomPosition to set the position of the div
  const dialogPosition = getRandomPosition();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* Dialog for large screens */}
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

      {/* Dialog for smaller screens */}
      <div className='md:hidden fixed top-0 left-0 w-full h-full flex justify-center items-center'>
        <DialogBox isOpen={isDialogOpen} onClose={handleCloseDialog} title="2013-2023">
            <p className='mb-5'>After a decade of activity, 2023 will be PC Music&rsquo;s final year of new releases. Following that, the label will be dedicated to archival projects and special reissues. </p>
            <p className='mb-5'>We have an undisclosed number of new albums and singles coming very soon.</p>
            <p className='mb-5'>For now, 10 x 10 minutes of content from the past, present & future.</p>
            <p className='mb-5'>Personal Computer Music forever.</p>
        </DialogBox>
      </div>
    </main>
  )
}
