import { ToolCase, Cable, Heart, Shield } from "lucide-react";

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
    icon: ToolCase,
    title: "Quality Assurance",
    description:
      "Our intense testing processes ensure your app is secure, bug-free and can be trusted by your audience.",
    color: "#34D399",
  },
  {
    icon: Cable,
    title: "User-Centric Design",
    description:
      "We prioritize user experience in our app development process; therefore. While designing modern and different designs, we also make sure that it functions well.",
    color: "#D1B44E",
  },
  {
    icon: Shield,
    title: "Agile Development",
    description:
      "We follow agile methodologies to keep you involved in the development process. We provide regular maintenance and updates based on your feedback.",
    color: "#9333EA",
  },
  {
    icon: Heart,
    title: "Custom Solutions",
    description:
      "We understand that every project is unique. We develop customized applications that align with your business goals and targetted audience.",
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
        {/* CHANGED: Switched to lg:grid-cols-2 for 50/50 split and kept lg:items-center for vertical alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
          {/* LEFT: CARDS */}
          {/* CHANGED: Switched to lg:col-span-1 */}
          <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueCards.map((card, index) => (
              <ValueCard key={index} {...card} />
            ))}
          </div>

          {/* RIGHT CONTENT */}
          {/* CHANGED: Switched to lg:col-span-1 */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <p className="text-sm font-semibold text-[#2C5E2B] uppercase tracking-wide mb-2">
              Optimize Your Operations
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
              Full Spectrum Mobile <br /> Services
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 max-w-[600px]">
              Whether you need a complete custom application from scratch or
              redesign an existing app with new modifications to meet the
              industry trends, we offer our services to help you at every stage
              of your business journey.
            </p>

            {/* CTA BUTTON */}
            <button className="px-8 py-3 border-2 border-[#2c5e2b] rounded-full text-md text-[#98bc62] hover:bg-[#2c5e2b] hover:text-[white] transition w-[260px] md:w-[280px]">
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