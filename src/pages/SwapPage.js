import React, { useState, useEffect } from 'react';
import solanaIcon from '../assets/swapPageAssets/solana.png';
import avalancheIcon from '../assets/swapPageAssets/avalanche.png';
import arbitrumIcon from '../assets/swapPageAssets/arbitrum.png';
import polygonIcon from '../assets/swapPageAssets/polygon1.png';
import bscIcon from '../assets/swapPageAssets/bsc.png';
import zksyncIcon from '../assets/swapPageAssets/zksync.png';
import aptosIcon from '../assets/swapPageAssets/aptos.png';
import ethereumIcon from '../assets/swapPageAssets/ethereum.png';
import suiIcon from '../assets/swapPageAssets/sui-sui-logo.png';
import refreshIcon from '../assets/swapPageAssets/refresh-cw-05.svg';
import settingsIcon from '../assets/swapPageAssets/settings-03.svg';
import swapIcon from '../assets/swapPageAssets/switch-vertical-02.svg';
import xCircle from '../assets/swapPageAssets/x-circle.svg';
import tokenIcon from '../assets/swapPageAssets/tokenicon.svg';
import toggleIcon from '../assets/swapPageAssets/chevron-down.svg';
import sameChainIcon from '../assets/swapPageAssets/tabler_arrows-split-2.svg';
import crossChainIcon from '../assets/swapPageAssets/tabler_arrows-shuffle.svg';
import Button from '../components/ButtonComponent'

