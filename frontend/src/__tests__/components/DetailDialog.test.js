import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DetailDialog from '../../components/DetailDialog';

describe('DetailDialog Component, all links', () => {
    let project;
    let project2;

    beforeEach(() => {
        project = {
            name: 'Test Project',
            description: 'This is a test project.',
            url: 'https://example.com',
            github_link: 'https://github.com/test',
            tech: [
                { name: 'React', info: 'https://reactjs.org/' },
                { name: 'Node.js', info: 'https://nodejs.org/' },
            ]
        }
        project2 = {
            name: 'Test Project',
            description: 'This is a test project.',
            url: '',
            github_link: 'https://github.com/test',
            tech: [
                { name: 'React', info: 'https://reactjs.org/' },
                { name: 'Node.js', info: 'https://nodejs.org/' },
            ]
        }
    });

    it('should render View More button', () => {
        render(<DetailDialog project={project} />);
        expect(screen.getByRole('button', {name: /View More/})).toBeInTheDocument();
    });

    it('should open dialog box on click of View More button', () => {
        render(<DetailDialog project={project} />);
        fireEvent.click(screen.getByRole('button', {name: /View More/}));
        //have to check for the content as no open attribute in document
        expect(screen.getByRole('heading', {name: /Test Project/})).toBeInTheDocument();
    });

    it('should render all elements in dialog box', () => {
        render(<DetailDialog project={project} />);
        fireEvent.click(screen.getByRole('button', {name: /View More/}));
        expect(screen.getByRole('heading', {name: /Test Project/})).toBeInTheDocument();
        expect(screen.getAllByText(/This is a test project./i)).toHaveLength(1);
        expect(screen.getByRole('link', {name: /GitHub Repo/i})).toHaveAttribute('href', 'https://github.com/test');
        expect(screen.getByRole('link', {name: /Go to Website/i})).toHaveAttribute('href', 'https://example.com');
        expect(screen.getAllByRole('link')).toHaveLength(4);
        expect(screen.getAllByRole('button')).toHaveLength(1);
        expect(screen.getAllByRole('link')[2]).toHaveAttribute('href', 'https://reactjs.org/');
        expect(screen.getAllByRole('link')[3]).toHaveAttribute('href', 'https://nodejs.org/');
    });


    it('should render the content without a live url link', () => {
        render(<DetailDialog project={project2} />);
        fireEvent.click(screen.getByRole('button', {name: /View More/}));
        expect(screen.getByRole('heading', {name: /Test Project/})).toBeInTheDocument();
        expect(screen.getAllByText(/This is a test project./i)).toHaveLength(1);
        expect(screen.getByRole('link', {name: /GitHub Repo/i})).toHaveAttribute('href', 'https://github.com/test');
        expect(screen.getAllByRole('link')).toHaveLength(3);
        expect(screen.getAllByRole('button')).toHaveLength(1);
        expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', 'https://reactjs.org/');
        expect(screen.getAllByRole('link')[2]).toHaveAttribute('href', 'https://nodejs.org/');
    });
});