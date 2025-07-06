import React from "react";

export default function Navbar() {
  return (
    <div className="w-full bg-base-200 shadow-md">
      <div className="flex items-center justify-center">
        <img src="./src/assets/img/WTD.png" alt="logo" className="w-12 pb-2" />
        <span className="text-xl font-bold">WIKA-TODO!</span>
      </div>
    </div>
  );
}
