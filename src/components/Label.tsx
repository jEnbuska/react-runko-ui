import type { ComponentProps } from 'react';

export interface LabelProps extends ComponentProps<'label'> {
  /**
   * Whether the label is for a required field
   */
  required?: boolean;
}

/**
 * Label component - A basic label element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Label({ required, className, children, ...props }: LabelProps) {
  const classes = ['runko-label', className].filter(Boolean).join(' ');

  return (
    <label className={classes} {...props}>
      {children}
      {required && <span className="runko-label__required"> *</span>}
    </label>
  );
}

