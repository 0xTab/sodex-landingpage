import Image from 'next/image';

export default function Content1() {
  return (
    <section className="relative h-[700px] w-full overflow-hidden">
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
      <div className="relative z-10 flex h-full items-center justify-center px-4 mobile:px-8 pc:px-[120px]">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-8">
          {/* Main Vision Content */}
          <div className="flex flex-col items-center gap-8 mobile:gap-4">
            {/* Vision Text Content */}
            <div className="text-center">
              <p className="text-white text-lg mobile:text-base opacity-80 max-w-2xl mx-auto leading-relaxed">
                SoDEX devotes to bridge the global information and asset gap<br />
                Focused solely on real user needs in the real world.
              </p>
            </div>
            
            {/* Call to Action Button */}
            <button className="bg-brand hover:bg-brand/90 transition-colors duration-200 text-white font-semibold px-8 py-3 rounded-lg mobile:px-6 mobile:py-2 mobile:text-sm">
              Start Trading
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
