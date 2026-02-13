import { render, screen } from "@testing-library/react";
import { FormField } from "./FormField";
import { Input } from "../Input/Input";

describe("FormField", () => {
  it("renders children", () => {
    render(
      <FormField id="test">
        <Input />
      </FormField>
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(
      <FormField id="test" label="Username">
        <Input />
      </FormField>
    );
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Username").tagName).toBe("LABEL");
  });

  it("associates label with input via htmlFor", () => {
    render(
      <FormField id="test-input" label="Username">
        <Input id="test-input" />
      </FormField>
    );
    const label = screen.getByText("Username");
    expect(label).toHaveAttribute("for", "test-input");
  });

  it("renders description", () => {
    render(
      <FormField id="test" description="Must be 3-20 characters">
        <Input />
      </FormField>
    );
    expect(screen.getByText("Must be 3-20 characters")).toBeInTheDocument();
  });

  it("renders error", () => {
    render(
      <FormField id="test" error="This field is required">
        <Input />
      </FormField>
    );
    const error = screen.getByText("This field is required");
    expect(error).toBeInTheDocument();
    expect(error).toHaveAttribute("role", "alert");
  });

  it("renders tooltip", () => {
    render(
      <FormField id="test" tooltip={<button>?</button>}>
        <Input />
      </FormField>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("applies vertical direction class by default", () => {
    const { container } = render(
      <FormField id="test">
        <Input />
      </FormField>
    );
    expect(
      container.querySelector(".runko-form-field--vertical")
    ).toBeInTheDocument();
  });

  it("applies horizontal direction class when specified", () => {
    const { container } = render(
      <FormField id="test" direction="horizontal">
        <Input />
      </FormField>
    );
    expect(
      container.querySelector(".runko-form-field--horizontal")
    ).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <FormField id="test" className="custom-class">
        <Input />
      </FormField>
    );
    expect(container.querySelector(".custom-class")).toBeInTheDocument();
  });

  it("generates description ID from field ID", () => {
    render(
      <FormField id="username" description="Help text">
        <Input />
      </FormField>
    );
    expect(screen.getByText("Help text")).toHaveAttribute(
      "id",
      "username-description"
    );
  });

  it("generates error ID from field ID", () => {
    render(
      <FormField id="username" error="Error text">
        <Input />
      </FormField>
    );
    expect(screen.getByText("Error text")).toHaveAttribute(
      "id",
      "username-error"
    );
  });

  it("does not render label row when no label or tooltip", () => {
    const { container } = render(
      <FormField id="test">
        <Input />
      </FormField>
    );
    expect(
      container.querySelector(".runko-form-field__label-row")
    ).not.toBeInTheDocument();
  });

  it("passes through additional props", () => {
    const { container } = render(
      <FormField id="test" data-testid="form-field">
        <Input />
      </FormField>
    );
    expect(
      container.querySelector("[data-testid='form-field']")
    ).toBeInTheDocument();
  });

  it("renders all elements together", () => {
    render(
      <FormField
        id="username"
        label="Username"
        description="3-20 characters"
        error="Too short"
        tooltip={<button>?</button>}
      >
        <Input id="username" />
      </FormField>
    );

    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("3-20 characters")).toBeInTheDocument();
    expect(screen.getByText("Too short")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
