import React, { useState } from 'react';
import { ReactComponent as SortIcon } from '../assets/rightPaneAssets/chevron-selector-vertical.svg'; // Import the sort icon SVG

const initialOrders = [
  { time: '1:41:13 PM', date: '12-Mar-24', market: 'ETH', leverage: 'Long', side: 'Buy', amount: 200, timeTillExecution: '02:34' },
  { time: '1:47:13 PM', date: '19-Mar-24', market: 'ETH', leverage: 'Long', side: 'Buy', amount: 200, timeTillExecution: '02:33' },
  { time: '1:45:13 PM', date: '18-Mar-24', market: 'ETH', leverage: 'Long', side: 'Buy', amount: 200, timeTillExecution: '02:39' },
  { time: '1:49:13 PM', date: '22-Mar-24', market: 'ETH', leverage: 'Long', side: 'Buy', amount: 200, timeTillExecution: '02:37' },
  { time: '1:48:13 PM', date: '14-Mar-24', market: 'ETH', leverage: 'Long', side: 'Buy', amount: 200, timeTillExecution: '02:32' },
];

const OpenOrdersTable = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [sortConfig, setSortConfig] = useState(null);

  const sortData = (key) => {
    let sortedOrders = [...orders];
    let direction = 'ascending';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    sortedOrders.sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setOrders(sortedOrders);
  };

  const renderSortIcon = (key) => (
    <SortIcon
      className={`ml-2 w-4 h-4 inline-block ${
        sortConfig && sortConfig.key === key ? (sortConfig.direction === 'ascending' ? 'rotate-180' : '') : ''
      }`}
    />
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 text-left text-[10px] font-manrope font-normal leading-[10px]">
            <th className="cursor-pointer" onClick={() => sortData('time')}>
              Time{renderSortIcon('time')}
            </th>
            <th className="cursor-pointer" onClick={() => sortData('market')}>
              Market{renderSortIcon('market')}
            </th>
            <th className="cursor-pointer" onClick={() => sortData('side')}>
              Side{renderSortIcon('side')}
            </th>
            <th className="cursor-pointer" onClick={() => sortData('amount')}>
              Amount{renderSortIcon('amount')}
            </th>
            <th className="cursor-pointer" onClick={() => sortData('timeTillExecution')}>
              Time till execution{renderSortIcon('timeTillExecution')}
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className={`text-white ${index === orders.length - 1 ? '' : 'border-b border-white/10'}`}>
              {/* Time with subtext */}
              <td className="py-2">
                <div className="text-sm font-manrope font-normal leading-5">{order.time}</div>
                <div className="text-gray-400 text-xs font-manrope font-normal leading-4">{order.date}</div>
              </td>
              {/* Market with subtext ("Put •" and "Long" in different colors) */}
              <td className="py-2">
                <div className="text-sm font-manrope font-normal leading-5">{order.market}</div>
                <div className="flex items-center text-xs font-manrope font-normal leading-4 text-gray-400">
                  <span>Put •</span>
                  <span className="ml-1 text-green">{order.leverage}</span>
                </div>
              </td>
              {/* Side */}
              <td className="py-2 text-sm font-manrope font-normal leading-5">{order.side}</td>
              {/* Amount */}
              <td className="py-2 text-sm font-manrope font-normal leading-5">{order.amount} LPO</td>
              {/* Time till execution */}
              <td className="py-2 text-sm font-manrope font-normal leading-5">{order.timeTillExecution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OpenOrdersTable;