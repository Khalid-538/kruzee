import React from "react";
import Image from "next/image";
import { drivingLessonsList } from "../_links/links";
import Link from "next/link";
function DrivingLessons() {
  return (
    <div className="container mt-10">
      <div className=" pt-5 md:pt-10 pl-2 md:pl-4 pb:5 md:pb-10 md:pr-4 pr-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[8rem] ">
        <div className="grid-cols-1">
          <h1 className=" font-bricolage text-[5rem] md:text-8xl  text-[#323232] font-extrabold leading-[6rem]">
            Driving School <br />
            Made
            <span className="before:block  before:absolute before:-inset-1 before:-skew-y-3 before:h-[75%] before:top-[10%] before:left-[2px] before:bg-[#eceff4] relative inline-block">
              <span className="relative text-[#37a2d0] ml-[6px] ">Easy</span>
            </span>
          </h1>
          <ul className="mt-10">
            <li>
              <div className="flex gap-2">
                <Image
                  src={
                    "https://kruzee.com/wp-content/themes/kruzee/assets/images/icons/icon-circle-check.png"
                  }
                  width={25}
                  height={25}
                  alt="image"
                  className="h-7 w-7"
                ></Image>{" "}
                <span className="text-[20px] font-sans">
                  <strong>100% online, hassle-free scheduling</strong>
                </span>
              </div>
            </li>
            <li>
              <div className="flex gap-2 mt-3">
                <Image
                  src={
                    "https://kruzee.com/wp-content/themes/kruzee/assets/images/icons/icon-circle-check.png"
                  }
                  width={25}
                  height={25}
                  alt="image"
                  className="h-7 w-7"
                ></Image>{" "}
                <span className="text-[20px] font-sans ">
                  <strong>Top-rated</strong> instructors that care about your
                  success
                </span>
              </div>
            </li>
            <li>
              <div className="flex gap-2 mt-3">
                <Image
                  src={
                    "https://kruzee.com/wp-content/themes/kruzee/assets/images/icons/icon-circle-check.png"
                  }
                  width={25}
                  height={25}
                  alt="image"
                  className="h-7 w-7"
                ></Image>{" "}
                <span className="text-[20px] font-sans">
                  <strong>Free home pickup</strong> and drop-off for your
                  lessons
                </span>
              </div>
            </li>
          </ul>
          <div className=" mt-6 md:mt-10 w-[360px] h-[55px] md:w-[430px] md:h-[75px] bg-[#37a2d0] rounded-md flex items-center justify-center text-white font-sans border border-transparent hover:bg-white hover:border-spacing-[1px] hover:border-[#37a2d0] hover:text-[#37a2d0] text-[18px] font-semibold">
            <Link href="#" className="w-full  text-center items-center">
              Book Online
            </Link>
          </div>
          <div className=" mt-5 md:mt-10 flex gap-2 md:gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-driving-school bg-contain bg-no-repeat bg-center w-[150px] h-[90px] md:w-[200px] md:h-[120px]">
                <div className="flex flex-col items-center font-sans">
                  <span className="text-[18px] md:text-[25px] font-extrabold">
                    #1
                  </span>
                  <span className="text-[9px] md:text-[13px] ">
                    Driving School
                  </span>
                  <span className="text-[9px] md:text-[12px]">
                    in <strong>Vancouver</strong>
                  </span>
                </div>
              </div>
              <Image
                src="https://kruzee.com/wp-content/uploads/2024/01/TBV_Symbol_Tag_Black-copy-1.jpg"
                width={150}
                height={100}
                alt="image"
              ></Image>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-driving-school bg-contain bg-no-repeat bg-center w-[150px] h-[90px] md:w-[200px] md:h-[120px]">
                <div className="flex flex-col items-center font-sans">
                  <span className="text-[18px] md:text-[25px] font-extrabold">
                    Top
                  </span>
                  <span className="text-[9px] md:text-[13px] ">
                    Driving School
                  </span>
                  <span className="text-[9px] md:text-[12px]">
                    in <strong>Canada</strong>
                  </span>
                </div>
              </div>
              <Image
                src="https://kruzee.com/wp-content/uploads/2023/12/coursecompare.png"
                width={150}
                height={100}
                alt="image"
              ></Image>
            </div>
            <div className=" hidden md:flex flex-col items-center">
              <div className="bg-driving-school bg-contain bg-no-repeat bg-center w-[150px] h-[90px] md:w-[200px] md:h-[120px]">
                <div className="flex flex-col items-center font-sans">
                  <span className="text-[18px] md:text-[25px] font-extrabold">
                    Best
                  </span>
                  <span className="text-[9px] md:text-[13px] ">
                    Driving School
                  </span>
                  <span className="text-[9px] md:text-[12px]">
                    in <strong>Vancouver</strong>
                  </span>
                </div>
              </div>
              <Image
                src="https://kruzee.com/wp-content/uploads/2024/01/CleverCanadian.png"
                width={35}
                height={35}
                alt="image"
              ></Image>
            </div>
          </div>
        </div>
        <div className=" grid-cols2 items-end">
          <div className="relative rounded-lg shadow-[_15px_15px_#b5ddef] border border-black">
            <Image
              src="https://kruzee.com/wp-content/uploads/2024/02/banner-home-image-min-min-500x383.webp"
              width={700}
              height={700}
              alt="image"
              className="rounded-lg "
            />
            <Image
              className="absolute bottom-[0%] left-[-14%] top-[80%] w-[150px] h-[150px] sm:h-[200px] sm:w-[200px]"
              src={
                "	https://kruzee.com/wp-content/uploads/2024/05/vancouver-new.png"
              }
              width={200}
              height={200}
              alt="kruzee stamp image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrivingLessons;
