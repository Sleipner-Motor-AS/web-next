import Link from 'next/link';
import Image from 'next/image';
import { Search } from './search';

export function Navigation() {
  return (
    <header className="border-petroleum-50 w-full border-b bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 py-6 md:px-10 xl:px-12">
        <Link href="/" className="w-20 flex-shrink-0">
          <Image className="" src="/sleipner-logo.svg" alt="Sleipner Logo" width={80} height={41} />
        </Link>
        <div className="ml-auto flex items-center gap-10">
          <nav>
            <ul className="flex gap-10 font-medium">
              <li>
                <Link href="/thruster" className="underline">
                  Thruster
                </Link>
              </li>
              <li>
                <Link href="/stabilizer">Stabilizer</Link>
              </li>
              <li>
                <Link href="/steering">Steering</Link>
              </li>
              <li>
                <Link href="/windlass">Windlass</Link>
              </li>
              <li>
                <Link href="/find-dealer">Find dealer</Link>
              </li>
            </ul>
          </nav>
          <Search />
        </div>
      </div>
    </header>
  );
}
