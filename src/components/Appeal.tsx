import { Briefcase, Cable, Heart, Shield } from "lucide-react"; // Using Briefcase to fix the import error (ToolCase is not available)

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
    icon: Briefcase, // Updated icon reference
    title: "Designs Particular to a Sector",
    description:
      "In order to tell tales and deliver messages through our designs, we base our creations on your industry or specialization.",
    color: "#34D399",
  },
  {
    icon: Cable,
    title: "Changed Your Companies",
    description:
      "In order to offer our clients modern graphic design solutions, we at Intersys are committed to studying and utilizing the newest techniques and resources.",
    color: "#D1B44E",
  },
  {
    icon: Shield,
    title: "Appealing Designs",
    description:
      "We produce visually appealing designs and graphics. In addition to making the website visually appealing, we also make sure that the designs are accessible.",
    color: "#9333EA",
  },
  {
    icon: Heart,
    title: "Create a Special Selling Point",
    description:
      "Use compelling arguments and convince the audience of the value of your items.",
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
              Improve the Position of Your Brand
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
              Designs That Get Your Business Noticed
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 max-w-[600px]">
              We assist you in making an impression on your audience that will
              last. Use our graphic design solutions to reshape the value and
              message of your business right now!
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
