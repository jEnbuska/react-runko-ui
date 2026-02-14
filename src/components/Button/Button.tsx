import type { ComponentProps } from "react";
import { cn } from "../../utils";
import type { ButtonVariant } from "../../types";
import "./Button.css";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  status?: "default" | "danger" | "success";
  baseClassName: string;
  dangerClassName: string;
  successClassName: string;
  primaryVariantClassName: string;
  secondaryVariantClassName?: string;
  textVariantClassName: string;
  disabledClassName?: string;
}

const classNames = {
  base: "runko-button",
  danger: "runko-button--danger",
  success: "runko-button--success",
  primary: "runko-button--primary",
  secondary: "runko-button--secondary",
  text: "runko-button--text",
  disabled: "runko-button--disabled",
} as const;

/**
 * Button component - A basic button element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Button({
  variant = "secondary",
  className,
  status = "default",
  type = "button",
  baseClassName,
  disabled,
  dangerClassName,
  successClassName,
  disabledClassName,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        baseClassName,
        classNames.base,
        status === "danger" && classNames.danger,
        status === "danger" && dangerClassName,
        status === "success" && classNames.success,
        status === "success" && successClassName,
        classNames[variant],
        rest[`${variant}VariantClassName`],
        disabled && classNames.disabled,
        disabled && disabledClassName,
        className,
      )}
      {...rest}
    />
  );
}

type DefineButtonArgs = Pick<
  ButtonProps,
  | "secondaryVariantClassName"
  | "primaryVariantClassName"
  | "textVariantClassName"
  | "dangerClassName"
  | "successClassName"
  | "baseClassName"
  | "disabledClassName"
>;

export function defineButton(args: DefineButtonArgs) {
  return function DefinedButton(
    props: Omit<ButtonProps, keyof DefineButtonArgs>,
  ) {
    return <Button {...args} {...props} />;
  };
}
