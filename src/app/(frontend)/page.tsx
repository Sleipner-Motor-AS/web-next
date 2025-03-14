import { Submenu } from '@/components/layout/submenu';
import Intro from '@/components/layout/intro';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import DirectionsBoatIcon from '@/components/icons/directions_boat';
import { Textlink } from '@/components/ui/textlink';
import { Card } from '@/components/ui/card';

export default async function HomePage() {
  return (
    <div>
      <Submenu className="bg-petroleum-25" />
      <Intro
        title="Welcome to the Thrusters"
        description="This is a hub for all things related to thrusters. Here you can find information about the different types of thrusters, their specifications, and how to install them."
      />
      <Hero
        color="dark"
        imagePlacement="left"
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
        textLink={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <Hero
        color="light"
        imagePlacement="right"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        imageFade
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        link={{
          target: '/products',
          title: 'View Products',
        }}
        textLink={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 p-10 md:grid-cols-2 lg:grid-cols-3">
        <Card
          color="dark"
          image={{ src: '/thruster_boat.jpg', alt: 'Card Image' }}
          title="Pros and cons of different thruster solutions"
          link={{
            target: '/products',
            title: 'Read more',
          }}
        >
          <p>
            There is a vast array of boats in various shapes and sizes. Luckily, there are now bow and stern thruster
            solutions available for almost all types of motorboats and sailing yachts.
          </p>
        </Card>
        <Card
          color="light"
          image={{ src: '/thruster_boat.jpg', alt: 'Card Image' }}
          title="Manage the boat alone with the practical hold function"
          link={{
            target: '/products',
            title: 'Read more',
          }}
        >
          <p>
            Docking the boat can be challenging, especially if you are alone on board. It requires planning, precision,
            and often a pair of extra hands. With the hold function, you can rely on your thrusters to keep the boat
            safely next to the dock, allowing you to moor the boat on your own.
          </p>
        </Card>
        <Card
          color="white"
          image={{ src: '/thruster_boat.jpg', alt: 'Card Image' }}
          title="Five benefits with PRO™ speed control"
          link={{
            target: '/products',
            title: 'Read more',
          }}
        >
          <p>
            Thruster systems with speed control have been around for some time now. In this article, we explore the many
            benefits of a PRO™ thruster system and why it is an upgrade most boat owners should consider.
          </p>
        </Card>
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-col p-10">
        <h2 className="mb-4 text-2xl font-bold">Buttons</h2>
        <h3 className="mb-2 text-lg">Small</h3>
        <div className="border-petroleum-700 overflow-hidden rounded-lg border">
          <div className="flex gap-2 p-4">
            <Button variant="petroleum" size="sm" iconLeft={<DirectionsBoatIcon size={16} />}>
              Click me
            </Button>
            <Button variant="petroleum" size="sm" iconRight={<DirectionsBoatIcon size={16} />}>
              Click me
            </Button>
            <Button
              variant="petroleum"
              size="sm"
              iconLeft={<DirectionsBoatIcon size={16} />}
              iconRight={<DirectionsBoatIcon size={16} />}
            >
              Click me
            </Button>
            <Button variant="petroleum" size="sm">
              Click me
            </Button>
            <Button variant="petroleum" size="sm" iconLeft={<DirectionsBoatIcon size={16} />} />
            <Button variant="petroleum" size="sm" disabled>
              Click me
            </Button>
          </div>
          <div className="flex gap-2 p-4">
            <Button variant="petroleum-outline" size="sm" iconLeft={<DirectionsBoatIcon size={16} />}>
              Click me
            </Button>
            <Button variant="petroleum-outline" size="sm" iconRight={<DirectionsBoatIcon size={16} />}>
              Click me
            </Button>
            <Button
              variant="petroleum-outline"
              size="sm"
              iconLeft={<DirectionsBoatIcon size={16} />}
              iconRight={<DirectionsBoatIcon size={16} />}
            >
              Click me
            </Button>
            <Button variant="petroleum-outline" size="sm">
              Click me
            </Button>
            <Button variant="petroleum-outline" size="sm" iconLeft={<DirectionsBoatIcon size={16} />} />
            <Button variant="petroleum-outline" size="sm" disabled>
              Click me
            </Button>
          </div>
          <div className="flex gap-2 p-4">
            <Button variant="petroleum-text" size="sm" iconLeft={<DirectionsBoatIcon size={16} />}>
              Click me
            </Button>
            <Button variant="petroleum-text" size="sm" iconRight={<DirectionsBoatIcon size={16} />}>
              Click me
            </Button>
            <Button
              variant="petroleum-text"
              size="sm"
              iconLeft={<DirectionsBoatIcon size={16} />}
              iconRight={<DirectionsBoatIcon size={16} />}
            >
              Click me
            </Button>
            <Button variant="petroleum-text" size="sm">
              Click me
            </Button>
            <Button variant="petroleum-text" size="sm" iconLeft={<DirectionsBoatIcon size={16} />} />
            <Button variant="petroleum-text" size="sm" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white" size="sm" iconLeft={<DirectionsBoatIcon size={16} />}>
              Click me
            </Button>
            <Button variant="white" size="sm" iconRight={<DirectionsBoatIcon size={16} />}>
              Click me
            </Button>
            <Button
              variant="white"
              size="sm"
              iconLeft={<DirectionsBoatIcon size={16} />}
              iconRight={<DirectionsBoatIcon size={16} />}
            >
              Click me
            </Button>
            <Button variant="white" size="sm">
              Click me
            </Button>
            <Button variant="white" size="sm" iconLeft={<DirectionsBoatIcon size={16} />} />
            <Button variant="white" size="sm" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white-outline" size="sm" iconLeft={<DirectionsBoatIcon size={16} />}>
              Click me
            </Button>
            <Button variant="white-outline" size="sm" iconRight={<DirectionsBoatIcon size={16} />}>
              Click me
            </Button>
            <Button
              variant="white-outline"
              size="sm"
              iconLeft={<DirectionsBoatIcon size={16} />}
              iconRight={<DirectionsBoatIcon size={16} />}
            >
              Click me
            </Button>
            <Button variant="white-outline" size="sm">
              Click me
            </Button>
            <Button variant="white-outline" size="sm" iconLeft={<DirectionsBoatIcon size={16} />} />
            <Button variant="white-outline" size="sm" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white-text" size="sm" iconLeft={<DirectionsBoatIcon size={16} />}>
              Click me
            </Button>
            <Button variant="white-text" size="sm" iconRight={<DirectionsBoatIcon size={16} />}>
              Click me
            </Button>
            <Button
              variant="white-text"
              size="sm"
              iconLeft={<DirectionsBoatIcon size={16} />}
              iconRight={<DirectionsBoatIcon size={16} />}
            >
              Click me
            </Button>
            <Button variant="white-text" size="sm">
              Click me
            </Button>
            <Button variant="white-text" size="sm" iconLeft={<DirectionsBoatIcon size={16} />} />
            <Button variant="white-text" size="sm" disabled>
              Click me
            </Button>
          </div>
        </div>
        <h3 className="mt-6 mb-2 text-lg">Medium</h3>
        <div className="border-petroleum-700 overflow-hidden rounded-lg border">
          <div className="flex gap-2 p-4">
            <Button variant="petroleum" iconLeft={<DirectionsBoatIcon size={20} />}>
              Click me
            </Button>
            <Button variant="petroleum" iconRight={<DirectionsBoatIcon size={20} />}>
              Click me
            </Button>
            <Button
              variant="petroleum"
              iconLeft={<DirectionsBoatIcon size={20} />}
              iconRight={<DirectionsBoatIcon size={20} />}
            >
              Click me
            </Button>
            <Button variant="petroleum">Click me</Button>
            <Button variant="petroleum" iconLeft={<DirectionsBoatIcon size={20} />} />
            <Button variant="petroleum" disabled>
              Click me
            </Button>
          </div>
          <div className="flex gap-2 p-4">
            <Button variant="petroleum-outline" iconLeft={<DirectionsBoatIcon size={20} />}>
              Click me
            </Button>
            <Button variant="petroleum-outline" iconRight={<DirectionsBoatIcon size={20} />}>
              Click me
            </Button>
            <Button
              variant="petroleum-outline"
              iconLeft={<DirectionsBoatIcon size={20} />}
              iconRight={<DirectionsBoatIcon size={20} />}
            >
              Click me
            </Button>
            <Button variant="petroleum-outline">Click me</Button>
            <Button variant="petroleum-outline" iconLeft={<DirectionsBoatIcon size={20} />} />
            <Button variant="petroleum-outline" disabled>
              Click me
            </Button>
          </div>
          <div className="flex gap-2 p-4">
            <Button variant="petroleum-text" iconLeft={<DirectionsBoatIcon size={20} />}>
              Click me
            </Button>
            <Button variant="petroleum-text" iconRight={<DirectionsBoatIcon size={20} />}>
              Click me
            </Button>
            <Button
              variant="petroleum-text"
              iconLeft={<DirectionsBoatIcon size={20} />}
              iconRight={<DirectionsBoatIcon size={20} />}
            >
              Click me
            </Button>
            <Button variant="petroleum-text">Click me</Button>
            <Button variant="petroleum-text" iconLeft={<DirectionsBoatIcon size={20} />} />
            <Button variant="petroleum-text" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white" iconLeft={<DirectionsBoatIcon size={20} />}>
              Click me
            </Button>
            <Button variant="white" iconRight={<DirectionsBoatIcon size={20} />}>
              Click me
            </Button>
            <Button
              variant="white"
              iconLeft={<DirectionsBoatIcon size={20} />}
              iconRight={<DirectionsBoatIcon size={20} />}
            >
              Click me
            </Button>
            <Button variant="white">Click me</Button>
            <Button variant="white" iconLeft={<DirectionsBoatIcon size={20} />} />
            <Button variant="white" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white-outline" iconLeft={<DirectionsBoatIcon size={20} />}>
              Click me
            </Button>
            <Button variant="white-outline" iconRight={<DirectionsBoatIcon size={20} />}>
              Click me
            </Button>
            <Button
              variant="white-outline"
              iconLeft={<DirectionsBoatIcon size={20} />}
              iconRight={<DirectionsBoatIcon size={20} />}
            >
              Click me
            </Button>
            <Button variant="white-outline">Click me</Button>
            <Button variant="white-outline" iconLeft={<DirectionsBoatIcon size={20} />} />
            <Button variant="white-outline" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white-text" iconLeft={<DirectionsBoatIcon size={20} />}>
              Click me
            </Button>
            <Button variant="white-text" iconRight={<DirectionsBoatIcon size={20} />}>
              Click me
            </Button>
            <Button
              variant="white-text"
              iconLeft={<DirectionsBoatIcon size={20} />}
              iconRight={<DirectionsBoatIcon size={20} />}
            >
              Click me
            </Button>
            <Button variant="white-text">Click me</Button>
            <Button variant="white-text" iconLeft={<DirectionsBoatIcon size={20} />} />
            <Button variant="white-text" disabled>
              Click me
            </Button>
          </div>
        </div>
        <h3 className="mt-6 mb-2 text-lg">Large</h3>
        <div className="border-petroleum-700 overflow-hidden rounded-lg border">
          <div className="flex gap-2 p-4">
            <Button variant="petroleum" size="lg" iconLeft={<DirectionsBoatIcon size={24} />}>
              Click me
            </Button>
            <Button variant="petroleum" size="lg" iconRight={<DirectionsBoatIcon size={24} />}>
              Click me
            </Button>
            <Button
              variant="petroleum"
              size="lg"
              iconLeft={<DirectionsBoatIcon size={24} />}
              iconRight={<DirectionsBoatIcon size={24} />}
            >
              Click me
            </Button>
            <Button variant="petroleum" size="lg">
              Click me
            </Button>
            <Button variant="petroleum" size="lg" iconLeft={<DirectionsBoatIcon size={24} />} />
            <Button variant="petroleum" size="lg" disabled>
              Click me
            </Button>
          </div>
          <div className="flex gap-2 p-4">
            <Button variant="petroleum-outline" size="lg" iconLeft={<DirectionsBoatIcon size={24} />}>
              Click me
            </Button>
            <Button variant="petroleum-outline" size="lg" iconRight={<DirectionsBoatIcon size={24} />}>
              Click me
            </Button>
            <Button
              variant="petroleum-outline"
              size="lg"
              iconLeft={<DirectionsBoatIcon size={24} />}
              iconRight={<DirectionsBoatIcon size={24} />}
            >
              Click me
            </Button>
            <Button variant="petroleum-outline" size="lg">
              Click me
            </Button>
            <Button variant="petroleum-outline" size="lg" iconLeft={<DirectionsBoatIcon size={24} />} />
            <Button variant="petroleum-outline" size="lg" disabled>
              Click me
            </Button>
          </div>
          <div className="flex gap-2 p-4">
            <Button variant="petroleum-text" size="lg" iconLeft={<DirectionsBoatIcon size={24} />}>
              Click me
            </Button>
            <Button variant="petroleum-text" size="lg" iconRight={<DirectionsBoatIcon size={24} />}>
              Click me
            </Button>
            <Button
              variant="petroleum-text"
              size="lg"
              iconLeft={<DirectionsBoatIcon size={24} />}
              iconRight={<DirectionsBoatIcon size={24} />}
            >
              Click me
            </Button>
            <Button variant="petroleum-text" size="lg">
              Click me
            </Button>
            <Button variant="petroleum-text" size="lg" iconLeft={<DirectionsBoatIcon size={24} />} />
            <Button variant="petroleum-text" size="lg" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white" size="lg" iconLeft={<DirectionsBoatIcon size={24} />}>
              Click me
            </Button>
            <Button variant="white" size="lg" iconRight={<DirectionsBoatIcon size={24} />}>
              Click me
            </Button>
            <Button
              variant="white"
              size="lg"
              iconLeft={<DirectionsBoatIcon size={24} />}
              iconRight={<DirectionsBoatIcon size={24} />}
            >
              Click me
            </Button>
            <Button variant="white" size="lg">
              Click me
            </Button>
            <Button variant="white" size="lg" iconLeft={<DirectionsBoatIcon size={24} />} />
            <Button variant="white" size="lg" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white-outline" size="lg" iconLeft={<DirectionsBoatIcon size={24} />}>
              Click me
            </Button>
            <Button variant="white-outline" size="lg" iconRight={<DirectionsBoatIcon size={24} />}>
              Click me
            </Button>
            <Button
              variant="white-outline"
              size="lg"
              iconLeft={<DirectionsBoatIcon size={24} />}
              iconRight={<DirectionsBoatIcon size={24} />}
            >
              Click me
            </Button>
            <Button variant="white-outline" size="lg">
              Click me
            </Button>
            <Button variant="white-outline" size="lg" iconLeft={<DirectionsBoatIcon size={24} />} />
            <Button variant="white-outline" size="lg" disabled>
              Click me
            </Button>
          </div>
          <div className="bg-petroleum-700 flex gap-2 p-4">
            <Button variant="white-text" size="lg" iconLeft={<DirectionsBoatIcon size={24} />}>
              Click me
            </Button>
            <Button variant="white-text" size="lg" iconRight={<DirectionsBoatIcon size={24} />}>
              Click me
            </Button>
            <Button
              variant="white-text"
              size="lg"
              iconLeft={<DirectionsBoatIcon size={24} />}
              iconRight={<DirectionsBoatIcon size={24} />}
            >
              Click me
            </Button>
            <Button variant="white-text" size="lg">
              Click me
            </Button>
            <Button variant="white-text" size="lg" iconLeft={<DirectionsBoatIcon size={24} />} />
            <Button variant="white-text" size="lg" disabled>
              Click me
            </Button>
          </div>
        </div>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Link buttons</h2>
        <h3 className="mb-2 text-lg">Small</h3>
        <div className="border-petroleum-700 overflow-hidden rounded-lg border">
          <div className="flex gap-8 p-4">
            <Textlink href="/products" size="sm" iconLeft={<DirectionsBoatIcon size={16} />}>
              Hello
            </Textlink>
            <Textlink href="/products" size="sm" iconRight={<DirectionsBoatIcon size={16} />}>
              Hello
            </Textlink>
            <Textlink
              href="/products"
              size="sm"
              iconLeft={<DirectionsBoatIcon size={16} />}
              iconRight={<DirectionsBoatIcon size={16} />}
            >
              Hello
            </Textlink>
            <Textlink href="/products" size="sm">
              Hello
            </Textlink>
          </div>
          <div className="bg-petroleum-700 flex gap-8 p-4">
            <Textlink href="/products" color="white" size="sm" iconLeft={<DirectionsBoatIcon size={16} />}>
              Hello
            </Textlink>
            <Textlink href="/products" color="white" size="sm" iconRight={<DirectionsBoatIcon size={16} />}>
              Hello
            </Textlink>
            <Textlink
              href="/products"
              color="white"
              size="sm"
              iconLeft={<DirectionsBoatIcon size={16} />}
              iconRight={<DirectionsBoatIcon size={16} />}
            >
              Hello
            </Textlink>
            <Textlink href="/products" color="white" size="sm">
              Hello
            </Textlink>
          </div>
        </div>
        <h3 className="mt-6 mb-2 text-lg">Medium</h3>
        <div className="border-petroleum-700 overflow-hidden rounded-lg border">
          <div className="flex gap-8 p-4">
            <Textlink href="/products" size="md" iconLeft={<DirectionsBoatIcon size={20} />}>
              Hello
            </Textlink>
            <Textlink href="/products" size="md" iconRight={<DirectionsBoatIcon size={20} />}>
              Hello
            </Textlink>
            <Textlink
              href="/products"
              size="md"
              iconLeft={<DirectionsBoatIcon size={20} />}
              iconRight={<DirectionsBoatIcon size={20} />}
            >
              Hello
            </Textlink>
            <Textlink href="/products" size="md">
              Hello
            </Textlink>
          </div>
          <div className="bg-petroleum-700 flex gap-8 p-4">
            <Textlink href="/products" color="white" size="md" iconLeft={<DirectionsBoatIcon size={20} />}>
              Hello
            </Textlink>
            <Textlink href="/products" color="white" size="md" iconRight={<DirectionsBoatIcon size={20} />}>
              Hello
            </Textlink>
            <Textlink
              href="/products"
              color="white"
              size="md"
              iconLeft={<DirectionsBoatIcon size={20} />}
              iconRight={<DirectionsBoatIcon size={20} />}
            >
              Hello
            </Textlink>
            <Textlink href="/products" color="white" size="md">
              Hello
            </Textlink>
          </div>
        </div>
        <h3 className="mt-6 mb-2 text-lg">Large</h3>
        <div className="border-petroleum-700 overflow-hidden rounded-lg border">
          <div className="flex gap-8 p-4">
            <Textlink href="/products" size="lg" iconLeft={<DirectionsBoatIcon size={24} />}>
              Hello
            </Textlink>
            <Textlink href="/products" size="lg" iconRight={<DirectionsBoatIcon size={24} />}>
              Hello
            </Textlink>
            <Textlink
              href="/products"
              size="lg"
              iconLeft={<DirectionsBoatIcon size={24} />}
              iconRight={<DirectionsBoatIcon size={24} />}
            >
              Hello
            </Textlink>
            <Textlink href="/products" size="lg">
              Hello
            </Textlink>
          </div>
          <div className="bg-petroleum-700 flex gap-8 p-4">
            <Textlink href="/products" color="white" size="lg" iconLeft={<DirectionsBoatIcon size={24} />}>
              Hello
            </Textlink>
            <Textlink href="/products" color="white" size="lg" iconRight={<DirectionsBoatIcon size={24} />}>
              Hello
            </Textlink>
            <Textlink
              href="/products"
              color="white"
              size="lg"
              iconLeft={<DirectionsBoatIcon size={24} />}
              iconRight={<DirectionsBoatIcon size={24} />}
            >
              Hello
            </Textlink>
            <Textlink href="/products" color="white" size="lg">
              Hello
            </Textlink>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
