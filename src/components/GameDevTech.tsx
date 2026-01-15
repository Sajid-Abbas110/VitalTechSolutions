import React, { useState } from 'react';
import { Server, Cloud, Zap, Brush, Globe, Component, Smartphone, Cpu, Layers } from 'lucide-react';

interface Tool {
    name: string;
    icon: React.ReactNode;
    color: string;
}

interface TabContent {
    id: 'Engines' | 'Modeling' | 'Networking' | 'Platforms';
    title: string;
    tools: Tool[];
}

const techStackData: TabContent[] = [
    {
        id: 'Engines',
        title: 'Game Engines',
        tools: [
            { name: 'Unity', icon: <Zap size={20} className="text-black" />, color: 'bg-gray-100' },
            { name: 'Unreal Engine', icon: <Cpu size={20} className="text-blue-600" />, color: 'bg-blue-50' },
            { name: 'Godot', icon: <Smartphone size={20} className="text-blue-400" />, color: 'bg-blue-50' },
        ],
    },
    {
        id: 'Modeling',
        title: '3D & Assets',
        tools: [
            { name: 'Blender', icon: <Brush size={20} className="text-orange-500" />, color: 'bg-orange-50' },
            { name: 'Maya', icon: <Layers size={20} className="text-cyan-500" />, color: 'bg-cyan-50' },
            { name: 'ZBrush', icon: <Component size={20} className="text-gray-700" />, color: 'bg-gray-100' },
        ],
    },
    {
        id: 'Networking',
        title: 'Multiplayer',
        tools: [
            { name: 'Photon', icon: <Zap size={20} className="text-blue-500" />, color: 'bg-blue-50' },
            { name: 'PlayFab', icon: <Cloud size={20} className="text-blue-600" />, color: 'bg-blue-50' },
            { name: 'GameLift', icon: <Server size={20} className="text-orange-600" />, color: 'bg-orange-50' },
        ],
    },
    {
        id: 'Platforms',
        title: 'Distribution',
        tools: [
            { name: 'Steam', icon: <Globe size={20} className="text-blue-900" />, color: 'bg-blue-100' },
            { name: 'App Store', icon: <Smartphone size={20} className="text-blue-500" />, color: 'bg-blue-50' },
            { name: 'Play Store', icon: <Smartphone size={20} className="text-green-500" />, color: 'bg-green-50' },
        ],
    },
];

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg transition-all hover:shadow-xl w-32 h-32 text-center border border-gray-100">
        <div className={`p-2 rounded-full ${tool.color} mb-3`}>
            {tool.icon}
        </div>
        <p className="font-semibold text-sm text-gray-700">{tool.name}</p>
    </div>
);

const GameDevTech: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabContent['id']>('Engines');
    const currentContent = techStackData.find(tab => tab.id === activeTab);
    const tabs = techStackData.map(tab => tab.id);

    return (
        <div className="py-20 bg-gray-50 flex flex-col items-center justify-center px-6">
            <div className="w-full max-w-5xl mb-12">
                <p className="text-sm font-medium text-gray-500 mb-1">Tools We Use</p>
                <h1 className="text-3xl font-bold text-gray-900">Advanced Gaming Technology Stack</h1>
            </div>

            <div className="w-full max-w-5xl mb-8 overflow-x-auto">
                <div className="flex space-x-3 p-1 rounded-full bg-white shadow-md items-center justify-center">
                    {tabs.map((tabId) => (
                        <button
                            key={tabId}
                            onClick={() => setActiveTab(tabId)}
                            className={`px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${activeTab === tabId ? 'bg-[#2C5E2B] text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                        >
                            {tabId}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-5xl bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">{currentContent?.title}</h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-center">
                        {currentContent?.tools.map((tool) => (
                            <ToolCard key={tool.name} tool={tool} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDevTech;
