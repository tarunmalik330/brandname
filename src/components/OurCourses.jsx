import React from "react";
import Courses from "../assets/images/png/CoursesImg.png";
import { LearnArrow } from "./IconImg";

const OurCourses = () => {
  return (
    <>
      <div className="xl:py-[160px] pt-0 pb-[50px] sm:pb-[90px]">
        <div className="container mx-auto xl:max-w-[1074px] lg:px-4 px-6">
          <div className="flex items-center justify-center flex-row flex-wrap">
            <div className="lg:w-7/12">
              <img
                src={Courses}
                alt="Courses"
                className=" w-full !max-w-[544px]"
                data-aos="zoom-in-right"
              />
            </div>
            <div className="lg:w-5/12 pt-9 lg:pt-0 flex justify-end">
              <div className="lg:max-w-[345px]">
                <div
                  className="bg-[#E74040] h-[7px] max-w-[94px]"
                  data-aos="zoom-in"
                ></div>
                <h2
                  className="text-[#252B42] sm:text-[40px] text-[29px] font-bold leading-[125%] tracking-[0.2px] lg:py-[35px] pt-[25px] pb-[15px]"
                  data-aos="zoom-in"
                >
                  Our Popular Courses
                </h2>
                <p
                  className="text-[#737373] text-sm !leading-[142.857%] font-bold tracking-[0.2px] lg:max-w-[345px] lg:pb-[35px] pb-[15px]"
                  data-aos="zoom-in"
                >
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics: Newtonian mechanics{" "}
                </p>
                <div data-aos="zoom-in">
                  <button className=" text-[#96BB7C] flex items-center gap-[10px] cursor-pointer text-sm !leading-[ 171.429%] tracking-[0.2px] font-bold  ">
                    Learn More{" "}
                    <span>
                      {" "}
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

export default OurCourses;
