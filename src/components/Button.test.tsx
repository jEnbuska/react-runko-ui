import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies base class', () => {
    const { container } = render(<Button>Click me</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('runko-button');
  });

  it('applies variant class', () => {
    const { container } = render(<Button variant="primary">Click me</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('runko-button--primary');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('passes through native props', () => {
    render(<Button disabled type="submit">Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('type', 'submit');
  });
});
