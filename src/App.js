import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/SideBar';
import OPerpsPage from './pages/OPerpsPage'; 
import SwapPage from './pages/SwapPage';
import UnderConstruction from './components/UnderConstruction';

const App = () => {
  const [activePage, setActivePage] = useState('swap'); // Default to swap page
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle for small screens

  // Function to toggle between pages
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  // Function to handle sidebar toggle
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar for larger screens */}
      <div className={`fixed z-20 lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-16 w-64 transition-all`}>
        <Sidebar handlePageChange={handlePageChange} />
      </div>

      {/* Overlay for mobile screens when sidebar is open */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-10" onClick={toggleSidebar}></div>
      )}

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col lg:ml-16">
        {/* TopBar */}
        <div className="">
          <TopBar activePage={activePage} toggleSidebar={toggleSidebar} />
        </div>

        {/* Page Content */}
        <div className="flex-grow pt-16 p-4 overflow-y-auto">
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
