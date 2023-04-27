import React from 'react';
import { render } from '@testing-library/react';
import HospitalRegister from './HospitalRegister';

test('renders learn react link', () => {
  const { getByText } = render(<HospitalRegister />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});