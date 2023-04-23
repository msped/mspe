import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfessionalExperience from '../../components/ProfessionalExperience';

test('renders professional experience content', () => {
    render(<ProfessionalExperience />);
    
    // Test that the "Professional Experience" heading exists and has the correct text
    const heading = screen.getByText(/Professional Experience/i);
    expect(heading).toBeInTheDocument();
    
    // Test that the first job title and company name exists and has the correct text
    const jobTitle1 = screen.getByText(/Data Management Assistant/i);
    expect(jobTitle1).toBeInTheDocument();
    const company1 = screen.getByText(/Cheshire Police, Winsford/i);
    expect(company1).toBeInTheDocument();
    
    // Test that the second job title and company name exists and has the correct text
    const jobTitle2 = screen.getByText(/Sales Adviser/i);
    expect(jobTitle2).toBeInTheDocument();
    const company2 = screen.getByText(/Asda, Winsford/i);
    expect(company2).toBeInTheDocument();
});
