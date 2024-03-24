"use client"
import React, { useState, useEffect } from "react";
import Card from "@/common/Card";
import ads from "../Images/Sports/ads.png";
import Button from "@/common/Button";
import Spotlight from "./Spotlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Sports() {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    const body = document.getElementById("bod");
    if (body) {
      body.style.backgroundColor = darkTheme ? "white" : "#292B32";
      body.style.color = darkTheme ? "black" : "white";
    }
  }, [darkTheme]);

  return (
    <main className="w-auto h-auto mt-5 p-2">
      <span className="text-2xl border-b-2 border-blues font-semibold lg:ml-16 xl:ml-40 md:ml-10">
        Sports
      </span>

      <button
        className="text-base pointer px-5 shadow-md ml-2"
        onClick={handleThemeChange}
      >
        {darkTheme ? (
          <>
            Dark <LightModeIcon className="text-base ml-2" />
          </>
        ) : (
          <>
            Light <DarkModeIcon className="text-base ml-2" />
          </>
        )}
      </button>

      <div className="flex gap-3 p-2 flex-wrap justify-center">
        <Card darkTheme={darkTheme} />

        <div className={`max-w-[237px] max-h-[511px] ${darkTheme ? "bg-white shadow-2xl" : "bg-cardcolor"}`}>
          <img
            src={ads.src}
            alt="img"
            style={{ maxWidth: "260px", maxHeight: "385px" }}
            className="p-2"
          />
          <div className="p-5">
            <h1 className="text-xl">Advertisement title</h1>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <Button />
      <Spotlight darkTheme={darkTheme} />
    </main>
  );
}

export default Sports;
