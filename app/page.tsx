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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
      <DialogBox isOpen={isDialogOpen} onClose={handleCloseDialog} title="2013-2023">
          <p className='mb-5'>After a decade of activity, 2023 will be PC Music&rsquo;s final year of new releases. Following that, the label will be dedicated to archival projects and special reissues. </p>
          <p className='mb-5'>We have an undisclosed number of new albums and singles coming very soon.</p>
          <p className='mb-5'>For now, 10 x 10 minutes of content from the past, present & future.</p>
          <p className='mb-5'>Personal Computer Music forever.</p>
      </DialogBox>
      {/* </div> */}
    </main>
  )
}
