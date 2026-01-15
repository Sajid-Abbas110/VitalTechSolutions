import { Briefcase, Cable, Heart, Shield } from "lucide-react";

// Color Theme
const PRIMARY_DARK = "#2c5e2b";
const ACCENT_LIGHT = "#98bc62";

// --- Types ---
interface ValueCardData {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
}

const valueCards: ValueCardData[] = [
  {
    icon: Briefcase, // FIX: Used Briefcase instead of ToolCase
    title: "Maintenance and Support",
    description:
      "Maintain your website on a regular basis so that the visitors don't leave the website annoyed.",
    color: "#34D399",
  },
  {
    icon: Cable,
    title: "Responsive Website Development",
    description:
      "Make sure your website works fast and performs well on every device.",
    color: "#D1B44E",
  },
  {
    icon: Shield,
    title: "SEO Optimization & Visibility",
    description:
      "Grow your brand’s online audience and visibility with the help of SEO optimization.",
    color: "#9333EA",
  },
  {
    icon: Heart,
    title: "Custom Website Design",
    description: "Custom Website Design",
    color: ACCENT_LIGHT,
  },
];

// --- Card Component ---
const ValueCard: React.FC<ValueCardData> = ({
  icon: Icon,
  title,
  description,
  color,
}) => (
  <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.01] transition duration-300 border border-gray-100 flex flex-col h-full">
    <div className="flex items-center justify-start">
      <div
        className="p-3 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: color + "20" }}
      >
        <Icon className="size-7" style={{ color }} />
      </div>
    </div>

    <h3 className="mt-4 text-xl font-bold" style={{ color: PRIMARY_DARK }}>
      {title}
    </h3>

    <p className="mt-2 text-gray-700 text-sm leading-relaxed grow">
      {description}
    </p>
  </div>
);

// --- Main Section ---
const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* MAINTAINED: 50/50 split (lg:grid-cols-2) and vertical alignment (lg:items-center) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
          {/* LEFT: CARDS - col-span-1 for 50% width */}
          <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueCards.map((card, index) => (
              <ValueCard key={index} {...card} />
            ))}
          </div>

          {/* RIGHT CONTENT - col-span-1 for 50% width */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <p className="text-sm font-semibold text-[#2C5E2B] uppercase tracking-wide mb-2">
              Achieve Higher With
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
              Our Web Development <br /> Services Now
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 max-w-[600px]">
              At ViralTechSolutions, we are on a mission to provide user-friendly and
              easy-to-use websites that everyone can access. We help businesses
              succeed and grow audiences to contribute to this transforming
              digital era.
            </p>

            {/* CTA BUTTON */}
            <button className="px-8 py-3 border-2 bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition w-[260px] md:w-[280px]">
              Let’s Build Together
            </button>

            {/* RESPONSIVE PATTERN */}
            <div className="mt-16 w-full">
              <img
                src="/bg-pattern.png"
                alt="pattern"
                className="w-full h-auto object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => (
  <div className=" bg-white font-inter">
    <FeatureSection />
  </div>
);

export default App;
