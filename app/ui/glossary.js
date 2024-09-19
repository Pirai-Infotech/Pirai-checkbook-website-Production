import React from "react";
import { Collapse } from "antd";
import upArrow from "@/public/cb_up_arrow.svg";
import downArrow from "@/public/cb_down_arrow.svg";
import GrayupArrow from "@/public/Gray_Arrow_up.svg";
import GraydownArrow from "@/public/Gray_Arrow_dn.svg";
import { useState } from "react";
import Image from "next/image";

const { Panel } = Collapse;

const expandIcon = ({ isActive }) =>
  isActive ? (
    <img src={upArrow.src} alt="Up Arrow" />
  ) : (
    <img src={downArrow.src} alt="Down Arrow" />
  );

const expandsmallIcon = ({ isActive }) =>
  isActive ? (
    <img src={GrayupArrow.src} alt="Up Arrow" />
  ) : (
    <img src={GraydownArrow.src} alt="Down Arrow" />
  );

const defaultActiveKey = [0];

const Glossary = ({ contentList, currency }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const handlePanelChange = (key) => {
    setActiveKey(key);
  };
  return (
    <section className="container m-auto prss-awrd">
      <div className="rounded-[20px] sm:rounded-[60px] px-6 sm:px-10 lg:px-[100px] sm:w-[95%] 3xl:w-[85%] m-auto">
        <Collapse
          expandIcon={expandIcon}
          expandIconPosition="end"
          className="border-0 bg-[unset]"
          defaultActiveKey={defaultActiveKey}
        >
          {contentList?.map((item, index) => (
            <Panel
              className="text-[24px] 3xl:text-[38px] font-[450] grad-border grad-border-compliance bdr-prsawd-rds mb-10 p-10 2xl:p-20"
              header={
                item?.content ? (
                  <span className="flex items-center gap-5">
                    <Image src={currency} alt="" />
                    <span className="lft-bdr pl-5">
                      {item?.question || "No title available"}
                    </span>
                  </span>
                ) : (
                  <span className="lft-bdr pl-5">
                    {item?.question || "No title available"}
                  </span>
                )
              }
              key={index}
            >
              <div className="flex flex-col lg:flex-row justify-between nes-acr">
                <div className="w-[100%] lg:w-[35%]">
                  <p className="text-[20px] lg:text-[24px] 3xl:text-[30px] text-[#404040] leading-[25px]lg:leading-10">
                    {item?.description}
                  </p>
                </div>
                <div className="w-[100%] lg:w-[50%] pt-10 lg:pt-0">
                  {item?.content?.length > 0 ? (
                    <Collapse
                      expandIcon={expandsmallIcon}
                      expandIconPosition="start"
                      className="border-0 bg-[unset]"
                      defaultActiveKey={defaultActiveKey}
                      onChange={handlePanelChange}
                    >
                      {item.content.map((contentItem, contentIndex) => (
                        <Panel
                          key={contentIndex}
                          className=" pb-3"
                          header={
                            <span
                              className={`${
                                activeKey == contentIndex
                                  ? "text-[20px] 3xl:text-[25px] font-bold"
                                  : "text-[18px] 3xl:text-[23px] font-normal"
                              }`}
                            >
                              {contentItem?.ques || "No title available"}
                            </span>
                          }
                        >
                          <p className="text-[20px] 2xl:text-[22px] text-[#404040] font-[500] leading-8 lg:leading-10">
                            {contentItem?.answer}
                          </p>
                          {contentItem?.cta && (
                            <a
                              href="#"
                              className="text-[18px] 3xl:text-[22px] font-[450] text-[#9281FF] hover:underline"
                            >
                              {contentItem.cta}
                            </a>
                          )}
                        </Panel>
                      ))}
                    </Collapse>
                  ) : (
                    <p className="text-[20px] 2xl:text-[28px] text-[#404040]">
                      {item.description || "No content available"}
                    </p>
                  )}
                </div>
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
    </section>
  );
};

export default Glossary;
