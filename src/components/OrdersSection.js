import React, { useState } from 'react';
import OpenOrdersTable from './OrdersTable';
import { ReactComponent as MoreIcon } from '../assets/rightPaneAssets/dots-horizontal.svg'; // Add the SVG for more buttons (three dots)

const OrdersSection = () => {
  const [activeTab, setActiveTab] = useState('orders'); // Default to 'Open Orders' tab

  const getTabClasses = (tabName) =>
    `px-4 py-2 rounded-t-lg text-center font-manrope text-sm ${
      activeTab === tabName
        ? 'font-bold text-white bg-white/10'
        : 'font-normal text-gray-400 bg-gray-800'
    }`;

  return (
    <div className="bg-gray-800 rounded-lg shadow-md">
      {/* Tab Headers */}
      <div className="flex justify-between items-center mb-2">
        {/* Tabs */}
        <div className="flex space-x-4">
          <button
            className={getTabClasses('orders')}
            onClick={() => setActiveTab('orders')}
          >
            Open Orders
          </button>
          <button
            className={getTabClasses('positions')}
            onClick={() => setActiveTab('positions')}
          >
            Positions
          </button>
          <button
            className={getTabClasses('trades')}
            onClick={() => setActiveTab('trades')}
          >
            Trades
          </button>
        </div>

        {/* More buttons (three dots) */}
        <MoreIcon className="w-6 h-6 text-gray-400" />
      </div>

      {/* Tab Content */}
      <div className="m-4">
        {activeTab === 'orders' && <OpenOrdersTable />}
        {activeTab === 'positions' && <div>Positions Data Placeholder</div>}
        {activeTab === 'trades' && <div>Trades Data Placeholder</div>}
      </div>
    </div>
  );
};

export default OrdersSection;