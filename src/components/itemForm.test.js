import React from 'react';
import { render } from '@testing-library/react';
import ItemForm from './ItemForm';

test('If user is a seller, he should be able to see addItem btn', () => {
  const {getByText} = render(
    <ItemForm userRole='seller'/>
  );

  const linkElement = getByText('Add item');
  expect(linkElement).toBeInTheDocument();
});

test('Click addItem btn should open Dialog', () => {
  const {getByTestId, getByText} = render(
    <ItemForm userRole='seller'/>
  );

  getByTestId('addItemBtn').click();
  const linkElement = getByText('Add an Item to Sell');
  expect(linkElement).toBeInTheDocument();
});
