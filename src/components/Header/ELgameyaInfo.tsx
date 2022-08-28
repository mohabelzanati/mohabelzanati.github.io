import React from "react";
import { useTranslation } from "react-i18next";
export default function ELgameyaInfo() {
  const { t: trans } = useTranslation();
  return (
    <div className="col-start-2 col-span-1 grid justify-items-center pt-0">
      <div className="rotate-6 w-14 lg:mt-0  lg:-mb-60 md:mt-20">
        <img src="./Group 4689.png" alt="image" className="" />
        <p className="text-sm -ml-2 text-center"> {trans("appartment")}</p>
      </div>
      <div className=""></div>
      <img
        src="./Group 4671.png"
        alt="image"
        className=" ml-32	lg:-mt-12 w-9/12 h-52	 md:-mt-10 sm: -mt-10"
      />
      {/* <img
        src="./Group 4679.png"
        alt="image"
        className=" lg:-mt-44 w-8/12 h-52 md:-mt-32 sm: -mt-32 "
      /> */}
      <div className="lg:-mt-44 w-8/12 h-52 md:-mt-32 sm: -mt-32">
        <div className="grid grid-cols-2 bg-white text-black p-8 rounded-3xl gap-x-6">
          <div className="col-start-1">
            <h1 className="font-bold text-3xl">25,000</h1>
            <div className="flex pb-4">
              <h3 className="font-bold text-xl ">25,000</h3>
              <p className="font-bold text-sm pl-4 pt-1"> Per Month</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-x-4 text-xs ">
              <div className=" ">
                <div className="col-start-1  bg-tableColor p-2 rounded-t-xl border-b-2 border-white ">
                  <h3 className="">Starts</h3>
                </div>
                <div className="col-start-1   rounded-b-xl bg-tableColor  p-2 ">
                  <h3> January</h3>
                </div>
              </div>
              <div>
                <div className="col-start-2 bg-tableColor  p-2 rounded-t-xl border-b-2 border-white">
                  <h3 className="">Ends</h3>
                </div>
                <div className="col-start-1 rounded-b-xl bg-tableColor  p-2 ">
                  <h3>August</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-2  ">
            <div className="flex pb-4 justify-end">
              <img
                src="./member_1.png"
                alt="image"
                className=" rounded-full h-8 w-8 -ml-2"
              />
              <img
                src="./member_2.png"
                alt="image"
                className=" rounded-full h-8 w-8 -ml-2"
              />
              <img
                src="./member_3.png"
                alt="image"
                className=" rounded-full h-8 w-8 -ml-2"
              />
              <div className="border-2  rounded-full h-8 w-8 text-center -ml-2 bg-tableColor ">
                <h6>+2</h6>
              </div>
            </div>
            <div className="grid justify-end pr-4">
              <p>2 Free Slots</p>
            </div>
            <div className="pt-8 grid justify-end">
              <button className="  py-2 px-8  rounded-full  text-white  bg-black  text-center ">
                <h4 className="">Join Cycle</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./Group 4672.png"
        alt="image"
        className="lg:-mt-40 mr-20 w-9/12 h-52 md:-mt-28 sm: -mt-28"
      />
      <div className="lg:-mt-24 ml-80 mr-28 md:-mt-12 sm: -mt-12 ">
        <img src="./Path 6819.png" alt="image" className=" w-20 h-8" />
        <p className="text-xs ml-1 text-center">{trans("cars")}</p>
      </div>
      <div className="lg:-mt-32 mr-80 -mt-12 mb-16 md:-mt-10">
        <img src="./path 6818.png" alt="image" className=" w-16 h-12" />
        <p className="text-xs ml-1 text-center">{trans("marriage")}</p>
      </div>
    </div>
  );
}
