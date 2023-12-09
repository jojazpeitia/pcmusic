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
        <div className="text-white bg-pcblue-100 text-xs rounded-lg border border-white w-64 scale-100">
          <div className="flex items-center justify-between border-b border-white ">
            <h1 className="py-2 pl-3 font-bold"> 
              {title} 
            </h1>
            <div className='bg-white w-10 h-8 rounded-tr-md flex justify-center pl-2 text-blue-700'> 
              <button className="pr-3 scale-75 hover:text-pcblue-100 focus:outline-none" onClick={onClose}>
                OK
              </button>
            </div>
          </div>
          <div className='pl-3 pr-1 pt-5'>
            {children}
          </div>
        </div>
    </Draggable>
  );
}
