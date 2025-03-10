import Link from 'next/link';
import { cn } from '../../lib/utils';

export function Submenu({ className }: { className?: string }) {
  return (
    <div className={cn('border-petroleum-100 w-full border-b', className)}>
      <div className="mx-auto grid max-w-screen-xl grid-cols-5 gap-10 px-5 pt-14 pb-16 md:px-10 xl:px-12">
        <div className="col-span-1">
          <Link href="/thruster/tunnel" className="font-medium">
            Tunnel thrusters
          </Link>
          <div className="mt-2 text-sm">Bow and stern trusters mounted in a tunnel.</div>
        </div>

        <div className="col-span-1">
          <Link href="/thruster/external" className="font-medium">
            External thrusters
          </Link>
          <div className="mt-2 text-sm">Bow and stern trusters mounted externally.</div>
        </div>

        <div className="col-span-1">
          <Link href="/thruster/retract" className="font-medium">
            Retract thrusters
          </Link>
          <div className="mt-2 text-sm">Retractable bow and stern trusters.</div>
        </div>

        <div className="col-span-1">
          <Link href="/thruster/control" className="font-medium">
            Control units
          </Link>
          <div className="mt-2 text-sm">Control panels and remotes for managing thrusters.</div>
        </div>

        <div className="col-span-1">
          <Link href="/thruster/upgrades" className="font-medium">
            Thruster upgrades
          </Link>
          <div className="mt-2 text-sm">There are several possibilities to upgrade existing installation.</div>
        </div>
      </div>
    </div>
  );
}
