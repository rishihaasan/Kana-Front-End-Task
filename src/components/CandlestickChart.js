import React from 'react';
import { Chart } from 'chart.js';
import { CandlestickController, CandlestickElement, OhlcElement } from 'chartjs-chart-financial';
import { TimeScale, LinearScale, Tooltip, Legend, CategoryScale } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';

// Register chart elements, scales, plugins
Chart.register(CandlestickController, CandlestickElement, OhlcElement, TimeScale, LinearScale, CategoryScale, Tooltip, Legend, annotationPlugin);

const CandlestickChart = () => {
  const candlestickData = {
    datasets: [
      {
        label: 'ETH Price',
        data: [
          { x: new Date('2024-10-12T11:00:00'), o: 2920, h: 2950, l: 2900, c: 2935 },
          { x: new Date('2024-10-12T12:00:00'), o: 2935, h: 2960, l: 2920, c: 2950 },
          { x: new Date('2024-10-12T13:00:00'), o: 2950, h: 2980, l: 2940, c: 2965 },
          { x: new Date('2024-10-12T14:00:00'), o: 2965, h: 2990, l: 2950, c: 2970 },
        ],
        borderColor: '#2ED3B7',
        backgroundColor: 'rgba(46, 211, 183, 0.5)',
        color: {
          up: '#2ED3B7',
          down: '#FF4B4B',
          unchanged: '#999999',
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      annotation: {
        annotations: {
          currentPriceLine: {
            type: 'line',
            borderColor: '#FFA500',
            borderWidth: 2,
            label: {
              content: 'Current Price',
              enabled: true,
              position: 'end',
              backgroundColor: 'rgba(255, 165, 0, 0.5)',
              color: '#FFF',
            },
            scaleID: 'y',
            value: 2970, // Current price value
          },
          startPriceLine: {
            type: 'line',
            borderColor: '#FF4500',
            borderWidth: 1,
            borderDash: [10, 5],
            label: {
              content: 'Start Price',
              enabled: true,
              position: 'start',
              backgroundColor: 'rgba(255, 69, 0, 0.5)',
              color: '#FFF',
            },
            scaleID: 'y',
            value: 2920, // Start price value
          },
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'hour',
          displayFormats: {
            hour: 'HH:mm', // Display format for time (e.g., 12:00)
          },
        },
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          display: true,
          color: '#FFF',
          autoSkip: true,  // Automatically skip labels if too many
          maxTicksLimit: 6,  // Adjust this to limit the number of ticks shown
        },
      },
      y: {
        position: 'right', // Y-axis on the right side
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#FFF',
        },
      },
    },
  };

  return (
    <div className="h-80 bg-background rounded-lg shadow-md p-4">
      <ChartJS type="candlestick" data={candlestickData} options={options} />
    </div>
  );
};

export default CandlestickChart;