import React, { LabelHTMLAttributes, forwardRef } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Whether the label is for a required field
   */
  required?: boolean;
}

/**
 * Label component - A basic label element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ required, className, children, ...props }, ref) => {
    const classes = ['runko-label', className].filter(Boolean).join(' ');

    return (
      <label ref={ref} className={classes} {...props}>
        {children}
        {required && <span className="runko-label__required"> *</span>}
      </label>
    );
  }
);

Label.displayName = 'Label';
