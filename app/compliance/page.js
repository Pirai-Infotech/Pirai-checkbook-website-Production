"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import topRightarrow from "@/public/topRight.svg";
import compliance from "@/public/complianceImg.svg";
import complianceMobile from "@/public/complianceMobile.svg";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Faq from "../ui/Faq";

function page() {
  return (
    <div className="container main-con m-auto px-6 sm:px-0 lg:mt-14">
      <section className="px-2 py-8 sm:px-4 md:px-8 md:py-12">
        <div className="text-center">
          <span className="font-inter text-[50px] lg:text-[88px] font-light leading-[106.5px] lg:leading-[60.51px] tracking-[-2px] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]">
            Compliance
          </span>
        </div>
        <div className="w-full flex justify-center">
          <p className="w-full max-w-[370px] px-8 md:max-w-md lg:max-w-full text-center font-circular-spotify text-[23px] lg:text-[27px] font-light leading-[32.45px] lg:leading-[38.1px] text-[#404040] pt-2 lg:pt-8">
            Checkbook.io Audits and Compliance Reports
          </p>
        </div>
      </section>
      <section className="w-full grid justify-center gap-8 mt-10 lg:mt-14 px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full lg:max-w-[1000px] xl:max-w-[1240px]">
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt">
            <div className="py-7 px-10 grad-border grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="pt-10 sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] lg:pl-4">
                  PCI DSS
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                The Payment Card Industry Data Security Standard is an
                information security standard for organizations that handle
                branded credit cards from the major card schemes.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[747px] h-auto lin-bf-txt">
            <div className="py-7 px-10 grad-border grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="pt-10 sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] lg:pl-4">
                  SOC 1
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 xl:pr-56 2xl:pr-60 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                A SOC 1 Report (System and Organization Controls Report) is a
                report on Controls at a Service Organization which are relevant
                to user entities&apos; internal control over financial
                reporting.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full lg:max-w-[1000px] xl:max-w-[1240px]">
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[747px] h-auto lin-bf-txt">
            <div className="py-7 px-10 grad-border grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="pt-10 sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] lg:pl-4">
                  HIPAA
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 xl:pr-56 2xl:pr-60 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                The Health Insurance Portability and Accountability Act of 1996,
                commonly known as HIPAA, is a series of regulatory standards
                that outline the lawful use and disclosure of protected health
                information (PHI).
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt">
            <div className="py-7 px-10 grad-border grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="pt-10 sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] lg:pl-4">
                  SOC 2
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                SOC 2 is an auditing procedure that ensures your service
                providers securely manage your data to protect the interests of
                your organization and the privacy of its clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 md:mt-20 lg:mt-28">
        <div className="w-full grid justify-center px-1">
          <p className="font-circular-spotify text-[22px] md:px-[80px] lg:px-[0px] lg:text-[27px] font-light leading-[31.04px] lg:leading-[38.1px] text-center m-auto max-w-full lg:max-w-[986px] text-[#404040]">
            We take compliance seriously and display our compliance efforts
            publicly. We are happy to share more details. Please contact
            compliance at {" "}
            <Link
              href="#"
              className="font-circular-spotify text-[22px] lg:text-[27px] font-light leading-[31.04px] lg:leading-[38.1px] text-[#3D77EA]"
            >
              checkbook.io
            </Link>
          </p>
          <p className="mt-8 sm:mt-10 lg:mt-14 font-circular-spotify text-[22px] lg:text-[27px] font-light leading-[31.04px] lg:leading-[38.1px] text-center m-auto max-w-full lg:max-w-[936px] text-[#404040]">
            Checkbook Payment Holdings, Inc.; NMLS ID #2535348
          </p>
          <div className="mt-10 sm:mt-14 mb-10 sm:mb-14 justify-center hidden sm:flex">
            <Image src={compliance} alt="compliance" />
          </div>
          <div className="mt-10 sm:mt-14 mb-10 sm:mb-14 flex justify-center sm:hidden">
            <Image src={complianceMobile} alt="compliance" />
          </div>
        </div>
      </section>
      <section className="mt-8 md:mt-10 lg:mt-14">
        <ReadytoGetStart />
      </section>
      <section className="lg:hidden mt-14 mb-14 md:mt-20 md:mb-20 lg:mt-28">
        <Faq />
      </section>
    </div>
  );
}

export default page;
