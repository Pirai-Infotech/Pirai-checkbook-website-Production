import React from "react";
import { Popover } from "antd";
import PaymentSubMenu from "./PaymentSubMenu";

function Nav() {
  return (
    <div className="w-[70%]">
      <ul className="flex items-center justify-between w-full">
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]">
          Home
        </li>
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]">
          <Popover placement="bottom" content={<PaymentSubMenu />}>
            Products
          </Popover>
        </li>
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]">
          Solutions
        </li>
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]">
          Resources
        </li>
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]">
          Industries
        </li>
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]">
          ROI Calculator
        </li>
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]">
          Pricing
        </li>
      </ul>
    </div>
  );
}

export default Nav;
