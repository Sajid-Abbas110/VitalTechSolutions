import React, { useState } from "react";

export default function ContactUs() {
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
    <section className="min-h-screen w-full bg-[#2c5e2b] flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Section */}
        <div className="bg-[#98bc62] p-10 flex flex-col justify-center text-white">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg opacity-90 mb-6">
            We'd love to hear from you! Whether you have a question, feedback, or a project in mind.
          </p>

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-xl">Address</p>
              <p className="opacity-90">123 Green Street, Lahore, Pakistan</p>
            </div>
            <div>
              <p className="font-semibold text-xl">Email</p>
              <p className="opacity-90">contact@example.com</p>
            </div>
            <div>
              <p className="font-semibold text-xl">Phone</p>
              <p className="opacity-90">+92 300 0000000</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form onSubmit={onSubmit} className="p-10 flex flex-col justify-center space-y-5">
          <h3 className="text-3xl font-bold text-[#2c5e2b] mb-2">Contact Us</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#98bc62]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#98bc62]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#98bc62]"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#2c5e2b] text-white font-semibold text-lg py-3 rounded-xl hover:bg-[#244d24] transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {result && (
            <p className={`mt-4 text-center font-medium ${result.includes("Successfully") ? "text-[#2c5e2b]" : "text-red-500"}`}>
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
