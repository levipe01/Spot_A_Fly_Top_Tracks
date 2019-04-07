import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import App from '../client/src/components/App.jsx';
import PopularList from '../client/src/components/PopularList.jsx';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const track = [
  {
    name: 'test_name',
    artist: 'test_artist',
    image: 'test_image',
    playCount: 100,
    length: 'test_length',
  }
];

test('<App />', async () => {
  fetch.mockResponseOnce(JSON.stringify(track));
  
  const { getByTestId } = render(<PopularList tracks={track} />);
  const { container } = render(<App />);
  await waitForElement(() => getByTestId('popular-list'));
  
  expect(getByTestId('popular-list').firstChild.textContent).toContain('test_name');
  expect(getByTestId('popular-list').firstChild.textContent).toContain('test_length');
  expect(getByTestId('track-image').src).toBe('http://localhost:3003/test_image');
  expect(container.firstChild).toMatchSnapshot();
});
