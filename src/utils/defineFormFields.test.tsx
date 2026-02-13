import { render, screen } from "@testing-library/react";
import { defineFormFields } from "./defineFormFields";
import { FormField } from "../components/FormField/FormField";
import { Label } from "../components/Label/Label";
import { FieldDescription } from "../components/FieldDescription/FieldDescription";
import { FieldError } from "../components/FieldError/FieldError";
import { TooltipTrigger } from "../components/TooltipTrigger/TooltipTrigger";
import { TooltipContent } from "../components/TooltipContent/TooltipContent";
import { Input } from "../components/Input/Input";
import { Select } from "../components/Select/Select";

describe("defineFormFields", () => {
  const createFormFields = (direction: "vertical" | "horizontal" = "vertical") =>
    defineFormFields(
      {
        direction,
        components: {
          FormField,
          Label,
          FieldDescription,
          FieldError,
          TooltipTrigger,
          TooltipContent,
        },
      },
      {
        Input,
        Select,
      }
    );

  it("wraps components with FormField", () => {
    const FormFields = createFormFields();
    render(<FormFields.Input label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("passes through component props", () => {
    const FormFields = createFormFields();
    render(
      <FormFields.Input
        label="Email"
        placeholder="Enter email"
        type="email"
      />
    );
    const input = screen.getByPlaceholderText("Enter email");
    expect(input).toHaveAttribute("type", "email");
  });

  it("applies label to field", () => {
    const FormFields = createFormFields();
    render(<FormFields.Input label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("applies description to field", () => {
    const FormFields = createFormFields();
    render(
      <FormFields.Input
        label="Username"
        description="Must be 3-20 characters"
      />
    );
    expect(screen.getByText("Must be 3-20 characters")).toBeInTheDocument();
  });

  it("applies error to field", () => {
    const FormFields = createFormFields();
    render(
      <FormFields.Input label="Username" error="Username is required" />
    );
    expect(screen.getByText("Username is required")).toBeInTheDocument();
  });

  it("shows tooltip when provided", () => {
    const FormFields = createFormFields();
    render(
      <FormFields.Input
        label="Password"
        tooltip="Must contain at least 8 characters"
      />
    );
    expect(screen.getByText("ℹ️")).toBeInTheDocument();
    expect(
      screen.getByText("Must contain at least 8 characters")
    ).toBeInTheDocument();
  });

  it("generates ID automatically", () => {
    const FormFields = createFormFields();
    const { container } = render(<FormFields.Input label="Username" />);
    const input = container.querySelector("input");
    expect(input).toHaveAttribute("id");
    expect(input?.id).toBeTruthy();
  });

  it("uses provided ID if given", () => {
    const FormFields = createFormFields();
    render(<FormFields.Input id="custom-id" label="Username" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "custom-id");
  });

  it("applies vertical direction by default", () => {
    const FormFields = createFormFields();
    const { container } = render(<FormFields.Input label="Username" />);
    expect(
      container.querySelector(".runko-form-field--vertical")
    ).toBeInTheDocument();
  });

  it("applies horizontal direction when configured", () => {
    const FormFields = createFormFields("horizontal");
    const { container } = render(<FormFields.Input label="Username" />);
    expect(
      container.querySelector(".runko-form-field--horizontal")
    ).toBeInTheDocument();
  });

  it("sets error variant when error is provided", () => {
    const FormFields = createFormFields();
    const { container } = render(
      <FormFields.Input label="Username" error="Required" />
    );
    const input = container.querySelector("input");
    expect(input).toHaveClass("runko-input--error");
  });

  it("sets success variant when success is true", () => {
    const FormFields = createFormFields();
    const { container } = render(
      <FormFields.Input label="Username" success />
    );
    const input = container.querySelector("input");
    expect(input).toHaveClass("runko-input--success");
  });

  it("works with multiple component types", () => {
    const FormFields = createFormFields();
    render(
      <>
        <FormFields.Input label="Username" />
        <FormFields.Select label="Country">
          <option>USA</option>
        </FormFields.Select>
      </>
    );
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Country")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("applies custom className from config", () => {
    const FormFields = defineFormFields(
      {
        direction: "vertical",
        classNames: {
          vertical: "custom-vertical-class",
        },
        components: {
          FormField,
          Label,
          FieldDescription,
          FieldError,
          TooltipTrigger,
          TooltipContent,
        },
      },
      { Input }
    );

    const { container } = render(<FormFields.Input label="Username" />);
    expect(
      container.querySelector(".custom-vertical-class")
    ).toBeInTheDocument();
  });
});
