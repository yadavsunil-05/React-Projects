import React from "react";
import search from "../assets/search.png";
import location from "../assets/location.png";

function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          className="text-xl font-light p-1.5 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          placeholder="Search for city..."
        />
        <img
          src={search}
          className="text-white cursor-pointer transition ease-out hover:scale-125 "
        />
        <img
          src={location}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-white text-xl font-light">°C</button>
        <p className="text-white text-xl mx-2">|</p>
        <button name="imperial" className="text-white text-xl font-light">°F</button>
      </div>
    </div>
  );
}

export default Inputs;
