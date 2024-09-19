import React, { useState } from "react";
import Image from "next/image";

function Horizhover({ heading, description, items }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  function toHandelhover(params) {
    return params === hoveredIndex;
  }

  return (
    <div className="container main-con m-auto flex p-6 pb-10 md:p-10 md:w-[75%] lg:w-[95%] 3xl:w-[84%] flex-col lg:flex-row grad-border grad-border-rtgs bdr-md-rds items-center justify-center md:py-10 lg:py-5 lg:gap-3 3xl:gap-8 lg:px-30 2xl:px-52">
      <div className="p-5 sm:p-5 md:pt-6 md:pb-6 md:pr-12 md:pl-0  lg:p-7 flex-grow">
        <h4 className="font-inter font-medium text-[24px] leading-[29.05px] xl:text-[28px] xl:leading-[33.89px] text-[#9180FF]">
          {heading}
        </h4>
        <p className="font-circular-spotify font-light text-[16px] leading-[22.58px] xl:text-[20px] xl:leading-[28.22px] text-left pt-3 sm:pt-4 md:pt-5 lg:pt-5 w-full xl:px-0">
          {description}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center px-5 md:px-0 gap-3 3xl:gap-10 lin-bf-txt">
        {items?.map((item, index) => (
          <div
            key={index}
            className={`pt-10 px-2 lg:filter ${
              toHandelhover(index) ? `first-itm` : `lg:blur-[1.5px] scond-itm`
            } hover:blur-0`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(index)}
          >
            <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
              <Image src={item.icon} alt={item.iconAlt} />
              <h4 className="lg:pl-4 font-inter font-normal text-[22px] leading-[26.63px] xl:text-[24px] xl:leading-[29.05px] text-[#9180FF]">
                {item.title}
              </h4>
            </div>
            <p className="pt-2 lg:pt-6 md:pl-16 lg:pl-0 lg:w-[233px] lg:h-[189px] text-[16px] leading-[22.58px] xl:text-[18px] xl:leading-[25.04px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Horizhover;
