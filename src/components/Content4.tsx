'use client'
import AnimationBox from './AnimationBox';
import Image from 'next/image';
import { useState } from 'react';


const TEXT_CONTENT = [
  'Unified account across guest chains — same address and keys to access all DApps.',
  'Spot and futures order-book DEX run on two parallel app‑chains to maximize on‑chain trading performance.',
  'The host chain provides shared security, and settlement finality to facilitate interoperability among DApps.',
  'nified account across guest chains — same address and keys to access all DApps.'
  
]

export default function Content4() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3; // 假设有3个步骤，您可以根据需要调整

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };
  return (
    <section className="w-full mobile:h-[620px] pc:min-h-screen  pc:px-[6.5%] pc:py-[6.5%] overflow-hidden bg-gradient-to-b from-primary via-primary to-[#212121]">
      {/* Content */}
      <div className="relative z-10 flex h-full pc:items-center justify-center mobile:px-4 mobile:pt-20 ">
        <div className="flex w-full mobile:max-w-[361px] pc:max-w-[1200px] flex-col items-center mobile:gap-4 pc:gap-12">

          {/* Title Section */}
          <div className="flex w-full mobile:max-w-[346px] pc:max-w-[610px] flex-col items-center mobile:gap-6 pc:gap-8 text-center">
            <h2 className="font-latoBold mobile:text-[28px] pc:text-4xl font-bold text-white">
              The SoDEX Stack
            </h2>
            <p className="font-latoRegular mobile:text-sm pc:text-xl text-secondary">
              High-performance, Scalable Blockchain Architecture
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="mobile:block pc:hidden flex-row w-full justify-between items-center mobile:px-6 pc:px-0 !flex  mobile:absolute mobile:top-1/2 mobile:left-0 mobile:right-0 mobile:-translate-y-1/2 mobile:z-20">
            <button 
              onClick={() => handleStepChange(currentStep > 1 ? currentStep - 1 : totalSteps)}
              className="p-2"
              aria-label="Previous step"
            >
              <Image src="/icons/arrow-left.svg" alt="Arrow Left" width={24} height={24} />
            </button>
            <button 
              onClick={() => handleStepChange(currentStep < totalSteps ? currentStep + 1 : 1)}
              className="p-2"
              aria-label="Next step"
            >
              <Image src="/icons/arrow-right.svg" alt="Arrow Right" width={24} height={24} />
            </button>
          </div>

          {/* The SoDEX Stack Diagram */}
          <div className="flex w-full mobile:max-w-[321px] pc:max-w-[800px] flex-col items-center mobile:gap-4 pc:gap-8">

            <AnimationBox step={currentStep} />

            {/* Indicator */}
            <div className=" flex w-full justify-center items-center gap-1 mobile:mt-4 pc:hidden">
              {Array.from({ length: totalSteps }, (_, index) => {
                const step = index + 1;
                const isActive = step === currentStep;
                return (
                  <button
                    key={step}
                    onClick={() => handleStepChange(step)}
                    className={`transition-all duration-300 ease-in-out rounded-full ${
                      isActive 
                        ? 'w-[24px] h-[6px] bg-brand' 
                        : 'w-[6px] h-[6px] bg-brand opacity-50 hover:opacity-75'
                    }`}
                    aria-label={`Go to step ${step}`}
                  />
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
