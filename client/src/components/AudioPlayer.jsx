import React from 'react';
import styled from 'styled-components';

function AudioPlayer() {
  return (
    <Player>
      <LeftFlex>
        <div>Image</div>
        <LeftInnerFlex>
          <div>Song</div>
          <div>Artist</div>
        </LeftInnerFlex>
        <div>Plus</div>
      </LeftFlex>
      <CenterFlex>
        <CenterTopFlex>
          <div>Shuffle</div>
          <div>Previous</div>
          <div>Play</div>
          <div>Next</div>
          <div>Repeat</div>
        </CenterTopFlex>
        <CenterBottomFlex>
          <div>Start</div>
          <div>Progress</div>
          <div>End</div>
        </CenterBottomFlex>
      </CenterFlex>
      <RightFlex>
        <div>Queue</div>
        <div>Devices</div>
        <div>Speaker</div>
        <div>Volume</div>
      </RightFlex>
    </Player>
  );
}

export default AudioPlayer;

const Player = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 90px;
    color: #b3b3b3;
    background-color: #272727;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

const LeftFlex = styled.div`
    display: flex;
    flex-direction: row;
  `;

const CenterFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

const RightFlex = styled.div`
    display: flex;
    flex-direction: row;
  `;

const LeftInnerFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const CenterTopFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const CenterBottomFlex = styled.div`
  display: flex;
  flex-direction: row;
`;
