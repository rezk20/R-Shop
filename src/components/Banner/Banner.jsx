import { BannerData } from "../constants";
import Button from "../shared/Button";
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 ">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-[#f42c37] ">
          {/* firs col  */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm">
              {BannerData.discount}
            </p>
            <h2
              data-aos="zoom-out"
              className="uppercase text-6xl lg:text-7xl font-bold  "
            >
              {BannerData.title}
            </h2>{" "}
            <p data-aos="fade-up" className="text-sm">
              {BannerData.date}
            </p>
          </div>
          {/* second col  */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={BannerData.image}
              alt=""
              className="scale-125 w-[250px] lg:w-[300px] mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] object-contain"
            />
          </div>
          {/* third col  */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-out" className="font-bold text-xl">
              {BannerData.title2}
            </p>
            <p
              data-aos="fade-up"
              className="text-3xl sm:text-5xl font-bold text-black/80"
            >
              {BannerData.title3}
            </p>
            <p data-aos="fade-up" className="text-sm tracking-wide leading-5 ">
              {BannerData.title4}
            </p>
            <div data-aos="fade-up" data-aos-offset="0" className=" max-w-1/2">
              <Button text={"Shop Now"} bgColor="bg-neutral-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
