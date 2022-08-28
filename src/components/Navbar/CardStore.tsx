import React from "react";
import { stores } from "../../data/stores";

export default function CardStore() {
  return (
    <div className="flex space-x-2 lg:pt-0 md:pt-6 sm: pt-6">
      {stores.map((item) => (
        <a href={item.link} target={"_blank"}>
          <img src={item.img} className="w-36 mx-3" alt="k" />
        </a>
      ))}
    </div>
  );
}
