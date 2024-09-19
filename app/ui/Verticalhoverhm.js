import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

function Verticalhoverhm({
  heading,
  spancon,
  headingtwo,
  description,
  vhoveritems = [],
  imageSrc,
  flexReverse,
  imgMessage,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  function toHandelhover(params) {
    return params === hoveredIndex;
  }

  return (
    <>
    <h3 className="block lg:hidden text-center font-[400] text-[30px] mt-14">
              {heading}
              <span> {spancon} </span>
              {headingtwo}
            </h3>
      <div
        className={` flex flex-col ${flexReverse} items-center justify-center gap-2 lg:gap-8 py-10`}
      >
        <div className="w-[100%] 2xl:w-[50%]">
          { imgMessage && <span className="hidden md:flex pl-24 justify-center font-inter font-normal text-[22px] lg:text-[27px]">{imgMessage}</span>}
          <Image
            src={imageSrc}
            alt="Printable Check"
            className="w-[100%] object-left object-cover"
          />
        </div>
        <div className="w-[100%] 2xl:w-[22%] px-8 lg:px-0">
          <div className="">
            <h3 className="hidden lg:block text-center lg:text-left pb-6 md:10 font-[400] text-[30px] xl:text-[49px]">
              {heading}
              <span> {spancon} </span>
              {headingtwo}
            </h3>
            <p className="text-center font-circular-spotify font-light text-[#666666] text-[18px] leading-[25.4px] lg:text-[20px] lg:leading-[28.22px] px-4 sm:px-24 md:px-32 lg:px-0">
              {description}
            </p>
          </div>
          {vhoveritems.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col xl:flex-row xl:items-start gap-5 lg:filter pt-4 lg:pt-10 lg:blur-[1.5px] hover:blur-0 opacity-50 hover:opacity-100 lg:pr-[45px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(index)}
            >
              <h4
                className={`transition-opacity transition-visibility duration-500 font-[450] 2xl:text-[28px] opacity-100 ${
                  toHandelhover(index)
                    ? `text-[#7F53E7] opacity-100`
                    : `text-[#404040] opacity-0`
                }`}
              >
                {`0${index + 1}`}
              </h4>
              <div
                className={`transition-opacity transition-visibility duration-500 opacity-100 lg:border-l-2 border-[#40404020] ${
                  toHandelhover(index)
                    ? `border-[#7F53E7] opacity-100`
                    : `opacity-0`
                } lg:pl-4 px-4`}
              >
                <h4
                  className={`transition-opacity transition-visibility duration-500 font-[450] opacity-100 ${
                    toHandelhover(index)
                      ? `text-[#7F53E7] opacity-100`
                      : `text-[#404040] opacity-0`
                  }  font-circular-spotify font-light text-[25px] leading-[28.62px] xl:text-[28px] xl:leading-[44.65px] group-hover:text-[#7F53E7] pb-3`}
                >
                  {item.heading}
                </h4>
                <p
                  className={`transition-opacity transition-visibility duration-500 ${
                    toHandelhover(index)
                      ? `block text-[#7F53E7] opacity-100`
                      : `opacity-0 hidden text-[#404040]`
                  } lg:group-hover:block font-circular-spotify font-light text-[18px] leading-[25.4px] xl:text-[25px] xl:leading-[35.28px]`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Verticalhoverhm;
