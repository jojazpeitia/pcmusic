import React, { ReactNode } from 'react';

interface DialogBoxProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const DialogBox: React.FC<DialogBoxProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="bg-blue-600 text-white p-8 rounded relative">
        <button
          className="absolute top-2 right-2 hover:text-gray-800 focus:outline-none"
          onClick={onClose}
        >
          X
        </button>
          {children}
      </div>
    </div>
  );
};
  
export default DialogBox;