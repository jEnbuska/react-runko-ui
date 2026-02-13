import { useId, type ComponentType, type ReactNode, type ComponentProps } from "react";
import type { FormFieldDirection } from "../types";
import type { FormFieldProps } from "../components/FormField/FormField";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyComponent = ComponentType<any>;

export interface DefineFormFieldsOptions {
  direction?: FormFieldDirection;
  classNames?: {
    vertical?: string;
    horizontal?: string;
  };
  components: {
    FormField: ComponentType<FormFieldProps>;
    Label: AnyComponent;
    FieldDescription: AnyComponent;
    FieldError: AnyComponent;
    TooltipTrigger: AnyComponent;
    TooltipContent: AnyComponent;
  };
}

export interface FieldWrapperProps {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  tooltip?: ReactNode;
  success?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function defineFormFields<TComponents extends Record<string, ComponentType<any>>>(
  options: DefineFormFieldsOptions,
  components: TComponents
): {
  [K in keyof TComponents]: ComponentType<
    ComponentProps<TComponents[K]> & FieldWrapperProps
  >;
} {
  const {
    direction = "vertical",
    classNames,
    components: {
      FormField,
      Label,
      FieldDescription,
      FieldError,
      TooltipTrigger,
      TooltipContent,
    },
  } = options;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrappedComponents = {} as any;

  for (const [name, Component] of Object.entries(components)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    wrappedComponents[name] = function WrappedField(props: any) {
      const {
        label,
        description,
        error,
        tooltip,
        success,
        variant,
        ...componentProps
      } = props;

      const id = useId();
      const fieldId = componentProps.id || id;

      // Determine variant based on error or success
      let finalVariant = variant;
      if (!finalVariant && error) {
        finalVariant = "error";
      } else if (!finalVariant && success) {
        finalVariant = "success";
      }

      // Get className based on direction
      const className =
        direction === "vertical" ? classNames?.vertical : classNames?.horizontal;

      return (
        <FormField
          id={fieldId}
          label={label ? <Label htmlFor={fieldId}>{label}</Label> : undefined}
          description={
            description ? (
              <FieldDescription id={`${fieldId}-description`}>
                {description}
              </FieldDescription>
            ) : undefined
          }
          error={
            error ? (
              <FieldError id={`${fieldId}-error`}>{error}</FieldError>
            ) : undefined
          }
          tooltip={
            tooltip ? (
              <>
                <TooltipTrigger aria-describedby={`${fieldId}-tooltip`}>
                  ℹ️
                </TooltipTrigger>
                <TooltipContent id={`${fieldId}-tooltip`}>
                  {tooltip}
                </TooltipContent>
              </>
            ) : undefined
          }
          direction={direction}
          className={className}
        >
          <Component
            {...componentProps}
            id={fieldId}
            variant={finalVariant}
            aria-describedby={
              [
                description && `${fieldId}-description`,
                error && `${fieldId}-error`,
              ]
                .filter(Boolean)
                .join(" ") || undefined
            }
          />
        </FormField>
      );
    };

    // Preserve display name
    wrappedComponents[name].displayName = `FormField(${name})`;
  }

  return wrappedComponents;
}
