import React from 'react';

import { init } from '../api/index'

const Map = () => {

  return (
    <>
    <h2>The Map</h2>
        <button onClick={() => init()}>Start Game</button>
    
    </>
  );
}

export default Map
