import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

export default function HeroSection() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative w-full h-full flex items-center justify-center px-6">
        <div className="w-full max-w-[1200px] justify-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-5xl pt-24 md:text-6xl font-bold leading-tight">
              You Envision, <br />
              We{" "}
              <span className="text-[#98bc62]">
                <ReactTyped
                  strings={["Develop", "Deploy", "Design", "Build"]}
                  typeSpeed={90}
                  backSpeed={70}
                  loop
                />
              </span>
            </h1>

            <p className="mt-6 text-lg opacity-90 leading-relaxed">
              Your partner in building innovative solutions.
              <br />
              Bringing your ideas to life with modern technology.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex sm:font-light gap-4">
              <Link to={"/contact-us"}>
                <button className="px-6 py-3 border border-[#2c5e2b] rounded-full bg-white text-sm text-[#2c5e2b] hover:bg-[#2c5e2b] hover:text-[#ffff] transition">
                  Let's Talk Together
                </button>
              </Link>
              <Link to={"/portfolio"}>
                <button className="px-6 py-3 border border-[#2c5e2b] rounded-full bg-white text-sm text-[#2c5e2b] hover:bg-[#2c5e2b] hover:text-[#ffff] transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="hidden sm:flex mt-14 items-start ">
            <img src="/pro3.png" className="w-[99%]" />
          </div> */}
        </div>
      </div>
    </section>
  );
} 
