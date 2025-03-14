import './styles.css';

import type { ReactNode } from 'react';
import { IBM_Plex_Sans } from 'next/font/google';

import { Topnav } from '@/components/layout/topnav';
import { Navigation } from '@/components/layout/navigation';
import { Breadcrumb } from '@/components/layout/breadcrumb';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export const metadata = {};

export default async function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" className={`${ibmPlexSans.variable} antialiased`}>
      <body>
        <main>
          <Topnav />
          <Navigation />
          <Breadcrumb />
          {children}
        </main>
      </body>
    </html>
  );
}
