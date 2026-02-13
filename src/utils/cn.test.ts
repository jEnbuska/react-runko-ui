import { cn } from "./cn";

describe("cn", () => {
  it("combines multiple class names", () => {
    expect(cn("class1", "class2", "class3")).toBe("class1 class2 class3");
  });

  it("filters out false values", () => {
    const condition = false;
    expect(cn("class1", condition && "class2", "class3")).toBe("class1 class3");
  });

  it("filters out null and undefined", () => {
    expect(cn("class1", null, undefined, "class2")).toBe("class1 class2");
  });

  it("filters out empty strings", () => {
    expect(cn("class1", "", "class2")).toBe("class1 class2");
  });

  it("filters out 0", () => {
    expect(cn("class1", 0, "class2")).toBe("class1 class2");
  });

  it("handles conditional classes", () => {
    const isActive = true;
    const isDisabled = false;
    expect(cn("btn", isActive && "active", isDisabled && "disabled")).toBe(
      "btn active",
    );
  });

  it("returns empty string when all values are falsy", () => {
    expect(cn(false, null, undefined, "", 0)).toBe("");
  });

  it("handles single class name", () => {
    expect(cn("single")).toBe("single");
  });

  it("handles no arguments", () => {
    expect(cn()).toBe("");
  });

  it("works with variant pattern", () => {
    const variant = "primary";
    expect(cn("runko-button", variant && `runko-button--${variant}`)).toBe(
      "runko-button runko-button--primary",
    );
  });

  it("works with variant pattern when variant is undefined", () => {
    const variant: string | undefined = undefined;
    expect(cn("runko-button", variant && `runko-button--${variant}`)).toBe(
      "runko-button",
    );
  });

  it("works with className prop", () => {
    const className = "custom-class";
    const hasError = false;
    expect(cn("runko-input", hasError && "runko-input--error", className)).toBe(
      "runko-input custom-class",
    );
  });
});
