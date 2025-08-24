import Image from 'next/image';

export default function Content3() {
  return (
    <section className="relative h-[883px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/home/content3.webp"
          alt="Content 3 Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-[#212121]"></div>
      
      {/* Infinity Symbol Animation */}
      <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[567px] h-[209px] mobile:w-[300px] mobile:h-[120px] mobile:top-[80px]">
        {/* Glow Effect */}
        <div className="absolute left-0 top-[33px] w-full h-[143px] mobile:h-[80px] rounded-full bg-gradient-radial from-[#CF4200] to-transparent opacity-40 blur-[120px]"></div>
        
        {/* Infinity Symbol */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[355px] h-[208px] mobile:w-[200px] mobile:h-[120px]">
          <svg className="w-full h-full" viewBox="0 0 355 209" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_infinity" maskUnits="userSpaceOnUse" x="177" y="38" width="96" height="67">
              <rect x="177.723" y="38.092" width="94.7513" height="66.6315" fill="#8D00CF"/>
            </mask>
            <g mask="url(#mask0_infinity)">
              <path d="M177.723 104.724C177.723 104.724 239.726 45.4276 272.475 45.4276" stroke="#FF6600" strokeWidth="2.44519"/>
              <path d="M82.9721 164.02C115.72 164.02 177.723 104.724 177.723 104.724" stroke="#FF6600" strokeWidth="2.44519"/>
            </g>
            <g mask="url(#mask0_infinity)">
              <path d="M177.723 104.723C177.723 104.723 239.726 45.4274 272.475 45.4274" stroke="#FF7A3D" strokeWidth="3.66779"/>
              <path d="M82.9721 164.019C115.72 164.019 177.723 104.723 177.723 104.723" stroke="#FF7A3D" strokeWidth="3.66779"/>
            </g>
            <g mask="url(#mask0_infinity)">
              <path d="M177.723 104.723C177.723 104.723 239.726 45.4274 272.475 45.4274" stroke="white" strokeWidth="0.611299"/>
              <path d="M82.9721 164.019C115.72 164.019 177.723 104.723 177.723 104.723" stroke="white" strokeWidth="0.611299"/>
            </g>
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 mobile:px-8 pc:px-[120px] pt-[200px] mobile:pt-[160px]">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-16 mobile:gap-12">
          
          {/* Title */}
          <div className="text-center">
            <h2 className="text-white text-[40px] mobile:text-2xl font-latoBold leading-normal">
              Seamless Experience
            </h2>
          </div>
          
          {/* Product Pillars Container */}
          <div className="flex w-full gap-32 mobile:flex-col mobile:gap-8 pc:gap-16">
            
            {/* Know your investment targets Card */}
            <div className="flex flex-1 flex-col gap-6 p-4 rounded-lg border border-white/16 bg-white/4 backdrop-blur-sm hover:bg-white/8 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white text-2xl mobile:text-xl font-latoBold text-center mb-2">
                      Know your investment targets
                    </h3>
                    <p className="text-[#A3A3A3] text-base mobile:text-sm font-latoRegular text-center">
                      via the SoSoValue Research Terminal
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-white/16 flex-shrink-0 ml-2" viewBox="0 0 16 16" fill="none">
                    <path d="M5 3V4H11.295L3 12.295L3.705 13L12 4.705V11H13V3H5Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <div className="relative rounded-md overflow-hidden aspect-[45/26]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b260fbfd3be1c33d8362999451207eda915a7ae6?width=1008"
                  alt="SoSoValue Research Terminal Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Invest in quality assets Card */}
            <div className="flex flex-1 flex-col gap-6 p-4 rounded-lg border border-white/16 bg-white/4 backdrop-blur-sm hover:bg-white/8 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white text-2xl mobile:text-xl font-latoBold text-center mb-2">
                      Invest in quality assets
                    </h3>
                    <p className="text-[#A3A3A3] text-base mobile:text-sm font-latoRegular text-center">
                      via the SoDEX Decentralized Exchange
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-white/16 flex-shrink-0 ml-2" viewBox="0 0 16 16" fill="none">
                    <path d="M5 3V4H11.295L3 12.295L3.705 13L12 4.705V11H13V3H5Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <div className="relative rounded-md overflow-hidden aspect-[45/26]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6cf210a961c74192365ead2c72ae5d7bbdca3e2e?width=1008"
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
