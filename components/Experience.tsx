import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Experience = () => {


  return (
    <div className="py-20 pt-0 w-full">
      <h1 className="heading">
        Services by{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 font-bold">
          Kaleido.
        </span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">

              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>

      {/* Centered button to open the profile PDF */}
      <div className="flex justify-center mt-10">
        <a
          href="/ser.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="View all our Services"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Experience;
