"use client";
import { Open_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import Dnav from "./Dashboard/Dnav";
import Aside from "./Dashboard/Aside";
import Context from "../context/authContext";
import Navbar from "./Layouts/Navbar";

const sans = Open_Sans({
  subsets: ["latin"],
});

export default function Format({ children }) {
  var pathname = usePathname();
  var privateRoutes = pathname.startsWith("/dashboard");

  var isCareer = pathname.startsWith("/career");

  return (
    <Context>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.css"
            integrity="sha512-tx5+1LWHez1QiaXlAyDwzdBTfDjX07GMapQoFTS74wkcPMsI3So0KYmFe6EHZjI8+eSG0ljBlAQc3PQ5BTaZtQ=="
          />
        </head>
        <body suppressHydrationWarning={true}>
          {/* <Context> */}
          {privateRoutes ? (
            <>
              <div className="grid grid-cols-12">
                <div className=" col-span-2">
                  <Aside />
                </div>
                <div className=" col-span-10">
                  <Dnav />
                  <div className="my-3 px-8">{children}</div>
                </div>
              </div>
            </>
          ) : (
            <>
              {!isCareer && <Navbar />}
              <div className={sans.className}>{children}</div>
            </>
          )}
          {/* </Context> */}
        </body>
      </html>
    </Context>
  );
}
