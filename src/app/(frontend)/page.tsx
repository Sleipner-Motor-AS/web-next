import { Topnav } from '@/components/layout/topnav';
import { Navigation } from '@/components/layout/navigation';
import { Breadcrumb } from '@/components/layout/breadcrumb';
import { Submenu } from '@/components/layout/submenu';
import Intro from '@/components/layout/intro';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import DirectionsBoatIcon from '@/components/icons/directions_boat';
import { ButtonLink } from '@/components/ui/button_link';

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
      <Hero
        color="dark"
        imagePlacement="image-right"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        imageFade
        fullWidth
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        link={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <div className="mx-auto flex max-w-screen-xl flex-col p-10">
        <h2 className="mb-4 text-2xl font-bold">Buttons</h2>
        <h3 className="mb-2 text-lg">Small</h3>
        <div className="border-petroleum-700 overflow-hidden rounded-lg border">
          <div className="flex gap-2 p-4">
            <Button variant="petroleum" size="sm">
              <DirectionsBoatIcon size={16} />
              <span>Click me</span>
            </Button>
            <Button variant="petroleum" size="sm">
              <span>Click me</span>
              <DirectionsBoatIcon size={16} />
            </Button>
            <Button variant="petroleum" size="sm">
              Click me
            </Button>
            <Button variant="petroleum" size="sm">
              <DirectionsBoatIcon size={16} />
            </Button>
            <Button variant="petroleum" size="sm" disabled>
              Click me
            </Button>
          </div>
          <div className="flex gap-2 p-4">
            <Button variant="petroleum-outline" size="sm">
              <DirectionsBoatIcon size={16} />
              <span>Click me</span>
            </Button>
            <Button variant="petroleum-outline" size="sm">
              <span>Click me</span>
              <DirectionsBoatIcon size={16} />
            </Button>
            <Button variant="petroleum-outline" size="sm">
              Click me
            </Button>
            <Button variant="petroleum-outline" size="sm">
              <DirectionsBoatIcon size={16} />
            </Button>
            <Button variant="petroleum-outline" size="sm" disabled>
              Click me
            </Button>
          </div>
          <div className="flex gap-2 p-4">
            <Button variant="petroleum-text" size="sm">
              <DirectionsBoatIcon size={16} />
              <span>Click me</span>
            </Button>
            <Button variant="petroleum-text" size="sm">
              <span>Click me</span>
              <DirectionsBoatIcon size={16} />
            </Button>
            <Button variant="petroleum-text" size="sm">
              Click me
            </Button>
            <Button variant="petroleum-text" size="sm">
              <DirectionsBoatIcon size={16} />
            </Button>
            <Button variant="petroleum-text" size="sm" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white" size="sm">
              <DirectionsBoatIcon size={16} />
              <span>Click me</span>
            </Button>
            <Button variant="white" size="sm">
              <span>Click me</span>
              <DirectionsBoatIcon size={16} />
            </Button>
            <Button variant="white" size="sm">
              Click me
            </Button>
            <Button variant="white" size="sm">
              <DirectionsBoatIcon size={16} />
            </Button>
            <Button variant="white" size="sm" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white-outline" size="sm">
              <DirectionsBoatIcon size={16} />
              <span>Click me</span>
            </Button>
            <Button variant="white-outline" size="sm">
              <span>Click me</span>
              <DirectionsBoatIcon size={16} />
            </Button>
            <Button variant="white-outline" size="sm">
              Click me
            </Button>
            <Button variant="white-outline" size="sm">
              <DirectionsBoatIcon size={16} />
            </Button>
            <Button variant="white-outline" size="sm" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white-text" size="sm">
              <DirectionsBoatIcon size={16} />
              <span>Click me</span>
            </Button>
            <Button variant="white-text" size="sm">
              <span>Click me</span>
              <DirectionsBoatIcon size={16} />
            </Button>
            <Button variant="white-text" size="sm">
              Click me
            </Button>
            <Button variant="white-text" size="sm">
              <DirectionsBoatIcon size={16} />
            </Button>
            <Button variant="white-text" size="sm" disabled>
              Click me
            </Button>
          </div>
        </div>
        <h3 className="mt-6 mb-2 text-lg">Medium</h3>
        <div className="border-petroleum-700 overflow-hidden rounded-lg border">
          <div className="flex gap-2 p-4">
            <Button variant="petroleum">
              <DirectionsBoatIcon size={20} />
              <span>Click me</span>
            </Button>
            <Button variant="petroleum">
              <span>Click me</span>
              <DirectionsBoatIcon size={20} />
            </Button>
            <Button variant="petroleum">Click me</Button>
            <Button variant="petroleum">
              <DirectionsBoatIcon size={20} />
            </Button>
            <Button variant="petroleum" disabled>
              Click me
            </Button>
          </div>
          <div className="flex gap-2 p-4">
            <Button variant="petroleum-outline">
              <DirectionsBoatIcon size={20} />
              <span>Click me</span>
            </Button>
            <Button variant="petroleum-outline">
              <span>Click me</span>
              <DirectionsBoatIcon size={20} />
            </Button>
            <Button variant="petroleum-outline">Click me</Button>
            <Button variant="petroleum-outline">
              <DirectionsBoatIcon size={20} />
            </Button>
            <Button variant="petroleum-outline" disabled>
              Click me
            </Button>
          </div>
          <div className="flex gap-2 p-4">
            <Button variant="petroleum-text">
              <DirectionsBoatIcon size={20} />
              <span>Click me</span>
            </Button>
            <Button variant="petroleum-text">
              <span>Click me</span>
              <DirectionsBoatIcon size={20} />
            </Button>
            <Button variant="petroleum-text">Click me</Button>
            <Button variant="petroleum-text">
              <DirectionsBoatIcon size={20} />
            </Button>
            <Button variant="petroleum-text" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white">
              <DirectionsBoatIcon size={20} />
              <span>Click me</span>
            </Button>
            <Button variant="white">
              <span>Click me</span>
              <DirectionsBoatIcon size={20} />
            </Button>
            <Button variant="white">Click me</Button>
            <Button variant="white">
              <DirectionsBoatIcon size={20} />
            </Button>
            <Button variant="white" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white-outline">
              <DirectionsBoatIcon size={20} />
              <span>Click me</span>
            </Button>
            <Button variant="white-outline">
              <span>Click me</span>
              <DirectionsBoatIcon size={20} />
            </Button>
            <Button variant="white-outline">Click me</Button>
            <Button variant="white-outline">
              <DirectionsBoatIcon size={20} />
            </Button>
            <Button variant="white-outline" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white-text">
              <DirectionsBoatIcon size={20} />
              <span>Click me</span>
            </Button>
            <Button variant="white-text">
              <span>Click me</span>
              <DirectionsBoatIcon size={20} />
            </Button>
            <Button variant="white-text">Click me</Button>
            <Button variant="white-text">
              <DirectionsBoatIcon size={20} />
            </Button>
            <Button variant="white-text" disabled>
              Click me
            </Button>
          </div>
        </div>
        <h3 className="mt-6 mb-2 text-lg">Large</h3>
        <div className="border-petroleum-700 overflow-hidden rounded-lg border">
          <div className="flex gap-2 p-4">
            <Button variant="petroleum" size="lg">
              <DirectionsBoatIcon size={24} />
              <span>Click me</span>
            </Button>
            <Button variant="petroleum" size="lg">
              <span>Click me</span>
              <DirectionsBoatIcon size={24} />
            </Button>
            <Button variant="petroleum" size="lg">
              Click me
            </Button>
            <Button variant="petroleum" size="lg">
              <DirectionsBoatIcon size={24} />
            </Button>
            <Button variant="petroleum" size="lg" disabled>
              Click me
            </Button>
          </div>
          <div className="flex gap-2 p-4">
            <Button variant="petroleum-outline" size="lg">
              <DirectionsBoatIcon size={24} />
              <span>Click me</span>
            </Button>
            <Button variant="petroleum-outline" size="lg">
              <span>Click me</span>
              <DirectionsBoatIcon size={24} />
            </Button>
            <Button variant="petroleum-outline" size="lg">
              Click me
            </Button>
            <Button variant="petroleum-outline" size="lg">
              <DirectionsBoatIcon size={24} />
            </Button>
            <Button variant="petroleum-outline" size="lg" disabled>
              Click me
            </Button>
          </div>
          <div className="flex gap-2 p-4">
            <Button variant="petroleum-text" size="lg">
              <DirectionsBoatIcon size={24} />
              <span>Click me</span>
            </Button>
            <Button variant="petroleum-text" size="lg">
              <span>Click me</span>
              <DirectionsBoatIcon size={24} />
            </Button>
            <Button variant="petroleum-text" size="lg">
              Click me
            </Button>
            <Button variant="petroleum-text" size="lg">
              <DirectionsBoatIcon size={24} />
            </Button>
            <Button variant="petroleum-text" size="lg" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white" size="lg">
              <DirectionsBoatIcon size={24} />
              <span>Click me</span>
            </Button>
            <Button variant="white" size="lg">
              <span>Click me</span>
              <DirectionsBoatIcon size={24} />
            </Button>
            <Button variant="white" size="lg">
              Click me
            </Button>
            <Button variant="white" size="lg">
              <DirectionsBoatIcon size={24} />
            </Button>
            <Button variant="white" size="lg" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white-outline" size="lg">
              <DirectionsBoatIcon size={24} />
              <span>Click me</span>
            </Button>
            <Button variant="white-outline" size="lg">
              <span>Click me</span>
              <DirectionsBoatIcon size={24} />
            </Button>
            <Button variant="white-outline" size="lg">
              Click me
            </Button>
            <Button variant="white-outline" size="lg">
              <DirectionsBoatIcon size={24} />
            </Button>
            <Button variant="white-outline" size="lg" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white-text" size="lg">
              <DirectionsBoatIcon size={24} />
              <span>Click me</span>
            </Button>
            <Button variant="white-text" size="lg">
              Click me
              <DirectionsBoatIcon size={24} />
            </Button>
            <Button variant="white-text" size="lg">
              Click me
            </Button>
            <Button variant="white-text" size="lg">
              <DirectionsBoatIcon size={24} />
            </Button>
            <Button variant="white-text" size="lg" disabled>
              Click me
            </Button>
          </div>
        </div>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Link buttons</h2>
        <h3 className="mb-2 text-lg">Small</h3>
        <div className="border-petroleum-700 overflow-hidden rounded-lg border">
          <div className="flex gap-8 p-4">
            <ButtonLink href="/products" size="sm">
              <DirectionsBoatIcon size={16} />
              Hello
            </ButtonLink>
            <ButtonLink href="/products" size="sm">
              Hello
              <DirectionsBoatIcon size={16} />
            </ButtonLink>
            <ButtonLink href="/products" size="sm">
              Hello
            </ButtonLink>
          </div>
          <div className="bg-petroleum-700 flex gap-8 p-4">
            <ButtonLink href="/products" variant="white" size="sm">
              <DirectionsBoatIcon size={16} />
              Hello
            </ButtonLink>
            <ButtonLink href="/products" variant="white" size="sm">
              Hello
              <DirectionsBoatIcon size={16} />
            </ButtonLink>
            <ButtonLink href="/products" variant="white" size="sm">
              Hello
            </ButtonLink>
          </div>
        </div>
        <h3 className="mt-6 mb-2 text-lg">Medium</h3>
        <div className="border-petroleum-700 overflow-hidden rounded-lg border">
          <div className="flex gap-8 p-4">
            <ButtonLink href="/products" size="md">
              <DirectionsBoatIcon size={20} />
              Hello
            </ButtonLink>
            <ButtonLink href="/products" size="md">
              Hello
              <DirectionsBoatIcon size={20} />
            </ButtonLink>
            <ButtonLink href="/products" size="md">
              Hello
            </ButtonLink>
          </div>
          <div className="bg-petroleum-700 flex gap-8 p-4">
            <ButtonLink href="/products" variant="white" size="md">
              <DirectionsBoatIcon size={20} />
              Hello
            </ButtonLink>
            <ButtonLink href="/products" variant="white" size="md">
              Hello
              <DirectionsBoatIcon size={20} />
            </ButtonLink>
            <ButtonLink href="/products" variant="white" size="md">
              Hello
            </ButtonLink>
          </div>
        </div>
        <h3 className="mt-6 mb-2 text-lg">Large</h3>
        <div className="border-petroleum-700 overflow-hidden rounded-lg border">
          <div className="flex gap-8 p-4">
            <ButtonLink href="/products" size="lg">
              <DirectionsBoatIcon size={24} />
              Hello
            </ButtonLink>
            <ButtonLink href="/products" size="lg">
              Hello
              <DirectionsBoatIcon size={24} />
            </ButtonLink>
            <ButtonLink href="/products" size="lg">
              Hello
            </ButtonLink>
          </div>
          <div className="bg-petroleum-700 flex gap-8 p-4">
            <ButtonLink href="/products" variant="white" size="lg">
              <DirectionsBoatIcon size={24} />
              Hello
            </ButtonLink>
            <ButtonLink href="/products" variant="white" size="lg">
              Hello
              <DirectionsBoatIcon size={24} />
            </ButtonLink>
            <ButtonLink href="/products" variant="white" size="lg">
              Hello
            </ButtonLink>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
