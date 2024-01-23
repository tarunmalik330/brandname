import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="xl:py-[160px] sm:py-[100px] py-[60px] bg-[#2D4059]">
        <div className="container mx-auto xl:max-w-[1074px] lg:px-4 px-6 pb-[20px]">
          <p className="text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-center text-[#96BB7C]">
            Newsletter
          </p>
          <h2 className="text-[24px] font-bold leading-[133.333%] tracking-[0.1px] text-center text-white my-[10px]">
            Video in Live Action
          </h2>
          <div className="flex justify-center items-center">
            <p className="text-[14px] font-normal leading-[142.857%] tracking-[0.2px] text-center max-w-[469px] text-white">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="mt-[80px] max-w-[688px] w-full flex ">
              <input
                type="email"
                required
                className="py-[15px] px-[20px] text-[14px] outline-none rounded-tl-[5px] rounded-bl-[5px] text-[#737373] bg-white w-full border-l border-t border-b border-solid border-[#e6e6e6]"
                placeholder="Your Email"
              />
              <button
                type="submit"
                className="text-[14px] font-normal leading-[200%] tracking-[0.2px]  bg-[#96BB7C]  text-white py-[15px] px-[22.5px] rounded-tr-[5px] rounded-br-[5px] border  border-solid border-[#E6E6E6]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
