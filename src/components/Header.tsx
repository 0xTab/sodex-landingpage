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
        {/* Status Bar */}
        <div className="w-full h-[59px] relative bg-primary">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-[11px] transform -translate-x-1/2 w-[125px] h-[37px] bg-black rounded-[18px]"></div>

          {/* Time */}
          <div className="absolute left-[45px] top-[19px] w-[54px] h-[20px]">
            <span className="text-white text-center font-bold text-[17px] leading-normal tracking-[-0.4px]">9:41</span>
          </div>

          {/* Status Icons */}
          <div className="absolute right-[37px] top-[23px] flex items-center gap-[7.33px]">
            {/* Signal */}
            <div className="flex items-end gap-[1px] h-[14px]">
              <div className="w-[3px] h-[4px] bg-white rounded-[1px]"></div>
              <div className="w-[3px] h-[7px] bg-white rounded-[1px]"></div>
              <div className="w-[3px] h-[10px] bg-white rounded-[1px]"></div>
              <div className="w-[3px] h-[14px] bg-white rounded-[1px]"></div>
            </div>

            {/* WiFi */}
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.83693 3.89168C12.3035 3.89179 14.6757 4.84944 16.4633 6.5667C16.5979 6.69928 16.8131 6.69761 16.9457 6.56295L18.2324 5.25075C18.2996 5.18245 18.337 5.08994 18.3364 4.99369C18.3359 4.89743 18.2974 4.80537 18.2295 4.73787C13.5375 0.194403 6.13548 0.194403 1.44363 4.73787C1.37563 4.80532 1.3371 4.89735 1.33641 4.99361C1.33572 5.08986 1.37318 5.1824 1.44027 5.25075L2.72737 6.56295C2.85987 6.69781 3.07521 6.69949 3.20972 6.5667C4.99762 4.84933 7.37008 3.89168 9.83693 3.89168ZM9.83693 8.16076C11.1921 8.16068 12.499 8.66966 13.5035 9.58882C13.6394 9.71926 13.8534 9.71644 13.9859 9.58244L15.2712 8.27024C15.3389 8.20141 15.3764 8.10804 15.3754 8.01101C15.3745 7.91399 15.335 7.82141 15.266 7.75398C12.2069 4.8787 7.46946 4.8787 4.41051 7.75398C4.34141 7.8214 4.30191 7.91403 4.301 8.01109C4.30009 8.10815 4.33778 8.20151 4.40562 8.27024L5.69051 9.58244C5.823 9.71644 6.037 9.71926 6.17288 9.58882C7.17677 8.67027 8.48262 8.16133 9.83693 8.16076ZM12.4115 11.033C12.4135 11.1303 12.3757 11.2241 12.3069 11.2923L10.0836 13.5594C10.0185 13.626 9.92961 13.6635 9.83693 13.6635C9.74424 13.6635 9.65533 13.626 9.59023 13.5594L7.36651 11.2923C7.29781 11.2241 7.26001 11.1302 7.26211 11.033C7.26411 10.9357 7.30581 10.8435 7.37731 10.7783C8.79711 9.56482 10.8767 9.56482 12.2965 10.7783C12.368 10.8436 12.4096 10.9357 12.4115 11.033Z" fill="white" />
            </svg>

            {/* Battery */}
            <div className="relative w-[24px] h-[12px] border border-white/40 rounded-[2.67px]">
              <div className="absolute right-[2px] top-[2px] w-[10px] h-[8px] bg-white rounded-[1px]"></div>
              <div className="absolute right-[-2px] top-[4px] w-[1px] h-[4px] bg-white/40 rounded-r-[1px]"></div>
            </div>
          </div>
        </div>

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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 9.375V10.625C17.5 10.7908 17.4342 10.9497 17.3169 11.0669C17.1997 11.1842 17.0408 11.25 16.875 11.25H3.125C2.95924 11.25 2.80027 11.1842 2.68306 11.0669C2.56585 10.9497 2.5 10.7908 2.5 10.625V9.375C2.5 9.20924 2.56585 9.05027 2.68306 8.93306C2.80027 8.81585 2.95924 8.75 3.125 8.75H16.875C17.0408 8.75 17.1997 8.81585 17.3169 8.93306C17.4342 9.05027 17.5 9.20924 17.5 9.375ZM16.875 13.75H3.125C2.95924 13.75 2.80027 13.8158 2.68306 13.9331C2.56585 14.0503 2.5 14.2092 2.5 14.375V15.625C2.5 15.7908 2.56585 15.9497 2.68306 16.0669C2.80027 16.1842 2.95924 16.25 3.125 16.25H16.875C17.0408 16.25 17.1997 16.1842 17.3169 16.0669C17.4342 15.9497 17.5 15.7908 17.5 15.625V14.375C17.5 14.2092 17.4342 14.0503 17.3169 13.9331C17.1997 13.8158 17.0408 13.75 16.875 13.75ZM16.875 3.75H3.125C2.95924 3.75 2.80027 3.81585 2.68306 3.93306C2.56585 4.05027 2.5 4.20924 2.5 4.375V5.625C2.5 5.79076 2.56585 5.94973 2.68306 6.06694C2.80027 6.18415 2.95924 6.25 3.125 6.25H16.875C17.0408 6.25 17.1997 6.18415 17.3169 6.06694C17.4342 5.94973 17.5 5.79076 17.5 5.625V4.375C17.5 4.20924 17.4342 4.05027 17.3169 3.93306C17.1997 3.81585 17.0408 3.75 16.875 3.75Z" fill="white" />
                </svg>
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
