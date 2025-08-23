import React from 'react';
import LandingButton from './LandingButton';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
      {/* Main Title - No duplicate logo since it's in header */}
      <h1 className="text-white font-latoRegular text-4xl md:text-6xl lg:text-7xl font-normal mb-6 max-w-4xl leading-tight">
        Building the Infrastructure<br />
        for a New Financial Era
      </h1>

      {/* Subtitle */}
      <p className="text-white/80 font-latoRegular text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
        SoDEX elevates to bridge the global information and asset gap.<br />
        Favoured tightly on first user needs in the real world.
      </p>

      {/* CTA Button */}
      <div className="mb-8">
        <LandingButton text="Start Trading" />
      </div>
    </section>
  );
};

export default Hero;
