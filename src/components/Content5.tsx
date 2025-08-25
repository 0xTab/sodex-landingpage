'use client'
import Image from 'next/image';
import LandingButton from './LandingButton';
import { FooterLinkType, SocialLinkType } from '@/types';




const pillars = [
  {
    letter: "S",
    icon: (
      <Image src="/icons/content5-icon1.svg" alt="S" width={64} height={64} />
    ),
    title: "Seamlessly on‑chain and public, SoDEX welcomes all.",
    gridClass: "mobile:col-span-1 pc:col-span-3 pc:row-span-1 pc:min-w-[500px]"
  },
  {
    letter: "O",
    icon: (
      <Image src="/icons/content5-icon2.svg" alt="S" width={64} height={64} />
    ),
    title: "Open access to insight and quality assets, without gatekeepers.",
    gridClass: "mobile:col-span-1 pc:col-span-3 pc:row-span-1 pc:min-w-[500px]"
  },
  {
    letter: "D",
    icon: (
      <Image src="/icons/content5-icon3.svg" alt="S" width={64} height={64} />
    ),
    title: "Democratic by design: transparent markets, fair discovery.",
    gridClass: "mobile:col-span-1 pc:col-span-2 pc:row-span-1"
  },
  {
    letter: "E",
    icon: (
      <Image src="/icons/content5-icon4.svg" alt="S" width={64} height={64} />
    ),
    title: "Equal tools and rights for every investor, everywhere.",
    gridClass: "mobile:col-span-1 pc:col-span-2 pc:row-span-1"
  },
  {
    letter: "X",
    icon: (
      <Image src="/icons/content5-icon5.svg" alt="S" width={64} height={64} />
    ),
    title: "X‑ray transparency: verify value, don't just trust.",
    gridClass: "mobile:col-span-1 pc:col-span-2 pc:row-span-1"
  }
];

interface Content5Props {
  handleFooterLinks: (type: FooterLinkType) => void;
  handleSocialLinks: (type: SocialLinkType) => void;
}

