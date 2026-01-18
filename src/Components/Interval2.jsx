import React from "react";

const Interval2 = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-20 py-8 sm:py-12 gap-6 md:gap-10">
      
      <div className="md:flex-[2] w-full">
        <video
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-auto rounded-3xl object-cover"
          src="assets/images/Interval3.mp4"
        />
      </div>

      <div className="md:flex-[1] flex flex-col gap-6 sm:gap-10 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          Actus Naruto Ergonomic Chair
        </h1>

        <div className="bg-[#FAFAFA] rounded-3xl overflow-hidden">
          <img
            className="w-full object-cover rounded-t-3xl"
            src="assets/images/Interval4.png"
            alt="Chair"
          />

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 py-4 px-4 sm:px-8 items-start sm:items-center justify-between">
            <h1 className="text-sm sm:text-base md:text-lg font-medium leading-snug">
              Installation Support:
              <span className="block sm:inline">
                {" "}Without Installation Support
              </span>
            </h1>

            <h1 className="text-base sm:text-lg md:text-xl font-semibold">
              $1099
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interval2;
