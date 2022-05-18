import React from 'react';
import { fireEvent ,render, screen } from '@testing-library/react';
import D from './D';

describe('App', () => {
    test('renders App component', () => {
        render(<D />);
        const buttonElement = screen.getByTestId("button1");
        const displayElement = screen.getByTestId("disk")
        fireEvent.click(buttonElement)
        expect(displayElement).toHaveTextContent("1")
    });
});