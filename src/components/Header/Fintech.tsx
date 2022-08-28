import React from "react";
import { useTranslation } from "react-i18next";

export default function Fintech() {
  const { t: trans } = useTranslation();

  return (
    <div className="pt-20    px-12">
      <div className="col-span-1 	">
        <h4 className=" rtl-bg-black">{trans("fintechProduct")}</h4>
        <h1 className="font-bold text-5xl mt-4 ltr:text-left  rtl:text-right	">
          {trans("elgameya")} <br /> {trans("smarter")}
        </h1>
        <p className="mt-8">
          {trans("companyDescriptionPart1")}
          <br /> {trans("companyDescriptionPart2")} <br />{" "}
          {trans("companyDescriptionPart3")}{" "}
        </p>
        <a
          href="#work"
          className="bg-secondary  py-2 px-6 rounded-full inline-flex items-center text-black mt-10"
        >
          {trans("downloadApp")}
          <span className="px-4">
            <img src="./Path 6687.png" alt="" />
          </span>
        </a>
        <div className="flex flex-row  space-x-8 mt-14 pb-12  ">
          <div className="rtl:border-l-2 px-4">
            <h2 className="text-xl font-bold text-center	">+90k</h2>
            <p className="text-xs mt-2">{trans("numberOfDownloads")}</p>
          </div>
          <div className="border-l-2 px-5">
            <h2 className="text-xl font-bold text-center	">+1k</h2>
            <p className="text-xs mt-2">{trans("cyclesOnTheAppStore")}</p>
          </div>
          <div className="ltr:border-l-2 px-2">
            <h2 className="text-xl font-bold text-center	">+70k</h2>
            <p className="text-xs mt-2">{trans("users")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
