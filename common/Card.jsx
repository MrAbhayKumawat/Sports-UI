import React from "react";
import { teamsdata } from "./TeamsData"; // Ensure correct import statement

const Card = React.memo(({ darkTheme }) => {
  return (
    <>
      {teamsdata.map((item) => (
        <div
          key={item.id || item.title} // Ensure item.id is unique and stable
          className={`max-w-[237px] max-h-[511px] ${
            darkTheme ? "bg-white shadow-2xl" : "bg-cardcolor"
          }`}
        >
          <img
            src={item.playerImg}
            alt={item.title}
            className="p-2"
            style={{ maxWidth: "260px", maxHeight: "385px" }}
          />
          <h1 className="text-lg p-2">{item.title}</h1>
          <div className={`text-xs flex p-2 m-2 ${darkTheme ? "bg-white" : "bg-Incardcolor"}`}>
            <div>
              <div>Total Events</div>
              <div className="text-xs">{item.totalEvents} Events</div>
            </div>
            <div>
              <div>Sports</div>
              <div className="text-xs text-gray-100">{item.sport}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
});

export default Card;
