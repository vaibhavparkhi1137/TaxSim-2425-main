"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";

export type ThemeAttribute = "class" | "data-theme" | Array<"class" | "data-theme">;

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: {
    attribute?: ThemeAttribute;
    defaultTheme?: string;
    enableSystem?: boolean;
    storageKey?: string;
  };
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider {...themeProps}>{children}</ThemeProvider>
    </NextUIProvider>
  );
}
