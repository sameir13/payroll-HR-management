"use client";
import React, { useState } from "react";
import { tabs } from "../constant";
import { jobs } from "../constant";

const Jobs = () => {
  const [currentId, setCurrentId] = useState(0);

  return (
    <div>
      <section>
        <div className="px-5 max-w-[1250px] m-auto flex flex-wrap items-center gap-2 mb-32">
          {tabs.map((v, i) => (
            <div key={i} className="flex-grow">
              <span
                onClick={() => setCurrentId(v.id)}
                className={`border-2 border-[#0F1626] transition-all duration-200 text-sm flex items-center justify-center cursor-pointer w-full font-medium rounded-3xl px-3  py-2 ${
                  currentId === v.id
                    ? "text-white bg-[#0F1626]"
                    : "text-black bg-white"
                }`}
              >
                {v.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1250px] m-auto px-5 ">
        {jobs.map((v, i) => (
          <div className=" flex  py-8 justify-between border-t" key={i}>
            <div className="">
              <h3 className=" t-clr text-3xl font-semibold mb-3 hover:underline cursor-pointer w-fit">
                {v.title}
              </h3>
              <p className=" text-lg t-clr font-medium mb-3">{v.desc}</p>
              <div className=" flex items-center gap-3 flex-wrap">
                {v.tabs.map((value, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-sm t-clr font-medium border-2 border-[#0F1626] rounded-3xl px-3 py-1 "
                  >
                    {value.label === "United States" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className={`lucide lucide-map-pin`}
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-clock"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    )}

                    {value.label}
                  </span>
                ))}
              </div>
            </div>

            <div className=" hidden md:block">
              <span className=" text-2xl flex items-center gap-1 t-clr font-semibold cursor-pointer">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Jobs;
