import React from 'react';
import { Box, BoxProps } from './Box';

export interface GridProps extends BoxProps {
  columns?: number | string;
  rows?: number | string;
  gap?: string | number;
  columnGap?: string | number;
  rowGap?: string | number;
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
}

export const Grid: React.FC<GridProps> = ({
  columns,
  rows,
  gap,
  columnGap,
  rowGap,
  autoFlow,
  justifyItems,
  alignItems,
  style = {},
  ...rest
}) => {
  const toCSSValue = (value: string | number): string => {
    return typeof value === 'number' ? `${value}px` : value;
  };

  const gridStyle = {
    ...style,
    display: 'grid',
    ...(columns !== undefined && {
      gridTemplateColumns:
        typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
    }),
    ...(rows !== undefined && {
      gridTemplateRows:
        typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,
    }),
    ...(gap !== undefined && { gap: toCSSValue(gap) }),
    ...(columnGap !== undefined && { columnGap: toCSSValue(columnGap) }),
    ...(rowGap !== undefined && { rowGap: toCSSValue(rowGap) }),
    ...(autoFlow !== undefined && { gridAutoFlow: autoFlow }),
    ...(justifyItems !== undefined && { justifyItems }),
    ...(alignItems !== undefined && { alignItems }),
  };

  return <Box style={gridStyle} {...rest} />;
};
