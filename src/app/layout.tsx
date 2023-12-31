import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { PropsWithChildren } from 'react';

import { Providers } from './providers';

import './globals.css';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best News Aggregator',
  description: 'Generated by Dan',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark">
      <body className={jetBrainsMono.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
