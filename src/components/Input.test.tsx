import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    const { container } = render(<Input placeholder="Enter text" />);
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Enter text');
  });

  it('applies base class', () => {
    const { container } = render(<Input />);
    const input = container.querySelector('input');
    expect(input).toHaveClass('runko-input');
  });

  it('applies variant class', () => {
    const { container } = render(<Input variant="error" />);
    const input = container.querySelector('input');
    expect(input).toHaveClass('runko-input--error');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('passes through native props', () => {
    const { container } = render(<Input type="email" disabled />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toBeDisabled();
  });
});
