import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

// Mock next/link
jest.mock('next/link', () => {
  // eslint-disable-next-line react/display-name
  return ({ children, href, className, onClick }: any) => {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  };
});

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Navbar Component', () => {
  test('renders the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText('Ayush Kumar Jha')).toBeInTheDocument();
  });

  test('renders desktop navigation links', () => {
    render(<Navbar />);
    const links = [
      'About',
      'Projects',
      'Case Studies',
      'Research',
      'Experience',
      'Blog',
      'Contact',
    ];

    links.forEach((linkName) => {
      // Check if at least one instance exists (desktop)
      const elements = screen.getAllByText(linkName);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  test('mobile menu interaction', () => {
    render(<Navbar />);

    // Find the toggle button (it's the only button in the navbar initially visible on mobile)
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    // Initial state: Mobile menu closed.
    // We expect 1 instance of 'About' (desktop).
    expect(screen.getAllByText('About')).toHaveLength(1);

    // Open menu
    fireEvent.click(button);

    // Now we expect 2 instances (desktop + mobile)
    expect(screen.getAllByText('About')).toHaveLength(2);

    // Close menu by clicking a link
    const mobileAboutLink = screen.getAllByText('About')[1]; // The second one should be the mobile one
    fireEvent.click(mobileAboutLink);

    // Menu should close
    expect(screen.getAllByText('About')).toHaveLength(1);
  });
});
