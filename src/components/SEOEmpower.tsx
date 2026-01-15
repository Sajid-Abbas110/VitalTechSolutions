import { Link } from "react-router-dom";

const PRIMARY_DARK = "#2c5e2b";
const ACCENT_LIGHT = "#98bc62";

const seoServices = [
    {
        title: "On-Page Optimization",
        description: "Aligning your website's content and structure with search engine algorithms for maximum relevance.",
    },
    {
        title: "Technical SEO Audit",
        description: "Fixing back-end issues like site speed, mobile-friendliness, and crawlability to improve performance.",
    },
    {
        title: "Link Building Strategies",
        description: "Acquiring high-quality backlinks to establish your brand's authority and trust in your niche.",
    },
    {
        title: "Local SEO Dominance",
        description: "Optimizing your presence for geographic-specific searches to capture local market share.",
    },
    {
        title: "Content Marketing",
        description: "Developing a strategic content calendar that drives organic traffic and nurtures customer leads.",
    },
];

const SEOEmpower: React.FC = () => {
    return (
        <section className="w-full flex flex-col md:flex-row bg-white">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-6 md:p-12" style={{ color: PRIMARY_DARK }}>
                <p className="text-xs md:text-sm uppercase tracking-wide mb-2" style={{ color: ACCENT_LIGHT }}>Results Driven</p>
                <h2 className="text-2xl md:text-4xl font-semibold leading-snug mb-4">Empowering Your Brand to Lead the Search Results</h2>
                <p className="text-gray-700 mb-6 text-sm md:text-base">
                    Our holistic approach to SEO ensures that every piece of content and every line of code works toward your growth.
                </p>
                <Link to="/contact-us" className="px-5 py-3 border bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition">
                    Let’s Optimize Together
                </Link>
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-12 border-t md:border-t-0 md:border-l border-gray-200 md:max-h-[600px] md:overflow-y-auto">
                {seoServices.map((service, index) => (
                    <div key={index} className="mb-12 last:mb-0">
                        <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: PRIMARY_DARK }}>{service.title}</h3>
                        <p className="text-gray-700 text-sm md:text-base">{service.description}</p>
                        <Link to="/contact" className="inline-block mt-4 px-5 py-2 border bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition">
                            Learn More
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SEOEmpower;
