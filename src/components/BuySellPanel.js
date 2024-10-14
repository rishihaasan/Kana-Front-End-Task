import React, { useState } from 'react';
import { ReactComponent as InfoIcon } from '../assets/rightPaneAssets/Frame.svg';
import { ReactComponent as HelpIcon } from '../assets/rightPaneAssets/message-square.svg';
import Button from './ButtonComponent'
const BuySellPanel = () => {
  const [activeTab, setActiveTab] = useState('longCall');

  return (
    <div className="bg-tab-color rounded-lg shadow-custom-card pb-1">
      <div className="flex">
        <button
          className={`w-1/2 p-2 text-center rounded-t-lg ${activeTab === 'longCall' ? 'bg-white/6 font-bold' : 'bg-gray-800'} font-manrope text-sm ${activeTab === 'longCall' ? 'font-extrabold' : 'font-normal'}`}
          onClick={() => setActiveTab('longCall')}
        >
          Long Call OPerps
        </button>
        <button
          className={`w-1/2 p-2 text-center rounded-t-lg ${activeTab === 'longPut' ? 'bg-white/6 font-bold' : 'bg-gray-800'} font-inter text-sm ${activeTab === 'longPut' ? 'font-extrabold' : 'font-normal'}`}
          onClick={() => setActiveTab('longPut')}
        >
          Long Put OPerps
        </button>
      </div>

      {activeTab === 'longCall' && (
        <div className="m-4 bg-gray-800 border border-stroke rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-manrope text-sm font-normal">Long Call OPerps Token</span>
            <InfoIcon className="w-4 h-4 text-gray-400" />
          </div>

          <input
            type="text"
            placeholder="0.00"
            className="w-full bg-transparent border border-stroke rounded-md p-2 mt-2 text-white font-manrope text-sm font-normal"
          />

          <div className="flex items-center mt-2 text-primary">
            <HelpIcon className="w-4 h-4 mr-1" />
            <span className="text-xs font-bold font-manrope">Not sure how much to buy?</span>
          </div>

          <div className="flex justify-between mt-2">
            <div className="text-gray-400 font-manrope text-sm font-normal">USDC Balance</div>
            <div className="text-white font-manrope text-sm font-normal">123.00 USDC</div>
          </div>

          <div className="flex justify-between mt-2">
            <div className="text-gray-400 font-manrope text-sm font-normal">LCO Balance</div>
            <div className="text-white font-manrope text-sm font-normal">12.34</div>
          </div>
        </div>
      )}

      <div className="flex justify-between m-4">
      <Button className='m-2'
          label="Buy"
          onClick={() => console.log('Buying...')}
          variant="primary"
        />
        <Button className='m-2'
          label="Sell"
          onClick={() => console.log('Selling...')}
          variant="secondary"
        />
      </div>

      <div className="m-4 bg-gray-800 border border-stroke rounded-lg p-4">
        <div className="mt-4 flex justify-between">
          <div className="w-full mr-2 p-4 rounded-lg bg-topbar-btn backdrop-blur-md">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400 font-manrope font-normal">Next Cycle Max Profit</span>
              <InfoIcon className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-green-500 font-extrabold font-manrope text-sm">750% ~ $1000</div>
          </div>

          <div className="w-full ml-2 p-4 rounded-lg bg-topbar-btn backdrop-blur-md">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400 font-manrope font-normal">Next Cycle Max Loss</span>
              <InfoIcon className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-red-500 font-extrabold font-manrope text-sm">50% ~ $25</div>
          </div>
        </div>

        <div className="mt-2">
          <div className="flex justify-between">
            <span className="text-xs text-gray-400 font-manrope text-sm">Expected Leverage</span>
            <span className="text-white font-extrabold font-manrope text-sm">700x</span>
          </div>

          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-400 font-manrope text-sm">Premium paid per cycle</span>
            <span className="text-white font-extrabold font-manrope text-sm">50%</span>
          </div>

          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-400 font-manrope text-sm">Distribution</span>
            <span className="text-white font-extrabold font-manrope text-sm">250 LCO : 75000 SCO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySellPanel;