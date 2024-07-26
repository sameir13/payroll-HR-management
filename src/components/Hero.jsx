import React from "react";

const Hero = () => {
  return (
    <section>
      <div className=" padMax">
        <span className=" border-2 border-[#0F1626] block w-fit  font-medium  rounded-3xl px-4 mb-8 py-2 text-lg t-clr ">
          We are hiring!
        </span>
        <div>
          <h1 className="t-clr  text-5xl mb-8 font-medium  md:text-[70px]  ">
            Be part of our mission
          </h1>
          <p className=" max-w-full font-medium md:max-w-2xl text-lg t-clr ">
            Join Boulevard Holdings and help shape the future with your talent
            and passion! Be part of a dynamic team dedicated to innovation,
            excellence, and making a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
