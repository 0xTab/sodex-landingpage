import React from 'react';

const Content2: React.FC = () => {
  return (
    <section className="bg-transparent flex flex-col items-center justify-center px-4 py-16 md:py-20">
      {/* Title */}
      <h2 className="text-white font-latoRegular text-3xl md:text-5xl lg:text-6xl font-normal mb-20 text-center">
        Seamless Experience
      </h2>

      {/* Two Column Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Column - Know your investment targets */}
        <div className="text-center">
          <h3 className="text-white font-latoRegular text-xl md:text-2xl mb-6">
            Know your investment targets
          </h3>
          <p className="text-white/70 font-latoRegular text-sm md:text-base mb-8">
            Up-to-the-minute information access
          </p>
          
          {/* Investment Information Interface */}
          <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm border border-white/10">
            <div className="bg-gray-900/50 rounded-lg p-4">
              {/* Market Overview */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-3">Market Overview</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-3 rounded">
                    <div className="text-green-400 text-lg font-mono">BTC</div>
                    <div className="text-white text-sm">$43,250</div>
                    <div className="text-green-400 text-xs">+2.45%</div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded">
                    <div className="text-blue-400 text-lg font-mono">ETH</div>
                    <div className="text-white text-sm">$2,680</div>
                    <div className="text-red-400 text-xs">-1.23%</div>
                  </div>
                </div>
              </div>
              
              {/* Portfolio Analytics */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-3">Portfolio Analytics</h4>
                <div className="bg-gray-800/30 p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70">Total Value</span>
                    <span className="text-white font-mono">$12,450.00</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70">24h Change</span>
                    <span className="text-green-400">+$340.50</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* News & Alerts */}
              <div>
                <h4 className="text-white font-semibold mb-2">Latest News</h4>
                <div className="space-y-2">
                  <div className="bg-gray-800/30 p-2 rounded text-xs">
                    <div className="text-white/80">Bitcoin reaches new resistance level</div>
                    <div className="text-white/50">2 hours ago</div>
                  </div>
                  <div className="bg-gray-800/30 p-2 rounded text-xs">
                    <div className="text-white/80">Ethereum upgrade announcement</div>
                    <div className="text-white/50">4 hours ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Invest in quality assets */}
        <div className="text-center">
          <h3 className="text-white font-latoRegular text-xl md:text-2xl mb-6">
            Invest in quality assets
          </h3>
          <p className="text-white/70 font-latoRegular text-sm md:text-base mb-8">
            Trade Quality Cryptocurrency Efficiently
          </p>
          
          {/* Quality Assets Trading Interface */}
          <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm border border-white/10">
            <div className="bg-gray-900/50 rounded-lg p-4">
              {/* Top Assets */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-3">Top Quality Assets</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-gray-800/50 p-3 rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Bitcoin</div>
                        <div className="text-white/60 text-xs">BTC</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white">$43,250</div>
                      <div className="text-green-400 text-xs">+2.45%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gray-800/50 p-3 rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Ethereum</div>
                        <div className="text-white/60 text-xs">ETH</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white">$2,680</div>
                      <div className="text-red-400 text-xs">-1.23%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gray-800/50 p-3 rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Solana</div>
                        <div className="text-white/60 text-xs">SOL</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white">$98.50</div>
                      <div className="text-green-400 text-xs">+5.67%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Trade */}
              <div>
                <h4 className="text-white font-semibold mb-3">Quick Trade</h4>
                <div className="bg-gray-800/30 p-3 rounded">
                  <div className="flex gap-2 mb-3">
                    <button className="flex-1 bg-green-600 text-white py-2 rounded">Buy</button>
                    <button className="flex-1 bg-gray-700 text-white py-2 rounded">Sell</button>
                  </div>
                  <input type="text" placeholder="Amount (USD)" className="w-full bg-gray-700 text-white p-2 rounded mb-2" />
                  <select className="w-full bg-gray-700 text-white p-2 rounded mb-3">
                    <option>Select Asset</option>
                    <option>Bitcoin (BTC)</option>
                    <option>Ethereum (ETH)</option>
                    <option>Solana (SOL)</option>
                  </select>
                  <button className="w-full bg-brand text-white py-2 rounded font-semibold">Execute Trade</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content2;
