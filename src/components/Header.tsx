"use client"
import React, { useState } from 'react';
import Logo from './Logo';
import Image from 'next/image';
import LandingButton from './LandingButton';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Status Bar - Mobile Only */}
      <div className="mobile:block pc:hidden">
   
        {/* Mobile Header */}
        <div className="w-full px-5 pt-5 pb-0">
          <div className="flex h-[44px] px-6 items-center gap-8 rounded-[99px] border border-default bg-white/10 backdrop-blur-[6px]">
            {/* Logo Section */}
            <div className="flex items-center gap-[2.33px]">
              <Logo size="small" />
            </div>

            {/* Navigation Section */}
            <div className="flex items-center justify-end flex-1 h-full">
              {/* Menu Button */}
              <button
                className="w-8 h-8 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Image src="/icons/menu-icon.svg" alt="Menu" width={32} height={32} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="mobile:hidden pc:block">
        <header className="w-full max-w-[1200px] fixed top-[32px] left-0 right-0 z-50 h-14 mx-auto flex items-center gap-8 px-2 pl-6 bg-white/10 border border-default rounded-[99px] backdrop-blur-xl">
          {/* Logo Section */}
          <div className="flex items-center gap-[2.67px]">
            <Logo size="small" />
          </div>

          {/* Navigation Section - Desktop */}
          <nav className="flex items-center justify-end flex-1 h-full">
            {/* X (Twitter) Tab */}
            <div className="flex flex-col justify-center items-center px-3 h-14 cursor-pointer hover:bg-white/5 transition-colors">
              <div className="flex justify-center items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <Image src="/logo/x-icon.svg" alt="Twitter" width={17} height={16} />
                </div>
              </div>
            </div>

            {/* Telegram Tab */}
            <div className="flex flex-col justify-center items-center px-3 h-14 cursor-pointer hover:bg-white/5 transition-colors">
              <div className="flex justify-center items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <Image src="/logo/telegram-icon.svg" alt="Telegram" width={17} height={16} />
                </div>
              </div>
            </div>

            {/* Docs Tab */}
            <div className="flex flex-col justify-center items-center px-3 h-14 cursor-pointer hover:bg-white/5 transition-colors">
              <div className="flex justify-center items-center gap-2">
                <span className="text-white font-latoRegular text-sm">Docs</span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center pl-3 h-14 cursor-pointer py-2 transition-colors">
              <LandingButton text="Start Trading" />
            </div>

          </nav>
        </header>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile:block pc:hidden absolute top-full left-0 right-0 mt-2 mx-5 bg-white/10 backdrop-blur-xl border border-default rounded-lg p-4 z-50">
          <nav className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white/5 transition-colors rounded">
              <svg width="20" height="20" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.61708 7.0812L13.9883 2H12.9524L9.15693 6.4119L6.12548 2H2.62903L7.21323 8.6716L2.62903 14H3.66493L7.67308 9.34085L10.8745 14H14.371L9.61708 7.0812ZM8.19828 8.7304L7.73383 8.06605L4.03813 2.7798H5.62923L8.61168 7.04595L9.07613 7.7103L12.9529 13.2556H11.3618L8.19828 8.7304Z" fill="white" />
              </svg>
              <span className="text-white font-latoRegular text-sm">Twitter</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white/5 transition-colors rounded">
              <svg width="20" height="20" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.22125 7.84703C5.5965 6.37683 7.84663 5.40748 8.97171 4.93918C12.1878 3.60192 12.8552 3.36967 13.2911 3.36189C13.387 3.36026 13.6004 3.38396 13.7397 3.49665C13.8555 3.59161 13.8881 3.72004 13.9043 3.81012C13.9188 3.9002 13.9387 4.1055 13.9225 4.26576C13.7488 6.09628 12.9945 10.5384 12.6111 12.5887C12.4501 13.4562 12.1299 13.7471 11.8206 13.7755C11.1477 13.8373 10.6376 13.3312 9.98643 12.9045C8.96807 12.2365 8.39291 11.8208 7.40349 11.1691C6.26032 10.4159 7.00191 10.0019 7.65308 9.32538C7.82311 9.1483 10.7859 6.45406 10.842 6.20969C10.8492 6.17912 10.8565 6.06517 10.7878 6.00512C10.7208 5.94488 10.6213 5.9655 10.5489 5.98178C10.4458 6.00493 8.81972 7.08082 5.66515 9.20925C5.20391 9.52652 4.78608 9.68117 4.40985 9.67303C3.99744 9.66417 3.20161 9.43933 2.61013 9.24724C1.88661 9.01155 1.30957 8.88692 1.36021 8.48663C1.38554 8.27825 1.67318 8.06499 2.22125 7.84703Z" fill="white" />
              </svg>
              <span className="text-white font-latoRegular text-sm">Telegram</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white/5 transition-colors rounded">
              <span className="text-white font-latoRegular text-sm">Docs</span>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
