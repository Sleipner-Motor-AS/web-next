import { Topnav } from '@/components/layout/topnav';
import { Navigation } from '@/components/layout/navigation';
import { Breadcrumb } from '@/components/layout/breadcrumb';
import { Submenu } from '@/components/layout/submenu';
import Intro from '@/components/layout/intro';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
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
        color="light"
        imagePlacement="image-right"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        imageFade="fade"
        link={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <Hero
        color="light"
        imagePlacement="image-left"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        imageFade="fade"
        link={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <Hero
        color="light"
        imagePlacement="image-behind"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        imageFade="no-fade"
        link={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <Hero
        color="light"
        imagePlacement="image-behind"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        imageFade="fade"
        link={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <Hero
        color="dark"
        imagePlacement="image-right"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        imageFade="fade"
        link={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <Hero
        color="dark"
        imagePlacement="image-left"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        imageFade="fade"
        link={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <Hero
        color="dark"
        imagePlacement="image-behind"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        imageFade="fade"
        link={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <Hero
        color="dark"
        imagePlacement="image-behind"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        squareImage
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        imageFade="fade"
        link={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <Hero
        color="dark"
        imagePlacement="image-behind"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        squareImage
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        imageFade="no-fade"
        link={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <Hero
        color="white"
        imagePlacement="image-behind"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        squareImage
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        imageFade="no-fade"
        link={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <Hero
        color="white"
        imagePlacement="image-left"
        title="Welcome to our site"
        text="Discover our amazing products and services"
        image={{
          src: '/thruster_boat.jpg',
          altText: 'Hero image',
        }}
        imageFade="fade"
        link={{
          target: '/products',
          title: 'View Products',
        }}
      />
      <main className="mx-auto max-w-screen-xl p-10">
        <Button>Click me</Button>
      </main>
      <Footer />
    </div>
  );
}
