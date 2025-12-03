import { Link } from "react-router-dom";

export default function ProjectsSection() {
  return (
    <section className="w-full bg-white px-6 my-12 md:px-12 lg:px-20">

      {/* TOP TEXT */}
      <div className="max-w-full mx-auto text-center md:text-left">
        <p className="text-sm font-semibold text-[#2C5E2B] uppercase tracking-wide">
          Our Projects
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-4">
          Our Featured Projects
        </h2>

        <p className="text-gray-600 mt-3">
          Below are some of our featured web development projects that highlight
          our expertise, professionalism, timely delivery, and organized workflow.
        </p>
      </div>

      {/* GRID — 1 (mobile), 2 (tablet), 4 (desktop) */}
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
              Designed for phone, tablet, and wearable devices with maximum performance.
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
              We build modern, scalable, and visually appealing web apps for brands.
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
            <h3 className="font-semibold text-lg text-gray-900">E-Commerce Store</h3>
            <p className="text-gray-600 text-sm mt-2">
              Created 100+ stores with optimized UI/UX and fully integrated systems.
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
              Implemented 200+ CRM systems to enhance operational workflow and automation.
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
