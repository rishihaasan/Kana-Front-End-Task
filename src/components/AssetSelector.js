import React, { useState } from 'react';
import { ReactComponent as ChevronDownIcon } from '../assets/topBarAssets/chevron-down.svg';
import ethIcon from '../assets/topBarAssets/image 94.png';

const AssetSelector = () => {
  const [isAssetDropdownOpen, setIsAssetDropdownOpen] = useState(false);
  const [isCycleDropdownOpen, setIsCycleDropdownOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState({
    label: 'ETH',
    network: 'BSC',
    icon: ethIcon,
  });
  const [selectedCycle, setSelectedCycle] = useState('2 Hour Cycle');
  const [position, setPosition] = useState('long');

  const assets = [
    { label: 'ETH', network: 'BSC', icon: ethIcon },
    { label: 'BTC', network: 'BSC', icon: ethIcon },
    { label: 'SOL', network: 'BSC', icon: ethIcon },
  ];

  const cycles = [
    '1 Hour Cycle',
    '2 Hour Cycle',
    '4 Hour Cycle',
    '1 Day Cycle',
  ];

  const toggleAssetDropdown = () => setIsAssetDropdownOpen(!isAssetDropdownOpen);
  const toggleCycleDropdown = () => setIsCycleDropdownOpen(!isCycleDropdownOpen);

  const selectAsset = (asset) => {
    setSelectedAsset(asset);
    setIsAssetDropdownOpen(false);
  };

  const selectCycle = (cycle) => {
    setSelectedCycle(cycle);
    setIsCycleDropdownOpen(false);
  };

  return (
    <div className="p-3 bg-gray-800 rounded-lg shadow-custom-card border border-stroke backdrop-blur-lg ">
      <div className="flex space-x-6 items-center justify-around">
        {/* Asset Selector Dropdown */}
        <div className="relative">
          <div
            className="flex items-center justify-between cursor-pointer px-4 py-2 rounded-lg bg-grey-600 text-white w-[180px] h-12 font-manrope font-bold text-sm"
            onClick={toggleAssetDropdown}
          >
            <div className="flex items-center">
              <img src={selectedAsset.icon} alt="asset icon" className="mr-2 w-4 h-4" />
              <div className="flex items-center space-x-1">
                <span>{selectedAsset.label}</span>
                <span className="text-gray-400 font-semibold text-xs">{selectedAsset.network}</span>
              </div>
            </div>
            <ChevronDownIcon className={`w-4 h-4 transition-transform ${isAssetDropdownOpen ? 'rotate-180' : ''}`} />
          </div>
          {isAssetDropdownOpen && (
            <div className="absolute z-10 mt-2 w-full bg-gray-800 rounded-lg shadow-lg">
              {assets.map((asset) => (
                <button
                  key={asset.label}
                  className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-700 text-white font-bold text-sm"
                  onClick={() => selectAsset(asset)}
                >
                  <img src={asset.icon} alt={`${asset.label} icon`} className="mr-2 w-4 h-4" />
                  <div className="flex items-center space-x-1">
                    <span>{asset.label}</span>
                    <span className="text-gray-400 font-semibold text-xs">{asset.network}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Cycle Selector Dropdown */}
        <div className="relative">
          <div
            className="flex items-center justify-between cursor-pointer px-4 py-2 rounded-lg bg-grey-600 text-white w-[180px] h-12 font-manrope text-sm font-normal"
            onClick={toggleCycleDropdown}
          >
            <span>{selectedCycle}</span>
            <ChevronDownIcon className={`w-4 h-4 transition-transform ${isCycleDropdownOpen ? 'rotate-180' : ''}`} />
          </div>
          {isCycleDropdownOpen && (
            <div className="absolute z-10 mt-2 w-full bg-gray-800 rounded-lg shadow-lg">
              {cycles.map((cycle, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700 text-white font-normal text-sm"
                  onClick={() => selectCycle(cycle)}
                >
                  {cycle}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Long/Short Toggle */}
        <div className="flex rounded-lg overflow-hidden">
          <button
            className={`px-6 py-2 font-semibold ${position === 'long'
              ? 'bg-primary text-white'
              : 'bg-grey-600 text-gray-400'
              }`}
            onClick={() => setPosition('long')}
          >
            Long
          </button>

          <button
            className={`px-6 py-2 font-semibold ${position === 'short'
              ? 'bg-primary text-white'
              : 'bg-grey-600 text-gray-400'
              }`}
            onClick={() => setPosition('short')}
          >
            Short
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetSelector;
