import React, { CSSProperties, ElementType, ReactNode } from 'react';

export interface BoxProps {
  children?: ReactNode;
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  w?: string | number;
  h?: string | number;
  bg?: string;
  color?: string;
  border?: string;
  borderRadius?: string | number;
  [key: string]: unknown;
}

const toCSSValue = (value: string | number | undefined): string | undefined => {
  if (value === undefined) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
};

export const Box: React.FC<BoxProps> = ({
  children,
  as: Component = 'div',
  style = {},
  className,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  w,
  h,
  bg,
  color,
  border,
  borderRadius,
  ...rest
}) => {
  const boxStyle: CSSProperties = {
    ...style,
    ...(p !== undefined && {
      padding: toCSSValue(p),
    }),
    ...(px !== undefined && {
      paddingLeft: toCSSValue(px),
      paddingRight: toCSSValue(px),
    }),
    ...(py !== undefined && {
      paddingTop: toCSSValue(py),
      paddingBottom: toCSSValue(py),
    }),
    ...(pt !== undefined && { paddingTop: toCSSValue(pt) }),
    ...(pr !== undefined && { paddingRight: toCSSValue(pr) }),
    ...(pb !== undefined && { paddingBottom: toCSSValue(pb) }),
    ...(pl !== undefined && { paddingLeft: toCSSValue(pl) }),
    ...(m !== undefined && {
      margin: toCSSValue(m),
    }),
    ...(mx !== undefined && {
      marginLeft: toCSSValue(mx),
      marginRight: toCSSValue(mx),
    }),
    ...(my !== undefined && {
      marginTop: toCSSValue(my),
      marginBottom: toCSSValue(my),
    }),
    ...(mt !== undefined && { marginTop: toCSSValue(mt) }),
    ...(mr !== undefined && { marginRight: toCSSValue(mr) }),
    ...(mb !== undefined && { marginBottom: toCSSValue(mb) }),
    ...(ml !== undefined && { marginLeft: toCSSValue(ml) }),
    ...(w !== undefined && { width: toCSSValue(w) }),
    ...(h !== undefined && { height: toCSSValue(h) }),
    ...(bg !== undefined && { backgroundColor: bg }),
    ...(color !== undefined && { color }),
    ...(border !== undefined && { border }),
    ...(borderRadius !== undefined && { borderRadius: toCSSValue(borderRadius) }),
  };

  return (
    <Component style={boxStyle} className={className} {...rest}>
      {children}
    </Component>
  );
};
