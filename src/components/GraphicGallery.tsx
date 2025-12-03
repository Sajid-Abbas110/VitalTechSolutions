import { Link } from "react-router-dom";

export default function ProjectsSection() {
  return (
    <section className="w-full bg-white px-6 my-12 md:px-12 lg:px-20">
      
      {/* TEXT CONTENT */}
      <div className="max-w-full  mx-auto text-center md:text-left">
        <p className="text-sm font-semibold text-[#2C5E2B] uppercase tracking-wide">
          Our Objectives
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-4">
          Talk to Intersys about your ideas and design them.
        </h2>

        <p className="text-gray-600 text-base mt-3">
          Get access to fresh chances for brand expansion with Intersys. Whether
          your company is in Texas, Florida, California, or Dallas, we are here
          to make the move.
        </p>
      </div>

      {/* PROJECT GRID — 1 col mobile, 2 cols tablet, 4 cols desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 max-w-7xl mx-auto">

        {/* CARD 1 */}
        <div className="relative transition-transform duration-300 hover:scale-105">
          <img
            src="/pro1.jpg"
            alt="Mobile App"
            className="rounded-xl shadow-lg w-full"
          />
          <div className="absolute -bottom-6 left-6 bg-white shadow-xl rounded-xl p-5 w-64 max-w-[80%]">
            <h3 className="font-semibold text-lg text-gray-900">Mobile App</h3>
            <p className="text-gray-600 text-sm mt-2">
              Our mobile applications are compatible with phones, tablets, and wearable devices.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="relative transition-transform duration-300 hover:scale-105">
          <img
            src="/pro4.jpg"
            alt="Web App"
            className="rounded-xl shadow-lg w-full"
          />
          <div className="absolute -bottom-6 left-6 bg-white shadow-xl rounded-xl p-5 w-64 max-w-[80%]">
            <h3 className="font-semibold text-lg text-gray-900">Web App</h3>
            <p className="text-gray-600 text-sm mt-2">
              We build responsive and scalable web applications for brands.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="relative transition-transform duration-300 hover:scale-105">
          <img
            src="/pro2.1.jpg"
            alt="E-Commerce Store"
            className="rounded-xl shadow-lg w-full"
          />
          <div className="absolute -bottom-6 left-6 bg-white shadow-xl rounded-xl p-5 w-64 max-w-[80%]">
            <h3 className="font-semibold text-lg text-gray-900">
              E-Commerce Store
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Successfully developed 100+ online stores with optimized UI/UX.
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="relative transition-transform duration-300 hover:scale-105">
          <img
            src="/pro2.jpg"
            alt="CRM"
            className="rounded-xl shadow-lg w-full"
          />
          <div className="absolute -bottom-6 left-6 bg-white shadow-xl rounded-xl p-5 w-64 max-w-[80%]">
            <h3 className="font-semibold text-lg text-gray-900">CRM</h3>
            <p className="text-gray-600 text-sm mt-2">
              Over 200 CRM systems implemented to increase operational efficiency.
            </p>
          </div>
        </div>

      </div>

      {/* BUTTON */}
      <div className="text-center mt-20">
        <Link
          to="/portfolio"
          className="px-6 py-3 bg-[#2c5e2b] text-white rounded-full text-sm hover:bg-white hover:text-[#2c5e2b] hover:border-[#2c5e2b] border transition"
        >
          View Portfolio
        </Link>
      </div>
    </section>
  );
}
