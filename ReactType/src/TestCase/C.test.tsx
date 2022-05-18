import React from 'react';
import { render, screen } from '@testing-library/react';
import C from './C';

describe('App', () => {
    test('renders App component', () => {
        render(<C />);
        const firstElement = screen.getByText('React Example');
        expect(firstElement).toBeInTheDocument();
    });
});

describe('App', () => {
    test('renders App component', () => {
        render(<C />);
        const mainElement = screen.getByTestId("main")
        expect(mainElement).toHaveTextContent("React");
        // or
        expect(mainElement).toBeInTheDocument();
    });
});