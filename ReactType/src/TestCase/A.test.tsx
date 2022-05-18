import React from 'react';
import { render, screen } from '@testing-library/react';
import A from "./A";

test('renders learn react link', () => {
  render(<A />);
  const linkElement = screen.getByText("ankit");
  const textElement = screen.getByText("upadhyay");
  var textElemen = screen.getByTestId("text");
  expect(linkElement).toBeInTheDocument();
  expect(textElement).toHaveClass("fade-in");
  expect(textElemen).toBeInTheDocument();
});
