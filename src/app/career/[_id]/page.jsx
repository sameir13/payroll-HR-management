"use client";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      {/* job detail section-------------------------------------- */}
      <section className=" py-16  md:py-20 flex flex-col items-center bg-[#F6F9FD]  justify-center px-4">
        <div className="mb-12">
          <span className=" text-lg  t-clr">Boulevard Holdings</span>
          <span className="text-lg border-l px-3 ml-3 border-l-black t-clr">
            Full Time
          </span>
        </div>

        <h1 className=" text-center text-5xl t-clr mb-12">Software Engineer</h1>

        <div>
          <Link
            className=" bg-[#0F1626] block text-white px-12 py-3 rounded-3xl"
            href={"/"}
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* description grid */}

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 padMax">
        <div className=" col-span-1 md:col-span-2">
          <h2 className=" text-4xl t-clr underline mb-8">Job Description:</h2>
          <p className=" t-clr text-lg">
            Design and develop high-volume, low-latency applications for
            mission-critical systems, ensuring top-tier availability and
            performance. Contribute to all phases of the product development
            lifecycle. Write well-designed, testable, and efficient code. Ensure
            designs comply with specifications. Prepare and produce releases of
            software components. Support continuous improvement by investigating
            alternate technologies and presenting these for architectural
            review. Please note that we have requirements for this role in
            Chennai, Salem, Coimbatore, Tirunelveli, and Madurai.
          </p>
        </div>

        <div className=" col-span-1">
          <div className=" mb-14 globalShadow bg-[#F6F9FD] flex items-center justify-center flex-col px-4 py-10 rounded-3xl">
            <Link
              className=" bg-[#0F1626]  text-center w-full mb-7  block text-white px-12 py-3 rounded-3xl"
              href={"/"}
            >
              View More
            </Link>

            <div className=" flex items-center justify-center gap-5">
              <div className=" border border-slate-400 w-9 h-9 flex items-center justify-center rounded-full">
                <Link href={"/"}>
                  <i class="fa-brands text-xl text-[#0F1626] fa-facebook-f"></i>
                </Link>
              </div>

              <div className=" border border-slate-400 w-9 h-9 flex items-center justify-center rounded-full">
                <Link href={"/"}>
                  <i class="fa-brands text-xl text-[#0F1626]  fa-linkedin-in"></i>
                </Link>
              </div>

              <div className=" border border-slate-400 w-9 h-9 flex items-center justify-center rounded-full">
                <Link href={"/"}>
                  <i class="fa-brands text-xl text-[#0F1626]  fa-x-twitter"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="px-4 ">
            <div className="border-b border-b-slate-300 py-4">
              <span className=" text-slate-600 mb-2">Location</span>
              <p className=" t-clr text-lg font-medium">
                Pasig, PH, Metro Manila
              </p>
            </div>

            <div className="border-b border-b-slate-300 py-4">
              <span className=" text-slate-600 mb-2">Department</span>
              <p className=" t-clr text-lg font-medium">Corp G&A (CC01)</p>
            </div>

            <div className="border-b border-b-slate-300 py-4">
              <span className=" text-slate-600 mb-2">Employment Type</span>
              <p className=" t-clr text-lg font-medium">Full-Time</p>
            </div>

            <div className="border-b border-b-slate-300 py-4">
              <span className=" text-slate-600 mb-2">Minimum Experience</span>
              <p className=" t-clr text-lg font-medium">Experienced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
