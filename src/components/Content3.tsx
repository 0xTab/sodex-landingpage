import Image from 'next/image';

export default function Content3() {
  return (
    <section className="relative h-[883px] mobile:h-auto mobile:min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/home/content3.webp"
          alt="Content 3 Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-[#212121]"></div>
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[567px] h-[143px] rounded-full opacity-30 mobile:w-[300px] mobile:h-[80px]"
           style={{
             background: 'radial-gradient(50% 50% at 50% 50%, #CF4200 0%, rgba(207, 66, 0, 0.00) 100%)',
             filter: 'blur(120px)'
           }}>
      </div>
      
      {/* Infinity Symbol Animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[355px] h-[208px] mobile:w-[200px] mobile:h-[120px] mobile:scale-75">
        <svg className="w-full h-full" viewBox="0 0 355 209" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="177" y="38" width="96" height="67">
            <rect x="177.723" y="38.092" width="94.7513" height="66.6315" fill="#8D00CF"/>
          </mask>
          <g mask="url(#mask0)">
            <path d="M177.723 104.724C177.723 104.724 239.726 45.4276 272.475 45.4276" stroke="#FF6600" strokeWidth="2.44519"/>
            <path d="M82.9721 164.02C115.72 164.02 177.723 104.724 177.723 104.724" stroke="#FF6600" strokeWidth="2.44519"/>
          </g>
          <g mask="url(#mask0)">
            <path d="M177.723 104.723C177.723 104.723 239.726 45.4274 272.475 45.4274" stroke="#FF7A3D" strokeWidth="3.66779"/>
            <path d="M82.9721 164.019C115.72 164.019 177.723 104.723 177.723 104.723" stroke="#FF7A3D" strokeWidth="3.66779"/>
          </g>
          <g mask="url(#mask0)">
            <path d="M177.723 104.723C177.723 104.723 239.726 45.4274 272.475 45.4274" stroke="white" strokeWidth="0.611299"/>
            <path d="M82.9721 164.019C115.72 164.019 177.723 104.723 177.723 104.723" stroke="white" strokeWidth="0.611299"/>
          </g>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 mobile:px-8 pc:px-[120px] py-[120px] mobile:py-16">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-16 mobile:gap-12">
          
          {/* Title */}
          <div className="text-center">
            <h2 className="text-white text-[40px] mobile:text-2xl font-latoBold leading-normal">
              Seamless Experience
            </h2>
          </div>
          
          {/* Product Pillars Container */}
          <div className="flex mobile:flex-col items-start gap-32 mobile:gap-8 w-full mobile:items-stretch">
            
            {/* Left Card - Know your investment targets */}
            <div className="flex w-[536px] mobile:w-full p-4 flex-col items-start gap-6 rounded-lg border border-white/16 bg-white/4 backdrop-blur-sm">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-white text-center font-latoBold text-2xl mobile:text-xl leading-normal w-full">
                      Know your investment targets
                    </h3>
                    <p className="text-[#A3A3A3] text-center font-latoRegular text-base mobile:text-sm leading-normal w-full">
                      via the SoSoValue Research Terminal
                    </p>
                  </div>
                  <svg className="w-4 h-4 flex-shrink-0 ml-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3V4H11.295L3 12.295L3.705 13L12 4.705V11H13V3H5Z" fill="white" fillOpacity="0.16"/>
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b260fbfd3be1c33d8362999451207eda915a7ae6?width=1008"
                  alt="Research Terminal Screenshot"
                  width={504}
                  height={291}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
            
            {/* Right Card - Invest in quality assets */}
            <div className="flex w-[536px] mobile:w-full p-4 flex-col items-start gap-6 rounded-lg border border-white/16 bg-white/4 backdrop-blur-sm">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-white text-center font-latoBold text-2xl mobile:text-xl leading-normal w-full">
                      Invest in quality assets
                    </h3>
                    <p className="text-[#A3A3A3] text-center font-latoRegular text-base mobile:text-sm leading-normal w-full">
                      via the SoDEX Decentralized Exchange
                    </p>
                  </div>
                  <svg className="w-4 h-4 flex-shrink-0 ml-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3V4H11.295L3 12.295L3.705 13L12 4.705V11H13V3H5Z" fill="white" fillOpacity="0.16"/>
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6cf210a961c74192365ead2c72ae5d7bbdca3e2e?width=1008"
                  alt="Exchange Screenshot"
                  width={504}
                  height={291}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
