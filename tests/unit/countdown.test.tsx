import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Countdown from "@/components/invitation/Countdown";

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
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  };
});

vi.mock("lucide-react", () => ({
  Heart: () => "Heart",
  Clock: () => "Clock",
  Calendar: () => "Calendar",
}));

describe("Countdown", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("renders unit labels for future event", () => {
    const future = new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString();
    render(<Countdown targetDate={future} />);
    const hariLabels = screen.getAllByText(/hari/i);
    expect(hariLabels.length).toBeGreaterThanOrEqual(1);
  });

  it("shows Menghitung Hari title", () => {
    const future = new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString();
    render(<Countdown targetDate={future} />);
    expect(screen.getByText("Menghitung Hari")).toBeTruthy();
  });

  it("shows ended message for past event", () => {
    const past = new Date(Date.now() - 1000 * 60).toISOString();
    render(<Countdown targetDate={past} />);
    expect(screen.getByText("Acara telah berlangsung")).toBeTruthy();
  });

  it("renders FlipUnit cards for active countdown", () => {
    const future = new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toISOString();
    const { container } = render(<Countdown targetDate={future} />);
    const cards = container.querySelectorAll(".flip-card");
    expect(cards.length).toBe(4);
  });
});
