import React from 'react';
import LoginButton from './LoginButton';

const Topbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2 bg-white shadow-sm">
      <img
        src="/SIH2024-logo.png" // ✅ Use absolute path from public/
        alt="SIH Logo"
        className="h-10 w-auto object-contain"
      />
      <LoginButton />
    </div>
  );
};

export default Topbar;
