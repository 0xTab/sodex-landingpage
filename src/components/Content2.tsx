"use client";
import React, { useState } from 'react';
import Image from 'next/image';

// Feature data for the Figma design style
const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.5 47.54H1.5V46.46H46.5V47.54ZM46.5 41.54H24V40.46H46.5V41.54ZM19.5 35.54H1.5V34.46H19.5V35.54ZM32.577 31.0355C30.8865 31.0355 29.196 30.3995 27.9105 29.126L24 25.259L20.0925 29.126C17.5185 31.6715 13.3305 31.6715 10.7565 29.126C9.507 27.8915 8.82 26.249 8.82 24.5015C8.82 22.7525 9.507 21.1085 10.7565 19.8725C13.332 17.327 17.52 17.327 20.094 19.8725L24 23.7395L27.909 19.8725C30.4815 17.3255 34.671 17.3255 37.2435 19.8725C38.493 21.1085 39.18 22.7525 39.18 24.5015C39.1785 26.249 38.4915 27.89 37.2435 29.126C35.958 30.3995 34.266 31.0355 32.577 31.0355ZM24.768 24.5L28.668 28.358C30.822 30.491 34.3275 30.491 36.4845 28.358C37.5255 27.3275 38.0985 25.958 38.0985 24.5015C38.1 23.0435 37.5255 21.6725 36.4845 20.6405C34.3275 18.5075 30.8235 18.5075 28.668 20.6405L24.768 24.5ZM15.4245 19.0415C14.0085 19.0415 12.5925 19.574 11.5155 20.6405C10.473 21.6725 9.9 23.0435 9.9 24.5015C9.9 25.958 10.473 27.329 11.5155 28.358C13.671 30.4895 17.178 30.4925 19.332 28.358L23.2335 24.5L19.332 20.6405C18.255 19.5755 16.8405 19.0415 15.4245 19.0415ZM46.5 14.54H24V13.46H46.5V14.54ZM24 8.53996H1.5V7.45996H24V8.53996ZM46.5 2.53996H1.5V1.45996H46.5V2.53996ZM46.5 7.99996C46.5 8.41396 46.164 8.74996 45.75 8.74996C45.336 8.74996 45 8.41396 45 7.99996C45 7.58596 45.336 7.24996 45.75 7.24996C46.164 7.24996 46.5 7.58596 46.5 7.99996ZM42.75 7.24996C42.336 7.24996 42 7.58596 42 7.99996C42 8.41396 42.336 8.74996 42.75 8.74996C43.164 8.74996 43.5 8.41396 43.5 7.99996C43.5 7.58596 43.164 7.24996 42.75 7.24996ZM5.25 29.75C4.836 29.75 4.5 30.086 4.5 30.5C4.5 30.914 4.836 31.25 5.25 31.25C5.664 31.25 6 30.914 6 30.5C6 30.086 5.664 29.75 5.25 29.75ZM23.25 34.25C22.836 34.25 22.5 34.586 22.5 35C22.5 35.414 22.836 35.75 23.25 35.75C23.664 35.75 24 35.414 24 35C24 34.586 23.664 34.25 23.25 34.25ZM2.25 40.25C1.836 40.25 1.5 40.586 1.5 41C1.5 41.414 1.836 41.75 2.25 41.75C2.664 41.75 3 41.414 3 41C3 40.586 2.664 40.25 2.25 40.25ZM45.75 34.25C45.336 34.25 45 34.586 45 35C45 35.414 45.336 35.75 45.75 35.75C46.164 35.75 46.5 35.414 46.5 35C46.5 34.586 46.164 34.25 45.75 34.25ZM2.25 29.75C1.836 29.75 1.5 30.086 1.5 30.5C1.5 30.914 1.836 31.25 2.25 31.25C2.664 31.25 3 30.914 3 30.5C3 30.086 2.664 29.75 2.25 29.75ZM2.25 13.25C1.836 13.25 1.5 13.586 1.5 14C1.5 14.414 1.836 14.75 2.25 14.75C2.664 14.75 3 14.414 3 14C3 13.586 2.664 13.25 2.25 13.25ZM45.75 17.75C45.336 17.75 45 18.086 45 18.5C45 18.914 45.336 19.25 45.75 19.25C46.164 19.25 46.5 18.914 46.5 18.5C46.5 18.086 46.164 17.75 45.75 17.75Z" fill="#FF7637"/>
      </svg>
    ),
    title: "OnChain Order book",
    description: "Fully onchain order book.Trustless execution with verifiable settlement and composability"
  },
  {
    icon: (
      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.5 13.46H43.5C43.2015 13.46 42.96 13.7015 42.96 14V14.96H34.635C34.263 13.211 33.654 11.5475 32.7885 10.04H43.5V8.95996H32.112C29.046 4.43746 23.8635 1.45996 18 1.45996C8.60396 1.45996 0.959961 9.10396 0.959961 18.5C0.959961 27.896 8.60396 35.54 18 35.54C22.5045 35.54 26.6055 33.782 29.6565 30.9185L46.119 47.3825L46.884 46.6175L30.42 30.155C32.5095 27.9275 34.002 25.136 34.659 22.04H43.5V20.96H34.8435C34.9605 20.1545 35.0415 19.337 35.0415 18.5C35.0415 17.663 34.9695 16.844 34.8525 16.04H42.96V17C42.96 17.2985 43.2015 17.54 43.5 17.54H46.5C46.7985 17.54 47.04 17.2985 47.04 17V14C47.04 13.7015 46.7985 13.46 46.5 13.46ZM18 34.46C9.19946 34.46 2.03996 27.3005 2.03996 18.5C2.03996 9.69946 9.19946 2.53996 18 2.53996C23.8665 2.53996 28.9905 5.73196 31.764 10.46H20.04V7.99996C20.04 7.70146 19.7985 7.45996 19.5 7.45996H13.5C13.2015 7.45996 12.96 7.70146 12.96 7.99996V10.46H8.99996V11.54H12.96V14C12.96 14.2985 13.2015 14.54 13.5 14.54H19.5C19.7985 14.54 20.04 14.2985 20.04 14V11.54H32.34C33.2925 13.493 33.855 15.6635 33.933 17.96H8.99996V19.04H33.9315C33.8535 21.3365 33.291 23.507 32.3385 25.46H24.5385V23C24.5385 22.7015 24.297 22.46 23.9985 22.46H17.9985C17.7 22.46 17.4585 22.7015 17.4585 23V25.46H8.99996V26.54H17.46V29C17.46 29.2985 17.7015 29.54 18 29.54H24C24.2985 29.54 24.54 29.2985 24.54 29V26.54H31.764C28.9905 31.2695 23.8665 34.46 18 34.46ZM18.96 8.53996V13.46H14.04V8.53996H18.96ZM23.46 23.54V28.46H18.54V23.54H23.46ZM45.96 16.46H44.04V14.54H45.9585L45.96 16.46ZM30 38.96H27C26.7015 38.96 26.46 39.2015 26.46 39.5V40.46H8.99996V41.5415H26.46V42.5C26.46 42.7985 26.7015 43.04 27 43.04H30C30.2985 43.04 30.54 42.7985 30.54 42.5V39.5C30.54 39.2015 30.2985 38.96 30 38.96ZM29.46 41.96H27.54V40.04H29.4585L29.46 41.96Z" fill="#FF7637"/>
      </svg>
    ),
    title: "Secure and transparent",
    description: "All trades are on‑chain and viewable anytime via the ValueChain block explorer."
  },
  {
    icon: (
      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.003 47.5325C22.7115 47.5325 21.42 47.426 20.1675 47.2145L20.346 46.148C21.54 46.3505 22.7715 46.451 24.003 46.451C30.975 46.451 37.3785 43.25 41.571 37.67L42.435 38.318C38.037 44.174 31.3185 47.5325 24.003 47.5325ZM46.5 37.79C46.407 37.79 46.311 37.7645 46.227 37.715L37.2345 32.4575C37.0695 32.3615 36.966 32.183 36.966 31.991C36.966 31.799 37.068 31.622 37.2345 31.5245L46.227 26.282C46.3965 26.1845 46.6005 26.1845 46.7685 26.279C46.935 26.375 47.04 26.555 47.04 26.747V37.247C47.04 37.4405 46.9365 37.619 46.767 37.715C46.686 37.766 46.593 37.79 46.5 37.79ZM38.5785 31.9925L45.96 36.308V27.6905L38.5785 31.9925Z" fill="#FF7637"/>
      </svg>
    ),
    title: "Diverse Assets",
    description: "Multiple assets—spot tokens, stock tokens, and index tokens—with one-click buying"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.2165 40.218L36.7215 36.468L37.26 35.5335L43.755 39.2835L43.2165 40.218ZM46.5 29.04H39V27.96H46.5V29.04ZM24 29.04L1.5 29.0325V27.951L24 27.9585V29.04ZM37.26 21.468L36.7215 20.532L43.2165 16.782L43.755 17.718L37.26 21.468ZM10.74 21.468L4.245 17.718L4.785 16.782L11.28 20.532L10.74 21.468Z" fill="#FF7637"/>
      </svg>
    ),
    title: "Low Fees",
    description: "Zero gas and low fees on all orders."
  }
];

