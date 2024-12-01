import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="red"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="red"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="" />
      </div>

      {/**
       *  UI: grid
       */}
      <div
        className="h-screen w-full bg-[#F5F5DC] dark:bg-[#F5F5DC] bg-grid-black-100/[0.03] absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#F5F5DC] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-black">
            Redefining
          </p>

          <TextGenerateEffect
            words="Digital Experiences."
            className="text-center text-[32px] md:text-4xl lg:text-5xl text-red-600"
          />

          <p className="text-center md:tracking-tight mb-6 text-base md:text-lg lg:text-xl font-medium text-gray-700">
            <span>
              We are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 font-bold">
                Kaleido
              </span>
              , a creative agency that combines cutting-edge design and technology to create impactful and memorable digital experiences.
            </span>
          </p>

          <p className="tracking-tighter text-black">Based in the UK 🇬🇧</p>

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
      </div>
    </div>
  );
};

export default Hero;
