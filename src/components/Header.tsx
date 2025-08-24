"use client"
import React, { useState } from 'react';
import LandingButton from './LandingButton';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-[1200px] h-14 mx-auto flex items-center gap-8 px-2 pl-6 bg-white/10 border border-default rounded-[99px] backdrop-blur-xl">
      {/* Logo Section */}
      <div className="flex items-center gap-[2.67px]">
        <div className="flex items-center">
          {/* SoDEX Logo */}
          <div className="flex items-center">
            <div className="w-[28px] h-8 bg-white rounded-l-sm flex items-center justify-center">
              <div className="w-1 h-1 bg-[#FF4F20] rounded-full"></div>
            </div>
            <span className="text-white font-latoRegular text-base ml-2">SoDEX</span>
          </div>
        </div>
        <span className="text-white font-latoRegular text-sm hidden pc:inline">testnet</span>
      </div>

      {/* Navigation Section - Desktop */}
      <nav className="hidden pc:flex items-center justify-end flex-1 h-full">
        {/* X (Twitter) Tab */}
        <div className="flex flex-col justify-center items-center px-3 h-14 cursor-pointer hover:bg-white/5 transition-colors">
          <div className="flex justify-center items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.68 8.5L19.64 2H18.04L13.68 7.4L10.36 2H6L11.32 11.5L6 18H7.6L12.32 12.4L16 18H20.36L14.68 8.5Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Telegram Tab */}
        <div className="flex flex-col justify-center items-center px-3 h-14 cursor-pointer hover:bg-white/5 transition-colors">
          <div className="flex justify-center items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.64 6.8L13.36 14.4C13.24 15.04 12.88 15.2 12.32 14.88L10.4 13.6L9.44 14.52C9.32 14.64 9.2 14.76 9 14.76L9.12 12.8L13.76 8.48C14.04 8.24 13.72 8.08 13.36 8.32L7.6 11.76L5.76 11.2C5.24 11.04 5.24 10.64 5.88 10.4L14.64 6.8Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Docs Tab */}
        <div className="flex flex-col justify-center items-center px-3 h-14 cursor-pointer hover:bg-white/5 transition-colors">
          <div className="flex justify-center items-center gap-2">
            <span className="text-white font-latoRegular text-sm">Docs</span>
          </div>
        </div>
      </nav>

      {/* Button Section */}
      <div className="flex items-center justify-end h-full gap-3">
        <LandingButton text="Start Trading" />
        
        {/* Mobile Menu Button */}
        <button 
          className="pc:hidden w-8 h-8 flex flex-col justify-center items-center gap-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-xl border border-default rounded-lg p-4 pc:hidden">
          <nav className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white/5 transition-colors rounded">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.68 8.5L19.64 2H18.04L13.68 7.4L10.36 2H6L11.32 11.5L6 18H7.6L12.32 12.4L16 18H20.36L14.68 8.5Z" fill="white"/>
              </svg>
              <span className="text-white font-latoRegular text-sm">Twitter</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white/5 transition-colors rounded">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.64 6.8L13.36 14.4C13.24 15.04 12.88 15.2 12.32 14.88L10.4 13.6L9.44 14.52C9.32 14.64 9.2 14.76 9 14.76L9.12 12.8L13.76 8.48C14.04 8.24 13.72 8.08 13.36 8.32L7.6 11.76L5.76 11.2C5.24 11.04 5.24 10.64 5.88 10.4L14.64 6.8Z" fill="white"/>
              </svg>
              <span className="text-white font-latoRegular text-sm">Telegram</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white/5 transition-colors rounded">
              <span className="text-white font-latoRegular text-sm">Docs</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
