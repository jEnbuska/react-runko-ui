import React from "react";
import { render, screen } from "@testing-library/react";
import { TooltipTrigger } from "./TooltipTrigger";

describe("TooltipTrigger", () => {
  it("renders children correctly", () => {
    render(<TooltipTrigger>?</TooltipTrigger>);
    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("applies base class", () => {
    const { container } = render(<TooltipTrigger>?</TooltipTrigger>);
    const button = container.querySelector("button");
    expect(button).toHaveClass("runko-tooltip-trigger");
  });

  it("renders as button element", () => {
    render(<TooltipTrigger>?</TooltipTrigger>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("has type button by default", () => {
    const { container } = render(<TooltipTrigger>?</TooltipTrigger>);
    const button = container.querySelector("button");
    expect(button).toHaveAttribute("type", "button");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<TooltipTrigger ref={ref}>?</TooltipTrigger>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("passes through native props including aria-describedby", () => {
    const { container } = render(
      <TooltipTrigger aria-describedby="tooltip-1">?</TooltipTrigger>,
    );
    const button = container.querySelector("button");
    expect(button).toHaveAttribute("aria-describedby", "tooltip-1");
  });

  it("allows custom className", () => {
    const { container } = render(
      <TooltipTrigger className="custom-trigger">?</TooltipTrigger>,
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("runko-tooltip-trigger");
    expect(button).toHaveClass("custom-trigger");
  });
});
