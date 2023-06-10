'use client';
import React from 'react';

const Header = () => {
  const handleClose = () => {
    window.close();
  };

  return (
    <div className="flex justify-between px-4 py-2">
      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <div
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 hover:cursor-pointer"
            onClick={handleClose}
          ></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600"></div>
        </div>
      </div>
      <span className="font-semibold">Kelvin Amoaba</span>
      <div />
    </div>
  );
};

export default Header;
