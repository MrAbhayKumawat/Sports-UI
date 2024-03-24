import React from "react";
import img4 from "../Images/Spotlight/img4.png";

const SpotlightCard = React.memo(({ SpotlightCardDetails }) => {
  const { darkTheme, image, title, date, content, buttoncontent } = SpotlightCardDetails;
  return (
    <>
      <div className={`h-[624px] w-[257px] ${darkTheme ? "bg-white shadow-2xl" : "bg-cardcolor"}`}>
        <img src={image} alt="img" className="w-[320px] h-[401px]" />
        <img src={img4.src} alt="img" className="mx-auto" />
        <div className="flex flex-col justify-center items-center mt-2">
          <h1 className="text-lg p-2">{title}</h1>
          <p className="text-base p-2">{date}</p>
          <h1 className="text-sm text-center p-2">{content}</h1>
          <button className={`mt-5 bg-blackbutton text-textwhite p-2 px-5 ${darkTheme ? "text-black" : ""}`}>
            {buttoncontent}
          </button>
        </div>
      </div>
    </>
  );
});

export default SpotlightCard;
