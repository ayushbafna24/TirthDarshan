import React, { useRef } from 'react';

import HlsPlayer from '../../src';

function App() {
  const playerRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
      <HlsPlayer
        loop={true}
        width="100%"
        height="auto"
        autoPlay
        controls={true}
        playerRef={playerRef}
        src={'http://tirth.onrender.com//live/Tirth/index.m3u8'}
      />
    </div>
  );
}

export default App;
