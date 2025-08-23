import React from 'react';

const Content1: React.FC = () => {
  return (
    <section className="bg-transparent flex flex-col items-center justify-center px-4 py-16 md:py-20">
      {/* Title */}
      <h2 className="text-white font-latoRegular text-3xl md:text-5xl lg:text-6xl font-normal mb-16 text-center">
        SoDEX — The next-gen onchain exchange
      </h2>

      {/* Trading Interface Mockup */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-black/20 rounded-lg p-6 backdrop-blur-sm border border-white/10">
          {/* Trading Interface Header */}
          <div className="bg-gray-900/50 rounded-t-lg p-4 mb-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-white font-semibold">BTC/USDT</div>
                <div className="text-green-400 text-sm">+2.45%</div>
              </div>
              <div className="text-white text-lg font-mono">$43,250.00</div>
            </div>
          </div>
          
          {/* Chart Area */}
          <div className="bg-gray-900/30 rounded-lg p-8 mb-4 h-64 flex items-center justify-center">
            <div className="text-center">
              {/* Simple Chart Visualization */}
              <div className="w-full h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-end justify-around p-4">
                {[40, 65, 45, 80, 55, 75, 90, 70, 85].map((height, index) => (
                  <div
                    key={index}
                    className="bg-green-400/60 w-8 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <p className="text-white/60 mt-4">Advanced Trading Chart</p>
            </div>
          </div>
          
          {/* Trading Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Buy BTC</h4>
              <div className="space-y-2">
                <input type="text" placeholder="Amount" className="w-full bg-gray-700 text-white p-2 rounded" />
                <input type="text" placeholder="Price" className="w-full bg-gray-700 text-white p-2 rounded" />
                <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Buy</button>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Sell BTC</h4>
              <div className="space-y-2">
                <input type="text" placeholder="Amount" className="w-full bg-gray-700 text-white p-2 rounded" />
                <input type="text" placeholder="Price" className="w-full bg-gray-700 text-white p-2 rounded" />
                <button className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700">Sell</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content1;
