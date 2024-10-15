import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/SideBar';
import OPerpsPage from './pages/OPerpsPage'; 
import SwapPage from './pages/SwapPage';
import UnderConstruction from './components/UnderConstruction';

const App = () => {
  const [activePage, setActivePage] = useState('swap'); // Default to swap page

  // On component mount, check for an active page in localStorage
  useEffect(() => {
    const savedPage = sessionStorage.getItem('activePage');
    if (savedPage) {
      setActivePage(savedPage);
    }
  }, []);

  // Function to toggle between pages
  const handlePageChange = (page) => {
    setActivePage(page);
    sessionStorage.setItem('activePage', page); // Save the active page to localStorage
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
          {activePage === 'swap' && <SwapPage />}
          {activePage === 'OPerps' && <OPerpsPage />}
          {activePage === 'stake' && <UnderConstruction pageName="Stake Page" />}
          {activePage === 'yield' && <UnderConstruction pageName="Yield Page" />}
          {activePage === 'trade' && <UnderConstruction pageName="Trade Page" />}
        </div>
      </div>
    </div>
  );
};

export default App;