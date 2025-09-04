import '../styles/globals.css';
import BottomNav from '@/components/BottomNav';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
