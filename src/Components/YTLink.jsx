import React from 'react';
import './styling.css';

export default function Ytlink() {
  return (
    <div className='YTLink'>
      {/* Left visual image */}
      <div>
        <img src='./yt-visual-left.png' alt='Left Visual' id='yt-left' />
      </div>

      {/* Youtube content section */}
      <div className="ytcontent">
        {/* Top-left decorative div */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            width: '12rem',
            height: '12rem',
            backgroundColor: '#002449',
            borderRadius: '25px',
            zIndex: 1
          }}
        ></div>

        {/* YouTube iframe */}
        <div
          style={{
            position: 'relative',
            textAlign: 'center',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '1rem',
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/znMbKz6ZPno"
            style={{
              height: '27rem',
              width: '35rem',
              borderRadius: '25px',
              border: 'none'
            }}
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Bottom-right decorative div */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            width: '12rem',
            height: '12rem',
            backgroundColor: '#002449',
            borderRadius: '25px',
            zIndex: 1
          }}
        ></div>
      </div>

      {/* Right visual image */}
      <div>
        <img src='./yt-visual-right.png' alt='Right Visual' id='yt-right' />
      </div>
    </div>
  );
}
