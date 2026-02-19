import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Navbar from '../components/Navbar';

// Mock next/link to avoid JSDOM navigation errors
jest.mock('next/link', () => {
  return ({ children, href, onClick, ...rest }: any) => {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          if (onClick) onClick(e);
        }}
        {...rest}
      >
        {children}
      </a>
    );
  };
});

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock window.scrollTo
global.scrollTo = jest.fn();

describe('Navbar Component', () => {
  it('renders the navbar with logo', () => {
    render(<Navbar />);
    expect(screen.getByText('Ayush Kumar Jha')).toBeInTheDocument();
  });

  it('initially hides mobile menu links', () => {
    render(<Navbar />);
    const aboutLinks = screen.getAllByRole('link', { name: 'About' });
    expect(aboutLinks).toHaveLength(1);
  });

  it('toggles mobile menu on button click', async () => {
    render(<Navbar />);

    const toggleButton = screen.getByLabelText('Toggle menu');

    // Open menu
    fireEvent.click(toggleButton);

    await waitFor(() => {
        const aboutLinks = screen.getAllByRole('link', { name: 'About' });
        expect(aboutLinks).toHaveLength(2);
    });

    // Close menu
    fireEvent.click(toggleButton);

    await waitFor(() => {
        const aboutLinks = screen.getAllByRole('link', { name: 'About' });
        expect(aboutLinks).toHaveLength(1);
    });
  });

  it('closes mobile menu when a link is clicked', async () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText('Toggle menu');

    // Open menu
    fireEvent.click(toggleButton);

    await waitFor(() => {
        expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(2);
    });

    const aboutLinks = screen.getAllByRole('link', { name: 'About' });
    // The mobile one is usually the second one
    const mobileLink = aboutLinks[1];

    fireEvent.click(mobileLink);

    await waitFor(() => {
       expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(1);
    });
  });
});
