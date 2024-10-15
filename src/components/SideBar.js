import React, { useState, useEffect } from 'react';
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

  // Retrieve the active icon from sessionStorage on component mount
  useEffect(() => {
    const storedActiveIndex = sessionStorage.getItem('activeIconIndex');
    if (storedActiveIndex !== null) {
      setActiveIndex(Number(storedActiveIndex));
    }
  }, []);

  // Function to handle icon selection
  const handleIconClick = (index, page) => {
    setActiveIndex(index);
    handlePageChange(page);

    // Save the active index to sessionStorage
    sessionStorage.setItem('activeIconIndex', index);
  };

  return (
    <div
      className={`h-screen bg-gray-900 flex flex-col justify-between ${isExpanded ? 'w-48' : 'w-16'} transition-width duration-300`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
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

      <div className="flex flex-col space-y-4" style={{ padding: '10px', transition: 'all 0.3s ease-in-out' }}>
        {icons.map((item, index) => (
          <div key={index} className="w-full">
            <button
              onClick={() => handleIconClick(index, item.page)} // Call the new function
              className={`p-2 rounded-md flex items-center justify-center transition-all duration-300 w-full ${
                index === activeIndex ? 'bg-tab-color' : 'hover:bg-gray-800'
              }`}
              style={{ padding: '10px' }}
            >
              <div className={`flex items-center ${isExpanded ? 'justify-start pl-4' : 'justify-center'} w-full`}>
                <item.icon className={`w-6 h-6 transition-all duration-300 ${index === activeIndex ? 'text-white' : 'text-gray-400'}`} />
                {isExpanded && (
                  <span className="text-white text-sm ml-2" style={{ paddingRight: '10px' }}>
                    {item.label}
                  </span>
                )}
              </div>
              {item.isDropdown && isExpanded && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isOthersOpen ? 'rotate-180' : ''}`}
                  onClick={() => setIsOthersOpen(!isOthersOpen)}
                />
              )}
            </button>
            {item.isDropdown && isExpanded && isOthersOpen && (
              <div className="ml-8 flex flex-col space-y-2">
                <button className="flex items-center text-sm text-gray-400 hover:text-white">
                  <LeaderboardIcon className="w-4 h-4 mr-2" />
                  Leaderboard
                </button>
                <button className="flex items-center text-sm text-gray-400 hover:text-white">
                  <LearnIcon className="w-4 h-4 mr-2" />
                  Learn
                </button>
                <button className="flex items-center text-sm text-gray-400 hover:text-white">
                  <CommunityIcon className="w-4 h-4 mr-2" />
                  Community
                </button>
                <button className="flex items-center text-sm text-gray-400 hover:text-white">
                  <ReferralIcon className="w-4 h-4 mr-2" />
                  Referral
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={`flex ${isExpanded ? 'justify-start pl-4' : 'justify-center'} mb-4`} style={{ padding: '10px' }}>
        <button className="p-2 rounded-md transition-all duration-200 w-full hover:bg-gray-700" style={{ backgroundColor: '#111213' }}>
          <div className="flex items-center" style={{ padding: '5px', borderRadius: '10px' }}>
            <IconHelp className="w-6 h-6 text-gray-400 hover:text-white" />
            {isExpanded && (
              <span className="text-white text-sm ml-2" style={{ paddingRight: '10px' }}>Help</span>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;