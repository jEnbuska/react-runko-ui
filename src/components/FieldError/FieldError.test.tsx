import React from "react";
import { render, screen } from "@testing-library/react";
import { FieldError } from "./FieldError";

describe("FieldError", () => {
  it("renders children correctly", () => {
    render(<FieldError>Username is required</FieldError>);
    expect(screen.getByText("Username is required")).toBeInTheDocument();
  });

  it("applies base class", () => {
    const { container } = render(<FieldError>Error message</FieldError>);
    const element = container.firstChild;
    expect(element).toHaveClass("runko-field-error");
  });

  it("has alert role for accessibility", () => {
    render(<FieldError>Error message</FieldError>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<FieldError ref={ref}>Error</FieldError>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("passes through native props including id", () => {
    const { container } = render(
      <FieldError id="username-error">Error</FieldError>,
    );
    const element = container.firstChild;
    expect(element).toHaveAttribute("id", "username-error");
  });

  it("allows custom className", () => {
    const { container } = render(
      <FieldError className="custom-error">Error</FieldError>,
    );
    const element = container.firstChild;
    expect(element).toHaveClass("runko-field-error");
    expect(element).toHaveClass("custom-error");
  });
});
