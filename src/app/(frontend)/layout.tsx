import type { ReactNode } from 'react';
import './styles.css';

export const metadata = {};

export default async function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <main className="mx-auto max-w-7xl"> {children}</main>
      </body>
    </html>
  );
}
