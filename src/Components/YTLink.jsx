import React from 'react';

export default function Ytlink() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-8 bg-gray-50 relative overflow-hidden">
      {/* Left Image */}
      <img
        src="/yt-visual-left.png"
        alt="Left Visual"
        className="w-32 h-32 lg:w-48 lg:h-48 object-contain"
      />

      {/* YouTube Section with Decorative Backgrounds */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-4xl px-4 py-6">
        {/* Top-left Decorative Box */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#002449] rounded-2xl z-0" />

        {/* YouTube iframe */}
        <iframe
          className="w-full aspect-video rounded-2xl border-none z-10"
          src="https://www.youtube.com/embed/znMbKz6ZPno"
          title="YouTube Video"
          allowFullScreen
        ></iframe>

        {/* Bottom-right Decorative Box */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#002449] rounded-2xl z-0" />
      </div>

      {/* Right Image */}
      <img
        src="/yt-visual-right.png"
        alt="Right Visual"
        className="w-32 h-32 lg:w-48 lg:h-48 object-contain"
      />
    </div>
  );
}
