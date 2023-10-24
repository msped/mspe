import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components//Header';

test('renders header content', () => {
    render(<Header />);
    
    // Test that the "Matt Edwards" text is a link and has the correct href attribute
    const nameLink = screen.getByText(/Matt Edwards/i);
    expect(nameLink).toHaveAttribute('href', '/');
    
    // Test that the "Resume" button is present and has the correct href attribute
    const resumeButton = screen.getByText(/Resume/i);
    expect(resumeButton).toHaveAttribute('href', '/cv');
    
    // Test that the menu component renders
    const sidebar = screen.getByTestId('MenuIcon');
    expect(sidebar).toBeInTheDocument();
});
