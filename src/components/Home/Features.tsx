import React from "react";
import FeaturesCard from "./FeaturesCard";
import { useTranslation } from "react-i18next";
export default function Features() {
  const { t: trans } = useTranslation();
  return (
    <div id="features">
      <div className="text-center px-32 pt-16 ">
        <h1 className="text-3xl font-bold pb-10">{trans("features")}</h1>
        <p className="text-lg">{trans("appDescription")}</p>
      </div>
      <FeaturesCard />
    </div>
  );
}
