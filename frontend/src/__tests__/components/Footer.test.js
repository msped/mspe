import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

test('renders footer content', () => {
    render(<Footer />);
    
    const linkedInText = screen.getByText(/Get in touch on LinkedIn/i);
    expect(linkedInText).toBeInTheDocument();

    const linkedInIcon = screen.getByLabelText('LinkedIn');
    expect(linkedInIcon).toHaveAttribute('href', 'https://www.linkedin.com/in/mspe/');

    const githubIcon = screen.getByLabelText('GitHub');
    expect(githubIcon).toHaveAttribute('href', 'https://github.com/msped');
});
