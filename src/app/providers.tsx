'use client';

import { NextUIProvider } from '@nextui-org/react';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { createStyledBreakpointsTheme } from 'styled-breakpoints';
import { ThemeProvider, DefaultTheme } from 'styled-components';

const queryClient = new QueryClient();

const styledComponentsTheme: DefaultTheme = createStyledBreakpointsTheme();

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <ThemeProvider theme={styledComponentsTheme}>{children}</ThemeProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
