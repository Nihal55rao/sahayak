import React from 'react';
import { render } from '@testing-library/react';
import DoctorRegister from './DoctorRegister';

test('renders learn react link', () => {
  const { getByText } = render(<DoctorRegister />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});