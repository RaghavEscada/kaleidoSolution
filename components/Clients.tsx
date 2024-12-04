"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";



const Clients = () => {
  const companies = [
    "/a.png",
    "/b.png",
    "/st.png",
    "/d.png",
    "/kt.png",
    "/ow.png",
    "/g.png",

  ];
  return (
    <section id="testimonials" className=" pt-0 py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-transparent bg-clip-text bg-gradient-to-r pt-0 from-orange-500 via-purple-500 to-pink-500 font-bold"> Satisfied Clients.</span>
      </h1>

      <div className="flex flex-col pt-0 items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>


      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          justifyItems: "center",
          padding: "20px",
        }}
      >
        {companies.map((src, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "150px",
              height: "100px",
              backgroundColor: "#f4f4f4",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={src}
              alt={`Company ${index + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
