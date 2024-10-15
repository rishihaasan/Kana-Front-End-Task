import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/SideBar';
import OPerpsPage from './pages/OPerpsPage';
import SwapPage from './pages/SwapPage';
import UnderConstruction from './components/UnderConstruction';

const App = () => {
  const [activePage, setActivePage] = useState('swap'); // Default to swap page

  // On component mount, check for an active page in sessionStorage
  useEffect(() => {
    const savedPage = sessionStorage.getItem('activePage');
    if (savedPage) {
      setActivePage(savedPage);
    }
  }, []);

  // Function to toggle between pages
  const handlePageChange = (page) => {
    setActivePage(page);
    sessionStorage.setItem('activePage', page); // Save the active page to sessionStorage
  };

  // Function to render the active page based on switch case
  const renderActivePage = (page) => {
    switch (page) {
      case 'swap':
        return <SwapPage />;
      case 'OPerps':
        return <OPerpsPage />;
      case 'stake':
        return <UnderConstruction pageName="Stake Page" />;
      case 'yield':
        return <UnderConstruction pageName="Yield Page" />;
      case 'trade':
        return <UnderConstruction pageName="Trade Page" />;
      default:
        return <SwapPage />; // Default to SwapPage if the page is not recognized
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Fixed Sidebar */}
      <Sidebar handlePageChange={handlePageChange} className="fixed" />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        {/* Fixed TopBar */}
        <TopBar activePage={activePage} className="fixed w-full z-10" />

        {/* Page Content */}
        <div className="flex-grow p-4 overflow-y-auto bg-background">
          {renderActivePage(activePage)}
        </div>
      </div>
    </div>
  );
};

export default App;
