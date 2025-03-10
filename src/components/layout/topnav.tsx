import Link from 'next/link';
import DirectionsBoatIcon from '../icons/directions_boat';
import SailingIcon from '../icons/sailing';
import SupportAgentIcon from '../icons/support_agent';
import Package2Icon from '../icons/package_2';
import LanguageIcon from '../icons/language';
import AccountCircleIcon from '../icons/account_circle';
import ShoppingCartIcon from '../icons/shopping_cart';

export function Topnav() {
  return (
    <div className="bg-petroleum-700 w-full text-white">
      <div className="mx-auto flex max-w-screen-xl justify-between px-5 py-3 md:px-10 xl:px-12">
        <nav>
          <ul className="flex items-center gap-10">
            <li className="flex items-center gap-1.5">
              <SailingIcon className="fill-petroleum-200" size={20} />
              <Link href="/leisure-boat" className="text-sm font-medium underline">
                Leisure boat
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <DirectionsBoatIcon className="fill-petroleum-200" size={20} />
              <Link href="/commercial-boat" className="text-sm font-medium">
                Commercial boat
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex items-center gap-10">
            <li className="flex items-center gap-1.5">
              <Package2Icon className="fill-petroleum-200" size={20} />
              <Link href="/spare-parts" className="text-sm font-medium">
                Spare parts
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <SupportAgentIcon className="fill-petroleum-200" size={20} />
              <Link href="/support" className="text-sm font-medium">
                Support
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <LanguageIcon className="fill-petroleum-200" size={20} />
              <Link href="/language" className="text-sm font-medium">
                English
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <AccountCircleIcon className="fill-petroleum-200" size={20} />
              <Link href="/my-site" className="text-sm font-medium">
                MySite
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ShoppingCartIcon className="fill-petroleum-200" size={20} />
              <Link href="/cart" className="text-sm font-medium">
                Shopping cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
