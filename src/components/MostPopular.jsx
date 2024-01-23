import React from "react";
import { ComputerSvg } from "./IconImg";
import { PencilSvg } from "./IconImg";

const MostPopular = () => {
  return (
    <>
      <div className="xl:py-[160px] sm:pt-[40px] sm:pb-[90px] pt-0 pb-[50px] xl:mb-[61px] mb-0">
        <div className="container mx-auto xl:max-w-[1074px] lg:px-4 px-6">
          <div className="lg:pb-[80px] sm:pb-[40px] pb-[32px]">
            <p
              className="text-center text-[#96BB7C] text-sm !leading-[ 171.429%] font-bold tracking-[0.2px] pb-[10px]"
              data-aos="zoom-in"
            >
              Practice Advice
            </p>
            <h2
              className="text-[#252B42] sm:text-[40px] text-[27px] leading-[125%] font-bold tracking-[0.2px] text-center pb-[10px]"
              data-aos="zoom-in"
            >
              Most Popular Courses
            </h2>
            <p
              className="text-[#737373] text-sm leading-[142.857%] tracking-[0.2px] font-bold text-center"
              data-aos="zoom-in"
            >
              <span className="lg:block">
                {" "}
                Problems trying to resolve the conflict between
              </span>{" "}
              the two major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div
            className="flex justify-center items-center md:flex-row flex-col gap-[30px]"
            data-aos="zoom-in"
          >
            <div className="max-w-[328px] bg-white shadow-[0px_13px_19px_0px_rgba(0,_0,_0,_0.07)] hover:shadow-[5px_13px_19px_8px_rgba(0,_0,_0,_0.07)] transition-all duration-500 ease-in-out py-[35px] px-[40px] flex gap-[20px] flex-col items-center justify-center w-full ">
              <ComputerSvg />
              <h3 className="text-[#252B42] text-center text-base !leading-[150%] font-bold tracking-[0.1px] py-[20px]">
                training Courses
              </h3>
              <div className="bg-[#E74040] h-[2px] w-full max-w-[50px]"></div>
              <p className="text-[#737373] text-sm !leading-[142.857% ] max-w-[136px] tracking-[0.2px] font-normal text-center">
                The gradual accumulation and small-scale..
              </p>
            </div>
            <div className="max-w-[328px] bg-white shadow-[0px_13px_19px_0px_rgba(0,_0,_0,_0.07)] hover:shadow-[5px_13px_19px_8px_rgba(0,_0,_0,_0.07)] transition-all duration-500 ease-in-out py-[35px] px-[40px] flex gap-[20px] flex-col items-center justify-center w-full">
              <PencilSvg />
              <h3 className="ext-[#252B42] text-center text-base !leading-[150%] font-bold tracking-[0.1px] py-[20px]">
                2,769 online courses
              </h3>
              <div className="bg-[#E74040] h-[2px] w-full max-w-[50px]"></div>
              <p className="text-[#737373] text-sm !leading-[142.857% ] max-w-[136px] tracking-[0.2px] font-normal text-center">
                The gradual accumulation and small-scale..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostPopular;
