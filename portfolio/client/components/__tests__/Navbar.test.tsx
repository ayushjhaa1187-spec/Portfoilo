import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Navbar from '../Navbar';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, onClick, className }: any) => {
    return (
      <a href={href} onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(e);
      }} className={className}>
        {children}
      </a>
    );
  };
});

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }: any) => (
      <div className={className} {...props}>
        {children}
      </div>
    ),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon">Menu</div>,
  X: () => <div data-testid="close-icon">X</div>,
}));

describe('Navbar Component', () => {
  test('renders the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText('Ayush Kumar Jha')).toBeInTheDocument();
  });

  test('renders all desktop navigation links', () => {
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

    links.forEach((linkText) => {
      // There might be multiple elements with the same text if mobile menu is rendered but hidden?
      // Initially mobile menu is not rendered (conditional rendering with isOpen).
      // So getAllByText should return 1 element.
      const elements = screen.getAllByText(linkText);
      expect(elements).toHaveLength(1);
      expect(elements[0]).toBeInTheDocument();
    });
  });

  test('mobile menu is initially closed', () => {
    render(<Navbar />);
    // Check that the mobile menu container is not in the document
    const mobileMenu = screen.queryByTestId('mobile-menu');
    expect(mobileMenu).not.toBeInTheDocument();

    // Check that Menu icon is visible
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
    // Check that Close icon is not visible
    expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument();
  });

  test('opens mobile menu on toggle button click', async () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button');

    // Click to open
    fireEvent.click(toggleButton);

    // Wait for state update and re-render
    await waitFor(() => {
      expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    });

    // Check that close icon is visible
    expect(screen.getByTestId('close-icon')).toBeInTheDocument();

    // Check that links are duplicated (one in desktop, one in mobile)
    const aboutLinks = screen.getAllByText('About');
    expect(aboutLinks).toHaveLength(2);
  });

  test('closes mobile menu when a link is clicked', async () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button');

    // Open menu
    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    });

    // Click a link inside the mobile menu
    // We target the second 'About' link which should be the mobile one
    const aboutLinks = screen.getAllByText('About');
    fireEvent.click(aboutLinks[1]);

    // Wait for menu to close
    await waitFor(() => {
      expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
    });

    // Check that only 1 link remains
    expect(screen.getAllByText('About')).toHaveLength(1);
  });
});
