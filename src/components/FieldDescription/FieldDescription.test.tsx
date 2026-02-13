import React from "react";
import { render, screen } from "@testing-library/react";
import { FieldDescription } from "./FieldDescription";

describe("FieldDescription", () => {
  it("renders children correctly", () => {
    render(<FieldDescription>Enter your username</FieldDescription>);
    expect(screen.getByText("Enter your username")).toBeInTheDocument();
  });

  it("applies base class", () => {
    const { container } = render(
      <FieldDescription>Description text</FieldDescription>,
    );
    const element = container.firstChild;
    expect(element).toHaveClass("runko-field-description");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<FieldDescription ref={ref}>Description</FieldDescription>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("passes through native props including id", () => {
    const { container } = render(
      <FieldDescription id="username-description">
        Description
      </FieldDescription>,
    );
    const element = container.firstChild;
    expect(element).toHaveAttribute("id", "username-description");
  });

  it("allows custom className", () => {
    const { container } = render(
      <FieldDescription className="custom-class">Description</FieldDescription>,
    );
    const element = container.firstChild;
    expect(element).toHaveClass("runko-field-description");
    expect(element).toHaveClass("custom-class");
  });
});
