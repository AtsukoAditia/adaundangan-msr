import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import SectionDivider from "@/components/invitation/SectionDivider";

vi.mock("motion/react", () => {
  const React = require("react");
  return {
    motion: new Proxy(
      {},
      {
        get: (_: unknown, tag: string) =>
          React.forwardRef(({ children, ...props }: Record<string, unknown>, ref: unknown) =>
            React.createElement(tag, { ...props, ref }, children)
          ),
      }
    ),
    useInView: () => true,
  };
});

describe("SectionDivider", () => {
  it("renders heart variant", () => {
    const { container } = render(<SectionDivider variant="heart" />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("renders wave variant", () => {
    const { container } = render(<SectionDivider variant="wave" />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("renders dots variant", () => {
    const { container } = render(<SectionDivider variant="dots" />);
    expect(container.querySelector("svg") || container.querySelector("div")).toBeTruthy();
  });

  it("renders floral variant", () => {
    const { container } = render(<SectionDivider variant="floral" />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("defaults to heart", () => {
    const { container } = render(<SectionDivider />);
    expect(container.querySelector("svg")).toBeTruthy();
  });
});
