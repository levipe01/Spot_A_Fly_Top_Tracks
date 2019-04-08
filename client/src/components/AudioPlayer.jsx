import React from 'react';
import styled from 'styled-components';

function AudioPlayer() {
  const Player = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: #b3b3b3;
    background-color: #272727;
    text-align: center;
  `;
  
  return (
    <Player>
      <h1>Hi</h1>
    </Player>
  );
}


export default AudioPlayer;
