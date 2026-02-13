import { render, screen } from "@testing-library/react";
import { Tooltip } from "./Tooltip";
import { userEvent } from "@testing-library/user-event";

describe("Tooltip", () => {
  it("renders the trigger element", () => {
    render(<Tooltip content="Tooltip content">Trigger</Tooltip>);
    expect(screen.getByText("Trigger")).toBeInTheDocument();
  });

  it("does not show tooltip content by default", () => {
    render(<Tooltip content="Tooltip content">Trigger</Tooltip>);
    expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();
  });

  it("shows tooltip content on hover", async () => {
    const user = userEvent.setup();
    render(<Tooltip content="Tooltip content">Trigger</Tooltip>);

    const trigger = screen.getByText("Trigger");
    await user.hover(trigger);

    expect(screen.getByText("Tooltip content")).toBeInTheDocument();
  });

  it("hides tooltip content when hover ends", async () => {
    const user = userEvent.setup();
    render(<Tooltip content="Tooltip content">Trigger</Tooltip>);

    const trigger = screen.getByText("Trigger");
    await user.hover(trigger);
    expect(screen.getByText("Tooltip content")).toBeInTheDocument();

    await user.unhover(trigger);
    expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();
  });

  it("applies default position 'top'", async () => {
    const user = userEvent.setup();
    render(<Tooltip content="Tooltip content">Trigger</Tooltip>);

    const trigger = screen.getByText("Trigger");
    await user.hover(trigger);

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveClass("runko-tooltip-content--top");
  });

  it("applies specified position", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip content" position="bottom">
        Trigger
      </Tooltip>
    );

    const trigger = screen.getByText("Trigger");
    await user.hover(trigger);

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveClass("runko-tooltip-content--bottom");
  });

  it("passes through className to wrapper", () => {
    const { container } = render(
      <Tooltip content="Tooltip content" className="custom-class">
        Trigger
      </Tooltip>
    );

    expect(container.firstChild).toHaveClass("runko-tooltip");
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders complex tooltip content", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip
        content={
          <div>
            Complex <strong>HTML</strong> content
          </div>
        }
      >
        Trigger
      </Tooltip>
    );

    const trigger = screen.getByText("Trigger");
    await user.hover(trigger);

    expect(screen.getByText(/Complex/)).toBeInTheDocument();
    expect(screen.getByText("HTML")).toBeInTheDocument();
    expect(screen.getByText(/content/)).toBeInTheDocument();
  });

  it("works with all position variants", async () => {
    const user = userEvent.setup();
    const positions: Array<"top" | "bottom" | "left" | "right"> = [
      "top",
      "bottom",
      "left",
      "right",
    ];

    for (const position of positions) {
      const { unmount } = render(
        <Tooltip content="Tooltip content" position={position}>
          Trigger
        </Tooltip>
      );

      const trigger = screen.getByText("Trigger");
      await user.hover(trigger);

      const tooltip = screen.getByRole("tooltip");
      expect(tooltip).toHaveClass(`runko-tooltip-content--${position}`);

      unmount();
    }
  });

  it("renders custom trigger element", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Info">
        <button type="button">Custom Button</button>
      </Tooltip>
    );

    expect(
      screen.getByRole("button", { name: "Custom Button" })
    ).toBeInTheDocument();

    const button = screen.getByRole("button");
    await user.hover(button);

    expect(screen.getByText("Info")).toBeInTheDocument();
  });
});
