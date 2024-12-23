import { FaLocationArrow, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
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
          href="https://tally.so/r/nr2jol"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5"
        >
          <MagicButton
            title="Send Us A Message!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex mt-8 justify-center pt-10 space-x-6 relative z-10">
        <a href="https://www.instagram.com/kaleido.solutions/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 w-6 h-6 md:w-7 md:h-7 hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61562421470111&mibextid=ZbWKwL
" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 w-6 h-6 md:w-7 md:h-7 hover:scale-110 transition-transform" />
        </a>
        <a href="https://wa.me/+447301281207?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20digital%20services." target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-500 w-6 h-6 md:w-7 md:h-7 hover:scale-110 transition-transform" />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-center items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Kaleido.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
