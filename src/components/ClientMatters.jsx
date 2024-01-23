import React from "react";
import DifferentProduct from "../assets/images/png/DifferentProduct.png";
import ProductCover from "../assets/images/png/productCover.png";
import {
  LikeSvg,
  LearnArrow,
  BasketSvg,
  LikeIcon,
  StarSvg,
  DownloadSvg,
} from "./IconImg";

const ClientMatters = () => {
  return (
    <>
      <div
        id="Product"
        className="xl:py-[160px] pt-[0] pb-[50px] sm:mb-[36px] mb-0"
      >
        <div className="container mx-auto xl:max-w-[1074px] lg:px-4 px-6">
          <div className="lg:pb-[80px] pb-[32px]">
            <p
              className="text-center text-[#96BB7C] text-sm !leading-[ 171.429%] font-bold tracking-[0.2px] pb-[10px]"
              data-aos="fade-up"
            >
              Practice Advice
            </p>
            <h2
              className="text-center text-[#252B42] sm:text-[40px] text-[29px] leading-[125%] font-bold tracking-[0.2px] pb-[10px]"
              data-aos="fade-up"
            >
              Every Client Matters
            </h2>
            <p
              className="text-[#737373] text-sm leading-[142.857%] tracking-[0.2px] font-bold text-center"
              data-aos="fade-up"
            >
              <span className="sm:block">
                {" "}
                Problems trying to resolve the conflict between
              </span>{" "}
              the two major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="flex justify-center items-center sm:flex-row flex-col gap-[15px]">
            <div className="max-w-[348px]">
              <div className="relative cursor-pointer" data-aos="fade-up">
                <button className="absolute top-[20px] left-[20px] text-white hover:text-[#E74040] text-sm !leading-[171.429%] font-bold tracking-[0.2px] bg-[#E74040] hover:bg-white transition-colors ease-linear duration-500 rounded-[3px] px-[10px] shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.10)] ">
                  Sale
                </button>
                <div className="absolute bottom-[24px] left-0 right-0 flex justify-center gap-[10px]">
                  <div className="hover:hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] rounded-[50px] transition-all ease-linear duration-300 hover:scale-110">
                    <LikeSvg />
                  </div>
                  <div className="hover:hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] rounded-[50px] transition-all ease-linear duration-300 hover:scale-110">
                    <BasketSvg />
                  </div>
                  <div className="hover:hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] rounded-[50px] transition-all ease-linear duration-300 hover:scale-110">
                    <LikeIcon />
                  </div>
                </div>
                <img
                  src={DifferentProduct}
                  alt="DifferentProduct"
                  className=" w-full"
                />
              </div>
              <div className="pt-[25px] px-[25px] pb-[35px] flex flex-col items-start gap-[10px]">
                <div
                  className="w-full flex justify-between items-center"
                  data-aos="fade-up"
                >
                  <p className="text-[#96BB7C] !leading-[171.429%] text-sm tracking-[0.2px] font-bold ">
                    Books Liberary{" "}
                  </p>
                  <button className="flex gap-[5px] items-center p-[5px] bg-[#2D4059] rounded-[20px] hover:bg-[#96bb7c] transition-colors duration-500 ease-linear text-white text-xs !leading-[133.333%] tracking-[0.2px] font-normal">
                    <span>
                      <StarSvg />
                    </span>
                    4.9
                  </button>
                </div>
                <p
                  className="text-[#252B42] text-base !leading-[150%] tracking-[0.1px] font-bold lg:max-w-[131px]"
                  data-aos="fade-up"
                >
                  Get Quality Education
                </p>
                <p
                  className="text-[#737373] text-sm !leading-[142.857%] font-normal tracking-[0.2px]"
                  data-aos="fade-up"
                >
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div
                  className="flex gap-[10px] items-center"
                  data-aos="fade-up"
                >
                  <DownloadSvg />
                  <p className="text-[#737373] !leading-[171.429%] text-sm tracking-[0.2px] font-bold">
                    15 Sales
                  </p>
                </div>
                <div className="pt-[5px] flex gap-[5px]" data-aos="fade-up">
                  <p className="text-[#BDBDBD] text-base !leading-[150%] font-bold tracking-[0.1px]">
                    $16.48
                  </p>
                  <p className="text-[#FFAB71] text-base !leading-[150%] tracking-[0.1px] font-bold">
                    $6.48
                  </p>
                </div>
                <div data-aos="fade-up">
                  <button className="flex gap-[10px] items-center py-[10px] px-[20px] rounded-[37px] border border-solid border-[#96BB7C] text-sm !leading-[171.429%] tracking-[0.2px] font-bold text-[#96BB7C] hover:shadow-[0_2px_15px_rgba(150,_187,_124,_1)] transition-all ease-linear duration-500">
                    Learn More{" "}
                    <span>
                      <LearnArrow />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="max-w-[348px]">
              <div className="relative cursor-pointer" data-aos="fade-up">
                <button className="absolute top-[20px] left-[20px] text-white hover:text-[#E74040] text-sm !leading-[171.429%] font-bold tracking-[0.2px] bg-[#E74040] hover:bg-white transition-colors ease-linear duration-500 rounded-[3px] px-[10px] shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.10)] ">
                  Sale
                </button>
                <div className="absolute bottom-[24px] left-0 right-0 flex justify-center gap-[10px]">
                  <div className="hover:hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] rounded-[50px] transition-all ease-linear duration-300 hover:scale-110">
                    <LikeSvg />
                  </div>
                  <div className="hover:hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] rounded-[50px] transition-all ease-linear duration-300 hover:scale-110">
                    <BasketSvg />
                  </div>
                  <div className="hover:hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] rounded-[50px] transition-all ease-linear duration-300 hover:scale-110">
                    <LikeIcon />
                  </div>
                </div>
                <img
                  src={ProductCover}
                  alt="ProductCover"
                  className=" w-full"
                />
              </div>
              <div className="pt-[25px] px-[25px] pb-[35px] flex flex-col items-start gap-[10px]">
                <div
                  className="w-full flex justify-between items-center"
                  data-aos="fade-up"
                >
                  <p className="text-[#96BB7C] !leading-[171.429%] text-sm tracking-[0.2px] font-bold">
                    Training Courses{" "}
                  </p>
                  <button className="flex gap-[5px] items-center p-[5px] bg-[#2D4059] rounded-[20px] hover:bg-[#96bb7c] transition-colors duration-500 ease-linear text-white text-xs !leading-[133.333%] tracking-[0.2px] font-normal">
                    <span>
                      <StarSvg />
                    </span>
                    4.9
                  </button>
                </div>
                <p
                  className="text-[#252B42] text-base !leading-[150%] tracking-[0.1px] font-bold lg:max-w-[131px]"
                  data-aos="fade-up"
                >
                  Video in Live Action
                </p>
                <p
                  className="text-[#737373] text-sm !leading-[142.857%] font-normal tracking-[0.2px]"
                  data-aos="fade-up"
                >
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div
                  className="flex gap-[10px] items-center"
                  data-aos="fade-up"
                >
                  <DownloadSvg />
                  <p className=" text-[#737373] !leading-[171.429%] text-sm tracking-[0.2px] font-bold ">
                    15 Sales
                  </p>
                </div>
                <div className="pt-[5px] flex gap-[5px]" data-aos="fade-up">
                  <p className=" text-[#BDBDBD] text-base !leading-[150%] font-bold tracking-[0.1px] ">
                    $16.48
                  </p>
                  <p className=" text-[#FFAB71] text-base !leading-[150%] tracking-[0.1px] font-bold ">
                    $6.48
                  </p>
                </div>
                <div data-aos="fade-up">
                  <button className="flex gap-[10px] items-center py-[10px] px-[20px] rounded-[37px] border border-solid border-[#96BB7C] text-sm !leading-[171.429%] tracking-[0.2px] font-bold text-[#96BB7C] hover:shadow-[0_2px_15px_rgba(150,_187,_124,_1)] transition-all ease-linear duration-500">
                    Learn More{" "}
                    <span>
                      <LearnArrow />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientMatters;
