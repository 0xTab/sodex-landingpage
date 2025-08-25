import Image from 'next/image';
import Logo from './Logo';
import LandingButton from './LandingButton';

export default function HeroSection() {
  return (
    <section className="relative w-full mobile:h-[804px] pc:h-[734px] overflow-hidden pc:pt-[13%]">
      {/* Background Image */}
      <div className="absolute inset-0 mobile:hidden">
        <Image
          src="/img/home/content1.webp"
          alt="Content 1 Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      <div className="absolute inset-0  pc:hidden">
        <Image
          src="/img/home/mobile-content1.webp"
          alt="Content 1 Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      
      {/* Vision Section Content */}
      <div className="relative z-10 flex h-full justify-center mobile:px-10 mobile:pt-[220px] w-full">
        <div className="flex w-full pc:max-w-[1200px] flex-col items-center mobile:gap-8 pc:gap-12">
          {/* Logo */}
          <Logo size="medium" />
    
          {/* Main Vision Content */}
          <div className="flex flex-col w-full items-center mobile:gap-8 pc:gap-[32px]">
            {/* Vision Title */}
            <div className="text-center">
              <h1 className="text-white mobile:text-4xl pc:text-[56px] font-latoBold  leading-normal pc:max-w-[700px] mx-auto">
                Building the Infrastructure for a New Financial Era
              </h1>
            </div>
            
            {/* Vision Subtitle */}
            <div className="text-center">
              <p className="text-secondary mobile:text-sm pc:text-lg  pc:max-w-[554px] mx-auto leading-relaxed">
                SoDEX devotes to bridge the global information and asset gap Focused solely on real user needs in the real world.
              </p>
            </div>
            
            {/* Call to Action Button */}
            <LandingButton text="Start Trading" />
          </div>
        </div>
      </div>
    </section>
  );
}
