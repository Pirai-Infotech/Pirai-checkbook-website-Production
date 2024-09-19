import React from "react";
import CTAButton from "./CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import Entrepreneurship from "@/public/Entrepreneurship.svg";
import Businessintelligence from "@/public/Businessintelligence.svg";
import Payments from "@/public/Payments.svg";
import Image from "next/image";

function DiscoverInsights( {insightType} ) {
  return (
    <div className="container main-con m-auto px-[1%] md-[0%] mt-14 py-8 md:py-14">
      <h3 className="text-center sm:px-8 md:px-10 lg:px-[20%] 2xl:px-10 text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[70px] 3xl:text-[92px] 3xl:leading-[111.34px] m-auto">
        Discover <span>insights</span> and learn how to manage {insightType}
      </h3>
      <div className="flex flex-col md:flex-row gap-10 pt-14">
        <div className="w-[100%] md:w-[48%] lg:w-[38%]">
          <div className="flex flex-col flex-1 gap-7">
            <div>
              <div className="bg-gradient-to-r from-[#9281FF]  to-[#3EA8BD] px-[56px] py-[25px] 2xl:px-[104px] 2xl:py-[46px] rounded-[8.13px] lg:rounded-[15px]">
                <Image
                  src={Entrepreneurship}
                  alt="Entrepreneurship"
                  width={432}
                  height={290}
                />
              </div>
              <div className="bg-grad-sec py-[25px] px-7 pxl:pl-[70px] 2xl:pl-[87px]">
                <p className="pl-3 xl:pl-7 pb-3">SEP 01, 2023</p>
                <p className="border-l-2 border-[#9180FF] pl-3 xl:pl-7 font-[450] sm:font-[400] text-[#404040] text-[18px] xl:text-[20px] 2xl:text-[28px]">
                  FinTech Funding and Valuation versus Demand and Supply
                </p>
                <div className="pl-3 xl:pl-7 pt-4">
                  <CTAButton
                    icon={signupArrow}
                    backgroundType={"bg-gradient-to-r"}
                    backgroundColor={
                      "from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"
                    }
                    textColor={"text-[#FFF]"}
                    content={"Read More"}
                    paddingx={"px-7 lg:px-6 2xl:px-7"}
                    paddingy={"py-2 md:py-3"}
                    textSize={"text-[17px] lg:text-[10px] xl:text-[17px]"}
                    rounderTL={"rounded-tl-none"}
                    rounderTR={"rounded-tr-[60px]"}
                    rounderBR={"rounded-br-[60px]"}
                    rounderBL={"rounded-bl-[40px]"}
                    classname={"btn-bg-grad ml-4"}
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:block lg:hidden">
              <div className="flex bg-gradient-to-b from-[#9281FF]  to-[#3EA8BD] rounded-[8.13px] lg:rounded-[15px] px-[56px] py-[28px] lg:py-[75px] 2xl:px-[50px] 2xl:py-[95px]">
                <Image src={Businessintelligence} alt="Payments" />
              </div>
              <div className="bg-grad-sec py-[25px] px-7 xl:px-[40px] lg:pt-[70px] 2xl:pt-[120px]">
                <p className="text-[14px] text-[#404040] font-[300] pl-3 xl:pl-7 pb-3">
                  MAY 26, 2023
                </p>
                <p className="border-l-2 border-[#9180FF] pl-3 xl:pl-7 pr-[12%] text-[#404040] text-[18px] xl:text-[20px] 2xl:text-[28px] font-[400]">
                  How The Money Flows: Payments for Cash Advance
                </p>
                <div className="pl-3 xl:pl-7 pt-4">
                  <CTAButton
                    icon={signupArrow}
                    backgroundType={"bg-gradient-to-r"}
                    backgroundColor={
                      "from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"
                    }
                    textColor={"text-[#FFF]"}
                    content={"Read More"}
                    paddingx={"px-7 lg:px-6 2xl:px-7"}
                    paddingy={"py-2 md:py-3"}
                    textSize={"text-[17px] lg:text-[10px] xl:text-[17px]"}
                    rounderTL={"rounded-tl-none"}
                    rounderTR={"rounded-tr-[60px]"}
                    rounderBR={"rounded-br-[60px]"}
                    rounderBL={"rounded-bl-[40px]"}
                    classname={"btn-bg-grad ml-4"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-7">
          <div className="flex flex-col lg:flex-row ">
            <div className="flex bg-gradient-to-b from-[#9281FF]  to-[#3EA8BD] rounded-[8.13px] lg:rounded-[15px] px-[56px] py-[28px] lg:py-[75px] 2xl:px-[50px] 2xl:py-[95px]">
              <Image src={Payments} alt="Payments" />
            </div>
            <div className="bg-grad-sec py-[25px] px-7 xl:px-[40px]  lg:pt-[70px] 2xl:pt-[120px]">
              <p className="text-[14px] text-[#404040] font-[300] pl-3 xl:pl-7 pb-3">
                MAR 29, 2023
              </p>
              <p className="border-l-2 border-[#9180FF] pl-3 xl:pl-7 pr-[12%] text-[#404040] text-[18px] xl:text-[20px] 2xl:text-[28px] font-[400]">
                Building Creativity-Hackathons with Checkbook
              </p>
              <div className="pl-3 xl:pl-7 pt-4">
                <CTAButton
                  icon={signupArrow}
                  backgroundType={"bg-gradient-to-r"}
                  backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                  textColor={"text-[#FFF]"}
                  content={"Read More"}
                  paddingx={"px-7 lg:px-6 2xl:px-7"}
                  paddingy={"py-2 md:py-3"}
                  textSize={"text-[17px] lg:text-[10px] xl:text-[17px]"}
                  rounderTL={"rounded-tl-none"}
                  rounderTR={"rounded-tr-[60px]"}
                  rounderBR={"rounded-br-[60px]"}
                  rounderBL={"rounded-bl-[40px]"}
                  classname={"btn-bg-grad ml-4"}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div className="flex bg-gradient-to-b from-[#9281FF]  to-[#3EA8BD] rounded-[8.13px] lg:rounded-[15px] px-[56px] py-[28px] lg:py-[75px] 2xl:px-[50px] 2xl:py-[95px]">
              <Image src={Businessintelligence} alt="Payments" />
            </div>
            <div className="bg-grad-sec py-[25px] px-7 xl:px-[40px] lg:pt-[70px] 2xl:pt-[120px]">
              <p className="text-[14px] text-[#404040] font-[300] pl-3 xl:pl-7 pb-3">
                MAY 26, 2023
              </p>
              <p className="border-l-2 border-[#9180FF] pl-3 xl:pl-7 pr-[12%] text-[#404040] text-[18px] xl:text-[20px] 2xl:text-[28px] font-[400]">
                How The Money Flows: Payments for Cash Advance
              </p>
              <div className="pl-3 xl:pl-7 pt-4">
                <CTAButton
                  icon={signupArrow}
                  backgroundType={"bg-gradient-to-r"}
                  backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                  textColor={"text-[#FFF]"}
                  content={"Read More"}
                  paddingx={"px-7 lg:px-6 2xl:px-7"}
                  paddingy={"py-2 md:py-3"}
                  textSize={"text-[17px] lg:text-[10px] xl:text-[17px]"}
                  rounderTL={"rounded-tl-none"}
                  rounderTR={"rounded-tr-[60px]"}
                  rounderBR={"rounded-br-[60px]"}
                  rounderBL={"rounded-bl-[40px]"}
                  classname={"btn-bg-grad ml-4"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverInsights;
