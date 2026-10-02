
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all sm:h-[1.2rem] sm:w-[1.2rem] dark:-rotate-90 dark:scale-0" />

      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all sm:h-[1.2rem] sm:w-[1.2rem] dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

