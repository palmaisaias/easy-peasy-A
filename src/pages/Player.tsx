// src/pages/Player.tsx
'use client';

import React, { useEffect } from 'react';

const VIDEO_SRC =
  'https://a-grape-walk.sfo3.cdn.digitaloceanspaces.com/A.Walk.In.The.Clouds.1995.720p.BluRay.x264-ESub.Hollymoviehd.mp4';

export default function Player() {
  useEffect(() => {
    // Navigate the browser straight to the MP4 URL —
    // this bypasses CORS and opens the native player
    window.location.href = VIDEO_SRC;
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      <p>Opening video…</p>
      <a href={VIDEO_SRC} target="_blank" rel="noopener noreferrer">
        Click here if nothing happens
      </a>
    </div>
  );
}
