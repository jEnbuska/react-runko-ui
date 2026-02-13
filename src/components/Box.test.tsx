import React from 'react';
import { render, screen } from '@testing-library/react';
import { Box } from './Box';

describe('Box', () => {
  it('renders children correctly', () => {
    render(<Box>Test content</Box>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Box className="custom-class">Content</Box>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders as different element when "as" prop is provided', () => {
    const { container } = render(<Box as="section">Section content</Box>);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('applies padding styles', () => {
    const { container } = render(<Box p={16}>Content</Box>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.padding).toBe('16px');
  });

  it('applies margin styles', () => {
    const { container } = render(<Box m={20}>Content</Box>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.margin).toBe('20px');
  });

  it('applies width and height', () => {
    const { container } = render(
      <Box w="200px" h={100}>
        Content
      </Box>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.width).toBe('200px');
    expect(element.style.height).toBe('100px');
  });

  it('applies background color and text color', () => {
    const { container } = render(
      <Box bg="blue" color="white">
        Content
      </Box>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.backgroundColor).toBe('blue');
    expect(element.style.color).toBe('white');
  });

  it('applies border and border radius', () => {
    const { container } = render(
      <Box border="1px solid black" borderRadius={8}>
        Content
      </Box>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.border).toBe('1px solid black');
    expect(element.style.borderRadius).toBe('8px');
  });
});
