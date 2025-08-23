import React from 'react';

const Content4: React.FC = () => {
  const features = [
    {
      title: "Seamlessly on-chain and public",
      subtitle: "SoDEX welcomes all.",
      description: "Seamlessly on-chain and public. SoDEX welcomes all.",
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2L20 12H30L22 18L26 28L16 22L6 28L10 18L2 12H12L16 2Z" fill="white"/>
          </svg>
        </div>
      )
    },
    {
      title: "Open access to instant and quality assets",
      subtitle: "without gatekeepers.",
      description: "Open access to instant and quality assets, without gatekeepers.",
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )
    },
    {
      title: "Democratic by design",
      subtitle: "transparent markets for discovery.",
      description: "Democratic by design, transparent markets, for discovery.",
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2"/>
            <circle cx="16" cy="16" r="6" fill="white"/>
          </svg>
        </div>
      )
    },
    {
      title: "Equal tools and rights",
      subtitle: "for every investor, everywhere.",
      description: "Equal tools and rights for every investor, everywhere.",
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16H28M16 4V28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
      )
    },
    {
      title: "X-ray transparency",
      subtitle: "verify value, don't just trust.",
      description: "X-ray transparency: verify value, don't just trust.",
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C20 8 24 12 24 16S20 24 16 24M16 8C12 8 8 12 8 16S12 24 16 24M16 8V24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="bg-transparent flex flex-col items-center justify-center px-4 py-16 md:py-20">
      <div className="w-full max-w-6xl mx-auto">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-white font-latoRegular text-lg md:text-xl font-medium leading-tight">
                  {feature.title}
                </h3>
                <p className="text-white/70 font-latoRegular text-sm md:text-base">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content4;
