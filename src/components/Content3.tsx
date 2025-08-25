import Image from 'next/image';

export default function Content3() {
  return (
    <section className="w-full mobile:h-[852px] pc:min-h-screen overflow-hidden bg-gradient-to-b from-primary via-primary/95 to-[#212121]">
      {/* Infinity Animation */}
      <div className="absolute mobile:left-[-111px] mobile:top-[255px] pc:left-1/2 pc:top-[120px] pc:transform pc:-translate-x-1/2 mobile:w-[567px] mobile:h-[209px] pc:w-[567px] pc:h-[209px]">
        {/* Glow Effect */}
        <svg className="mobile:w-[393px] mobile:h-[627px] pc:w-[567px] pc:h-[143px] mobile:left-0 mobile:top-[33px] pc:left-0 pc:top-[33px] absolute rounded-full opacity-40 blur-[120px]" viewBox="0 0 393 627" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(196.5 313.5) rotate(90) scale(71.5993 283.5)">
              <stop stopColor="#CF4200"/>
              <stop offset="1" stopColor="#CF4200" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <ellipse cx="196.5" cy="313.5" rx="283.5" ry="71.5993" fill="url(#paint0_radial)"/>
        </svg>
        
        {/* Infinity Symbol Layers */}
        <div className="absolute mobile:left-[106px] mobile:top-[1px] pc:left-[106px] pc:top-[1px] mobile:w-[355px] mobile:h-[208px] pc:w-[355px] pc:h-[208px]">
          {/* Main infinity paths */}
          <svg className="w-full h-full absolute" viewBox="0 0 355 209" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_infinity" maskUnits="userSpaceOnUse" x="177" y="38" width="96" height="67">
              <rect x="177.723" y="38.092" width="94.7513" height="66.6315" fill="#8D00CF"/>
            </mask>
            <g mask="url(#mask0_infinity)">
              <path d="M177.723 104.723C177.723 104.723 239.726 45.4275 272.475 45.4275" stroke="#FF6600" strokeWidth="2.44519"/>
              <path d="M82.9721 164.019C115.72 164.019 177.723 104.723 177.723 104.723" stroke="#FF6600" strokeWidth="2.44519"/>
            </g>
          </svg>
          
          <svg className="w-full h-full absolute" viewBox="0 0 355 209" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask1_infinity" maskUnits="userSpaceOnUse" x="177" y="38" width="96" height="67">
              <rect x="177.723" y="38.092" width="94.7513" height="66.6315" fill="#8D00CF"/>
            </mask>
            <g mask="url(#mask1_infinity)">
              <path d="M177.723 104.723C177.723 104.723 239.726 45.4275 272.475 45.4275" stroke="#FF7A3D" strokeWidth="3.66779"/>
              <path d="M82.9721 164.019C115.72 164.019 177.723 104.723 177.723 104.723" stroke="#FF7A3D" strokeWidth="3.66779"/>
            </g>
          </svg>
          
          <svg className="w-full h-full absolute" viewBox="0 0 355 209" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask2_infinity" maskUnits="userSpaceOnUse" x="177" y="38" width="96" height="67">
              <rect x="177.723" y="38.092" width="94.7513" height="66.6315" fill="#8D00CF"/>
            </mask>
            <g mask="url(#mask2_infinity)">
              <path d="M177.723 104.723C177.723 104.723 239.726 45.4275 272.475 45.4275" stroke="white" strokeWidth="0.611299"/>
              <path d="M82.9721 164.019C115.72 164.019 177.723 104.723 177.723 104.723" stroke="white" strokeWidth="0.611299"/>
            </g>
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center mobile:px-4 mobile:pt-20 pc:px-[120px] pc:pt-32">
        <div className="flex w-full mobile:max-w-[361px] pc:max-w-[1200px] flex-col items-center mobile:gap-16 pc:gap-24">
          
          {/* Title */}
          <div className="text-center mobile:pt-[255px] pc:pt-[200px]">
            <h2 className="text-white mobile:text-[28px] pc:text-4xl font-latoBold leading-normal mobile:max-w-[260px] pc:max-w-4xl mx-auto">
              Seamless Experience
            </h2>
          </div>
          
          {/* Product Pillars Container */}
          <div className="flex w-full mobile:flex-col mobile:gap-8 pc:gap-32 pc:flex-row">
            
            {/* Know your investment targets Card */}
            <div className="flex flex-1 flex-col mobile:gap-6 pc:gap-8 mobile:p-4 pc:p-6 rounded-lg border border-white/16 bg-white/4 backdrop-blur-sm hover:bg-white/8 transition-all duration-300">
              <div className="flex flex-col mobile:gap-2 pc:gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white mobile:text-base pc:text-2xl font-latoBold text-center mb-2">
                      Know your investment targets
                    </h3>
                    <p className="text-secondary mobile:text-xs pc:text-base font-latoRegular text-center">
                      via the SoSoValue Research Terminal
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-white/16 flex-shrink-0 ml-2" viewBox="0 0 16 16" fill="none">
                    <path d="M5 3V4H11.295L3 12.295L3.705 13L12 4.705V11H13V3H5Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <div className="relative rounded-md overflow-hidden mobile:aspect-[45/26] pc:aspect-[45/26]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7cd192c25d20ee369f0ff82e459a01f9d0ffa56c?width=626"
                  alt="SoSoValue Research Terminal Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Invest in quality assets Card */}
            <div className="flex flex-1 flex-col mobile:gap-6 pc:gap-8 mobile:p-4 pc:p-6 rounded-lg border border-white/16 bg-white/4 backdrop-blur-sm hover:bg-white/8 transition-all duration-300">
              <div className="flex flex-col mobile:gap-2 pc:gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white mobile:text-base pc:text-2xl font-latoBold text-center mb-2">
                      Invest in quality assets
                    </h3>
                    <p className="text-secondary mobile:text-xs pc:text-base font-latoRegular text-center">
                      via the SoDEX Decentralized Exchange
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-white/16 flex-shrink-0 ml-2" viewBox="0 0 16 16" fill="none">
                    <path d="M5 3V4H11.295L3 12.295L3.705 13L12 4.705V11H13V3H5Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <div className="relative rounded-md overflow-hidden mobile:aspect-[45/26] pc:aspect-[45/26]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2bc13e0f3e00365c75d417b6bbf363d56dad421c?width=626"
                  alt="SoDEX Decentralized Exchange Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
