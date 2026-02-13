import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies different variants', () => {
    const { container, rerender } = render(
      <Button variant="primary">Primary</Button>
    );
    let button = container.querySelector('button') as HTMLButtonElement;
    expect(button.style.backgroundColor).toBe('rgb(0, 123, 255)');

    rerender(<Button variant="secondary">Secondary</Button>);
    button = container.querySelector('button') as HTMLButtonElement;
    expect(button.style.backgroundColor).toBe('rgb(108, 117, 125)');
  });

  it('applies different sizes', () => {
    const { container, rerender } = render(<Button size="small">Small</Button>);
    let button = container.querySelector('button') as HTMLButtonElement;
    expect(button.style.padding).toBe('6px 12px');

    rerender(<Button size="large">Large</Button>);
    button = container.querySelector('button') as HTMLButtonElement;
    expect(button.style.padding).toBe('14px 28px');
  });

  it('applies fullWidth prop', () => {
    const { container } = render(<Button fullWidth>Full Width</Button>);
    const button = container.querySelector('button') as HTMLButtonElement;
    expect(button.style.width).toBe('100%');
  });

  it('has correct cursor style when disabled', () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    const button = container.querySelector('button') as HTMLButtonElement;
    expect(button.style.cursor).toBe('not-allowed');
  });
});