const SwapPage = () => {
    const [activeTab, setActiveTab] = useState('same-chain');
    const [selectedNetwork, setSelectedNetwork] = useState(null);
    const [payFromValue, setPayFromValue] = useState('');
    const [receiveToValue, setReceiveToValue] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const networkIcons = [
        { name: 'Aptos', icon: aptosIcon },
        { name: 'zkSync', icon: zksyncIcon },
        { name: 'BSC', icon: bscIcon },
        { name: 'Polygon', icon: polygonIcon },
        { name: 'Arbitrum', icon: arbitrumIcon },
        { name: 'Avalanche', icon: avalancheIcon },
        { name: 'Ethereum', icon: ethereumIcon },
        { name: 'Solana', icon: solanaIcon },
        { name: 'Sui', icon: suiIcon },
    ];

    useEffect(() => {
        setSelectedNetwork(networkIcons[0].name);
    }, []);

    const handlePayFromChange = (e) => setPayFromValue(e.target.value);
    const clearPayFrom = () => setPayFromValue('');

    const handleReceiveToChange = (e) => setReceiveToValue(e.target.value);
    const clearReceiveTo = () => setReceiveToValue('');

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="p-4 bg-background min-h-screen flex flex-col items-center">
            {/* Main Card */}
            <div className="rounded-lg p-6 w-full max-w-lg">
                {/* Top Tabs: Same-chain and Cross-chain */}
                <div className="flex justify-between">
                    <div className="flex">
                        <button
                            onClick={() => setActiveTab('same-chain')}
                            className={`flex items-center px-4 py-2 ${activeTab === 'same-chain'
                                ? 'bg-[rgba(255,255,255,0.06)] text-white'
                                : 'bg-[#111213] text-[#A5A5A6]'
                                } rounded-t-lg`}
                            style={{
                                fontFamily: 'Manrope',
                                fontSize: '14px',
                                fontWeight: activeTab === 'same-chain' ? '800' : '400',
                            }}
                        >
                            <img
                                src={sameChainIcon}
                                alt="Same-chain Icon"
                                className="w-4 h-4 mr-2"
                            />
                            Same-chain
                        </button>

                        <button
                            onClick={() => setActiveTab('cross-chain')}
                            className={`flex items-center px-4 py-2 ${activeTab === 'cross-chain'
                                ? 'bg-[rgba(255,255,255,0.06)] text-white'
                                : 'bg-[#111213] text-[#A5A5A6]'
                                } rounded-t-lg`}
                            style={{
                                fontFamily: 'Manrope',
                                fontSize: '14px',
                                fontWeight: activeTab === 'cross-chain' ? '800' : '400',
                            }}
                        >
                            <img
                                src={crossChainIcon}
                                alt="Cross-chain Icon"
                                className="w-4 h-4 mr-2"
                            />
                            Cross-chain
                        </button>
                    </div>

                </div>

                {/* Same-chain Swap Text and Icons */}
                <div className="bg-gray-700 p-4 rounded-[0px_10px_10px_10px] shadow-custom-card border border-stroke backdrop-blur-md">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-white font-bold text-sm">Same-chain Swap</div>
                        <div className="flex space-x-2">
                            <img src={refreshIcon} alt="Refresh" className="w-4 h-4 cursor-pointer" />
                            <img src={settingsIcon} alt="Settings" className="w-4 h-4 cursor-pointer" />
                        </div>
                    </div>

                    {/* Network selection icons */}
                    <div className="flex space-x-4 mb-6">
                        {networkIcons.map((network, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedNetwork(network.name)}
                                className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-lg ${selectedNetwork === network.name ? 'bg-gray-800 border border-stroke' : ''}`}
                            >
                                <img src={network.icon} alt={network.name} className="w-6 h-6" />
                            </div>
                        ))}
                    </div>

                    {/* Pay from Connect Wallet Card */}
                    <div className="bg-gray-700 border border-stroke p-2 rounded-lg">
                        <div className="flex flex-col items-start">
                            <div className="text-left">
                                <span className="text-sm font-normal text-gray-400">
                                    Pay from{' '}
                                </span>
                                <span className="cursor-pointer text-sm font-bold text-primary">
                                    Connect Wallet
                                </span>
                            </div>
                        </div>

                        {/* Input Section for Amount and Token */}
                        <div className="flex justify-between items-center p-4 rounded-lg mt-2">
                            <div className="flex items-center relative border-b border-stroke w-[55%]">
                                <input
                                    type="text"
                                    value={payFromValue}
                                    onChange={handlePayFromChange}
                                    placeholder="123.00"
                                    className="text-white bg-transparent outline-none w-24 text-base font-manrope"
                                />
                                {payFromValue && (
                                    <button onClick={clearPayFrom} className="absolute right-[-24px] text-secondary">
                                        <img src={xCircle} alt="Clear Input" className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            <div className="flex items-center space-x-2">
                                {/* Token on Chain small card */}
                                <div className="flex items-center justify-center p-4 rounded-lg bg-gray-700 border border-stroke shadow-custom-card">
                                    <img src={tokenIcon} alt="Token Icon" className="w-8 h-8 mr-4" />
                                    <div className="flex flex-col">
                                        <div className="text-white font-bold text-lg">Token</div>
                                        <div className="text-secondary text-xs">on Chain</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Balance */}
                        <div className="flex justify-between mt-2 text-secondary text-sm">
                            <span>USD 0</span>
                            <span>Balance -</span>
                        </div>
                    </div>

                    {/* Switch Icon */}
                    <div className="flex justify-center items-center relative top-0 mb-[-10px] mt-[-10px] w-10 h-10 p-2 bg-gray-700 border border-stroke rounded-lg z-10 mx-auto">
                        <img src={swapIcon} alt="Switch" className="w-4 h-4" />
                    </div>

                    {/* Receive to Connect Wallet Card */}
                    <div className="bg-gray-700 border border-stroke p-2 rounded-lg mb-4">
                        <div className="flex flex-col items-start">
                            <div className="text-left">
                                <span className="text-sm font-normal text-gray-400">
                                    Receive to{' '}
                                </span>
                                <span className="cursor-pointer text-sm font-bold text-primary">
                                    Connect Wallet
                                </span>
                            </div>
                        </div>

                        {/* Input Section for Amount and Token */}
                        <div className="flex justify-between items-baseline p-4 rounded-lg mt-2">
                            <div className="flex items-center space-x-2 relative  border-b border-stroke w-[55%]">
                                <input
                                    type="text"
                                    value={receiveToValue}
                                    onChange={handleReceiveToChange}
                                    placeholder="123.00"
                                    className="text-white bg-transparent outline-none w-24"
                                />
                                {/* Clear input button (X-circle SVG) */}
                                {receiveToValue && (
                                    <button onClick={clearReceiveTo} className="ml-2 absolute right-[-24px] text-gray-400">
                                        <img src={xCircle} alt="Clear Input" className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            <div className="flex items-center space-x-2">
                                {/* Token on Chain small card */}
                                <div className="flex items-center justify-center p-4 rounded-lg bg-gray-700 border border-stroke shadow-md">
                                    <div className="flex items-center justify-start">
                                        {/* Token Icon */}
                                        <img
                                            src={tokenIcon}
                                            alt="Token Icon"
                                            className="w-8 h-8 mr-4"
                                        />
                                        <div className="flex flex-col justify-center">
                                            {/* Token Text */}
                                            <div className="text-white font-bold text-lg">
                                                Token
                                            </div>
                                            {/* on Chain Text */}
                                            <div className="text-gray-400 text-xs">
                                                on Chain
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Balance */}
                        <div className="flex justify-between mt-2 text-secondary text-sm">
                            <span>USD 0</span>
                            <span>Balance -</span>
                        </div>
                    </div>

                    {/* Swap Now Button */}
                    <Button
                        label="Swap Now"
                        onClick={() => console.log('Swapping...')}
                        variant="secondary"
                    />
                </div>
            </div>

            {/* Additional Details Section */}
            <div className="bg-gray-700 shadow-custom-card border border-stroke backdrop-blur-md mt-4 rounded-lg p-4 w-full max-w-lg">
                <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpand}>
                    <div className="text-secondary text-sm">Additional details</div>
                    <img src={toggleIcon} alt="Toggle" className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />
                </div>

                {isExpanded && (
                    <div className="mt-4 text-secondary">
                        <div className="border-t border-stroke mt-4"></div>
                        <div className="flex justify-between">
                            <span className="text-sm">Minimum Received</span>
                            <span className="text-sm">0.00</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="text-sm">Transaction Fee</span>
                            <span className="text-sm">0.00</span>
                        </div>
                        <div className="mt-4">
                            <a href="#" className="text-primary font-bold text-xs flex items-center">
                                More routes <span className="ml-1">↗</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SwapPage;