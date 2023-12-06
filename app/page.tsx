'use client'
import React, { useState } from 'react';
import DialogBox from '@/components/ui/DialogBox'

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
        {/* <h1> yo</h1> */}
        <DialogBox isOpen={isDialogOpen} onClose={handleCloseDialog}>
          <p>This is the content of the dialog box.</p>
        </DialogBox>
      {/* </div> */}
    </main>
  )
}
