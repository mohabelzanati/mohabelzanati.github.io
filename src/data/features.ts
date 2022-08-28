import React from "react";
import { useTranslation } from "react-i18next";
export const Features_1 = () => {
  const { t: trans } = useTranslation();

  return [
    {
      id: "1",
      key: "1",
      title: trans("homeScreen"),
      paragraph: trans("homeScreenDescription"),
      logo: "./Path 6813.png",
      image: "./HOME.png",
    },
    {
      id: "2",
      key: "2",
      title: trans("chatBot"),
      paragraph: trans("chatBotDescription"),
      logo: "./Path_3534-2 .png",
      image: "./Chatbot 1.png",
    },
    {
      id: "3",
      key: "3",
      title: trans("myCycle"),
      paragraph: trans("myCycleDescription"),
      logo: "./Group 2719.png",
      image: "./Cycle 7 months.png",
    },
  ];
};

export const Features_2 = () => {
  const { t: trans } = useTranslation();
  return [
    {
      id: "4",
      key: "4",

      title: trans("deals"),
      paragraph: trans("dealsDescription"),
      logo: "./Group 4680.png",
      image: "./Deals.png",
    },
    {
      id: "5",
      key: "5",

      title: trans("profile"),
      paragraph: trans("profileDescription"),
      logo: "./Group 1.png",
      image: "./profile.png",
    },
    {
      id: "6",
      key: "6",

      title: trans("myScores"),
      paragraph: trans("myScoresDescription"),
      logo: "./Group 4159.png",
      image: "./My score 1.png",
    },
  ];
};
