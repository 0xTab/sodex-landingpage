import React from 'react';

const Content2: React.FC = () => {
  return (
    <section 
      className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 py-20"
      style={{
        backgroundImage: `url('/img/home/content2.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Title */}
      <h2 className="text-white font-latoRegular text-3xl md:text-5xl lg:text-6xl font-normal mb-20 text-center">
        Seamless Experience
      </h2>

      {/* Two Column Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Column - Know your investment targets */}
        <div className="text-center">
          <h3 className="text-white font-latoRegular text-xl md:text-2xl mb-6">
            Know your investment targets
          </h3>
          <p className="text-white/70 font-latoRegular text-sm md:text-base mb-8">
            Up-to-the-minute information access
          </p>
          <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm border border-white/10">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f8fffacb9b8cf65b9b00b7387bb2567a59d80407?width=2880" 
              alt="Investment Targets Interface"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right Column - Invest in quality assets */}
        <div className="text-center">
          <h3 className="text-white font-latoRegular text-xl md:text-2xl mb-6">
            Invest in quality assets
          </h3>
          <p className="text-white/70 font-latoRegular text-sm md:text-base mb-8">
            Trade Quality Cryptocurrency Efficiently
          </p>
          <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm border border-white/10">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f8fffacb9b8cf65b9b00b7387bb2567a59d80407?width=2880" 
              alt="Quality Assets Interface"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content2;
