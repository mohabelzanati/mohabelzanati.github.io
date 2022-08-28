import React from "react";
import { stores } from "../../data/stores";
import { useTranslation } from "react-i18next";

export default function DownloadAndTry() {
  const { t: trans } = useTranslation();

  return (
    <div
      className="text-center lg:px-48  pt-20  bg-primary mt-16 text-white pb-24"
      id="work"
    >
      <div>
        <h1 className="text-3xl font-bold ">
          {trans("downloadAndTryElgameya")}
        </h1>
        <p> {trans("rateingInfo")} </p>
        <div className=" lg:flex justify-center space-x-4 pt-16 md:grid-cols-1 sm:grid-cols-1 md:justify-items-center sm: grid justify-items-center ">
          <img
            src="./mobile.png"
            alt="img"
            className="lg:w-36 pr-8 sm: w-28 mx-4"
          />
          {stores.map((i) => (
            <div className="">
              <a href={i.link} target={"_blank"} rel="noreferrer">
                <img src={i.img} alt="img" className="w-44 h-20 pt-6 " />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
