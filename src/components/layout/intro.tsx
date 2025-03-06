import React from 'react';
import { cn } from '../../lib/utils';
interface IntroProps {
  title?: string;
  description?: string;
  className?: string;
}

const Intro: React.FC<IntroProps> = ({
  title = 'Welcome to the Thrusters',
  description = 'This is a hub for all things related to thrusters. Here you can find information about the different types of thrusters, their specifications, and how to install them.',
  className,
}) => {
  return (
    <div className={cn('w-full', className)}>
      <div className="mx-auto max-w-screen-xl px-5 py-12 md:px-10">
        <h1 className="text-4xl font-medium">{title}</h1>
        <p className="mt-4 text-xl">{description}</p>
      </div>
    </div>
  );
};

export default Intro;
