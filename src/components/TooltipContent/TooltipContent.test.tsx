import React from "react";
import { render, screen } from "@testing-library/react";
import { TooltipContent } from "./TooltipContent";

describe("TooltipContent", () => {
  it("renders children correctly", () => {
    render(<TooltipContent>This is a tooltip</TooltipContent>);
    expect(screen.getByText("This is a tooltip")).toBeInTheDocument();
  });

  it("applies base class", () => {
    const { container } = render(<TooltipContent>Tooltip</TooltipContent>);
    const element = container.firstChild;
    expect(element).toHaveClass("runko-tooltip-content");
  });

  it("has tooltip role for accessibility", () => {
    render(<TooltipContent>Tooltip</TooltipContent>);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<TooltipContent ref={ref}>Tooltip</TooltipContent>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("passes through native props including id", () => {
    const { container } = render(
      <TooltipContent id="tooltip-1">Tooltip</TooltipContent>,
    );
    const element = container.firstChild;
    expect(element).toHaveAttribute("id", "tooltip-1");
  });

  it("allows custom className", () => {
    const { container } = render(
      <TooltipContent className="custom-tooltip">Tooltip</TooltipContent>,
    );
    const element = container.firstChild;
    expect(element).toHaveClass("runko-tooltip-content");
    expect(element).toHaveClass("custom-tooltip");
  });
});
