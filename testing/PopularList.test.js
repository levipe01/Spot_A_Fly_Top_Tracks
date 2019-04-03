import React from 'react';
import { render, cleanup } from 'react-testing-library';
import PopularList from '../client/src/components/PopularList.jsx';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<PopularList w/o tracks />', () => {
  render(<PopularList />);
  expect(console.error).toBeCalled();
});

const tracks = [
  {
    name: 'test_name1',
    artist: 'test_artist1',
    image: 'test_image1',
    playCount: 100,
    length: 'test_length1'
  },
  {
    name: 'test_name2',
    artist: 'test_artist2',
    image: 'test_image2',
    playCount: 100,
    length: 'test_length2'
  },
];

test('<PopularList w/ tracks />', () => {
  const { getByTestId, getAllByTestId } = render(<PopularList tracks={tracks} />);
  expect(getByTestId('popular-list').firstChild.innerHTML).toContain(tracks[0].name);
  expect(getByTestId('popular-list').lastChild.innerHTML).toContain(tracks[1].length);
  expect(getAllByTestId('track-image').length).toBe(tracks.length);
  expect(getAllByTestId('track-icon').length).toBe(tracks.length);
});
