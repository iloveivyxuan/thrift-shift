import React from 'react';
import { render } from '@testing-library/react';
import ItemForm from './ItemForm';

test('click addItem btn should trigger addItem fn', () => {
  const handleClickOpen = jest.fn();
  const {getByTestId, getByText} = render(
    <ItemForm userRole='seller'/>
  );

  getByTestId('addItemBtn').click();
  const linkElement = getByText('Add an Item to Sell');
  expect(linkElement).toBeInTheDocument();
});
