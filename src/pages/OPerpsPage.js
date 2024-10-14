import React, { useState } from 'react';
import AssetSelector from '../components/AssetSelector'; // Import the AssetSelector component
import OPerpsCycleAndChart from '../components/OPerpsCycleAndChart'; // The combined component for Cycle and Chart
import BuySellPanel from '../components/BuySellPanel'; // Buy/Sell Panel component
import OrdersSection from '../components/OrdersSection'; // The newly added OrdersSection component
import PayoffChart from '../components/PayoffChart';

const OPerpsPage = () => {
  const [selectedAsset, setSelectedAsset] = useState({ label: 'ETH BSC', value: 'eth_bsc' });

  return (
    <div className="p-4 text-white bg-[#0C0C0D] min-h-screen flex flex-col space-y-6">
      {/* Responsive Container */}
      <div className="flex flex-col lg:flex-row flex-1 space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Left Side: Cycle and Chart */}
        <div className="flex-1">
          {/* Asset Selector */}
          <div className="mb-4">
            <AssetSelector selectedAsset={selectedAsset} setSelectedAsset={setSelectedAsset} />
          </div>

          {/* Cycle Progress and Chart */}
          <div>
            <OPerpsCycleAndChart />
          </div>
          <div className="mt-6">
            <OrdersSection />
          </div>
        </div>

        {/* Right Side: Buy/Sell Panel */}
        <div className="w-full lg:w-96">
          <BuySellPanel />
          <div className="mt-6">
            <PayoffChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OPerpsPage;