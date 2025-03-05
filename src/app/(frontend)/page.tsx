import { Topnav } from '@/components/layout/topnav';
import { Navigation } from '@/components/layout/navigation';
import { Breadcrumb } from '@/components/layout/breadcrumb';
import { Submenu } from '@/components/layout/submenu';
import Intro from '@/components/layout/intro';
import { Button } from '@/components/ui/button';

export default async function HomePage() {
  return (
    <div>
      <Topnav />
      <Navigation />
      <Breadcrumb />
      <Submenu className="bg-petroleum-25" />
      <Intro
        title="Welcome to the Thrusters"
        description="This is a hub for all things related to thrusters. Here you can find information about the different types of thrusters, their specifications, and how to install them."
      />
      <main className="mx-auto max-w-screen-xl p-10">
        <Button>Click me</Button>
      </main>
    </div>
  );
}
