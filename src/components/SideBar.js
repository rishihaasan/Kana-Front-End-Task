import React, { useState } from 'react';
import { ReactComponent as Icon1 } from '../assets/leftPaneAssets/1.svg';
import { ReactComponent as Icon2 } from '../assets/leftPaneAssets/2.svg';
import { ReactComponent as Icon3 } from '../assets/leftPaneAssets/3.svg';
import { ReactComponent as Icon4 } from '../assets/leftPaneAssets/4.svg';
import { ReactComponent as Icon5 } from '../assets/leftPaneAssets/5.svg';
import { ReactComponent as Icon6 } from '../assets/leftPaneAssets/6.svg';
import { ReactComponent as IconHelp } from '../assets/leftPaneAssets/7.svg';
import { ReactComponent as ChevronDown } from '../assets/leftPaneAssets/chevron-down.svg';
import { ReactComponent as LeaderboardIcon } from '../assets/leftPaneAssets/users-up.svg';
import { ReactComponent as LearnIcon } from '../assets/leftPaneAssets/book-open-01.svg';
import { ReactComponent as CommunityIcon } from '../assets/leftPaneAssets/users-01.svg';
import { ReactComponent as ReferralIcon } from '../assets/leftPaneAssets/gift-01.svg';
import logoIcon from '../assets/leftPaneAssets/logo.png';
import kanalabsTextLogo from '../assets/leftPaneAssets/Kanalabs.png';

const Sidebar = ({ handlePageChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);

  const icons = [
    { icon: Icon1, label: 'Swap', page: 'swap' },
    { icon: Icon2, label: 'Stake', page: 'stake' },
    { icon: Icon3, label: 'Yield', page: 'yield' },
    { icon: Icon4, label: 'OPerps', page: 'OPerps' },
    { icon: Icon5, label: 'Trade', page: 'trade' },
    { icon: Icon6, label: 'Others', isDropdown: true, page: 'others' },
  ];

  return (
    <div
      className={`h-screen bg-gray-900 flex flex-col justify-between ${isExpanded ? 'w-48' : 'w-16'} transition-all duration-300`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo */}
      <div className={`flex items-center ${isExpanded ? 'justify-start pl-4' : 'justify-center'} py-4`}>
        <img src={logoIcon} alt="Logo" className="w-12 h-12 transition-all duration-300" />
        {isExpanded && (
          <img
            src={kanalabsTextLogo}
            alt="kanalabs"
            className="ml-2 transition-all duration-300"
            style={{ width: '80px', height: 'auto' }}
          />
        )}
      </div>

      {/* Menu Items */}
      <div className="flex flex-col space-y-4 px-2">
        {icons.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => {
                setActiveIndex(index); 
                handlePageChange(item.page);
              }}
              className={`flex items-center justify-between p-2 rounded-md transition-all duration-300 ${
                activeIndex === index ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <div className="flex items-center">
                <item.icon className="w-6 h-6" />
                {isExpanded && (
                  <span className="ml-2 text-sm">{item.label}</span>
                )}
              </div>
              {item.isDropdown && isExpanded && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isOthersOpen ? 'rotate-180' : ''}`}
                  onClick={() => setIsOthersOpen(!isOthersOpen)}
                />
              )}
            </button>

            {/* Dropdown for "Others" */}
            {item.isDropdown && isExpanded && isOthersOpen && (
              <div className="ml-8 mt-2 flex flex-col space-y-2">
                <button className="text-sm text-gray-400 hover:text-white flex items-center">
                  <LeaderboardIcon className="w-5 h-5 mr-2" />
                  Leaderboard
                </button>
                <button className="text-sm text-gray-400 hover:text-white flex items-center">
                  <LearnIcon className="w-5 h-5 mr-2" />
                  Learn
                </button>
                <button className="text-sm text-gray-400 hover:text-white flex items-center">
                  <CommunityIcon className="w-5 h-5 mr-2" />
                  Community
                </button>
                <button className="text-sm text-gray-400 hover:text-white flex items-center">
                  <ReferralIcon className="w-5 h-5 mr-2" />
                  Referral
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Help Button */}
      <div className={`flex items-center ${isExpanded ? 'justify-start pl-4' : 'justify-center'} mb-4`}>
        <button
          className="p-2 rounded-md flex items-center hover:bg-gray-700"
        >
          <IconHelp className="w-6 h-6 text-gray-400 hover:text-white" />
          {isExpanded && (
            <span className="ml-2 text-sm text-white">Help</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;