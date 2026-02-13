import React from 'react';
import { render, screen } from '@testing-library/react';
import { Flex } from './Flex';

describe('Flex', () => {
  it('renders children correctly', () => {
    render(
      <Flex>
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies flex display', () => {
    const { container } = render(<Flex>Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.display).toBe('flex');
  });

  it('applies flex direction', () => {
    const { container } = render(<Flex direction="column">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.flexDirection).toBe('column');
  });

  it('applies justify and align properties', () => {
    const { container } = render(
      <Flex justify="center" align="center">
        Content
      </Flex>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.justifyContent).toBe('center');
    expect(element.style.alignItems).toBe('center');
  });

  it('applies gap', () => {
    const { container } = render(<Flex gap={16}>Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.gap).toBe('16px');
  });

  it('inherits Box props', () => {
    const { container } = render(
      <Flex p={20} bg="red">
        Content
      </Flex>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.padding).toBe('20px');
    expect(element.style.backgroundColor).toBe('red');
  });
});