export default function Content5({ handleFooterLinks, handleSocialLinks }: Content5Props) {
  return (
    <section className="relative w-full  pc:h-[734px] pc:px-[6.5%] pc:pt-[6.5%] pc:pb-[1%]  bg-gradient-to-b from-primary via-primary to-[#212121] ">
      {/* Content */}
      <div className="relative flex h-full items-center justify-center mobile:px-6 mobile:pt-20 mobile:pb-[16px]">
        <div className="flex w-full  pc:max-w-[1200px] flex-col items-center mobile:gap-6 pc:gap-16">

          {/* Mobile Layout - Stacked */}
          <div className="mobile:block pc:hidden flex flex-col mobile:space-y-[8px] w-full">
            {pillars.map((pillar, index) => (
              <div key={index} className="relative flex mobile:h-[160px] mobile:p-6 flex-col justify-between items-start rounded-lg bg-white/[0.04] overflow-hidden">
                {/* Icon */}
                <div className="flex-shrink-0 mobile:mb-4">
                  {pillar.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-white font-latoRegular mobile:text-base leading-normal mobile:max-w-[280px]">
                    {pillar.title}
                  </h3>
                </div>

                {/* Large Letter Background */}
                <div className="absolute mobile:right-[-21px] mobile:top-[-100px] text-white/[0.02] font-bold leading-[120%] mobile:text-[300px] pointer-events-none select-none">
                  {pillar.letter}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - CSS Grid */}
          <div className="mobile:hidden w-full">
            <div className="grid  pc:gap-2 pc:grid-cols-6 pc:grid-rows-2 w-full">

              {/* S Pillar - Row 1, Columns 1-3 */}
              <div className="pc:col-span-3 pc:row-span-1 relative flex pc:p-6 flex-col justify-between items-start rounded-lg bg-white/[0.04] overflow-hidden">
                {/* Icon */}
                <div className="flex-shrink-0 pc:mb-6">
                  {pillars[0].icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-white font-latoRegular pc:text-xl leading-normal pc:max-w-[400px]">
                    {pillars[0].title}
                  </h3>
                </div>

                {/* Large Letter Background */}
                <div className="absolute pc:right-0 pc:top-[-82px] text-white/[0.02] font-bold leading-[120%] pc:text-[300px] pointer-events-none select-none w-[194px] h-[360px]">
                  S
                </div>
              </div>

              {/* O Pillar - Row 1, Columns 4-6 */}
              <div className="pc:col-span-3 pc:row-span-1 pc:min-w-[500px] relative flex pc:p-6 flex-col justify-between items-start rounded-lg bg-white/[0.04] overflow-hidden">
                {/* Icon */}
                <div className="flex-shrink-0 pc:mb-6">
                  {pillars[1].icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-white font-latoRegular pc:text-xl leading-normal pc:max-w-[400px]">
                    {pillars[1].title}
                  </h3>
                </div>

                {/* Large Letter Background */}
                <div className="absolute pc:right-0 pc:top-[-82px] text-white/[0.02] font-bold leading-[120%] pc:text-[300px] pointer-events-none select-none w-[236px] h-[360px]">
                  O
                </div>
              </div>

              {/* D Pillar - Row 2, Columns 1-2 */}
              <div className="pc:col-span-2 pc:row-span-1 relative flex pc:p-6 flex-col justify-between items-start rounded-lg bg-white/[0.04] overflow-hidden">
                {/* Icon */}
                <div className="flex-shrink-0 pc:mb-6">
                  {pillars[2].icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-white font-latoRegular pc:text-xl leading-normal pc:max-w-[400px]">
                    {pillars[2].title}
                  </h3>
                </div>

                {/* Large Letter Background */}
                <div className="absolute pc:right-[-0.333px] pc:top-[-82px] text-white/[0.02] font-bold leading-[120%] pc:text-[300px] pointer-events-none select-none w-[218px] h-[360px]">
                  D
                </div>
              </div>

              {/* E Pillar - Row 2, Columns 3-4 */}
              <div className="pc:col-span-2 pc:row-span-1 relative flex pc:p-6 flex-col justify-between items-start rounded-lg bg-white/[0.04] overflow-hidden">
                {/* Icon */}
                <div className="flex-shrink-0 pc:mb-6">
                  {pillars[3].icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-white font-latoRegular pc:text-xl leading-normal pc:max-w-[400px]">
                    {pillars[3].title}
                  </h3>
                </div>

                {/* Large Letter Background */}
                <div className="absolute pc:right-[0.333px] pc:top-[-82px] text-white/[0.02] font-bold leading-[120%] pc:text-[300px] pointer-events-none select-none w-[188px] h-[360px]">
                  E
                </div>
              </div>

              {/* X Pillar - Row 2, Columns 5-6 */}
              <div className="pc:col-span-2 pc:row-span-1 relative flex pc:p-6 flex-col justify-between items-start rounded-lg bg-white/[0.04] overflow-hidden">
                {/* Icon */}
                <div className="flex-shrink-0 pc:mb-6">
                  {pillars[4].icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-white font-latoRegular pc:text-xl leading-normal pc:max-w-[400px]">
                    {pillars[4].title}
                  </h3>
                </div>

                {/* Large Letter Background */}
                <div className="absolute pc:right-0 pc:top-[-82px] text-white/[0.02] font-bold leading-[120%] pc:text-[300px] pointer-events-none select-none w-[205px] h-[360px]">
                  X
                </div>
              </div>
            </div>
          </div>

          {/* Start Trading Button */}
          <div className="mobile:mt-6 w-full">
            <div className="flex justify-center mb-[70px]">
              <LandingButton text="Start Trading" />
            </div>


            {/* Footer Links - Desktop */}
            <div className="mobile:hidden flex justify-between items-center mobile:gap-4 mobile:mt-4 w-full">
              <div className="flex items-center mobile:gap-4 pc:gap-6">
                <span className="text-secondary font-latoRegular mobile:text-xs pc:text-sm cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleFooterLinks('whitepaper')}
                >
                  WhitePaper
                </span>

              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center mobile:gap-4 pc:gap-6">
                <span className="text-secondary font-latoRegular mobile:text-xs pc:text-sm cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleFooterLinks('terms')}
                >
                  Terms of Service
                </span>
                <span className="text-secondary font-latoRegular mobile:text-xs pc:text-sm cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleFooterLinks('privacy')}
                >
                  Privacy Policy
                </span>
                {/* X (Twitter) */}
                <svg className="mobile:w-4 mobile:h-4 pc:w-5 pc:h-5 text-white cursor-pointer hover:text-brand transition-colors" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleSocialLinks('x')}
                >
                  <path d="M9.61708 7.0812L13.9883 2H12.9524L9.15693 6.4119L6.12548 2H2.62903L7.21323 8.6716L2.62903 14H3.66493L7.67308 9.34085L10.8745 14H14.371L9.61708 7.0812ZM8.19828 8.7304L7.73383 8.06605L4.03813 2.7798H5.62923L8.61168 7.04595L9.07613 7.7103L12.9529 13.2556H11.3618L8.19828 8.7304Z" fill="currentColor" />
                </svg>

                {/* Telegram */}
                <svg className="mobile:w-4 mobile:h-4 pc:w-5 pc:h-5 text-white cursor-pointer hover:text-brand transition-colors" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleSocialLinks('telegram')}
                >
                  <path d="M2.22125 7.84703C5.5965 6.37683 7.84663 5.40748 8.97171 4.93918C12.1878 3.60192 12.8552 3.36967 13.2911 3.36189C13.387 3.36026 13.6004 3.38396 13.7397 3.49665C13.8555 3.59161 13.8881 3.72004 13.9043 3.81012C13.9188 3.9002 13.9387 4.1055 13.9225 4.26576C13.7488 6.09628 12.9945 10.5384 12.6111 12.5887C12.4501 13.4562 12.1299 13.7471 11.8206 13.7755C11.1477 13.8373 10.6376 13.3312 9.98643 12.9045C8.96807 12.2365 8.39291 11.8208 7.40349 11.1691C6.26032 10.4159 7.00191 10.0019 7.65308 9.32538C7.82311 9.1483 10.7859 6.45406 10.842 6.20969C10.8492 6.17912 10.8565 6.06517 10.7878 6.00512C10.7208 5.94488 10.6213 5.9655 10.5489 5.98178C10.4458 6.00493 8.81972 7.08082 5.66515 9.20925C5.20391 9.52652 4.78608 9.68117 4.40985 9.67303C3.99744 9.66417 3.20161 9.43933 2.61013 9.24724C1.88661 9.01155 1.30957 8.88692 1.36021 8.48663C1.38554 8.27825 1.67318 8.06499 2.22125 7.84703Z" fill="currentColor" />
                </svg>
              </div>
            </div>
            
            {/* Footer Links - Mobile */}
            <div className="pc:hidden flex flex-col gap-4 items-center mobile:gap-4 mobile:mt-4 w-full">
              <div className="flex items-center mobile:gap-4 pc:gap-6">
                <span className="text-secondary font-latoRegular mobile:text-xs pc:text-sm cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleFooterLinks('whitepaper')}
                >
                  WhitePaper
                </span>
                <span className="text-secondary font-latoRegular mobile:text-xs pc:text-sm cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleFooterLinks('terms')}
                >
                  Terms of Service
                </span>
                <span className="text-secondary font-latoRegular mobile:text-xs pc:text-sm cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleFooterLinks('privacy')}
                >
                  Privacy Policy
                </span>
                <span className="text-secondary font-latoRegular mobile:text-xs pc:text-sm cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleFooterLinks('about')}
                >
                  About SoDEX
                </span>

              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center mobile:gap-4 pc:gap-6">
      
                {/* X (Twitter) */}
                <svg className="mobile:w-4 mobile:h-4 pc:w-5 pc:h-5 text-white cursor-pointer hover:text-brand transition-colors" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleSocialLinks('x')}
                >
                  <path d="M9.61708 7.0812L13.9883 2H12.9524L9.15693 6.4119L6.12548 2H2.62903L7.21323 8.6716L2.62903 14H3.66493L7.67308 9.34085L10.8745 14H14.371L9.61708 7.0812ZM8.19828 8.7304L7.73383 8.06605L4.03813 2.7798H5.62923L8.61168 7.04595L9.07613 7.7103L12.9529 13.2556H11.3618L8.19828 8.7304Z" fill="currentColor" />
                </svg>

                {/* Telegram */}
                <svg className="mobile:w-4 mobile:h-4 pc:w-5 pc:h-5 text-white cursor-pointer hover:text-brand transition-colors" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleSocialLinks('telegram')}
                >
                  <path d="M2.22125 7.84703C5.5965 6.37683 7.84663 5.40748 8.97171 4.93918C12.1878 3.60192 12.8552 3.36967 13.2911 3.36189C13.387 3.36026 13.6004 3.38396 13.7397 3.49665C13.8555 3.59161 13.8881 3.72004 13.9043 3.81012C13.9188 3.9002 13.9387 4.1055 13.9225 4.26576C13.7488 6.09628 12.9945 10.5384 12.6111 12.5887C12.4501 13.4562 12.1299 13.7471 11.8206 13.7755C11.1477 13.8373 10.6376 13.3312 9.98643 12.9045C8.96807 12.2365 8.39291 11.8208 7.40349 11.1691C6.26032 10.4159 7.00191 10.0019 7.65308 9.32538C7.82311 9.1483 10.7859 6.45406 10.842 6.20969C10.8492 6.17912 10.8565 6.06517 10.7878 6.00512C10.7208 5.94488 10.6213 5.9655 10.5489 5.98178C10.4458 6.00493 8.81972 7.08082 5.66515 9.20925C5.20391 9.52652 4.78608 9.68117 4.40985 9.67303C3.99744 9.66417 3.20161 9.43933 2.61013 9.24724C1.88661 9.01155 1.30957 8.88692 1.36021 8.48663C1.38554 8.27825 1.67318 8.06499 2.22125 7.84703Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
