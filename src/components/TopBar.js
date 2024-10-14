import React, { useState } from 'react';
import EthosLogo from '../assets/topBarAssets/EthosX.png';
import { ReactComponent as FaucetIcon } from '../assets/topBarAssets/wallet.svg';
import { ReactComponent as TestNetIcon } from '../assets/topBarAssets/container.svg';
import { ReactComponent as PointsIcon } from '../assets/topBarAssets/coins-03.svg';
import { ReactComponent as ZapIcon } from '../assets/topBarAssets/zap.svg';
import { ReactComponent as PowerIcon } from '../assets/topBarAssets/power-01.svg';
import { ReactComponent as BellIcon } from '../assets/topBarAssets/bell-01.svg';
import { ReactComponent as SettingsIcon } from '../assets/topBarAssets/settings-01.svg';
import { ReactComponent as ClipboardIcon } from '../assets/topBarAssets/copy-03.svg';
import MetaMaskIcon from '../assets/topBarAssets/MetaMask_Fox 2.png';
import ChevronDownIcon from '../assets/topBarAssets/chevron-down.svg';

const TopBar = ({ activePage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown for Test net button
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-center justify-between w-full p-6 bg-gray-800 shadow-lg font-manrope rounded-b-lg max-w-[94vw]  overflow-hidden self-center">

      {/* Left Section: Display based on activePage */}
      <div className="flex items-center">
        {activePage === 'OPerps' && (
          <div className="flex flex-col items-start bg-gray-800 rounded-full py-1">
            <span className="text-xs text-color-4 font-inter">Powered by</span>
            <img src={EthosLogo} alt="ETHOSX Logo" className="w-20 h-auto" />
          </div>
        )}
        {activePage === 'swap' && (
          <div className="flex items-center space-x-4 bg-topbar-btn rounded-lg h-12 px-6 gap-4 backdrop-blur-lg text-white justify-center">
            <span className="text-gray-400 font-bold text-sm">Your Balance</span>
            <span className="text-white font-bold text-sm">$12,345</span>
          </div>
        )}
      </div>

      {/* Right Section: Items displayed on the right */}
      <div className="flex items-center justify-end ml-auto space-x-4">
        {activePage === 'OPerps' && (
          <div className="flex items-center space-x-2">
            {/* Faucet */}
            <div className="flex items-center space-x-2 bg-topbar-btn rounded-lg h-12 px-6 gap-4 backdrop-blur-lg cursor-pointer">
              <FaucetIcon className="w-6 h-6 text-primary" />
              <span className="text-white font-bold text-sm truncate">Faucet</span>
            </div>

            {/* Test Net Dropdown */}
            <div className="relative flex items-center bg-[rgba(29,30,32,0.8)] rounded-lg h-12 p-4 gap-4 backdrop-blur-md cursor-pointer z-30" onClick={toggleDropdown}>
              <TestNetIcon className="w-6 h-6 text-primary" />
              <span className="text-white font-bold text-sm truncate">Test net</span>
              <img
                src={ChevronDownIcon}
                alt="Chevron Down"
                className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
              {dropdownOpen && (
                <div className="absolute top-full mt-2 w-full bg-gray-800 rounded-lg shadow-lg z-50">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white">Main Net</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white">Test Net</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white">Ropsten</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Points Earned and Days Active */}
            <div className="flex items-center space-x-4 bg-topbar-btn rounded-lg h-12 px-4 gap-4 backdrop-blur-lg">
              <div className="flex items-center space-x-1">
                <PointsIcon className="w-6 h-6 text-primary" />
                <div>
                  <span className="text-primary font-bold text-sm">100</span>
                  <span className="block text-color-4 text-xs">Points earned</span>
                </div>
              </div>
              <div className="h-6 w-px bg-text-color-4" />
              <div className="flex items-center space-x-1">
                <ZapIcon className="w-6 h-6 text-primary" />
                <div>
                  <span className="text-primary font-bold text-sm">2</span>
                  <span className="block text-color-4 text-xs">days active</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MetaMask and Utility Icons */}
        <div className="flex items-center space-x-3 bg-topbar-btn rounded-lg px-4 py-2 backdrop-blur-lg">
          <img src={MetaMaskIcon} alt="Wallet" className="w-6 h-6" />
          <span className="text-primary font-bold text-sm truncate">0xwalletaddresxyz</span>

          <div className="flex items-center rounded-full w-8 h-8 p-2 bg-topbar-btn">
            <ClipboardIcon className="w-4 h-4 text-primary" />
          </div>

          <div className="flex items-center rounded-full w-8 h-8 p-2 bg-topbar-btn">
            <PowerIcon className="w-4 h-4 text-red-500" />
          </div>
        </div>

        {/* Notifications and Settings */}
        <div className="flex items-center space-x-3 ml-4">
          <div className="flex items-center rounded-full w-12 h-12 p-4 bg-topbar-btn">
            <BellIcon className="w-6 h-6 text-muted" />
          </div>
          <div className="flex items-center rounded-full w-12 h-12 p-4 bg-topbar-btn">
            <SettingsIcon className="w-6 h-6 text-muted" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
