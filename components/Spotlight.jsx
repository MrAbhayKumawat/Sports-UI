"use client"
import React, { useEffect, useState } from "react";
import img1 from "../Images/Spotlight/img1.png";
import img2 from "../Images/Spotlight/img2.png";
import img3 from "../Images/Spotlight/img3.png";
import SpotlightCard from "@/common/SpotlightCard";

const Spotlight = ({ darkTheme }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const styleObj = !darkTheme
      ? {
          backgroundImage:
            "linear-gradient(to bottom, rgba(24, 40, 42, 1), rgba(34, 26, 44, 1))",
          backdropFilter: "blur(10px)",
          height: "auto",
          width: "80%",
          marginTop: "5%",
        }
      : {};
    setStyle(styleObj);
  }, [darkTheme]);

  return (
    <div style={style} className="flex flex-col justify-center space-y-10 mx-auto pb-5">
      <div className="text-center pt-16">
        <h1 className="text-4xl font-semibold">Collection Spotlight</h1>
      </div>
      <div className="text-center">
        <p className="text-base text-gray-200">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          <br /> experience. Grab yours today!t
        </p>
      </div>
      <div className="flex gap-3 flex-wrap justify-center">
        {[{ img: img1.src, title: "Las Vegas Aviators" }, { img: img2.src, title: "Sacramento River Cats" }, { img: img3.src, title: "Las Vegas Aviators" }].map((item, index) => (
          <SpotlightCard
            key={index}
            SpotlightCardDetails={{
              title: item.title,
              image: item.img,
              date: "Oct 15 | SUN | 4:30 PM",
              content: index === 1 ? "Sutter Health Park, Sacramento, California" : "Las Vegas Ballpark, Las Vegas, Nevada",
              buttoncontent: index === 1 ? "Orange Collection" : "Take Flight Collection",
              darkTheme: darkTheme,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Spotlight;
