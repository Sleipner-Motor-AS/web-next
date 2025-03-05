import type { ReactNode } from 'react';
import { IBM_Plex_Sans } from 'next/font/google';
import './styles.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export const metadata = {};

export default async function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} font-ibm-plex-sans antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
