import React from "react";

function Forms({headerText, headerSpan}) {
  return (
    <div className="2xl:px-[250px] container main-con m-auto my-8 md:my-10 lg:my-14">
      <div className="lg:relative border-2 border-[#404040] rounded-[52px] lg:rounded-[70px]">
        <h1 class="lg:absolute mt-6 lg:mt-0 lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white px-8 2xl:px-20 font-inter font-medium text-[24px] 2xl:text-[34px] 3xl:text-[44px] leading-[53px] text-center text-[#404040]">
          {headerText}
          <p className="font-inter font-normal text-[18px] 2xl:text-[28px] leading-[43.59px] lg:leading-[52px] text-[#8C82FB]">
            {headerSpan}
          </p>
        </h1>
        <form className="p-10 lg:p-20 2xl:p-32">
          <div className="mb-5 lg:mb-8">
            <label className="font-inter font-normal text-[18px] lg:text-[25px] leading-[30px] text-[#404040]">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="w-full h-[56px] bg-white border border-[#D1D9F9] rounded-[10px] px-4"
            />
          </div>

          <div className="mb-5 lg:mb-8">
            <label className="font-inter font-normal text-[18px] lg:text-[25px] leading-[30px] text-[#404040]">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="w-full h-[56px] bg-white border border-[#D1D9F9] rounded-[10px] px-4"
            />
          </div>

          <div className="mb-5 lg:mb-8">
            <label className="font-inter font-normal text-[18px] lg:text-[25px] leading-[30px] text-[#404040]">
              Company Name
            </label>
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              className="w-full h-[56px] bg-white border border-[#D1D9F9] rounded-[10px] px-4"
            />
          </div>

          <div className="mb-5 lg:mb-8">
            <label className="font-inter font-normal text-[18px] lg:text-[25px] leading-[30px] text-[#404040]">
              Business Email
            </label>
            <input
              type="email"
              name="business_email"
              placeholder="you@business.com"
              className="w-full h-[56px] bg-white border border-[#D1D9F9] rounded-[10px] px-4"
            />
          </div>

          <div className="font-inter font-normal text-[20px] leading-[24px] text-[#404040] mb-5 lg:mb-8">
            By submitting this form, you agree to our{" "}
            <a href="#" className="text-[#8C82FB]">
              terms of service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#8C82FB]">
              privacy policy
            </a>
            .
          </div>

          <div className="">
            <button
              type="submit"
              className="w-[130px] h-[38px] lg:w-[181px] lg:h-[48px] bg-[#9281FF] rounded-r-[60px] rounded-bl-[60px] font-circularStd font-medium text-[18px] lg:text-[22px] leading-[28px] text-white flex items-center justify-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forms;
