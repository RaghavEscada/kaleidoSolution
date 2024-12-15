"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  const companies = [
    "/a.png",
    "/b.png",
    "/STod.png",
    "/d.png",
    "/kt.png",
    "/ow.png",
    "/g.png",
  ];

  const teamMembers = [
    {
      name: "Shifin Saleem",
      role: "Chief Operating Officer",
      color: "#4F000B", // Chocolate cosmos
    },
    {
      name: "Sidharth Anand",
      role: "Chief Marketing Officer",
      color: "#7B1509", // Barn red
    },
    {
      name: "Shamil Ayoob",
      role: "Head of Operations",
      color: "#A72906", // Rufous
    },
    {
      name: "Asil Hamlaz",
      role: "Media Head",
      color: "#D33D03", // Sinopia
    },
    {
      name: "Fasil",
      role: "Account Executive",
      color: "#FF5100", // Aerospace orange
    },
  ];

  return (
    <section id="testimonials" className="pt-0 py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-transparent bg-clip-text bg-gradient-to-r pt-0 from-orange-500 via-purple-500 to-pink-500 font-bold">
          Satisfied Clients.
        </span>
      </h1>

      <div className="flex flex-col pt-0 items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>

      {/* Companies Section */}
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

      {/* Team Section */}
      <section id="team" className="pt-20 pb-8 py-20">
        <h1 className="heading pt-10 pb-10">
          Meet Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r pt-0 from-orange-500 via-purple-500 to-pink-500 font-bold ml-2">
            Team.
          </span>
        </h1>

        {/* Horizontal Scroll for Team with adjusted flex properties */}
        <div
          style={{
            display: "flex",
            overflowX: "auto", // Enable horizontal scroll
            gap: "20px",
            padding: "20px",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "250px", // Equal width for all cards
                height: "250px", // Adjust height for a more balanced look
                backgroundColor: member.color,
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                flexShrink: 0, // Prevent shrinking of the cards
              }}
            >
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  color: "#FFD700", // Bright gold/yellow/ Darker, richer black for better contrast
                  marginBottom: "10px",
                  transition: "color 0.3s ease",
                }}
              >
                {member.name}
              </div>
              <div
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#FFF5F5", // Very light with just a hint of warmth, // A bright warm off-white with a slight orange tint
                  letterSpacing: "0.5px",
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
                  transition: "color 0.3s ease, text-shadow 0.3s ease",
                }}
              >
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Clients;
