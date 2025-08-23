import React from 'react';
import LandingButton from './LandingButton';

const Content5: React.FC = () => {
  return (
    <section className="bg-transparent flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        {/* Final CTA */}
        <div className="mb-8">
          <LandingButton text="Start Trading" />
        </div>
      </div>
    </section>
  );
};

export default Content5;
