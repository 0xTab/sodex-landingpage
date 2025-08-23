import React from 'react';

const Content3: React.FC = () => {
  return (
    <section 
      className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 py-20"
      style={{
        backgroundImage: `url('/img/home/content3.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Title */}
      <h2 className="text-white font-latoRegular text-3xl md:text-5xl lg:text-6xl font-normal mb-8 text-center">
        The SoDEX Stack
      </h2>

      {/* Subtitle */}
      <p className="text-white/80 font-latoRegular text-lg md:text-xl mb-20 text-center max-w-2xl">
        High-performance, Scalable Blockchain Architecture
      </p>

      {/* Stack Architecture Image */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative">
          {/* Background with stack visualization */}
          <div className="bg-gradient-to-b from-black/30 to-black/60 rounded-xl p-8 backdrop-blur-sm border border-white/10">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f8fffacb9b8cf65b9b00b7387bb2567a59d80407?width=2880" 
              alt="SoDEX Stack Architecture"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Floating elements to represent stack layers */}
          <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
            <span className="text-white text-sm font-latoRegular">High-Performance Trading Engine</span>
          </div>
          
          <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
            <span className="text-white text-sm font-latoRegular">Secure Blockchain Infrastructure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content3;
