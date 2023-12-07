import React, { ReactNode } from 'react';
import Draggable from 'react-draggable';

interface DialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function DialogBox({ isOpen, onClose, title, children }: DialogBoxProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Draggable>
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className=" text-white rounded-lg border p-4 w-96">
        <div className="flex items-center justify-between border-b mb-4 pb-2">
          <h1 className="font-bold"> 
            {title} 
          </h1>
          <button className=" hover:text-gray-300 focus:outline-none" onClick={onClose}>
            Ok
          </button>
        </div>
        {children}
      </div>
    </div>
  </Draggable>
  );
}
