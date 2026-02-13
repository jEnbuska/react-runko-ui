import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  it('renders children correctly', () => {
    render(<Label>Username</Label>);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('applies base class', () => {
    const { container } = render(<Label>Username</Label>);
    const label = container.querySelector('label');
    expect(label).toHaveClass('runko-label');
  });

  it('shows required indicator when required prop is true', () => {
    render(<Label required>Username</Label>);
    const required = document.querySelector('.runko-label__required');
    expect(required).toBeInTheDocument();
    expect(required).toHaveTextContent('*');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(<Label ref={ref}>Username</Label>);
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });

  it('passes through native props', () => {
    const { container } = render(<Label htmlFor="username">Username</Label>);
    const label = container.querySelector('label');
    expect(label).toHaveAttribute('for', 'username');
  });
});
