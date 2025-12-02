import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

// Define the type for a link object
type LinkItem = {
  text: string;
  href: string;
};

// Theme Colors
const FOOTER_COLOR = "#2C5e2b";
const ACCENT_LIGHT = "#98bc62";
const TEXT_LIGHT = "#E5E7EB";

// Lists
// 1. Updated 'services' to use objects with specific hrefs
const services: LinkItem[] = [
  { text: "Web Development Services", href: "/web-development" },
  { text: "App Development Services", href: "/mobile-apps" },
  { text: "Graphic Design", href: "/graphic-design" },
  { text: "Software Development Services", href: "/software-development" },
  { text: "Game Development", href: "/game-development" },
  { text: "SEO And Content Writing", href: "/seo-and-content-writing" },
  { text: "Digital Marketing Services", href: "/digital-marketing" },
  { text: "UI-UX Design", href: "/uiux-design" },
];

// 2. Updated 'company' for accurate navigation
const company: LinkItem[] = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Our Team", href: "/our-team" },
  { text: "Contact Us", href: "/contact-us" },
];

const contactInfo = {
  pakistan: [
    "Baheria Complex-III, 2nd Floor ",
    "M.T Khan Road, Karachi, Pakistan.",
  ],
  email: "info@vitaltechsolutionspvtltd.com",
  number: "+92-(334)-2658105",
};

// Column — Links
// Updated to accept LinkItem[] instead of string[]
const LinkColumn = ({ title, links }: { title: string; links: LinkItem[] }) => (
  <div className="flex flex-col space-y-4">
    <h3 className="text-lg font-semibold text-white tracking-wide mb-2">
      {title}
    </h3>

    {links.map((link, i) => (
      <a
        key={i}
        href={link.href} // Now uses the specific href from the link object
        className="flex items-center text-sm transition-all hover:text-white hover:translate-x-1"
        style={{ color: TEXT_LIGHT }}
      >
        <ArrowRight
          size={15}
          className="mr-2"
          style={{ color: ACCENT_LIGHT }}
        />
        {link.text} {/* Now uses the text property */}
      </a>
    ))}
  </div>
);

// Column — Contact
const ContactColumn = () => (
  <div className="flex flex-col space-y-6">
    <h3 className="text-lg font-semibold text-white tracking-wide">Contact</h3>

    {/* Pakistan */}
    <div>
      <p className="text-sm font-semibold text-white">Pakistan</p>
      <div className="text-sm mt-1 space-y-1" style={{ color: TEXT_LIGHT }}>
        {contactInfo.pakistan.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>

    {/* Email */}
    <div>
      <p className="text-sm font-semibold text-white">Email Address</p>
      <a
        href={`mailto:${contactInfo.email}`}
        className="text-sm hover:underline"
        style={{ color: TEXT_LIGHT }}
      >
        {contactInfo.email}
      </a>
    </div>

    {/* Contact Number */}
    <div>
      <p className="text-sm font-semibold text-white">Contact Number</p>
      <p className="text-sm mt-1" style={{ color: TEXT_LIGHT }}>
        {contactInfo.number}
      </p>
    </div>
  </div>
);

// MAIN FOOTER
const Footer = () => {
  return (
    <footer style={{ backgroundColor: FOOTER_COLOR }} className="pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Decorative Bar */}
        <div className="flex mb-14 space-x-2">
          <div
            className="w-14 h-1 rounded-lg"
            style={{ backgroundColor: ACCENT_LIGHT }}
          ></div>
          <div className="w-14 h-1 rounded-lg bg-purple-400"></div>
          <div className="w-14 h-1 rounded-lg bg-red-500"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Logo + Description */}
          <div className="space-y-5 ">
            <img
              src="/footer-logo.png"
              alt="VitalTechSolutions"
              className="size-36 rounded-lg"
            />

            <p
              className="text-sm leading-relaxed"
              style={{ color: TEXT_LIGHT }}
            >
              VitalTechSolutions persistently adds value to your projects with
              innovative solutions. We design and build fully integrated digital
              experiences with modern technologies.
            </p>

            {/* Socials */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-white mb-2">Follow us</p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="p-2 rounded-full bg-white hover:scale-110 transition"
                >
                  <Facebook size={18} className="text-blue-600" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white hover:scale-110 transition"
                >
                  <Linkedin size={18} className="text-blue-700" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white hover:scale-110 transition"
                >
                  <Instagram size={18} className="text-pink-500" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white hover:scale-110 transition"
                >
                  <Youtube size={18} className="text-red-600" />
                </a>
              </div>
            </div>
          </div>

          <LinkColumn title="Services" links={services} />
          <LinkColumn title="Company" links={company} />
          <ContactColumn />
        </div>

        {/* Bottom Bar */}
        <div
          className="border-t mt-14 pt-5 text-xs flex flex-col sm:flex-row items-center justify-between"
          style={{ borderColor: "#ffffff22", color: TEXT_LIGHT }}
        >
          <p>© 2025 VitalTechSolutions. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="/terms" className="hover:text-white">
              Terms & Condition
            </a>
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
