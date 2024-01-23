import React from "react";
import VideoCard from "../assets/images/png/VideoCard.png";
import { PlaySvg } from "./IconImg";
import CrossBtn from "../assets/images/png/CrossBtn.png";

const PopularCourses = () => {
  const [showmodal, setshowmodal] = React.useState(false);
  if (showmodal === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="xl:py-[160px] sm:pt-0 pt-[20px] pb-[50px]">
        <div className="container mx-auto xl:max-w-[1074px] lg:px-4 px-6">
          <div className="lg:pb-[80px] pb-[35px] flex flex-col justify-center items-center">
            {" "}
            <p
              className="text-center text-[#96BB7C] text-sm !leading-[171.429%] font-bold tracking-[0.2px] pb-[10px]"
              data-aos="zoom-in"
            >
              Practice Advice
            </p>
            <h2
              className="text-[#252B42] text-2xl !leading-[133.333%] font-bold tracking-[0.1px] pb-[10px] text-center"
              data-aos="zoom-in"
            >
              Our Popular Courses
            </h2>
            <p
              className="text-center text-[#737373] text-sm !leading-[142.857%] tracking-[0.2px] font-normal lg:max-w-[469px]"
              data-aos="zoom-in"
            >
              <span className=" lg:block">
                Problems trying to resolve the conflict between{" "}
              </span>
              the two major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="flex justify-center items-center" data-aos="zoom-in">
            <div className="max-w-[688px]">
              <div className="relative">
                <img
                  src={VideoCard}
                  alt="VideoCard"
                  className="lg:h-[363px] rounded-[20px] w-full"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                  <div
                    onClick={() => setshowmodal(true)}
                    className="play-btn flex justify-center cursor-pointer items-center relative"
                  >
                    <PlaySvg />
                  </div>
                </div>
                {showmodal ? (
                  <>
                    <div className="fixed bg-[#ffffffd9] backdrop-blur-sm top-0 left-0 h-full w-full overflow-hidden flex items-center justify-center z-20">
                      <div className="bg-[#96BB7C] rounded-[10px] relative p-2">
                        <div
                          onClick={() => setshowmodal(false)}
                          className=" max-w-[40px] absolute top-[-2%] right-[-1%] bg-[#96BB7C] rounded-[50px] p-2"
                        >
                          <img
                            src={CrossBtn}
                            alt="CrossBtn"
                            className=" w-full"
                          />
                        </div>
                        <iframe
                          className=" rounded-lg sm:w-[550px] lg:w-[970px] transition-all duration-300 ease-linear w-[350px] sm:h-[380px] lg:h-[580px] h-[330px]"
                          src="https://www.youtube.com/embed/9vxLyJdvM1w?si=-umiukp_wFtOeFjJ"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCourses;