export default function Content2() {
  const [isSecondStyle, setIsSecondStyle] = useState(false);

  const toggleStyle = () => {
    setIsSecondStyle(!isSecondStyle);
  };

  return (
    <section className="relative h-[866px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/home/content3.webp"
          alt="Content 2 Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-[#212121]"></div>

      {/* Toggle Button */}
      <button
        onClick={toggleStyle}
        className="absolute top-4 right-4 z-20 bg-brand hover:bg-brand/90 transition-colors duration-200 text-white font-semibold px-4 py-2 rounded-lg mobile:px-3 mobile:py-2 mobile:text-sm"
      >
        {isSecondStyle ? 'Original Style' : 'Feature Style'}
      </button>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 mobile:px-8 pc:px-[120px]">
        {!isSecondStyle ? (
          // Original Style
          <div className="flex w-full max-w-[1200px] flex-col items-center gap-12 mobile:gap-8">
            {/* Title */}
            <div className="text-center">
              <h2 className="text-white text-4xl mobile:text-2xl font-latoBold leading-tight max-w-4xl mx-auto">
                SoDEX — The next‑gen on‑chain exchange
              </h2>
            </div>

            {/* Trading Interface Showcase */}
            <div className="w-full max-w-[1200px] relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/56e7d636dbd6e62bdb92715ea52e873a6f0d4afb?width=2400"
                  alt="SoDEX Trading Interface"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />

                {/* Optional overlay for better visual hierarchy */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>

            {/* Supporting Text */}
            <div className="text-center max-w-3xl">
              <p className="text-white/80 text-lg mobile:text-base leading-relaxed">
                Experience the future of decentralized trading with our advanced on-chain exchange platform.
                Built for traders who demand speed, security, and seamless user experience.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex gap-4 mobile:flex-col mobile:w-full mobile:gap-3">
              <button className="bg-brand hover:bg-brand/90 transition-colors duration-200 text-white font-semibold px-8 py-3 rounded-lg mobile:px-6 mobile:py-3 mobile:text-sm">
                Launch Exchange
              </button>
              <button className="border border-white/30 hover:border-white/50 transition-colors duration-200 text-white font-semibold px-8 py-3 rounded-lg mobile:px-6 mobile:py-3 mobile:text-sm">
                Learn More
              </button>
            </div>
          </div>
        ) : (
          // Figma Design Style
          <div className="flex w-full max-w-[1200px] flex-col items-center gap-12 mobile:gap-8">
            {/* Title */}
            <div className="text-center">
              <h2 className="text-white text-4xl mobile:text-2xl font-latoBold leading-tight max-w-4xl mx-auto">
                SoDEX — The next‑gen on‑chain exchange
              </h2>
            </div>

            {/* Features Layout - Row arrangement with image in center */}
            <div className="w-full max-w-[1200px] relative">
              <div className="flex flex-row items-center justify-between gap-8 mobile:flex-col mobile:gap-6">
                {/* Left Features */}
                <div className="flex flex-col gap-6 mobile:gap-4">
                  <FeatureCard feature={features[0]} />
                  <FeatureCard feature={features[1]} />
                </div>

                {/* Center - Trading Interface */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-[#393939] max-w-[541px] mobile:max-w-[320px]">
                    <Image
                      src="https://api.builder.io/api/v1/image/assets/TEMP/3376c7a13df1f2b350f73635b5a66efd70fff1bb?width=1083"
                      alt="SoDEX Trading Interface"
                      width={541}
                      height={310}
                      className="w-full h-auto object-cover rounded-lg"
                      priority
                    />
                  </div>
                </div>

                {/* Right Features */}
                <div className="flex flex-col gap-6 mobile:gap-4">
                  <FeatureCard feature={features[2]} />
                  <FeatureCard feature={features[3]} />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center flex flex-col items-center gap-4 mobile:gap-3">
              <h3 className="text-white text-3xl mobile:text-xl font-latoBold">
                SoDEX on ValueChain
              </h3>
              <p className="text-[#A3A3A3] text-3xl mobile:text-lg font-latoRegular">
                Infrastructure for the future.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div className="flex items-center gap-4 py-5 mobile:py-4">
      <div className="flex-shrink-0">
        {feature.icon}
      </div>
      <div className="flex-1">
        <h4 className="text-white text-xl mobile:text-lg font-latoRegular mb-1">
          {feature.title}
        </h4>
        <p className="text-[#A3A3A3] text-sm mobile:text-xs font-latoRegular leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
