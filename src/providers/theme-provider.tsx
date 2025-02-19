"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  // Set mounted to true when the component mounts to prevent SSR mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;  // Prevent rendering until the component is mounted

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
