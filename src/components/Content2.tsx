"use client"

import Image from 'next/image';
import { useState } from 'react';
// import { useState } from 'react';

// Feature data for the Figma design


// Feature Card Component
const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="flex items-center mobile:gap-4 pc:gap-[16px] mobile:py-0 pc:py-5 rounded-md">
      <div className="flex-shrink-0">
        {feature.icon}
      </div>
      <div className="flex-1">
        <h4 className="text-white mobile:text-base pc:text-[21px] font-latoRegular mb-1">
          {feature.title}
        </h4>
        <p className="text-secondary mobile:text-[13px] pc:text-[15px] font-latoRegular leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}


const features = [
  {
    icon: (
      <Image src="/img/home/feature-icon-1.png" alt="OnChain Order book" width={48} height={48} />
    ),
    title: "OnChain Order book",
    description: "Fully onchain order book.Trustless execution with verifiable settlement and composability"
  },
  {
    icon: (
      <Image src="/img/home/feature-icon-2.png" alt="Diverse Assets" width={48} height={48} />
    ),
    title: "Diverse Assets",
    description: "Multiple assets—spot tokens, stock tokens, and index tokens—with one-click buying"
  },
  {
    icon: (
      <Image src="/img/home/feature-icon-3.png" alt="Diverse Assets" width={48} height={48} />

    ),
    title: "Secure and transparent",
    description: "All trades are on‑chain and viewable anytime via the ValueChain block explorer."
  },
  {
    icon: (
      <Image src="/img/home/feature-icon-4.png" alt="Diverse Assets" width={48} height={48} />
    ),
    title: "Low Fees",
    description: "Zero gas and low fees on all orders."
  }
];

export default function Content2() {

  const [isFinalStep, setIsFinalStep] = useState(true);


  const getImagSize = (finalStep: boolean): { width: number, height: number } => {
    if (finalStep) {
      return { width: 541, height: 310 }
    }
    return { width: 786, height: 450 }
  }

  return (
    <section className="w-full mobile:h-[940px]  pc:h-[866px] pc:px-[6.5%] pc:py-[6.5%] overflow-hidden bg-gradient-to-b from-primary via-primary/95 to-[#212121">
      {/* Content */}
      <div className="relative z-10 flex h-full items-start justify-center mobile:px-10 mobile:pt-20">
        <div className="flex w-full mobile:max-w-[313px] pc:max-w-[1200px] flex-col items-center mobile:gap-4 pc:gap-[52px]">

          {/* Title */}
          <div className="text-center mobile:pb-8 pc:pb-0">
            <h2 className="text-white mobile:text-[28px] pc:text-4xl font-latoBold leading-normal mobile:max-w-[313px] pc:max-w-4xl mx-auto">
              SoDEX — The next‑gen onchain exchange
            </h2>
          </div>

          {/* Mobile Trading Interface */}
          <div className="mobile:block pc:hidden w-full max-w-[243px] relative">
            <div className="relative rounded-[4.93px] overflow-hidden">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/e7c52c0ebd105717400190b2981a05cddea2edba?width=442"
                alt="SoDEX Trading Interface"
                width={221}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Black bar overlay */}
              <div className="absolute left-[60px] top-[66px] w-[34px] h-[14px] bg-primary"></div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mobile:block pc:hidden w-full">
            <div className="mobile:px-6 mobile:py-6 pc:px-0 pc:py-0 border-t border-border-primary-100700 bg-gradient-to-b from-primary to-[#212121]">
              <div className="flex flex-col mobile:gap-6 pc:gap-8">
                {features.map((feature, index) => (
                  <div key={index}>
                    <FeatureCard feature={feature} />
                    {index < features.length - 1 && (
                      <div className="h-px bg-border-primary-100700 mobile:mt-6 pc:mt-8"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="mobile:hidden pc:block w-ful">
            <div className={`flex justify-between gap-[1%] ${isFinalStep ? 'flex-row' : 'flex-col'} h-[450px]`}>
              {/* Left Features */}

              {
                isFinalStep && <div className="flex flex-col justify-between py-[4%]">
                  <FeatureCard feature={features[0]} />
                  <FeatureCard feature={features[1]} />
                </div>
              }


              {/* Center - Trading Interface */}
              <div className="flex items-center justify-center">
                <div
                  className="relative rounded-lg shadow-2xl border-2 border-[#393939]"
                  style={{
                    width: `${getImagSize(isFinalStep).width}px`,
                    height: `${getImagSize(isFinalStep).height}px`
                  }}
                >
                  <Image
                    src="/img/home/content1-inner.webp"
                    alt="SoDEX Trading Interface"
                    width={getImagSize(isFinalStep).width}
                    height={getImagSize(isFinalStep).height}
                    className="w-full h-auto object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>


              {/* Right Features */}
              {
                isFinalStep && <div className="flex flex-col justify-between py-[4%]">
                  <FeatureCard feature={features[2]} />
                  <FeatureCard feature={features[3]} />
                </div>
              }
            </div>

            <div className='w-full flex flex-col items-center justify-center gap-[0.5%]'>
              <h3 className='text-white text-[32px] font-latoBold leading-normal'>
                SoDEX on ValueChain
              </h3>
              <p className='text-secondary text-[32px] font-latoRegular leading-normal'>
                Infrastructure for the future.              
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

