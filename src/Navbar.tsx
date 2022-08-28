import React, { useEffect, useState } from "react";
import CardStore from "./components/Navbar/CardStore";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { MenuOutlined } from "@ant-design/icons";
import MenuItem from "./components/Navbar/MenuItem";

export default function Navbar() {
  const [open, setopen] = useState(false);
  const showMenu = () => {
    setopen(!open);
  };
  const languageMap = {
    en: { label: "English", dir: "ltr", active: true },
    ar: { label: "العربية", dir: "rtl", active: false },
  };

  const { t: trans } = useTranslation();

  const [lang, setLang] = useState(languageMap.en.label);

  const selected = () =>
    localStorage.getItem("i18nextLng")?.slice(0, 2) || "en";

  useEffect(() => {
    setLang(selected() === "en" ? languageMap.ar.label : languageMap.en.label);
  }, []);

  const handleClickLang = () => {
    console.log("selected", selected());
    if (selected() === "ar") {
      i18next.changeLanguage("en");

      setLang(languageMap.ar.label);
    } else {
      i18next.changeLanguage("ar");
      setLang(languageMap.en.label);
    }
  };

  return (
    <div>
      <nav className="  bg-primary w-full  top-0 left-0 mt-0 px-12">
        <div className=" w-full flex ">
          <div className="container flex flex-wrap items-center mx-auto lex justify-between ">
            <div className="flex items-center mt-0">
              <a href="#work" className=" ">
                <img
                  src="./Group 4104.png"
                  className="mx- h-24 mt-14 "
                  alt="logo"
                />

                <p
                  className="text-white text-center font-bold
"
                >
                  {trans("elgameya")}
                </p>
              </a>
              <div className="text-3xl  absolute ltr:right-8 rtl:left-8  cursor-pointer  lg:hidden md:hidden">
                <MenuOutlined onClick={showMenu} className="text-white" />
              </div>
              <ul className="  sm: hidden md:flex lg:flex   flex-col p-4  md:flex-row  lg:space-x-14 md:space-x-9  md:text-base md:border-0 text-white lg:mx-16 md:mx-40 sm: mx-28 lg:pt-0 md:pt-0 sm: pt-20 ">
                <li className="mx-5">
                  <a href="#features">{trans("features")}</a>
                </li>
                <li>
                  <a href="#work">{trans("howitwork")}</a>
                </li>
                <li>
                  <a href="#FAQS">{trans("FAQS")}</a>
                </li>
                <li>
                  <a href="#footer">{trans("contact")}</a>
                </li>
                <li>
                  <a href="#" onClick={handleClickLang}>
                    {lang}
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-16 pt-14">
              <MenuItem open={open} lang={lang} changeLang={handleClickLang} />
            </div>
            <div className=" ">
              <CardStore />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
