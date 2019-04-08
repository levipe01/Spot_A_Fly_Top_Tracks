import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Ellipsis from '../client/src/components/Ellipsis.jsx';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<Ellipsis w/ ellipsis />', () => {
  const { getByTestId, container } = render(<Ellipsis />);
  expect(getByTestId('ellipsis').firstChild.tagName).toEqual('I');
  expect(console.error).not.toBeCalled();
  expect(container.firstChild).toMatchSnapshot();
});

test('<Ellipsis w/ context menu />', () => {
  const { getByTestId, container, queryByTestId } = render(<Ellipsis />);
  expect(queryByTestId('context-menu')).toBeFalsy();
  fireEvent.click(getByTestId('ellipsis'));
  expect(queryByTestId('ellipsis')).toBeFalsy();
  
  expect(getByTestId('context-menu').firstChild.textContent).toBe('Start Radio');
  expect(getByTestId('context-menu').childElementCount).toBe(5);
  expect(container.firstChild).toMatchSnapshot();

  fireEvent.click(getByTestId('context-menu'));
  expect(queryByTestId('ellipsis')).toBeTruthy();
});
