import React from "react";
import { Gamepad2, Layers, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const PRIMARY_DARK = "#2c5e2b";
const ACCENT_LIGHT = "#98bc62";

interface ValueCardData {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    color: string;
}

const gameCards: ValueCardData[] = [
    {
        icon: Gamepad2,
        title: "Immersive Gameplay",
        description: "Creating engaging mechanics that keep players coming back for more.",
        color: "#34D399",
    },
    {
        icon: Layers,
        title: "Stunning Graphics",
        description: "High-quality 2D and 3D visual assets tailored for your game's style.",
        color: "#D1B44E",
    },
    {
        icon: Cpu,
        title: "Optimized Performance",
        description: "Ensuring smooth frame rates and fast loading times on all devices.",
        color: "#9333EA",
    },
    {
        icon: Globe,
        title: "Multiplayer Integration",
        description: "Seamless online connectivity for collaborative and competitive play.",
        color: ACCENT_LIGHT,
    },
];

const ValueCard: React.FC<ValueCardData> = ({ icon: Icon, title, description, color }) => (
    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.01] transition duration-300 border border-gray-100 flex flex-col h-full">
        <div className="flex items-center justify-start">
            <div className="p-3 rounded-xl flex items-center justify-center" style={{ backgroundColor: color + "20" }}>
                <Icon className="size-full" style={{ color }} />
            </div>
        </div>
        <h3 className="mt-4 text-xl font-bold" style={{ color: PRIMARY_DARK }}>{title}</h3>
        <p className="mt-2 text-gray-700 text-sm leading-relaxed grow">{description}</p>
    </div>
);

const GameDevSolutions: React.FC = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
                    <div className="lg:col-span-1 flex flex-col justify-center">
                        <p className="text-sm font-semibold text-[#2C5E2B] uppercase tracking-wide mb-2">Next-Gen Gaming</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">Bringing Your Virtual Worlds to Life</h2>
                        <p className="text-gray-700 leading-relaxed mb-8 max-w-[600px]">
                            Our game development team combines cutting-edge technology with artistic vision to create unforgettable gaming experiences.
                        </p>
                        <Link to="/contact-us" className="px-5 py-3 border bg-[#2c5e2b] text-center rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition w-[260px]">
                            Start Your Project
                        </Link>
                    </div>
                    <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {gameCards.map((card, index) => (
                            <ValueCard key={index} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameDevSolutions;
