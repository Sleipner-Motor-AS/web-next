import { Hero } from '@/components/ui/hero';

type HeroBlockProps = {
  color?: 'light' | 'blank' | 'dark';
  imagePlacement?: 'left' | 'right' | 'behind';
  squareImage?: boolean;
  fullWidth?: boolean;
  imageFade?: boolean;
  image?: {
    src?: string;
    altText?: string;
  };
  title?: string;
  text?: string;
  link?: {
    target?: string;
    title?: string;
  };
  textLink?: {
    target?: string;
    title?: string;
  };
};

export const HeroBlock = ({ data }: { data: HeroBlockProps }) => {
  return <Hero {...data} />;
};
