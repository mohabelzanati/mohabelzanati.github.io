import React from "react";
import ELgameyaInfo from "./components/Header/ELgameyaInfo";
import Fintech from "./components/Header/Fintech";

export default function Header() {
  return (
    <div className="bg-primary ">
      <div className="    lg:grid  grid-cols-2  md:grid-col-1 container flex-wrap  mx-auto text-white ">
        <Fintech />
        <ELgameyaInfo />
      </div>
    </div>
  );
}
