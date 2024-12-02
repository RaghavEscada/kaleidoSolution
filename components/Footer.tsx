import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import GridGlobe from "./ui/GridGlobe";
 // Import the GridGlobe component

const Footer = () => {
  return (
    <footer className="w-full pt-0 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
       <h1 className="heading lg:max-w-[45vw]">
  Transforming visions into realities with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 font-bold">Kaleido</span>.
</h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals of your impactful.
        </p>
        
        {/* Add the GridGlobe component here */}
       

        <a 
          href="https://wa.me/919645203487?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20digital%20services."
          target="_blank" 
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's Talk"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Kaleido
        </p>

        

        {/* <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
