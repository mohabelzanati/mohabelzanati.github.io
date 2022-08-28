import React from "react";
import DownloadAndTry from "./components/Home/DownloadAndTry";
import FAQs from "./components/Home/FAQs";
import Features from "./components/Home/Features";
import ContactUs from "./components/Home/ContactUs";
import Partner from "./components/Home/Partner";

export default function Home() {
  return (
    <div>
      <Features />
      <Partner />
      <FAQs />
      <DownloadAndTry />
      {/* <ContactUs /> */}
    </div>
  );
}
