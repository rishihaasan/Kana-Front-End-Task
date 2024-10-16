import React, { useState } from 'react';
import CandlestickChart from '../components/CandlestickChart'; // Import the combined component

const OPerpsCycleAndChart = () => {
  const [currentCycle, setCurrentCycle] = useState({
    startPrice: '$1,234',
    breakevenPrice: '$1,234',
    leverage: '105x',
    pnl: '25%',
    timeRemaining: '0:25:59',
    startTime: '9:00 AM',
    endTime: '10:00 AM',
    progress: 50, // Progress percentage for the progress bar
  });

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
      {/* First Section: Current Cycle Info */}
      <div className="mb-2">
        <div className="flex flex-wrap justify-between items-center space-y-2 sm:space-y-0">
          <h4 className="text-sm font-bold font-manrope text-white">
            Current Cycle
          </h4>
          <div className="flex flex-wrap sm:space-x-8 space-y-2 sm:space-y-0">
            <div className="text-right">
              <span className="block text-xs font-normal text-gray-400 font-manrope">
                Start Price
              </span>
              <span className="text-sm font-bold font-manrope text-white">
                {currentCycle.startPrice}
              </span>
            </div>

            <div className="text-right">
              <span className="block text-xs font-normal text-gray-400 font-manrope">
                Breakeven
              </span>
              <span className="text-sm font-bold font-manrope text-white">
                {currentCycle.breakevenPrice}
              </span>
            </div>

            <div className="text-right">
              <span className="block text-xs font-normal text-gray-400 font-manrope">
                Leverage
              </span>
              <span className="text-sm font-bold font-manrope text-white">
                {currentCycle.leverage}
              </span>
            </div>

            <div className="text-right">
              <span className="block text-xs font-normal text-gray-400 font-manrope">
                PnL
              </span>
              <span className="text-sm font-bold text-teal-500 font-manrope">
                {currentCycle.pnl}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-700 my-4"></div>

      {/* Second Section: Progress Bar and Times */}
      <div className="my-4">
        <div className="h-2 bg-black rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${currentCycle.progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-2 text-sm">
          <span className="text-white font-manrope">
            {currentCycle.startTime}
          </span>
          <span className="text-white font-bold font-inter">
            {currentCycle.timeRemaining}
          </span>
          <span className="text-white font-manrope">
            {currentCycle.endTime}
          </span>
        </div>
      </div>

      {/* Candlestick Chart Section */}
      <div className="w-full h-[300px] sm:h-[400px]">
        <CandlestickChart /> {/* Candlestick Chart integrated here */}
      </div>
    </div>
  );
};

export default OPerpsCycleAndChart;