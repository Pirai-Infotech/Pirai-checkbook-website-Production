import React, { useState } from "react";
import Image from "next/image";

function Verticalhover({ heading, spancon, description, items, imageSrc }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  function toHandelhover(params) {
    return params === hoveredIndex;
  }

  return (
    <>
      <div className="pt-20">
        <div className="container main-con m-auto">
          <h3 className="text-center pb-6 md:10 font-inter text-[45px] leading-[54.46px] xl:text-[70px] xl:leading-[84.72px]">
            {heading}
            <br />
            <span>{spancon}</span>
          </h3>
          <p className="text-center font-circular-spotify font-light text-[#666666] text-[18px] leading-[25.4px] lg:text-[20px] lg:leading-[28.22px] px-4 sm:px-24 md:px-28 lg:px-[20%] 2xl:px-[28%]">
            {description}
          </p>
        </div>
      </div>
      {items ? (
      <div className="4xl:w-[1920px] 4xl:m-auto ml-2 pl-2 sm:ml-10 sm:pl-10 md:ml-14 md:pl-14 2xl:ml-36 2xl:pl-36 flex flex-row items-center justify-between gap-2 lg:gap-8 py-10">
        <div className="w-[60%] 2xl:w-[36%] h-[500px]">
          {items?.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col xl:flex-row xl:items-start gap-5 lg:filter pt-6 md:pt-8 lg:pt-10 lg:blur-[1.5px] hover:blur-0 opacity-50 hover:opacity-100"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(index)}
            >
              <h4
                className={`transition-opacity transition-visibility duration-500 lg:pl-4 2xl:text-[40px] opacity-100 ${
                  toHandelhover(index)
                    ? `text-[#7F53E7] opacity-100`
                    : `text-[#404040] opacity-0`
                } font-circular-spotify font-light text-[25px] leading-[28.62px] xl:text-[39px] xl:leading-[44.65px] group-hover:text-[#7F53E7] group-hover:border-b-2 lg:group-hover:border-b-0 border-[#7F53E7] lg:border-none w-8 lg:w-auto`}
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
                  className={`transition-opacity transition-visibility duration-500 opacity-100 ${
                    toHandelhover(index)
                      ? `text-[#7F53E7] opacity-100`
                      : `text-[#404040] opacity-0`
                  } lg:pr-24 font-circular-spotify font-light text-[25px] leading-[28.62px] xl:text-[39px] xl:leading-[44.65px] group-hover:text-[#7F53E7] pb-3`}
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
        <div className="flex-grow-1">
          <Image
            src={imageSrc}
            alt="Printable Check"
            className="h-[500px] w-[150px] md:w-[500px] lg:w-[775px] lg:h-[100%] object-left object-cover"
          />
        </div>
      </div>
        ) : (
          <div className="container lg:w-[60%] xl:w-[50%] m-auto pt-4 my-10 lg:pt-10 lg:my-14">
            <Image src={imageSrc} alt="Printable Check" className="" />
          </div>
        )}
    </>
  );
}

export default Verticalhover;
