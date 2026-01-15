import React, { useState } from "react";
import type { ReactNode, FC, ReactElement, HTMLProps } from "react";

// --- Reusable FormGroup Component ---
type CloneProps = HTMLProps<HTMLElement> & {
  className: string;
};

interface FormGroupProps {
  label: string;
  children: ReactNode;
  isSelect?: boolean;
}

const FormGroup: FC<FormGroupProps> = ({ label, children, isSelect = false }) => {
  const inputClasses =
    "w-full bg-transparent border-b border-gray-600 py-2.5 text-white text-xs focus:outline-none focus:border-[#98bc62] placeholder-transparent";

  const modifiedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const element = child as ReactElement<CloneProps>;
      let dynamicClasses = inputClasses;

      if (element.type === "textarea") {
        dynamicClasses = `${inputClasses} resize-none h-20`;
      } else if (isSelect) {
        dynamicClasses = `${inputClasses} appearance-none`;
      }

      return React.cloneElement(element, {
        className: dynamicClasses,
      });
    }
    return child;
  });

  return (
    <div className="space-y-1 w-full">
      <label className="block text-xs text-gray-300 font-medium">{label}</label>
      {modifiedChildren}
    </div>
  );
};

// --- Main Contact Section Component ---

const ContactSection: FC = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);

    // Replace YOUR_ACCESS_KEY_HERE with your Web3Forms Access Key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center w-full bg-gray-50 py-8 md:py-12 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl w-full mx-auto shadow-xl overflow-hidden rounded-xl">
        <div className="flex flex-col lg:flex-row bg-white">

          {/* LEFT SECTION */}
          <div className="flex flex-col justify-between bg-white p-6 sm:p-8 lg:p-12 flex-1 text-[#2b3c2b] w-full">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Let's Build Your <br /> Enterprise In The
              </h1>

              <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base md:pr-10 lg:pr-20">
                Need fast support? Reach out to us, and we guarantee a response
                from a dedicated team member within one business day. Call us anytime —
                we are here for you.
              </p>

              <img
                src="/pattern-talk.png"
                alt="service mockup"
                className="w-full rounded-lg h-auto mt-8"
              />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col justify-start items-start bg-[#2c5e2b] p-6 sm:p-8 lg:p-12 flex-1 text-white w-full">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-6">
              <span className="text-gray-300">Which Of</span> Our Services <br /> Can Support You?
            </h2>

            <form onSubmit={onSubmit} className="space-y-4 w-full">

              <FormGroup label="I'm looking for:" isSelect>
                <div className="max-w-40">
                  <select name="service" required>
                    <option value="" disabled selected className="bg-[#98bc62] text-white">
                      Select Service
                    </option>
                    <option value="Web Development" className="bg-[#98bc62] text-white">
                      Web Development
                    </option>
                    <option value="App Development" className="bg-[#98bc62] text-white">
                      App Development
                    </option>
                    <option value="Software Development" className="bg-[#98bc62] text-white">
                      Software Development
                    </option>
                    <option value="Graphic Designing" className="bg-[#98bc62] text-white">
                      Graphic Designing
                    </option>
                    <option value="Game Development" className="bg-[#98bc62] text-white">
                      Game Development
                    </option>
                    <option value="SEO & Content Writing" className="bg-[#98bc62] text-white">
                      SEO & Content Writing
                    </option>
                    <option value="Digital Marketing" className="bg-[#98bc62] text-white">
                      Digital Marketing
                    </option>
                    <option value="UI-UX Designing" className="bg-[#98bc62] text-white">
                      UI-UX Designing
                    </option>
                  </select>
                </div>
              </FormGroup>


              <FormGroup label="Full Name*">
                <input type="text" name="name" required />
              </FormGroup>

              <FormGroup label="Email Address*">
                <input type="email" name="email" required />
              </FormGroup>

              <FormGroup label="Phone Number*">
                <input type="tel" name="phone" required />
              </FormGroup>

              <FormGroup label="Enter Brief">
                <textarea name="message" />
              </FormGroup>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-3 px-5 py-2 border border-white rounded-full text-xs sm:text-sm text-white hover:bg-white hover:text-[#2c5e2b] transition font-semibold w-full sm:w-auto disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Let's Talk Together"}
              </button>

              {result && (
                <p className={`mt-4 text-xs font-medium ${result.includes("Successfully") ? "text-[#98bc62]" : "text-red-400"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
