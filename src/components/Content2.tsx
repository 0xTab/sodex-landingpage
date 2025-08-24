import Image from 'next/image';

export default function Content2() {
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
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 mobile:px-8 pc:px-[120px]">
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
      </div>
    </section>
  );
}
