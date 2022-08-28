import React, { useState } from "react";
import { Features_1, Features_2 } from "../../data/features";

export default function FeaturesCard() {
  const [image, setimage] = useState("./HOME.png");

  return (
    <div>
      <div className="grid lg:grid-cols-3  md:grid-cols-1  col-row-3 px-32 pt-16 gap-x-8 ">
        <div className="col-start-1 pt-12">
          {Features_1().map((i) => (
            <div
              className="flex mb-6   h-44 hover:shadow-2xl  hover:border-2 hover:rounded-3xl hover:rounded-tr-lg hover:border-black  "
              key={i.id}
              onClick={() => {
                setimage(i.image);
              }}
            >
              <img src={i.logo} alt="" className="w-27 h-8 mt-8 pr-12 pl-6 " />
              <div>
                <h1 className="mt-8 pb-2 font-bold">{i.title}</h1>
                <p className="mb-12 pr-8 pb-6  line-clamp-3"> {i.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="place-self-center">
          <img src={image} alt="img" />
        </div>
        <div className="pt-12">
          {Features_2().map((i) => (
            <div
              className="flex mb-2  h-44  hover:shadow-2xl  hover:border-2 hover:rounded-3xl hover:rounded-tr-lg hover:border-black "
              key={i.id}
              onClick={() => {
                setimage(i.image);
              }}
            >
              <img
                src={i.logo}
                alt="img"
                className=" w-27  h-8 mt-8 pr-12 pl-6"
              />
              <div>
                <h1 className="mt-8 pb-2 font-bold">{i.title}</h1>
                <p className="mb-12 pr-8 line-clamp-3">{i.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
