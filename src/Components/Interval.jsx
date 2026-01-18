import React from "react";

const Interval = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 py-6 sm:py-8 gap-6 md:gap-20">
      
      <div className="md:flex-[2] w-full">
        <img
          className="rounded-3xl w-full object-cover"
          src="assets/images/Interval1.png"
          alt="Shop setup"
        />
      </div>

      <div className="md:flex-[1] flex flex-col gap-6 sm:gap-10 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Shop the Setup
        </h1>

        <div className="bg-[#FAFAFA] rounded-3xl overflow-hidden">
          <img
            className="w-full object-cover rounded-t-3xl"
            src="assets/images/Interval2.png"
            alt="Product"
          />

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 py-4 px-4 sm:px-8 items-start sm:items-center justify-between">
            <h1 className="text-base sm:text-lg md:text-xl font-medium leading-snug">
              Hive65 Black Purple Mechanical Gaming Keyboard
            </h1>
            <h1 className="text-base sm:text-lg md:text-xl font-semibold">
              $399
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interval;
