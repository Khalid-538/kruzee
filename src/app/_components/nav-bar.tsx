"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  servicesLinks,
  britishCites,
  ontarioCites,
  sides,
} from "../_links/links";
import { CaretUp, CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
function NavBar() {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const [toggleServices, setToggleServices] = useState(false);
  const [toggleCites, setToggleCites] = useState(false);
  const [toggleSide, setToggleSide] = useState(false);
  const [sideName, setSideName] = useState("British Columbia");
  const handleToogleCites = () => {
    if (toggleServices) {
      setToggleServices(false);
    }
    if (toggleSide) {
      setToggleSide(false);
    }
    setToggleCites(!toggleCites);
  };
  const handleToggleServices = () => {
    if (toggleCites) {
      setToggleCites(false);
    }
    if (toggleSide) {
      setToggleSide(false);
    }
    setToggleServices(!toggleServices);
  };
  const handleToggleSide = () => {
    if (toggleCites) {
      setToggleCites(false);
    }
    if (toggleServices) {
      setToggleServices(false);
    }
    setToggleSide(!toggleSide);
  };
  const handleLanguageSelect = (name: string) => {
    setSideName(name);
    setToggleSide(false);
  };
  return (
    <nav className="bg-white font-sans px-2 sm:px-3 lg:px-6 md:pt-3">
      <div className="flex items-center justify-between w-full h-[70px] ">
        <div className="flex items-center  ">
          <div className="flex-shrink-0 flex ">
            <Link href="/">
              <Image
                src={
                  "https://kruzee.com/wp-content/uploads/2023/10/Logotype_blue.svg"
                }
                height={100}
                width={100}
                alt="kurzee image"
                className="h-[80px] w-[175px]"
              ></Image>
            </Link>
          </div>
        </div>
        <div className="hidden md:block ">
          <div className=" flex  justify-between items-center md:gap-[23rem]">
            <div className="relative flex flex-col">
              <div
                className="flex gap-2 sm:w-[150px] md:w-[255px] md:h-[60px] bg-[#ffffff]  p-2 px-3 items-center border-2 border-slate-100 rounded-lg hover:cursor-pointer"
                onClick={handleToggleSide}
              >
                <Image
                  src={
                    "	https://kruzee.com/wp-content/uploads/2023/11/flag-canada.svg"
                  }
                  alt="image"
                  width={50}
                  height={50}
                  className="w-[28px] h-[28px]"
                ></Image>
                <span className="text-[#667785] text-[19px] font-semibold md:w-[155px]">
                  {sideName}
                </span>
                <span className="text-[#667785]">
                  {toggleSide ? <CaretUp size={25} /> : <CaretDown size={25} />}
                </span>
              </div>
              {toggleSide && (
                <div className="absolute top-20  flex flex-col  rounded-lg bg-white shadow-lg w-[250px]">
                  <ul>
                    {sides.map((item: any) => (
                      <li
                        key={item.name}
                        onClick={() => handleLanguageSelect(item.name)}
                        className="p-2 text-[16px] text-[#667785] font-semibold hover:bg-[#37a2d0] hover:text-white hover:cursor-pointer"
                      >
                        <div className="flex gap-2">
                          <Image
                            src={
                              "	https://kruzee.com/wp-content/uploads/2023/11/flag-canada.svg"
                            }
                            alt="image"
                            width={50}
                            height={50}
                            className="w-[25px] h-[25px]"
                          ></Image>
                          <span>{item.name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex   gap-10 items-center">
              <div className="realtive flex flex-col  items-center">
                <button
                  className="text-[#37a2d0] text-[16px] font-bold"
                  onClick={handleToggleServices}
                >
                  <div className="flex gap-1">
                    <span className="text-[20px]">Services</span>
                    <span>
                      {toggleServices ? (
                        <CaretUp size={25} />
                      ) : (
                        <CaretDown size={25} />
                      )}
                    </span>
                  </div>
                </button>
                {toggleServices && (
                  <div className="absolute top-20  flex flex-col  rounded-lg bg-white shadow-lg w-[250px]">
                    <ul>
                      {servicesLinks.map((item: any) => (
                        <li className="p-2 text-[16px] text-[#667785] font-semibold hover:bg-[#37a2d0] hover:text-white">
                          <Link href={item.linkUrl}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="realtive flex flex-col items-center">
                <button
                  className="text-[#37a2d0] text-[16px] font-bold"
                  onClick={handleToogleCites}
                >
                  <div className="flex gap-1">
                    <span className="text-[20px]">Cites</span>
                    <span>
                      {toggleCites ? (
                        <CaretUp size={25} />
                      ) : (
                        <CaretDown size={25} />
                      )}
                    </span>
                  </div>
                </button>
                {toggleCites && (
                  <div className="absolute top-20  flex flex-col gap-5 p-3 rounded-lg bg-white shadow-lg h-[400px] overflow-y-auto ">
                    <div className=" flex ">
                      <div className="flex flex-col gap-4 p-4">
                        <span className="text-[#37a2d0] font-semibold text-[16px]">
                          Ontario
                        </span>
                        <ul>
                          {ontarioCites.map((item: any) => (
                            <li className="p-2 text-[16px] text-[#667785] font-semibold hover:text-[#37a2d0]">
                              <Link href={item.urlLinks}>{item.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-4 p-4">
                        <span className="text-[#37a2d0] font-semibold text-[16px]">
                          British Colombia
                        </span>
                        <ul>
                          {britishCites.map((item: any) => (
                            <li className="p-2 text-[16px] text-[#667785] font-semibold hover:text-[#37a2d0]">
                              <Link href={item.urlLinks}>{item.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center p-3">
                      <Link href={"#"}>
                        <span className="text-[15px] font-semibold text-[#37a2d0]">
                          Location not here?
                        </span>{" "}
                        <span className="text-[20px] font-bold text-[#37a2d0]">
                          Get in touch
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href={"/"} className="text-[#37a2d0] text-[20px] font-bold">
                About
              </Link>
              <Link href={"/"} className="text-[#37a2d0] text-[20px] font-bold">
                Contact
              </Link>
              <Link
                href={"/"}
                className="text-white rounded-md text-[20px] font-bold p-3 px-7 border border-transparent bg-[#37a2d0] hover:bg-white hover:text-[#37a2d0] hover:border-[1px]  hover:border-[#37a2d0] "
              >
                Sign Up
              </Link>
              <Link href={"/"} className="text-[#37a2d0] text-[20px] font-bold">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-[#37a2d0] focus:outline-none focus:ring-2 focus:ring-inset foucs:ring-[#37a2d0]
             "
            onClick={() => setToggleNavBar(!toggleNavBar)}
          >
            {toggleNavBar ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {toggleNavBar && (
        <div
          className={`absolute top-16 right-0 z-[1] md:hidden bg-white w-[20rem] max-h-[30rem] overflow-y-auto p-2 transform ${
            toggleNavBar ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-[1s] ease-in`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:px-6 flex flex-col gap-4 ">
            <div
              className="flex gap-2 w-[210px] h-[45px] bg-[#ffffff]  p-1 items-center border-2 border-slate-100 rounded-lg hover:cursor-pointer"
              onClick={handleToggleSide}
            >
              <Image
                src={
                  "	https://kruzee.com/wp-content/uploads/2023/11/flag-canada.svg"
                }
                alt="image"
                width={50}
                height={50}
                className="w-[25px] h-[25px]"
              ></Image>
              <span className="text-[#667785] font-semibold w-[128px]">
                {sideName}
              </span>
              <span className="text-[#667785]">
                {toggleSide ? <CaretUp size={25} /> : <CaretDown size={25} />}
              </span>
            </div>
            {toggleSide && (
              <div className="  flex flex-col  rounded-lg bg-white shadow-lg w-[250px]">
                <ul>
                  {sides.map((item: any) => (
                    <li
                      key={item.name}
                      onClick={() => handleLanguageSelect(item.name)}
                      className="p-2 text-[16px] text-[#667785] font-semibold hover:bg-[#37a2d0] hover:text-white hover:cursor-pointer"
                    >
                      <div className="flex gap-2">
                        <Image
                          src={
                            "	https://kruzee.com/wp-content/uploads/2023/11/flag-canada.svg"
                          }
                          alt="image"
                          width={50}
                          height={50}
                          className="w-[25px] h-[25px]"
                        ></Image>
                        <span>{item.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col  items-center">
              <button
                className="text-[#37a2d0] text-[16px] font-bold"
                onClick={handleToggleServices}
              >
                <div className="flex gap-1">
                  <span className="text-[20px]">Services</span>
                  <span>
                    {toggleServices ? (
                      <CaretUp size={25} />
                    ) : (
                      <CaretDown size={25} />
                    )}
                  </span>
                </div>
              </button>
              {toggleServices && (
                <div className="flex flex-col  rounded-lg bg-white  w-[250px]">
                  <ul>
                    {servicesLinks.map((item: any) => (
                      <li className="p-2 text-[16px] text-[#667785] font-semibold hover:bg-[#37a2d0] hover:text-white">
                        <Link href={item.linkUrl}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className=" flex flex-col items-center">
              <button
                className="text-[#37a2d0] text-[16px] font-bold"
                onClick={handleToogleCites}
              >
                <div className="flex gap-1">
                  <span className="text-[20px]">Cites</span>
                  <span>
                    {toggleCites ? (
                      <CaretUp size={25} />
                    ) : (
                      <CaretDown size={25} />
                    )}
                  </span>
                </div>
              </button>
              {toggleCites && (
                <div className="  flex flex-col gap-5 p-3 rounded-lg bg-white  ">
                  <div className=" flex ">
                    <div className="flex flex-col gap-4 p-4">
                      <span className="text-[#37a2d0] font-semibold text-[16px]">
                        Ontario
                      </span>
                      <ul>
                        {ontarioCites.map((item: any) => (
                          <li className="p-2 text-[16px] text-[#667785] font-semibold hover:text-[#37a2d0]">
                            <Link href={item.urlLinks}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <span className="text-[#37a2d0] font-semibold text-[16px]">
                        British Colombia
                      </span>
                      <ul>
                        {britishCites.map((item: any) => (
                          <li className="p-2 text-[16px] text-[#667785] font-semibold hover:text-[#37a2d0]">
                            <Link href={item.urlLinks}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center p-3">
                    <Link href={"#"}>
                      <span className="text-[15px] font-semibold text-[#37a2d0]">
                        Location not here?
                      </span>{" "}
                      <span className="text-[20px] font-bold text-[#37a2d0]">
                        Get in touch
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center mr-4 gap-5">
              <Link href={"/"} className="text-[#37a2d0] text-[20px] font-bold">
                About
              </Link>
              <Link
                href={"/"}
                className="text-[#37a2d0] text-[20px] font-bold "
              >
                Contact
              </Link>
              <Link
                href={"/"}
                className="text-white rounded-md text-[20px] font-bold p-3 border border-transparent bg-[#37a2d0] hover:bg-white hover:text-[#37a2d0] hover:border-[1px]  hover:border-[#37a2d0] "
              >
                Sign Up
              </Link>
              <Link
                href={"/"}
                className="text-[#37a2d0] text-[20px] font-bold "
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

{
  /* <div className="flex gap-1">
                    <span>Services</span>
                    <span>
                      {toggleServices ? (
                        <CaretUp size={25} />
                      ) : (
                        <CaretDown size={25} />
                      )}
                    </span>
                  </div>
                  
                  
                  <select
                  className="text-[#37a2d0] text-[16px] font-bold w-[20px] "
                  onClick={handleToggleLanguage}
                >
                  <option value="British Columbia" className="w-[30px]">
                    <Image
                      src={
                        "	https://kruzee.com/wp-content/uploads/2023/11/flag-canada.svg"
                      }
                      alt="image"
                      width={50}
                      height={50}
                    ></Image>
                    <span>British Columbia</span>
                  </option>
                </select>
                  
                  */
}
