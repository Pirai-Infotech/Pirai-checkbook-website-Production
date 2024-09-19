import React from "react";
import CTAButton from "./CTAButton";
import signupArrow from "@/public/signup-arrow-purple.svg";
import logo from "@/public/footer-checkbook-logo.svg";
import Image from "next/image";
import Link from "next/link";

function Footer({ contactFormText }) {
  return (
    <div className="bg-gradient-to-r from-[#9B8DFF] to-[#3E89BD] lg:mt-10">
      <div className="container main-con m-auto">
        <h3 className="text-[40px] lg:text-[62px] leading-[48.41px] lg:leading-[75.03px] text-white pt-20 pb-5 text-center font-normal">
          {contactFormText ? contactFormText : "Contact Us"}
        </h3>
        <p className="text-[18px] lg:text-[27px] leading-[25.4px] lg:leading-[38.1px] text-white mb-8 text-center font-light px-[30px] sm:px-[60px] md:px-[130px] lg:px-[180px] xl:px-[300px] 3xl:px-[550px]">
          Our team is happy to answer your questions. Fill out the form and
          we’ll be in touch as soon as possible.
        </p>
        <div className="flex justify-center w-full pb-14 lg:pb-24 border-b border-solid border-[#FFF]">
          <CTAButton
            icon={signupArrow}
            backgroundType={""}
            backgroundColor={"bg-[#FFF]"}
            textColor={"text-[#608BD5]"}
            content={"Contact Us"}
            paddingx={"px-[33px]"}
            paddingy={"py-[12px]"}
            textSize={"xl:text-[17px] lg:text-[15px]"}
            rounderTL={"rounded-tl-none"}
            rounderTR={"rounded-tr-[60px]"}
            rounderBR={"rounded-br-[60px]"}
            rounderBL={"rounded-bl-[40px]"}
          />
        </div>

        <div className="flex justify-between items-start flex-wrap mt-24 pb-14 w-[85%] m-auto">
          <div className="w-full lg:w-[20%] order-2 flex justify-center border-t border-solid border-[#FFF] mt-24 pt-10 lg:pt-0 lg:mt-0 lg:border-none lg:order-2">
            <Image src={logo} alt="Checkbook" />
          </div>
          <div className="w-full lg:w-[70%] flex justify-between flex-wrap gap-2 lg:order-2 order-1">
            <div className="lg:w-[20%] w-[45%] mb-8 md:mb-0 md:w-[30%]">
              <h4 className="text-[#FFF] text-lg mb-4">Products</h4>
              <ul>
                <li>
                  <Link
                    href="/ACHpayments"
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    ACH Payments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/realtimepayments"
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Real-Time Payments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Instantpayments"
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Instant Payments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mailed"
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Mail
                  </Link>
                </li>
                <li>
                  <Link
                    href="/virtualcards"
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Virtual Card
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Printablechecks"
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Print
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-[17%] w-[45%] md:w-[30%]">
              <h4 className="text-[#FFF] text-lg mb-4">Solutions</h4>
              <ul>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Multi-Party
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    PayFac
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Integrationst
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-[20%] w-[45%] md:w-[30%] mb-8 md:mb-0">
              <h4 className="text-[#FFF] text-lg mb-4">Resources</h4>
              <ul>
                <li>
                  <Link
                    href="/about"
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/howitworks"
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Blog"
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-[17%] w-[45%] md:w-[30%]">
              <h4 className="text-[#FFF] text-lg mb-4">Social</h4>
              <ul>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Youtube
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    X
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-[20%] w-[45%] md:w-[30%] md:mt-8 lg:mt-0">
              <h4 className="text-[#FFF] text-lg mb-4">Industries</h4>
              <ul>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Customers
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    ROI Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex pb-10 w-[85%] m-auto justify-center lg:justify-start">
          <ul className="flex items-center">
            <li className="mr-4 sm:mr-8">
              <Link href={""} className="text-[#FFF] text-sm font-light">
                Privacy Policy
              </Link>
            </li>
            <li className="mr-4 sm:mr-8">
              <Link href={""} className="text-[#FFF] text-sm font-light">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href={""} className="text-[#FFF] text-sm font-light">
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
