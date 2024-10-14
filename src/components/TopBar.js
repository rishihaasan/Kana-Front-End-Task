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
    <div className="flex items-center justify-between w-full p-4 py-5 bg-gray-900 shadow-lg font-manrope rounded-b-md max-w-[94vw] overflow-hidden mx-auto">
      <div className="flex items-center">
        {activePage === 'OPerps' && (
          <div className="flex flex-col items-start bg-gray-900 rounded-full py-1">
            <span className="text-xs font-inter text-[#777879] leading-[14.52px]">Powered by</span>
            <img src={EthosLogo} alt="ETHOSX Logo" className="w-20 h-auto" />
          </div>
        )}
        {activePage === 'swap' && (
          <div className="flex items-center space-x-4 bg-[rgba(29,30,32,0.8)] rounded-lg h-12 px-6 gap-4 backdrop-blur-md opacity-100 justify-center">
            <span className="text-gray-400 text-[14px] font-bold">Your Balance</span>
            <span className="text-white text-[14px] font-bold">$12,345</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-end ml-auto space-x-4">
        {activePage === 'OPerps' && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 bg-[rgba(29,30,32,0.8)] rounded-lg h-12 px-6 gap-4 backdrop-blur-md opacity-100 cursor-pointer">
              <FaucetIcon className="w-6 h-6 text-[#2ED3B7]" />
              <span className="text-white text-[14px] font-bold">Faucet</span>
            </div>

            <div className="relative flex items-center bg-[rgba(29,30,32,0.8)] rounded-lg h-12 px-6 gap-4 backdrop-blur-md opacity-100 cursor-pointer" onClick={toggleDropdown}>
              <TestNetIcon className="w-6 h-6 text-[#2ED3B7]" />
              <span className="text-white text-[14px] font-bold">Test net</span>
              <img src={ChevronDownIcon} alt="Chevron Down" className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              {dropdownOpen && (
                <div className="absolute top-full mt-2 w-full bg-gray-800 rounded-lg shadow-lg z-10">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white">Main Net</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white">Test Net</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white">Ropsten</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4 bg-[rgba(29,30,32,0.8)] rounded-lg h-12 px-4  backdrop-blur-md opacity-100">
              <div className="flex items-center space-x-1">
                <PointsIcon className="w-6 h-6 text-[#2ED3B7]" />
                <div>
                  <span className="text-[14px] font-bold text-[#2ED3B7]">100</span>
                  <span className="block text-[12px] text-[#777879]">Points earned</span>
                </div>
              </div>
              <div className="h-6 w-px bg-[#777879]" />
              <div className="flex items-center space-x-1">
                <ZapIcon className="w-6 h-6 text-[#2ED3B7]" />
                <div>
                  <span className="text-[14px] font-bold text-[#2ED3B7]">2</span>
                  <span className="block text-[12px] text-[#777879]">days active</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-3 bg-[rgba(29,30,32,0.8)] rounded-lg h-8 px-4 gap-4 backdrop-blur-md opacity-100">
          <img src={MetaMaskIcon} alt="Wallet" className="w-6 h-6" />
          <span className="text-white text-[14px] font-bold truncate w-[150px]">0xwalletaddresxyz</span>
          <div className="flex items-center justify-center bg-[rgba(29,30,32,0.8)] rounded-full w-8 h-8 p-2 backdrop-blur-md">
            <ClipboardIcon className="w-4 h-4 text-[#2ED3B7]" />
          </div>
          <div className="flex items-center justify-center bg-[rgba(29,30,32,0.8)] rounded-full w-8 h-8 p-2 backdrop-blur-md">
            <PowerIcon className="w-4 h-4 text-[#FF4D4D]" />
          </div>
        </div>

        <div className="flex items-center space-x-3 ml-4">
          <div className="flex items-center justify-center bg-[rgba(29,30,32,0.8)] rounded-full w-12 h-12 p-3 backdrop-blur-md">
            <BellIcon className="w-6 h-6 text-[#777879]" />
          </div>
          <div className="flex items-center justify-center bg-[rgba(29,30,32,0.8)] rounded-full w-12 h-12 p-3 backdrop-blur-md">
            <SettingsIcon className="w-6 h-6 text-[#777879]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;