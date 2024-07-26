import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#0F1626] flex items-start px-2 py-2">
        <span className=" flex items-center gap-1">
          {[1, 1, 1].map((v, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide text-white lucide-circle"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          ))}
        </span>
      </div>
      <nav className=" flex px-5 items-center justify-between py-3">
        <div>
          <img src="./assets/main.webp" className=" w-48" alt="" />
        </div>

        <div>
          <Link
            href={"/"}
            className=" px-5 py-2 text-md bg-[#0F1626] text-white rounded-3xl"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
