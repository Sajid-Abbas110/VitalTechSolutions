import React from "react";
import { Search, PenTool, BarChart3, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

const PRIMARY_DARK = "#2c5e2b";
const ACCENT_LIGHT = "#98bc62";

interface ValueCardData {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    color: string;
}

const seoValues: ValueCardData[] = [
    {
        icon: Search,
        title: "Keyword Excellence",
        description: "Finding the exact terms your customers use to find your business.",
        color: "#34D399",
    },
    {
        icon: PenTool,
        title: "Compelling Content",
        description: "Words that doesn't just rank, but resonates with your readers.",
        color: "#D1B44E",
    },
    {
        icon: BarChart3,
        title: "Data-Led SEO",
        description: "Using technical analysis to drive visibility and rankings.",
        color: "#9333EA",
    },
    {
        icon: Globe2,
        title: "Global Reach",
        description: "Scaling your authority across regional and international search.",
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

const SEOCoreValues: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
                    <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {seoValues.map((card, index) => (
                            <ValueCard key={index} {...card} />
                        ))}
                    </div>
                    <div className="lg:col-span-1 flex flex-col justify-center">
                        <p className="text-sm font-semibold text-[#2C5E2B] uppercase tracking-wide mb-2">Authority & Visibility</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">Mastering the Art of Search & Content</h2>
                        <p className="text-gray-700 leading-relaxed mb-8 max-w-[600px]">
                            We merge technical precision with creative flair to ensure your brand stands out in the crowded digital landscape.
                        </p>
                        <Link to="/contact-us" className="px-5 py-3 border bg-[#2c5e2b] text-center rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition w-[260px]">
                            Boost Your Rankings
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SEOCoreValues;
