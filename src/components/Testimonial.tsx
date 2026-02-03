import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import React, { useState, useEffect } from "react";

const ACCENT_LIGHT = "#98bc62";

interface Testimonial {
  id: number;
  quote: string;
  clientName: string;
  clientTitle: string;
  rating: number;
  logoText: string;
  clientImageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The team provided unparalleled expertise in cloud-native solutions. Their dedication to integrity and innovation helped us scale faster than we ever imagined.",
    clientName: "Anthony R. Sulliman",
    clientTitle: "CEO, TechNova Corp.",
    rating: 5,
    logoText: "TechNova",
    clientImageUrl: "/ceo.jpg",
  },
  {
    id: 2,
    quote: "Working with this agency was a game-changer for our brand. The rebranding strategy they implemented increased our engagement by 200% in just three months.",
    clientName: "Sarah Jenkins",
    clientTitle: "Marketing Director, Bloom & Co.",
    rating: 5,
    logoText: "Bloom",
    clientImageUrl: "/neha.jpg",
  },
  {
    id: 3,
    quote: "Their development team is top-notch. They delivered our mobile app ahead of schedule and with fewer bugs than any other vendor we've worked with.",
    clientName: "Michael Chen",
    clientTitle: "CTO, NextGen Solutions",
    rating: 5,
    logoText: "NextGen",
    clientImageUrl: "/hamza.jpg",
  },
  {
    id: 4,
    quote: "Exceptional service and support. They truly understand the needs of modern businesses and provide tailored solutions that drive real growth.",
    clientName: "Jessica Williams",
    clientTitle: "Founder, JW Interiors",
    rating: 5,
    logoText: "JW Design",
    clientImageUrl: "/client.jpg",
  },
  {
    id: 5,
    quote: "We were impressed by their creativity and attention to detail. The new website they designed for us is not only beautiful but also highly functional.",
    clientName: "David Miller",
    clientTitle: "VP of Sales, Apex Industries",
    rating: 4,
    logoText: "Apex",
    clientImageUrl: "/bilal.jpg",
  },
  {
    id: 6,
    quote: "Reliable, professional, and innovative. They transformed our outdated systems into a streamlined, efficient workflow that saved us hours every week.",
    clientName: "Emily Carter",
    clientTitle: "Operations Manager, Swift Logistics",
    rating: 5,
    logoText: "Swift",
    clientImageUrl: "/winah.jpg",
  },
  {
    id: 7,
    quote: "From the initial consultation to the final launch, the process was seamless. Their communication and project management are world-class.",
    clientName: "Robert Fox",
    clientTitle: "Director, Fox Enterprises",
    rating: 5,
    logoText: "Fox Ent.",
    clientImageUrl: "/zain.jpg",
  },
  {
    id: 8,
    quote: "The ROI we've seen since partnering with them has been incredible. Their digital marketing strategies are spot-on and highly effective.",
    clientName: "Amanda Lee",
    clientTitle: "CMO, BrightSpark",
    rating: 5,
    logoText: "BrightSpark",
    clientImageUrl: "/ahmed.jpg",
  },
  {
    id: 9,
    quote: "They are not just a service provider; they are a partner in our success. Their insights and strategic advice have been invaluable to our growth.",
    clientName: "Thomas Wright",
    clientTitle: "President, Wright Holdings",
    rating: 5,
    logoText: "Wright",
    clientImageUrl: "/ceo.jpg", // Reusing CEO for another senior male role
  },
  {
    id: 10,
    quote: "I highly recommend their services to anyone looking to elevate their business. Their team is talented, dedicated, and a pleasure to work with.",
    clientName: "Olivia Martinez",
    clientTitle: "Founder, OM Creative",
    rating: 5,
    logoText: "OMC",
    clientImageUrl: "/neha.jpg", // Reusing Neha
  },
  {
    id: 11,
    quote: "Their ability to translate complex requirements into user-friendly designs is unmatched. We are thrilled with the results of our new platform.",
    clientName: "Daniel Kim",
    clientTitle: "Product Lead, InnovateX",
    rating: 5,
    logoText: "InnovateX",
    clientImageUrl: "/hamza.jpg", // Reusing Hamza
  },
  {
    id: 12,
    quote: "Professionalism at its finest. They delivered exactly what they promised, on time and within budget. A truly outstanding experience.",
    clientName: "Sophia Green",
    clientTitle: "CEO, GreenEarth",
    rating: 5,
    logoText: "GreenEarth",
    clientImageUrl: "/client.jpg", // Reusing Client
  }
];

// Render Stars
const RatingStars: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        className="drop-shadow"
        fill={i < count ? ACCENT_LIGHT : "none"}
        stroke={ACCENT_LIGHT}
      />
    ))}
  </div>
);

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300); // Half of transition time
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden bg-[#f8fafc]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#98bc62]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#2c5e2b]/10 rounded-full blur-[120px]" />
        <svg className="absolute top-20 right-20 w-32 h-32 text-gray-200/50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#e8f5e9] text-[#2c5e2b] text-sm font-semibold tracking-wide uppercase mb-3">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Trusted by <span className="text-[#2c5e2b] relative">
              Industry Leaders
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#98bc62]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7546 3.00007 89.2606 -2.49999 198.001 2.50002" stroke="currentColor" strokeWidth="3" /></svg>
            </span>
          </h2>
        </div>

        {/* Main Interface */}
        <div className="relative">
          {/* Left/Right Navigation Buttons (Floating) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20 hidden md:block">
            <button
              onClick={handlePrev}
              className="p-4 rounded-full bg-white shadow-lg border border-gray-100 text-gray-400 hover:text-[#2c5e2b] hover:scale-110 transition-all duration-300 group"
              aria-label="Previous"
            >
              <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20 hidden md:block">
            <button
              onClick={handleNext}
              className="p-4 rounded-full bg-white shadow-lg border border-gray-100 text-gray-400 hover:text-[#2c5e2b] hover:scale-110 transition-all duration-300 group"
              aria-label="Next"
            >
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 min-h-[450px] flex items-center transition-all duration-500">
            <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full transition-opacity duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>

              {/* Image Section */}
              <div className="relative shrink-0">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-br from-[#2c5e2b] to-[#98bc62] shadow-[0_20px_50px_rgba(44,94,43,0.3)]">
                  <img
                    src={currentTestimonial.clientImageUrl}
                    alt={currentTestimonial.clientName}
                    className="w-full h-full rounded-full object-cover border-4 border-white"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${currentTestimonial.clientName}&background=random`;
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-50 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-gray-700">{currentTestimonial.logoText}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  <RatingStars count={currentTestimonial.rating} />
                </div>
                <Quote className="inline-block text-[#98bc62]/40 w-10 h-10 md:w-12 md:h-12 mb-4 -ml-2" />
                <blockquote className="text-xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-8 font-serif">
                  "{currentTestimonial.quote}"
                </blockquote>

                <div>
                  <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.clientName}</h4>
                  <p className="text-[#2c5e2b] font-medium">{currentTestimonial.clientTitle}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile Nav & Indicators */}
          <div className="flex flex-col items-center mt-8 gap-6">
            <div className="flex gap-4 md:hidden">
              <button onClick={handlePrev} className="p-3 bg-white rounded-full shadow-md"><ArrowLeft size={20} /></button>
              <button onClick={handleNext} className="p-3 bg-white rounded-full shadow-md"><ArrowRight size={20} /></button>
            </div>

            {/* Progress Bar Style Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? "w-12 bg-[#2c5e2b]" : "w-3 bg-gray-300 hover:bg-[#98bc62]"
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
