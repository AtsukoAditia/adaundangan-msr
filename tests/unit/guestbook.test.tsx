import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import GuestBook from "@/components/invitation/GuestBook";

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
  RefreshCw: () => "RefreshCw",
  MessageCircle: () => "MessageCircle",
}));

const mockFetch = vi.fn();

describe("GuestBook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFetch.mockReset();
    global.fetch = mockFetch;
  });

  it("renders nothing when disabled", () => {
    const { container } = render(<GuestBook slug="test" enabled={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("shows loading state while fetching", () => {
    // Use a resolved-but-slow promise for loading state
    mockFetch.mockImplementation(
      () => new Promise(() => {}) // never resolves = stays loading
    );
    render(<GuestBook slug="test" enabled={true} />);
    expect(screen.getByText("Memuat...")).toBeTruthy();
  });

  it("shows empty state when no entries", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ entries: [] }),
    });
    render(<GuestBook slug="test" enabled={true} />);
    await waitFor(() => {
      expect(screen.getByText(/Belum ada ucapan/)).toBeTruthy();
    });
  });

  it("renders guest entries", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        entries: [
          {
            id: "1",
            guestName: "Budi Santoso",
            attendance: "HADIR",
            guestCount: 2,
            message: "Selamat married!",
            timestamp: "2026-07-10T10:00:00Z",
          },
        ],
      }),
    });
    render(<GuestBook slug="test" enabled={true} />);
    await waitFor(() => {
      expect(screen.getByText("Budi Santoso")).toBeTruthy();
    });
    expect(screen.getByText("Selamat married!")).toBeTruthy();
  });

  it("shows Hadir badge for attending guests", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        entries: [{ id: "1", guestName: "Alice", attendance: "HADIR", guestCount: 1, message: "", timestamp: "2026-07-10T10:00:00Z" }],
      }),
    });
    render(<GuestBook slug="test" enabled={true} />);
    await waitFor(() => {
      expect(screen.getByText("Hadir")).toBeTruthy();
    });
  });
});
