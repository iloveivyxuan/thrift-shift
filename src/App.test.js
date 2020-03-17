import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Thrift Shift link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Thrift Shift');
  expect(linkElement).toBeInTheDocument();
});
