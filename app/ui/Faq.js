"use client"
import React from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import cartImage from "@/public/cartBackground.svg";
import Image from "next/image";
import { useState } from "react";

const { Panel } = Collapse;

const expandIcon = ({ isActive }) =>
  isActive ? <MinusOutlined /> : <PlusOutlined />;

const questions = [
  {
    question: "How do I verify my bank?",
    answer:
      "Banks can either be verified instantly (using online banking username and password) or manually (using account and routing number) on Checkbook. If you are adding a bank for the first time on Checkbook, you will be prompted to complete your profile thorough a banner notification...",
    ctaText: "Read More",
    ctaLink: "/",
  },
  {
    question: "How long does it take to receive funds?",
    answer:
      "Banks can either be verified instantly (using online banking username and password) or manually (using account and routing number) on Checkbook. If you are adding a bank for the first time on Checkbook, you will be prompted to complete your profile thorough a banner notification...",
    ctaText: "Read More",
    ctaLink: "/",
  },
  {
    question: "How does Checkbook.io keep customer data secure?",
    answer:
      "Banks can either be verified instantly (using online banking username and password) or manually (using account and routing number) on Checkbook. If you are adding a bank for the first time on Checkbook, you will be prompted to complete your profile thorough a banner notification...",
    ctaText: "Read More",
    ctaLink: "/",
  },
  {
    question: "How do I increase my limits?",
    answer:
      "Banks can either be verified instantly (using online banking username and password) or manually (using account and routing number) on Checkbook. If you are adding a bank for the first time on Checkbook, you will be prompted to complete your profile thorough a banner notification...",
    ctaText: "Read More",
    ctaLink: "/",
  },
  {
    question: "How do I add a different bank account?",
    answer:
      "Banks can either be verified instantly (using online banking username and password) or manually (using account and routing number) on Checkbook. If you are adding a bank for the first time on Checkbook, you will be prompted to complete your profile thorough a banner notification...",
    ctaText: "Read More",
    ctaLink: "/",
  },
];
const defaultActiveKey = [0];
const Faq = () => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const handlePanelChange = (key) => {
    setActiveKey(key);
  };
  return (
    <section className="relative cb-faq py-10">
      <div className="container main-con m-auto rounded-[20px] sm:rounded-[60px] bg-grad-1 px-6 sm:px-10 py-10 lg:px-[100px] lg:py-[60px] sm:w-[95%] lg:w-[80%] 2xl:w-[70%]">
        <h3 className="text-center pb-10">Frequently Asked Questions</h3>
        <Collapse
          expandIcon={expandIcon}
          expandIconPosition="end"
          className="border-0 bg-[unset]"
          defaultActiveKey={defaultActiveKey}
          onChange={handlePanelChange}
        >
          {questions?.map((item, index) => (
            <Panel
              className="text-[300] text-[20px] md:text-[24px] font-[450] lg:font-[400]"
              header={
                <span
                  className={`${
                    activeKey == index ? " font-[500]" : "font-[400]"
                  }`}
                >
                  {item.question}
                </span>
              }
              key={index}
            >
              <p className="text-[16px] font-light lg:text-[18px]">
                {item.answer}
                <span className="lg:block lg:pt-5">
                  <a
                    className="text-[16px] lg:text-[18px] font-[430] lg:font-[300] text-[#7F53E8] btn btn-primary"
                    href={item.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.ctaText}
                  </a>
                </span>
              </p>
            </Panel>
          ))}
        </Collapse>
      </div>
      <div className="absolute z-[-1] top-[80px] left-[-500px] md:left-[0]">
        <Image
          src={cartImage}
          className="w-[100%] opacity-30 sm:opacity-30 md:opacity-30 lg:opacity-70"
          alt="cartImage"
        />
      </div>
    </section>
  );
};

export default Faq;
