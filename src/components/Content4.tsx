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

            {/* Host Chain (Bottom Layer - Back) */}
            <div className="absolute left-1/2 top-[207px] transform -translate-x-1/2 opacity-20 z-10">
              <div className="relative w-[501px] h-[293px] mobile:w-[350px] mobile:h-[200px]">
                {/* Host Chain 3D Box */}
                <div className="absolute left-0 top-0">
                  {/* Base Face */}
                  <div className="w-[289px] h-[289px] mobile:w-[200px] mobile:h-[200px] bg-[#666] border border-white/30 rounded-[5.787px] transform rotate-45 origin-center"></div>

                  {/* Left Face */}
                  <div className="absolute left-[5px] top-[148px] mobile:left-[3px] mobile:top-[100px] w-[278px] h-[6px] mobile:w-[190px] mobile:h-[4px] bg-[#404040] border border-white/30"></div>

                  {/* Right Face */}
                  <div className="absolute left-[256px] top-[148px] mobile:left-[180px] mobile:top-[100px] w-[278px] h-[6px] mobile:w-[190px] mobile:h-[4px] bg-[#1A1A1A] border border-white/30"></div>
                </div>

                {/* Host Chain Labels */}
                <div className="absolute left-[121px] top-[147px] mobile:left-[85px] mobile:top-[100px] w-[118px] h-[26px] mobile:w-[80px] mobile:h-[18px] transform rotate-45">
                  <div className="text-white font-interBold text-[21px] mobile:text-[14px] leading-normal">Host Chain</div>
                </div>

                <div className="absolute left-[50px] top-[136px] mobile:left-[35px] mobile:top-[95px] w-[217px] h-[34px] mobile:w-[150px] mobile:h-[24px] transform rotate-45 text-center">
                  <div className="text-white font-interRegular text-[14px] mobile:text-[10px] leading-normal">
                    Consensus + Interoperability between D²Apps
                  </div>
                </div>
              </div>

              {/* Host Chain Description */}
              <div className="absolute -left-[205px] top-[238px] mobile:-left-[140px] mobile:top-[160px] w-[271px] mobile:w-[180px] h-[54px] mobile:h-[40px]">
                <div className="text-white font-latoRegular text-[15px] mobile:text-[12px] leading-normal">
                  The host chain provides shared security, and settlement finality to facilitate interoperability among D²Apps.
                </div>
              </div>
            </div>

            {/* Guest Chains (Middle Layer) */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-20">
              <div className="relative w-[626px] h-[390px] mobile:w-[400px] mobile:h-[250px]">
                {/* Guest Chain 3D Box */}
                <div className="absolute left-0 top-[23px] mobile:top-[15px]">
                  {/* Base Face */}
                  <div className="w-[362px] h-[362px] mobile:w-[250px] mobile:h-[250px] bg-[#808080] border border-white rounded-[7.234px] transform rotate-45 origin-center"></div>

                  {/* Left Face */}
                  <div className="absolute left-[6px] top-[184px] mobile:left-[4px] mobile:top-[125px] w-[347px] h-[7px] mobile:w-[240px] mobile:h-[5px] bg-[#595959] border border-white"></div>

                  {/* Right Face */}
                  <div className="absolute left-[319px] top-[184px] mobile:left-[220px] mobile:top-[125px] w-[347px] h-[7px] mobile:w-[240px] mobile:h-[5px] bg-[#333] border border-white"></div>
                </div>

                {/* EVM Compatible System Chain with Account Management */}
                <div className="absolute -left-[108px] -top-[24px] mobile:-left-[75px] mobile:-top-[15px] w-[572px] h-[257px] mobile:w-[400px] mobile:h-[180px]">
                  {/* 3D Isometric Box for Account Management */}
                  <div className="relative">
                    {/* Main Face */}
                    <div className="absolute left-0 top-0 w-[400px] h-[150px] mobile:w-[280px] mobile:h-[100px] bg-[#1D1D1D] border border-brand rounded-lg transform skew-x-[-15deg] skew-y-[15deg]"></div>

                    {/* Left Face */}
                    <div className="absolute left-[50px] top-[120px] mobile:left-[35px] mobile:top-[80px] w-[300px] h-[30px] mobile:w-[210px] mobile:h-[20px] bg-[#262626] border border-brand"></div>

                    {/* Right Face */}
                    <div className="absolute left-[350px] top-[50px] mobile:left-[245px] mobile:top-[35px] w-[50px] h-[100px] mobile:w-[35px] mobile:h-[70px] bg-black border border-brand"></div>
                  </div>

                  {/* Account Management Text */}
                  <div className="absolute left-[100px] top-[40px] mobile:left-[70px] mobile:top-[25px] text-white font-interBold text-[14px] mobile:text-[10px] leading-tight transform rotate-[15deg]">
                    <div>Account Management</div>
                    <div>System For All</div>
                    <div>Guest Chains</div>
                  </div>

                  {/* EVM Compatible Text */}
                  <div className="absolute left-[150px] top-[80px] mobile:left-[105px] mobile:top-[55px] text-white font-interBold text-[14px] mobile:text-[10px] leading-tight transform rotate-[15deg]">
                    <div>EVM-compatible</div>
                    <div>system chain</div>
                  </div>
                </div>

                {/* Guest Chains Label */}
                <div className="absolute left-[98px] top-[231px] mobile:left-[70px] mobile:top-[160px] w-[175px] h-[32px] mobile:w-[120px] mobile:h-[22px] transform rotate-45">
                  <div className="text-white font-interBold text-[26px] mobile:text-[18px] leading-normal">Guest Chains</div>
                </div>

                {/* Unified Account Description */}
                <div className="absolute -left-[300px] top-[50px] mobile:-left-[200px] mobile:top-[35px] w-[250px] mobile:w-[170px]">
                  <div className="text-white font-latoRegular text-[15px] mobile:text-[12px] leading-normal mb-4">
                    Unified account across guest chains — same address and keys to access all D²Apps.
                  </div>

                  {/* Arrow pointing to chain */}
                  <svg className="absolute right-[-50px] top-[10px] mobile:right-[-35px]" width="214" height="50" viewBox="0 0 214 50" fill="none">
                    <path d="M0 25H214" stroke="#FF7637" strokeWidth="2"/>
                    <path d="M200 15L214 25L200 35" stroke="#FF7637" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Application Chains (Top Layer) */}
            <div className="absolute left-[206px] top-[88px] mobile:left-[140px] mobile:top-[60px] opacity-20 z-30">
              <div className="relative w-[631px] h-[266px] mobile:w-[400px] mobile:h-[170px]">
                {/* Application Chain Base */}
                <div className="absolute left-0 top-[23px] mobile:top-[15px] w-[163px] h-[307px] mobile:w-[110px] mobile:h-[200px] bg-[#1D1D1D] border border-brand rounded-[7.234px] transform rotate-45"></div>

                {/* Application Chain Faces */}
                <div className="absolute left-[6px] top-[181px] mobile:left-[4px] mobile:top-[120px] w-[148px] h-[4px] mobile:w-[100px] mobile:h-[3px] bg-[#262626] border border-brand"></div>
                <div className="absolute left-[147px] top-[108px] mobile:left-[100px] mobile:top-[75px] w-[293px] h-[4px] mobile:w-[200px] mobile:h-[3px] bg-black border border-brand"></div>

                {/* Application Chains Label */}
                <div className="absolute left-[27px] top-[164px] mobile:left-[18px] mobile:top-[110px] w-[162px] h-[36px] mobile:w-[110px] mobile:h-[25px] transform rotate-45">
                  <div className="text-white font-interBold text-[14px] mobile:text-[10px] leading-tight">Application chains(appchains)</div>
                </div>

                {/* Trading Platform Boxes */}
                <div className="flex gap-8 mobile:gap-4 absolute -left-[100px] -top-[50px] mobile:-left-[70px] mobile:-top-[35px]">
                  {/* SoDEX Spot */}
                  <div className="relative w-[182px] h-[139px] mobile:w-[120px] mobile:h-[90px]">
                    <div className="absolute left-0 top-0 w-[137px] h-[72px] mobile:w-[90px] mobile:h-[50px] bg-brand border border-white rounded-[7.234px] transform rotate-45"></div>
                    <div className="absolute left-[6px] top-[40px] mobile:left-[4px] mobile:top-[25px] w-[123px] h-[36px] mobile:w-[80px] mobile:h-[24px] bg-brand/80 border border-white"></div>
                    <div className="absolute left-[125px] top-[72px] mobile:left-[80px] mobile:top-[48px] w-[58px] h-[36px] mobile:w-[38px] mobile:h-[24px] bg-brand/60 border border-white"></div>

                    {/* SoDEX Spot Label */}
                    <div className="absolute left-[21px] top-[21px] mobile:left-[14px] mobile:top-[14px] w-[85px] h-[18px] mobile:w-[55px] mobile:h-[12px] transform rotate-45">
                      <div className="text-white font-interBold text-[14px] mobile:text-[10px]">SoDEX Spot</div>
                    </div>
                    <div className="absolute left-[11px] top-[29px] mobile:left-[7px] mobile:top-[19px] w-[124px] h-[12px] mobile:w-[80px] mobile:h-[8px] transform rotate-45">
                      <div className="text-white font-interRegular text-[10px] mobile:text-[7px]">Spot order-book DEX</div>
                    </div>
                  </div>

                  {/* SoDEX Futures */}
                  <div className="relative w-[182px] h-[139px] mobile:w-[120px] mobile:h-[90px]">
                    <div className="absolute left-0 top-0 w-[137px] h-[72px] mobile:w-[90px] mobile:h-[50px] bg-brand border border-white rounded-[7.234px] transform rotate-45"></div>
                    <div className="absolute left-[6px] top-[40px] mobile:left-[4px] mobile:top-[25px] w-[123px] h-[36px] mobile:w-[80px] mobile:h-[24px] bg-brand/80 border border-white"></div>
                    <div className="absolute left-[125px] top-[72px] mobile:left-[80px] mobile:top-[48px] w-[58px] h-[36px] mobile:w-[38px] mobile:h-[24px] bg-brand/60 border border-white"></div>

                    {/* SoDEX Futures Label */}
                    <div className="absolute left-[17px] top-[19px] mobile:left-[11px] mobile:top-[13px] w-[106px] h-[18px] mobile:w-[70px] mobile:h-[12px] transform rotate-45">
                      <div className="text-white font-interBold text-[14px] mobile:text-[10px]">SoDEX Futures</div>
                    </div>
                    <div className="absolute left-[9px] top-[28px] mobile:left-[6px] mobile:top-[18px] w-[124px] h-[12px] mobile:w-[80px] mobile:h-[8px] transform rotate-45">
                      <div className="text-white font-interRegular text-[10px] mobile:text-[7px]">Futures order-book DEX</div>
                    </div>
                  </div>
                </div>

                {/* Other Use Cases (RWA, Stablecoins, Future) */}
                <div className="flex gap-4 mobile:gap-2 absolute right-[50px] top-[20px] mobile:right-[35px] mobile:top-[15px]">
                  {/* RWA */}
                  <div className="relative w-[100px] h-[92px] mobile:w-[70px] mobile:h-[65px]">
                    <div className="absolute left-0 top-0 w-[43px] h-[72px] mobile:w-[30px] mobile:h-[50px] bg-[#613825] border border-white/50 border-dashed rounded-[7.234px] transform rotate-45"></div>
                    <div className="absolute left-[33px] top-[19px] mobile:left-[23px] mobile:top-[13px] w-[23px] h-[12px] mobile:w-[16px] mobile:h-[8px] transform -rotate-45">
                      <div className="text-white font-interBold text-[10px] mobile:text-[7px]">RWA</div>
                    </div>
                  </div>

                  {/* Stablecoins */}
                  <div className="relative w-[100px] h-[92px] mobile:w-[70px] mobile:h-[65px]">
                    <div className="absolute left-0 top-0 w-[43px] h-[72px] mobile:w-[30px] mobile:h-[50px] bg-[#613825] border border-white/50 border-dashed rounded-[7.234px] transform rotate-45"></div>
                    <div className="absolute left-[14px] top-[8px] mobile:left-[10px] mobile:top-[6px] w-[58px] h-[12px] mobile:w-[40px] mobile:h-[8px] transform -rotate-45">
                      <div className="text-white font-interBold text-[10px] mobile:text-[7px]">Stablecoins</div>
                    </div>
                  </div>

                  {/* Future Use Cases */}
                  <div className="relative w-[106px] h-[98px] mobile:w-[75px] mobile:h-[70px]">
                    <div className="absolute left-0 top-[7px] mobile:top-[5px] w-[43px] h-[72px] mobile:w-[30px] mobile:h-[50px] bg-[#613825] border border-white/50 border-dashed rounded-[7.234px] transform rotate-45"></div>
                    <div className="absolute left-[16px] top-0 w-[80px] h-[24px] mobile:w-[55px] mobile:h-[17px] transform -rotate-45">
                      <div className="text-white font-interBold text-[10px] mobile:text-[7px] text-center">Future use cases</div>
                    </div>
                  </div>
                </div>

                {/* Performance Description */}
                <div className="absolute left-[351px] top-[212px] mobile:left-[240px] mobile:top-[140px] w-[280px] mobile:w-[190px] h-[54px] mobile:h-[38px]">
                  <div className="text-white font-latoRegular text-[15px] mobile:text-[12px] leading-normal">
                    Spot and futures order-book DEX run on two parallel app‑chains to maximize on‑chain trading performance.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
