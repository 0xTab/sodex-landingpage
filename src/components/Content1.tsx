import Image from 'next/image';
import Logo from './Logo';
import LandingButton from './LandingButton';

export default function Content1() {
  return (
    <section className="relative w-full mobile:h-[804px] pc:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/home/content1.webp"
          alt="Content 1 Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      
      {/* Vision Section Content */}
      <div className="relative z-10 flex h-full items-center justify-center mobile:px-10 mobile:pt-[220px] pc:px-[120px]">
        <div className="flex w-full mobile:max-w-[313px] pc:max-w-[1200px] flex-col items-center mobile:gap-8 pc:gap-12">
          {/* Logo */}
          <div className="mobile:block pc:hidden">
            <Logo size="medium" />
          </div>

          {/* Main Vision Content */}
          <div className="flex flex-col items-center mobile:gap-8 pc:gap-12">
            {/* Vision Title */}
            <div className="text-center">
              <h1 className="text-white mobile:text-[36px] pc:text-5xl font-latoBold leading-normal mobile:max-w-[313px] pc:max-w-4xl mx-auto">
                Building the Infrastructure for a New Financial Era
              </h1>
            </div>
            
            {/* Vision Subtitle */}
            <div className="text-center">
              <p className="text-text-secondary-500300 mobile:text-sm pc:text-lg mobile:max-w-[313px] pc:max-w-2xl mx-auto leading-relaxed">
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
