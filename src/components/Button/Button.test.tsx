import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies base class", () => {
    const { container } = render(<Button>Click me</Button>);
    const button = container.querySelector("button");
    expect(button).toHaveClass("runko-button");
  });

  it("applies variant class", () => {
    const { container } = render(<Button variant="primary">Click me</Button>);
    const button = container.querySelector("button");
    expect(button).toHaveClass("runko-button--primary");
  });

  it("applies text variant class", () => {
    const { container } = render(<Button variant="text">Click me</Button>);
    const button = container.querySelector("button");
    expect(button).toHaveClass("runko-button--text");
  });

  it("applies custom variant class names", () => {
    const { container } = render(
      <Button
        variant="primary"
        variantClassNames={{ primary: "custom-primary-class" }}
      >
        Click me
      </Button>,
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("custom-primary-class");
    expect(button).not.toHaveClass("runko-button--primary");
  });

  it("uses default variant class when variantClassNames not provided for variant", () => {
    const { container } = render(
      <Button
        variant="primary"
        variantClassNames={{ secondary: "custom-secondary" }}
      >
        Click me
      </Button>,
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("runko-button--primary");
    expect(button).not.toHaveClass("custom-secondary");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("passes through native props", () => {
    render(
      <Button disabled type="submit">
        Click me
      </Button>,
    );
    const button = screen.getByText("Click me");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("type", "submit");
  });
});
