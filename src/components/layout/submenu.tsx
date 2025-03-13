import { cn } from '@/lib/utils';
import { Textlink } from '@/components/ui/textlink';

export function Submenu({ className }: { className?: string }) {
  return (
    <div className={cn('border-petroleum-100 w-full border-b', className)}>
      <div className="mx-auto grid max-w-screen-xl grid-cols-5 gap-10 px-5 pt-14 pb-16 md:px-10 xl:px-12">
        <div className="col-span-1">
          <Textlink href="/thruster/tunnel">Tunnel thrusters</Textlink>
          <div className="mt-2 text-sm">Bow and stern trusters mounted in a tunnel.</div>
        </div>

        <div className="col-span-1">
          <Textlink href="/thruster/external">External thrusters</Textlink>
          <div className="mt-2 text-sm">Bow and stern trusters mounted externally.</div>
        </div>

        <div className="col-span-1">
          <Textlink href="/thruster/retract">Retract thrusters</Textlink>
          <div className="mt-2 text-sm">Retractable bow and stern trusters.</div>
        </div>

        <div className="col-span-1">
          <Textlink href="/thruster/control">Control units</Textlink>
          <div className="mt-2 text-sm">Control panels and remotes for managing thrusters.</div>
        </div>

        <div className="col-span-1">
          <Textlink href="/thruster/upgrades">Thruster upgrades</Textlink>
          <div className="mt-2 text-sm">There are several possibilities to upgrade existing installation.</div>
        </div>
      </div>
    </div>
  );
}
