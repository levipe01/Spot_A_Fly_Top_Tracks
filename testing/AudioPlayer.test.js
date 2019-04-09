import React from 'react';
import { render, cleanup } from 'react-testing-library';
import AudioPlayer from '../client/src/components/AudioPlayer';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<AudioPlayer w/ current track />', () => {
  const currentTrack = {
    name: '',
    artist: '',
    image: '',
    length: '',
  };

  const { getByTestId } = render(<AudioPlayer currentTrack={currentTrack} />);
  expect(getByTestId('left-flex-track').textContent).toBe('');
  expect(getByTestId('left-flex-image').textContent).toBe('');
  expect(console.error).not.toBeCalled();
});

test('<AudioPlayer w/ current track />', () => {
  const currentTrack = {
    name: 'test-name',
    artist: 'test-artist',
    image: 'test-image',
    length: 'test-length',
  };
  
  const { getByTestId } = render(<AudioPlayer currentTrack={currentTrack} />);
  expect(getByTestId('left-flex-image')).toBeTruthy();
  expect(getByTestId('left-flex-track').textContent).toBe('test-name');
  expect(console.error).not.toBeCalled();
});
