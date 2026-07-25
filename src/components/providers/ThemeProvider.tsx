"use client";

import { createContext, useContext, useMemo } from "react";
import type { Theme } from "@/lib/theme/types";
import { generateCSSVars } from "@/lib/theme/tokens";

interface ThemeContextValue {
  theme: Theme;
  cssVars: Record<string, string>;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const cssVars = useMemo(() => generateCSSVars(theme), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, cssVars }}>
      <div style={cssVars as React.CSSProperties}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
