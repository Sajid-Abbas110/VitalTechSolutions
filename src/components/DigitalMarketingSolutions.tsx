import React from "react";
import { TrendingUp, Users, Target, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const PRIMARY_DARK = "#2c5e2b";
const ACCENT_LIGHT = "#98bc62";

interface ValueCardData {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    color: string;
}

const marketingCards: ValueCardData[] = [
    {
        icon: TrendingUp,
        title: "Performance Marketing",
        description: "Data-driven campaigns focused on ROI and scalable growth.",
        color: "#34D399",
    },
    {
        icon: Users,
        title: "Social Media Growth",
        description: "Engage and expand your community across all social platforms.",
        color: "#D1B44E",
    },
    {
        icon: Target,
        title: "Targeted Advertising",
        description: "Reach the right audience at the right time with precision ads.",
        color: "#9333EA",
    },
    {
        icon: BarChart,
        title: "Advanced Analytics",
        description: "Deep insights into user behavior and campaign performance.",
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

const DigitalMarketingSolutions: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
                    <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
                        {marketingCards.map((card, index) => (
                            <ValueCard key={index} {...card} />
                        ))}
                    </div>
                    <div className="lg:col-span-1 flex flex-col justify-center order-1 lg:order-2">
                        <p className="text-sm font-semibold text-[#2C5E2B] uppercase tracking-wide mb-2">Maximize Your Reach</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">Innovative Marketing Strategies for Modern Brands</h2>
                        <p className="text-gray-700 leading-relaxed mb-8 max-w-[600px]">
                            We combine creativity with analytics to deliver marketing solutions that don't just look good but drive actual business results.
                        </p>
                        <Link to="/contact-us" className="px-5 py-3 border bg-[#2c5e2b] text-center rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition w-[260px]">
                            Start Your Growth Journey
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalMarketingSolutions;
