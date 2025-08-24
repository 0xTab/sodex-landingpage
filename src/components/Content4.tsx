import Image from 'next/image';

export default function Content4() {
  return (
    <section className="relative w-full overflow-hidden py-[120px] mobile:py-16">
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
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-[#212121]"></div>
      
      {/* Content */}
      <div className="relative z-10 flex justify-center px-4 mobile:px-8 pc:px-[120px]">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-12 mobile:gap-8">
          
          {/* Title Section */}
          <div className="flex flex-col items-center gap-6 max-w-[610px] text-center">
            <h2 className="text-white text-[40px] mobile:text-2xl font-latoBold leading-normal">
              The SoDEX Stack
            </h2>
            <p className="text-[#A3A3A3] text-xl mobile:text-base font-latoRegular">
              High-performance, Scalable Blockchain Architecture
            </p>
          </div>

          {/* Architecture Diagram Container */}
          <div className="relative w-full max-w-[1200px] h-[515px] mobile:h-[400px] flex justify-center items-center">
            
            {/* Host Chain (Bottom Layer) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-20">
              <div className="relative">
                {/* Host Chain Base */}
                <div className="w-[400px] h-[200px] mobile:w-[300px] mobile:h-[150px] bg-[#666] border border-white/30 rounded-lg transform rotate-45 origin-center"></div>
                
                {/* Host Chain Left Face */}
                <div className="absolute top-[100px] left-[-50px] mobile:top-[75px] mobile:left-[-37px] w-[200px] h-[6px] mobile:w-[150px] mobile:h-[4px] bg-[#404040] border border-white/30"></div>
                
                {/* Host Chain Right Face */}
                <div className="absolute top-[100px] right-[-50px] mobile:top-[75px] mobile:right-[-37px] w-[200px] h-[6px] mobile:w-[150px] mobile:h-[4px] bg-[#1A1A1A] border border-white/30"></div>
                
                {/* Host Chain Label */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-white font-interBold text-xl mobile:text-lg mb-2">Host Chain</div>
                  <div className="text-white font-interRegular text-sm mobile:text-xs max-w-[150px]">
                    Consensus + Interoperability between D²Apps
                  </div>
                </div>
              </div>
              
              {/* Host Chain Description */}
              <div className="absolute -left-[280px] mobile:-left-[200px] top-[50px] mobile:top-[30px] w-[271px] mobile:w-[200px] text-white font-latoRegular text-[15px] mobile:text-sm">
                The host chain provides shared security, and settlement finality to facilitate interoperability among D²Apps.
              </div>
            </div>

            {/* Guest Chains (Middle Layer) */}
            <div className="absolute bottom-[150px] mobile:bottom-[100px] left-1/2 transform -translate-x-1/2">
              <div className="relative">
                {/* Guest Chain Base */}
                <div className="w-[500px] h-[250px] mobile:w-[350px] mobile:h-[180px] bg-[#808080] border border-white rounded-xl transform rotate-45 origin-center"></div>
                
                {/* Guest Chain Left Face */}
                <div className="absolute top-[125px] left-[-60px] mobile:top-[90px] mobile:left-[-45px] w-[250px] h-[8px] mobile:w-[180px] mobile:h-[6px] bg-[#595959] border border-white"></div>
                
                {/* Guest Chain Right Face */}
                <div className="absolute top-[125px] right-[-60px] mobile:top-[90px] mobile:right-[-45px] w-[250px] h-[8px] mobile:w-[180px] mobile:h-[6px] bg-[#333] border border-white"></div>
                
                {/* Guest Chain Label */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-interBold text-2xl mobile:text-xl">
                  Guest Chains
                </div>
              </div>

              {/* Unified Account Description */}
              <div className="absolute -left-[350px] mobile:-left-[250px] -top-[50px] mobile:-top-[30px] max-w-[300px] mobile:max-w-[200px]">
                <div className="bg-brand/20 border border-brand rounded-lg p-4 mobile:p-3 relative">
                  <div className="text-white font-interBold text-sm mobile:text-xs mb-2">
                    Account Management System For All Guest Chains
                  </div>
                  <div className="text-white font-latoRegular text-[15px] mobile:text-xs">
                    Unified account across guest chains — same address and keys to access all D²Apps.
                  </div>
                  
                  {/* Arrow pointing to guest chains */}
                  <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2">
                    <svg width="20" height="2" viewBox="0 0 20 2" className="text-brand">
                      <path d="M0 1h20" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Chains (Top Layer) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-20">
              <div className="relative w-[600px] h-[250px] mobile:w-[400px] mobile:h-[180px]">
                
                {/* Application Chain Base */}
                <div className="absolute top-[50px] left-[200px] mobile:left-[150px] w-[163px] h-[200px] mobile:w-[120px] mobile:h-[150px] bg-[#1D1D1D] border border-brand rounded-lg transform rotate-45"></div>
                
                {/* Application Chain Faces */}
                <div className="absolute top-[150px] left-[150px] mobile:top-[120px] mobile:left-[120px] w-[148px] h-[4px] mobile:w-[110px] mobile:h-[3px] bg-[#262626] border border-brand"></div>
                <div className="absolute top-[100px] right-[50px] mobile:top-[80px] mobile:right-[40px] w-[200px] h-[4px] mobile:w-[150px] mobile:h-[3px] bg-black border border-brand"></div>
                
                {/* Application Chain Label */}
                <div className="absolute top-[120px] left-[180px] mobile:top-[100px] mobile:left-[140px] text-white font-interBold text-sm mobile:text-xs transform -rotate-45 whitespace-nowrap">
                  Application chains
                </div>
              </div>
            </div>

            {/* Trading Platform Boxes */}
            <div className="absolute top-[200px] mobile:top-[150px] left-1/2 transform -translate-x-1/2">
              <div className="flex gap-16 mobile:gap-8 mobile:flex-col mobile:items-center">
                
                {/* SoDEX Spot */}
                <div className="relative group">
                  <div className="w-[150px] h-[100px] mobile:w-[120px] mobile:h-[80px] bg-brand border border-white rounded-lg transform rotate-45 hover:scale-105 transition-transform">
                    {/* 3D Effect Faces */}
                    <div className="absolute -bottom-2 -right-2 w-full h-full bg-gradient-to-br from-black/20 to-black/40 rounded-lg"></div>
                    <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-tl from-white/20 to-white/10 rounded-lg"></div>
                  </div>
                  
                  {/* Labels */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-white font-interBold text-sm mobile:text-xs mb-1 transform -rotate-45">
                      SoDEX Spot
                    </div>
                    <div className="text-white font-interRegular text-xs mobile:text-[10px] transform -rotate-45">
                      Spot order-book DEX
                    </div>
                  </div>
                  
                  {/* Transfer Icon */}
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 mobile:w-4 mobile:h-4">
                    <svg viewBox="0 0 16 16" className="text-white transform rotate-45">
                      <path d="M5 3V4H11.295L3 12.295L3.705 13L12 4.705V11H13V3H5Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>

                {/* SoDEX Futures */}
                <div className="relative group">
                  <div className="w-[150px] h-[100px] mobile:w-[120px] mobile:h-[80px] bg-brand border border-white rounded-lg transform rotate-45 hover:scale-105 transition-transform">
                    {/* 3D Effect Faces */}
                    <div className="absolute -bottom-2 -right-2 w-full h-full bg-gradient-to-br from-black/20 to-black/40 rounded-lg"></div>
                    <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-tl from-white/20 to-white/10 rounded-lg"></div>
                  </div>
                  
                  {/* Labels */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-white font-interBold text-sm mobile:text-xs mb-1 transform -rotate-45">
                      SoDEX Futures
                    </div>
                    <div className="text-white font-interRegular text-xs mobile:text-[10px] transform -rotate-45">
                      Futures order-book DEX
                    </div>
                  </div>
                  
                  {/* Transfer Icon */}
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 mobile:w-4 mobile:h-4">
                    <svg viewBox="0 0 16 16" className="text-white transform rotate-45">
                      <path d="M5 3V4H11.295L3 12.295L3.705 13L12 4.705V11H13V3H5Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>

                {/* Other Use Cases */}
                <div className="flex gap-4 mobile:gap-2 mobile:flex-col">
                  {/* RWA */}
                  <div className="w-[80px] h-[60px] mobile:w-[60px] mobile:h-[45px] bg-[#613825] border border-white/50 border-dashed rounded-lg transform rotate-45 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-interBold text-xs transform -rotate-45">
                      RWA
                    </div>
                  </div>
                  
                  {/* Stablecoins */}
                  <div className="w-[80px] h-[60px] mobile:w-[60px] mobile:h-[45px] bg-[#613825] border border-white/50 border-dashed rounded-lg transform rotate-45 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-interBold text-xs transform -rotate-45">
                      Stablecoins
                    </div>
                  </div>
                  
                  {/* Future Use Cases */}
                  <div className="w-[80px] h-[60px] mobile:w-[60px] mobile:h-[45px] bg-[#613825] border border-white/50 border-dashed rounded-lg transform rotate-45 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-interBold text-xs transform -rotate-45 text-center">
                      Future use cases
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trading Performance Description */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 max-w-[300px] mobile:max-w-[250px] text-center">
                <p className="text-white font-latoRegular text-[15px] mobile:text-sm">
                  Spot and futures order-book DEX run on two parallel app‑chains to maximize on‑chain trading performance.
                </p>
              </div>
            </div>

            {/* Connection Arrows */}
            <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2 mobile:hidden">
              <svg width="200" height="100" viewBox="0 0 200 100" className="text-white/30">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                </defs>
                <path d="M20 80 L180 20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" opacity="0.3"/>
                <path d="M100 80 L180 40" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" opacity="0.3"/>
                <path d="M180 80 L180 60" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" opacity="0.3"/>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
