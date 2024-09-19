"use client";
import React, { useState } from "react";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import { useRouter } from "next/navigation";

const Blogcon = ({
  contentList,
  classlist,
  borderclasslist,
  btnName,
  classdescription,
  blogpx,
  classImage,
  textcolor,
}) => {
  const [visibleItems, setVisibleItems] = useState(4);
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/blogdetails/${id}`);
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
  };

  const convertDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
  };

  return (
    <section>
      <div className="container main-con m-auto sm:px-[10px] flex flex-col sm:flex-row lg:flex-col flex-wrap content-center gap-10 justify-center">
        {contentList?.map((content, index) => (
          <div
            key={index}
            // className="flex flex-col-reverse lg:flex-row items-center justify-between grad-border grad-border-compliance bdr-sm-blg gap-5 p-10 xl:p-20 sm:w-[45%] lg:w-[95%] 3xl:w-[78%] m-auto  lg:bg-[#fff0]"
            className={`${borderclasslist}`}
          >
            <div className={`lg:w-[60%] ${blogpx} lg:pl-0 pb-5 lg:pb-0`}>
              <h4
                className={`border-l-2 border-[#9180FF] pl-4 ${textcolor} text-[18px] lg:text-[24px] mb-5 lg:mb-0`}
              >
                {convertDate(content.created)}
                <span className={`${classlist}`}>{content.htmlTitle}</span>
              </h4>
              <p className={`${classdescription}`}>{content.metaDescription}</p>
              <div
                onClick={() => handleClick(content.id)}
                className="cursor-pointer"
              >
                <CTAButton
                  icon={signupArrow}
                  backgroundType={"bg-gradient-to-r"}
                  backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                  textColor={"text-[#fff]"}
                  content={btnName}
                  paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-6 blg-btn"}
                  paddingy={"py-3"}
                  textSize={"text-[16px] xl:text-[18px]"}
                  rounderTL={"rounded-tl-none"}
                  rounderTR={"rounded-tr-[60px]"}
                  rounderBR={"rounded-br-[60px]"}
                  rounderBL={"rounded-bl-[40px]"}
                />
              </div>
            </div>
            <div className={`${classImage}`}>
              <Image
                alt={content.featuredImageAltText}
                src={content.featuredImage}
                width={500}
                height={500}
                className="object-contain w-full h-full max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
      </div>

      {visibleItems < contentList?.length && (
        <div className="flex justify-center py-[50px] lg:py-[90px]">
          <CTAButton
            onClick={handleLoadMore}
            icon={signupArrow}
            backgroundType={"bg-gradient-to-r"}
            backgroundColor={"from-[#3D77EB]  to-[#D289FF]"}
            textColor={"text-[#fff]"}
            content={"OLDER POSTS"}
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

export default Blogcon;
