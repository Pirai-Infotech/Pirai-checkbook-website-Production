import React from "react";
import { Collapse } from "antd";
import upArrow from "@/public/cb_up_arrow.svg";
import downArrow from "@/public/cb_down_arrow.svg";

const { Panel } = Collapse;

const expandIcon = ({ isActive }) =>
  isActive ? (
    <img src={upArrow.src} alt="Up Arrow" />
  ) : (
    <img src={downArrow.src} alt="Down Arrow" />
  );

const defaultActiveKey = [0];

const PressAwards = ({ contentList }) => {
  return (
    <section className="container main-con m-auto prss-awrd">
      <div className="rounded-[20px] sm:rounded-[60px] px-6 sm:px-10 lg:px-[100px] sm:w-[95%] 3xl:w-[85%] m-auto">
        <Collapse
          expandIcon={expandIcon}
          expandIconPosition="end"
          className="border-0 bg-[unset]"
          defaultActiveKey={defaultActiveKey}
        >
          {contentList?.map((item, index) => (
            <Panel
              className="text-[24px] 2xl:text-[38px] font-[450] grad-border grad-border-compliance bdr-prsawd-rds mb-10 p-10 2xl:p-20"
              header={<span className="lft-bdr pl-5">{item?.question || "No title available"}</span>}
              key={index}
            >
              {item?.content?.length > 0 &&
                item.content.map((contentItem, contentIndex) => (
                  <div key={contentIndex} className="pb-10">
                    <p className="text-[20px] 2xl:text-[28px] text-[#404040] font-[500]">
                      <span className="text-[#9180FF]">
                        {contentItem?.spancon}
                      </span>
                      &nbsp;
                      {contentItem?.month}
                    </p>
                    <p className="text-[20px] 2xl:text-[25px] text-[#4F535B]">
                      {contentItem?.description}
                    </p>
                  </div>
                ))}

              {item?.listcon?.length > 0 && (
                <ul className="list-disc pl-5">
                  {item.listcon.map((listItem, listIndex) => (
                    <li
                      key={listIndex}
                      className="text-[22px] 2xl:text-[30px] text-[#7F53E8]"
                    >
                      {listItem?.listli}
                    </li>
                  ))}
                </ul>
              )}
            </Panel>
          ))}
        </Collapse>
      </div>
    </section>
  );
};

export default PressAwards;
