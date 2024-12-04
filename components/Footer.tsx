import { useState } from "react";
import { FaLocationArrow, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { name, email, phone, service } = formData;

    if (!name || !email || !phone || !service) {
      alert("Please fill in all the fields.");
      return;
    }

    // Generate WhatsApp message
    const message = `Hello! I would like to connect.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}`;
    const whatsappUrl = `https://wa.me/+447301281207?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset the form
    setFormData({ name: "", email: "", phone: "", service: "" });
  };

  return (
    <footer className="w-full pt-0 pb-10 relative bg-transparent text-white" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col pt-0 items-center relative z-10">
        <h1 className="heading pt-0 lg:max-w-[45vw]">
          Transforming visions into realities with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 font-bold">
            Kaleido
          </span>.
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you achieve your goals.
        </p>

        <a
          href="https://wa.me/+447301281207?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20digital%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5"
        >
          <MagicButton
            title="Let's Talk"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Send Us a Message Form */}
      <div className="relative z-10 mt-16 w-full flex flex-col items-center">
        <div className="bg-transparent rounded-xl p-5 w-11/12 md:w-1/2">
          <h2 className="text-lg font-bold text-center mb-4">Send Us a Message</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="" disabled>Select a Service</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="SMM">Social Media Marketing (SMM)</option>
              <option value="Video and Content Creation">
                Video and Content Creation
              </option>
              <option value="Photography and Graphic Design">
                Photography and Graphic Design
              </option>
              <option value="Sales and Engagement Strategies">
                Sales and Engagement Strategies
              </option>
              <option value="Campaigns and Reviews">Campaigns and Reviews</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-bold transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-center items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Kaleido
        </p>
      </div>
    </footer>
  );
};

export default Footer;
