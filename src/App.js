import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/SideBar';
import OPerpsPage from './pages/OPerpsPage';
import SwapPage from './pages/SwapPage';
import UnderConstruction from './components/UnderConstruction';

const App = () => {
  const [activePage, setActivePage] = useState('swap'); // Default to swap page

  // Function to toggle between pages
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Fixed Sidebar */}
      <Sidebar handlePageChange={handlePageChange} />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        {/* Fixed TopBar */}
        <TopBar activePage={activePage} />

        {/* Page Content */}
        <div className="flex-grow overflow-y-auto bg-background">
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
