import Link from 'next/link';

export function Breadcrumb() {
  return (
    <div className="bg-petroleum-50 w-full text-sm">
      <div className="mx-auto max-w-screen-xl px-5 py-4 md:px-10">
        <Link href="/" className="font-medium">
          Home
        </Link>
        <span className="text-petroleum-200 mx-2">/</span>
        <Link href="/thruster" className="font-regular">
          Thruster
        </Link>
      </div>
    </div>
  );
}
