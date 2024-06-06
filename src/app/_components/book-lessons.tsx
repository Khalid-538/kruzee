import React from "react";

function BookLessons() {
  return (
    <div className="container mt-8">
      <div className="flex flex-col">
        <h1 className="font-bricolage text-[3rem] md:text-[4rem] font-extrabold text-center leading-[5rem]">
          Book lessons <br />
          in three{" "}
          <span className="before:block  before:absolute before:-inset-1 before:-skew-y-3 before:h-[75%] before:top-[10%] before:left-[2px] before:bg-[#eceff4] relative inline-block">
            <span className="relative text-[#477e42] ml-[6px] ">
              easy steps
            </span>
          </span>
        </h1>
        <p className="text-[#323232] text-[20px] text-center font-sans">
          See why thousands of students are choosing us for their driver’s
          education.
        </p>
        <div className="md:mx-10 px-5 py-4 md:py-8 md:px-20  grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[8rem]">
          <div className="flex gap-10 md:pt-10">
            <div className="flex flex-col">
              <span className="text-[#37A2D0] text-base">STEP</span>
              <span className="before:block  before:absolute before:-inset-1 before:-skew-y-3 before:h-[75%] before:top-[10%] before:left-[2px] before:bg-[#eceff4] relative inline-block">
                <span className="relative text-[#37A2D0] text-[48px] ml-[6px] ">
                  1
                </span>
              </span>
            </div>
            <div>
              <h3 className="text-[#37A2D0] text-3xl mb-4">Book Online</h3>
              <p className="text-[#323232] text-base">
                No more back-and-forth texting to book driving lessons. Instead,
                enter your postal code, choose a pickup location, and checkout
                in 30 seconds. It’s that easy.
              </p>
            </div>
          </div>
          <div className="relative rounded-lg shadow-[_15px_15px_#b5ddef] border border-black">
            <video
              className="object-contain rounded-lg"
              width={600}
              height={400}
              autoPlay
              muted
              loop
            >
              {" "}
              <source
                src="https://kruzee.com/wp-content/uploads/2024/02/Kruzee-Video-1-004-Revised-compressed.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookLessons;
