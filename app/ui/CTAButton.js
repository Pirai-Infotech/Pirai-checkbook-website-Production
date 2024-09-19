import Image from "next/image";
import React from "react";

function CTAButton({
  icon,
  backgroundType,
  backgroundColor,
  textColor,
  content,
  paddingx,
  paddingy,
  textSize,
  rounderTL,
  rounderTR,
  rounderBR,
  rounderBL,
  onClick,
}) {
  return (
    <>
      <button
        className={`flex items-center cursor-pointer
             ${backgroundType} ${backgroundColor} ${textColor} ${paddingx}
             ${paddingy} ${textSize} ${rounderTL} ${rounderTR} ${rounderBR} ${rounderBL}`}
        onClick={onClick}
      >
        {content}
        {icon && <Image src={icon} alt="Arrow" className="ml-4" />}
      </button>
    </>
  );
}

export default CTAButton;
