import React from 'react';
import { Box, BoxProps } from './Box';

export interface TextProps extends Omit<BoxProps, 'as'> {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
  size?: string | number;
  weight?: number | string;
  align?: 'left' | 'center' | 'right' | 'justify';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  decoration?: 'none' | 'underline' | 'overline' | 'line-through';
}

export const Text: React.FC<TextProps> = ({
  as = 'p',
  size,
  weight,
  align,
  transform,
  decoration,
  style,
  ...rest
}) => {
  const textStyle = {
    ...(style || {}),
    ...(size !== undefined && {
      fontSize: typeof size === 'number' ? `${size}px` : size,
    }),
    ...(weight !== undefined && { fontWeight: weight }),
    ...(align !== undefined && { textAlign: align }),
    ...(transform !== undefined && { textTransform: transform }),
    ...(decoration !== undefined && { textDecoration: decoration }),
  };

  return <Box as={as} style={textStyle} {...rest} />;
};
