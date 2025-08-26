"use client";  // 确保组件在客户端渲染
import Image from 'next/image';
import { forwardRef, useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import animationData from "./infinity.json";

const Content3 = forwardRef<HTMLElement>((props, ref) => {
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  return (
    <section ref={ref} className="w-full relative mobile:h-[852px] pc:h-[883px] pc:px-[6.5%] pc:py-[6.5%] overflow-hidden bg-gradient-to-b from-primary via-primary/95 to-[#212121]">




      {/* Infinity Symbol Layers */}
      {/* <div className="absolute mobile:left-[106px] mobile:top-[1px] pc:left-[106px] pc:top-[1px] mobile:w-[355px] mobile:h-[208px] pc:w-[355px] pc:h-[208px]">
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
        </div> */}
      {/* </div> */}

      {/* Content */}
      <div className="relative z-10 w-full flex h-full items-center justify-center mobile:px-[24px] mobile:py-20  pc:px-[120px] ">
        <div className="flex w-full  flex-col items-center mobile:gap-[29px] pc:gap-24 ">

          {/* Title */}
          <div className="text-center">
            <h2 className="text-white mobile:text-[28px] pc:text-4xl font-latoBold leading-normal pc:max-w-4xl mx-auto">
              Seamless Experience
            </h2>
          </div>

          {/* Product Pillars Container */}
          <div className="relative flex w-full mobile:flex-col mobile:gap-8 pc:gap-32 pc:flex-row">

            {/* Know your investment targets Card */}
            <div className="flex flex-1 flex-col mobile:gap-6 pc:gap-8 mobile:p-4 pc:p-6 rounded-lg outline outline-1  outline-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.1)]  hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 backdrop-blur-xl">
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
                  <Image src="/icons/arrow-up-right.svg" alt="arrow" width={16} height={16} />
                </div>
              </div>

              <div className="relative rounded-md overflow-hidden mobile:aspect-[313/180] pc:aspect-[45/26]">
                <Image
                  src="/img/home/content3-inner1.webp"
                  alt="SoSoValue Research Terminal Interface"
                  fill
                  className="object-cover"
                />

              </div>
            </div>

            <div className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10'>
              <Image src={'/animation/glow.svg'} width={567} height={290} alt='glow'/>
              <Lottie animationData={animationData} loop={true} autoPlay   autoplay
                  className="absolute top-0 left-0 w-full h-ful"
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />=
            </div>

            {/* Invest in quality assets Card */}
            <div className="flex flex-1 flex-col mobile:gap-6 pc:gap-8 mobile:p-4 pc:p-6 rounded-lg outline outline-1  outline-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.1)]  hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 backdrop-blur-xl">
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
                  <Image src="/icons/arrow-up-right.svg" alt="arrow" width={16} height={16} />
                </div>
              </div>

              <div className="relative rounded-md overflow-hidden mobile:aspect-[313/180] pc:aspect-[45/26]">
                <Image
                  src="/img/home/content3-inner2.webp"
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
});

Content3.displayName = 'Content3';

export default Content3;

