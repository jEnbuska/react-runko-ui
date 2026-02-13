import type { ComponentProps, ReactNode } from "react";
import "./FormField.css";

export type FormFieldDirection = "vertical" | "horizontal";

export interface FormFieldProps extends ComponentProps<"div"> {
  id: string;
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  tooltip?: ReactNode;
  direction?: FormFieldDirection;
  children: ReactNode;
}

export function FormField({
  id,
  label,
  description,
  error,
  tooltip,
  direction = "vertical",
  className,
  children,
  ...props
}: FormFieldProps) {
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const tooltipId = tooltip ? `${id}-tooltip` : undefined;

  const ariaDescribedby = [descriptionId, errorId]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div
      className={`runko-form-field runko-form-field--${direction} ${className || ""}`}
      {...props}
    >
      {(label || tooltip) && (
        <div className="runko-form-field__label-row">
          {label && (
            <label htmlFor={id} className="runko-form-field__label">
              {label}
            </label>
          )}
          {tooltip && tooltipId && (
            <div className="runko-form-field__tooltip" aria-describedby={tooltipId}>
              {tooltip}
            </div>
          )}
        </div>
      )}

      {description && descriptionId && (
        <div id={descriptionId} className="runko-form-field__description">
          {description}
        </div>
      )}

      <div className="runko-form-field__control" aria-describedby={ariaDescribedby}>
        {children}
      </div>

      {error && errorId && (
        <div id={errorId} className="runko-form-field__error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
