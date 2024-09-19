import React, { useState } from "react";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import signupArrow from "@/public/signup-arrow.svg";

const Podcastcon = ({ contentList }) => {
  const [visibleItems, setVisibleItems] = useState(4);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
  };

  return (
    <section className="md:mb-8 lg:mb-14">
      <div className="container m-auto px-[30px] sm:px-[10px] flex flex-col sm:flex-row lg:flex-col flex-wrap content-center gap-10 justify-center">
        {contentList.slice(0, visibleItems).map((content, index) => (
          <div
            key={index}
            className="flex flex-col-reverse lg:flex-row items-center justify-between grad-border grad-border-compliance bdr-webinar-rds gap-5 p-10 lg:p-20 sm:w-[45%] lg:w-[85%] 2xl:w-[75%] m-auto  lg:bg-[#fff0]"
          >
            <div className="lg:w-[70%] xl:pl-10 lg:pl-0 pb-5 lg:pb-0">
              <h4 className="border-l-2 border-[#9180FF] pl-4 text-[#3EA6BB] text-[18px] lg:text-[24px] mb-5 lg:mb-0">
                {content.date}
                <span className="text-[#9180FF] font-[400] lg:text-[20px] 3xl:text-[24px] block pt-2 lg:pr-20">
                  {content.title}
                </span>
              </h4>
              <p className="block text-[16px] lg:text-[18px] lg:pl-4 pt-2 sm:pt-5 pb-5">
                {content.description}
              </p>

              <CTAButton
                icon={signupArrow}
                backgroundType={"bg-gradient-to-r"}
                backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                textColor={"text-[#fff]"}
                content={"Listen Now"}
                paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-6"}
                paddingy={"py-3"}
                textSize={"text-[16px] xl:text-[18px]"}
                rounderTL={"rounded-tl-none"}
                rounderTR={"rounded-tr-[60px]"}
                rounderBR={"rounded-br-[60px]"}
                rounderBL={"rounded-bl-[40px]"}
              />
            </div>
            <div className="">
              <Image
                alt={content.title}
                src={content.imageUrl}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {visibleItems < contentList?.length && (
        <div className="flex justify-center mt-14">
          <CTAButton
            onClick={handleLoadMore}
            icon={signupArrow}
            backgroundType={"bg-gradient-to-r"}
            backgroundColor={"from-[#3D77EB]  to-[#D289FF]"}
            textColor={"text-[#fff]"}
            content={"VIEW ALL"}
            paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-6 ml-4"}
            paddingy={"py-3"}
            textSize={"text-[16px] xl:text-[18px]"}
            rounderTL={"rounded-tl-none"}
            rounderTR={"rounded-tr-[60px]"}
            rounderBR={"rounded-br-[60px]"}
            rounderBL={"rounded-bl-[40px]"}
          />
        </div>
      )}
    </section>
  );
};

export default Podcastcon;
