import Image from 'next/image';

export default function Content4() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-primary via-primary to-[#212121]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/home/content4.webp"
          alt="Content 4 Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-[120px] mobile:px-8 mobile:py-16">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-12 mobile:gap-8">
          
          {/* Title Section */}
          <div className="flex w-full max-w-[610px] flex-col items-center gap-6 text-center">
            <h2 className="font-latoBold text-4xl font-bold text-white mobile:text-2xl">
              The SoDEX Stack
            </h2>
            <p className="font-latoRegular text-xl text-[#A3A3A3] mobile:text-lg">
              High-performance, Scalable Blockchain Architecture
            </p>
          </div>

          {/* Architecture Diagram Container */}
          <div className="relative flex h-[515px] w-full max-w-[800px] items-center justify-center mobile:h-[400px] mobile:max-w-full">
            
            {/* Guest Chains Layer (Top) */}
            <div className="absolute left-1/2 top-8 z-30 -translate-x-1/2 mobile:top-4">
              <div className="relative">
                {/* Guest Chains 3D Block */}
                <div className="relative h-[180px] w-[300px] mobile:h-[120px] mobile:w-[200px]">
                  {/* Main Block */}
                  <div className="absolute inset-0 rotate-45 transform rounded-lg border border-white bg-gradient-to-br from-gray-400 to-gray-600 shadow-lg mobile:rounded-md"></div>
                  
                  {/* Side Faces */}
                  <div className="absolute bottom-0 left-4 h-2 w-[280px] bg-gradient-to-r from-gray-500 to-gray-400 mobile:left-2 mobile:h-1 mobile:w-[190px]"></div>
                  <div className="absolute bottom-0 right-4 h-[170px] w-2 bg-gradient-to-b from-gray-300 to-gray-700 mobile:right-2 mobile:h-[110px] mobile:w-1"></div>
                </div>
                
                {/* Guest Chains Label */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 transform text-center">
                  <h3 className="font-interBold text-xl font-bold text-white mobile:text-sm">Guest Chains</h3>
                </div>
                
                {/* EVM Compatible System Chain */}
                <div className="absolute -left-32 -top-8 mobile:-left-20 mobile:-top-4">
                  <div className="relative">
                    <div className="h-[120px] w-[250px] rotate-12 transform rounded-md border border-brand bg-gradient-to-br from-[#1D1D1D] to-[#262626] mobile:h-[80px] mobile:w-[160px]"></div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 transform text-center">
                      <p className="font-interBold text-sm font-semibold text-white mobile:text-xs">
                        EVM-compatible<br />system chain
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Application Chains */}
                <div className="absolute -right-24 top-16 space-y-4 mobile:-right-16 mobile:top-8 mobile:space-y-2">
                  {/* SoDEX Futures */}
                  <div className="relative">
                    <div className="h-[60px] w-[140px] rotate-45 transform rounded-md border border-white bg-gradient-to-br from-brand to-[#FF5722] mobile:h-[40px] mobile:w-[90px]"></div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 transform text-center">
                      <p className="font-interBold text-xs font-semibold text-white mobile:text-[10px]">
                        SoDEX Futures
                      </p>
                    </div>
                  </div>
                  
                  {/* SoDEX Spot */}
                  <div className="relative">
                    <div className="h-[60px] w-[140px] rotate-45 transform rounded-md border border-white bg-gradient-to-br from-brand to-[#FF5722] mobile:h-[40px] mobile:w-[90px]"></div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 transform text-center">
                      <p className="font-interBold text-xs font-semibold text-white mobile:text-[10px]">
                        SoDEX Spot
                      </p>
                    </div>
                  </div>
                  
                  {/* Other Chains */}
                  <div className="flex space-x-2">
                    <div className="h-[40px] w-[40px] rotate-45 transform rounded border border-dashed border-white bg-[#613825] mobile:h-[25px] mobile:w-[25px]"></div>
                    <div className="h-[40px] w-[40px] rotate-45 transform rounded border border-dashed border-white bg-[#613825] mobile:h-[25px] mobile:w-[25px]"></div>
                    <div className="h-[40px] w-[40px] rotate-45 transform rounded border border-dashed border-white bg-[#613825] mobile:h-[25px] mobile:w-[25px]"></div>
                  </div>
                </div>
              </div>
              
              {/* Unified Account Description */}
              <div className="absolute -left-64 top-0 w-[250px] mobile:-left-32 mobile:w-[150px]">
                <p className="font-latoRegular text-sm text-white mobile:text-xs">
                  Unified account across guest chains — same address and keys to access all D²Apps.
                </p>
              </div>
            </div>

            {/* Host Chain Layer (Bottom) */}
            <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 mobile:bottom-4">
              <div className="relative">
                {/* Host Chain 3D Block */}
                <div className="relative h-[140px] w-[280px] mobile:h-[90px] mobile:w-[180px]">
                  {/* Main Block */}
                  <div className="absolute inset-0 rotate-45 transform rounded-lg border border-white bg-gradient-to-br from-gray-600 to-gray-800 opacity-80 shadow-lg mobile:rounded-md"></div>
                  
                  {/* Side Faces */}
                  <div className="absolute bottom-0 left-4 h-2 w-[260px] bg-gradient-to-r from-gray-700 to-gray-600 mobile:left-2 mobile:h-1 mobile:w-[170px]"></div>
                  <div className="absolute bottom-0 right-4 h-[130px] w-2 bg-gradient-to-b from-gray-500 to-gray-900 mobile:right-2 mobile:h-[80px] mobile:w-1"></div>
                </div>
                
                {/* Host Chain Label */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 transform text-center">
                  <h3 className="font-interBold text-lg font-bold text-white mobile:text-sm">Host Chain</h3>
                  <p className="font-interRegular text-xs text-white mobile:text-[10px]">
                    Consensus + Interoperability<br />between D²apps
                  </p>
                </div>
              </div>
              
              {/* Host Chain Description */}
              <div className="absolute -left-72 top-8 w-[280px] mobile:-left-40 mobile:top-4 mobile:w-[160px]">
                <p className="font-latoRegular text-sm text-white mobile:text-xs">
                  The host chain provides shared security, and settlement finality to facilitate interoperability among D²Apps.
                </p>
              </div>
            </div>

            {/* Application Chains Description */}
            <div className="absolute right-0 top-1/2 w-[280px] -translate-y-1/2 mobile:right-2 mobile:w-[140px]">
              <p className="font-latoRegular text-sm text-white mobile:text-xs">
                Spot and futures order-book DEX run on two parallel app‑chains to maximize on‑chain trading performance.
              </p>
            </div>

            {/* Connecting Arrows */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-24 w-24 items-center justify-center mobile:h-16 mobile:w-16">
                <div className="h-0.5 w-16 bg-white opacity-30 mobile:w-12"></div>
                <div className="absolute">
                  <div className="h-4 w-0.5 bg-white opacity-30 mobile:h-3"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
