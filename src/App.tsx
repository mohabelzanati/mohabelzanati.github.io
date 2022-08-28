import i18next from "i18next";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import "./index.css";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

function App() {
  const [isRtl, setIsRtl] = useState("ltr");
  const { i18n, ready } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.slice(0, 2) === "en") {
      setIsRtl("ltr");

      console.log("====>", i18next.language);
    } else {
      setIsRtl("rtl");
    }
  }, [isRtl]);

  return (
    <div dir={i18next.language === "en" ? "ltr" : "rtl"}>
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
