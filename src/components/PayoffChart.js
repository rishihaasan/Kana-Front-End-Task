import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';

// Register the necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const PayoffChart = () => {
  const [activeTab, setActiveTab] = useState('payoff');

  // Data for the chart
  const chartData = {
    labels: ['Start', 'ETH Price', 'Max Profit'], // X-axis points
    datasets: [
      {
        label: 'Payoff Line',
        data: [0, 0, 3512.4, 6000], // Flat till ETH Price, then rises
        borderColor: '#2ED3B7',
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: '#2ED3B7',
        pointRadius: 0,
        pointHoverRadius: 2,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      x: {
        grid: {
          display: true,
        },
        ticks: {
          display: false, // Hide x-axis labels
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false, // Hide y-axis labels
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      line: {
        tension: 0, // Flat line until ETH price
      },
    },
    layout: {
      padding: {
        top: 20,
        right: 60,
        bottom: 10,
        left: 20,
      },
    },
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-md">
      {/* Tabs */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('payoff')}
            className={`text-center px-4 py-2 rounded-t-lg ${
              activeTab === 'payoff' ? 'text-white font-bold bg-white-01' : 'text-secondary font-normal bg-gray-800'
            } text-[12px] font-manrope leading-[18px]`}
          >
            Payoff chart
          </button>

          <button
            onClick={() => setActiveTab('previousCycles')}
            className={`text-center px-4 py-2 rounded-t-lg ${
              activeTab === 'previousCycles' ? 'text-white font-bold bg-white-01' : 'text-secondary font-normal bg-gray-800'
            } text-[12px] font-manrope leading-[18px]`}
          >
            Previous Cycles
          </button>

          <button
            onClick={() => setActiveTab('poolOverview')}
            className={`text-center px-4 py-2 rounded-t-lg ${
              activeTab === 'poolOverview' ? 'text-white font-bold bg-white-01' : 'text-secondary font-normal bg-gray-800'
            } text-[12px] font-manrope leading-[18px]`}
          >
            Pool Overview
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="relative m-4">
        <Line data={chartData} options={chartOptions} />

        {/* ETH Price inside the chart */}
        <div className="absolute top-20 transform translate-x-[-50%] right-[calc(50%)] text-white text-center">
          <div className="text-sm font-manrope font-bold text-[14px] leading-[18px]">
            ETH Price now
          </div>
          <div className="font-bold text-[14px] leading-[18px] font-manrope">
            $3,512.40
          </div>
        </div>

        {/* X-axis line */}
        <div className="absolute bottom-4 left-3 right-3 border-t border-text-color-2" style={{ height: '1px' }} />

        {/* Vertical line at ETH price */}
        <div className="absolute right-[calc(50%+16px)] top-12 bottom-4 border-l border-white" style={{ width: '1px' }} />
      </div>

      {/* Max profit and Entry Price Labels */}
      <div className="m-4 pb-2">
        <div className="text-white">
          <span className="block text-sm text-secondary text-left text-[14px] font-manrope font-normal leading-[20px]">
            Max profit
          </span>
          <span className="block text-sm text-secondary text-left text-[14px] font-manrope font-normal leading-[20px]">
            Entry Price (Break-Even)
          </span>
        </div>
      </div>
    </div>
  );
};

export default PayoffChart;