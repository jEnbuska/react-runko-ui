import React from 'react';
import { Flex, FlexProps } from './Flex';

export interface StackProps extends Omit<FlexProps, 'direction' | 'gap'> {
  direction?: 'vertical' | 'horizontal';
  spacing?: string | number;
  gap?: string | number;
}

export const Stack: React.FC<StackProps> = ({
  direction = 'vertical',
  spacing,
  gap,
  ...rest
}) => {
  return (
    <Flex
      direction={direction === 'vertical' ? 'column' : 'row'}
      gap={spacing !== undefined ? spacing : gap}
      {...rest}
    />
  );
};
