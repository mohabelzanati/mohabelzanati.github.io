// import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import { useTranslation } from "react-i18next";
interface MenuItemProps {
  open?: boolean;
  lang: any;
  changeLang: () => void;
}
const MenuItem: React.FC<MenuItemProps> = ({ open, lang, changeLang }) => {
  const { t: trans } = useTranslation();
  return (
    <div>
      <div className="lg:hidden md:hidden text-white">
        <ul className={open ? "flex-col  md:hidden" : "hidden"}>
          <li>
            <li>
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
            <a href="#" onClick={changeLang}>
              {lang}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MenuItem;
