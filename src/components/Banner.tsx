import BannerSVG from "./svg/BannerSVG";

function Banner() {
  return (
    <>
      <section className="w-full">
        <BannerSVG width={"100%"} />
      </section>
      <div className="flex justify-start items-center flex-col gap-4 absolute text-white mt-20 sm:mt-28 md:mt-30 lg:mt-40 xl:mt-40">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
          Invitation
        </h1>
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          최중수 | 유지영
        </span>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          D-33
        </span>
      </div>
      <h1 className="text-sm sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl m-8">
        Saturday, October 26, 2024 12:30PM
      </h1>
    </>
  );
}

export default Banner;
