import React from 'react';

const Content1: React.FC = () => {
  return (
    <section 
      className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 py-20"
      style={{
        backgroundImage: `url('/img/home/content1.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Title */}
      <h2 className="text-white font-latoRegular text-3xl md:text-5xl lg:text-6xl font-normal mb-16 text-center">
        SoDEX — The next-gen onchain exchange
      </h2>

      {/* Trading Interface Image */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm border border-white/10">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/f8fffacb9b8cf65b9b00b7387bb2567a59d80407?width=2880" 
            alt="SoDEX Trading Interface"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Content1;
