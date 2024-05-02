import Slider from "react-slick";
import { settings, HeroSlide } from "../constants";
import Button from "../shared/Button";

function Hero() {
  return (
    <>
      <div className="container mt-20">
        <div className="w-full overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center bg-gradient-to-br from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white">
          <div className="container pb-6 sm:pb-0">
            <Slider {...settings}>
              {HeroSlide.map((data) => (
                <div key={data.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex justify-center flex-col gap-4 sm:pl-3 pt-12 sm:pt-0 sm:order-1 relative z-10">
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                      >
                        {data.subtitle}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                      >
                        {data.title}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                      >
                        {data.title2}
                      </h1>
                      <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-offset="0"
                        data-aos-delay="300"
                      >
                        <Button
                          text="Shop Now"
                          bgColor="bg-primary"
                          textColor="text-white"
                        />
                      </div>
                    </div>
                    <div className="order-1 sm:order-2">
                      <div
                        data-aos="zoom-in"
                        data-aos-once="true"
                        data-aos-delay="200"
                        className="relative z-10"
                      >
                        <img
                          src={data.img}
                          alt={data.title}
                          className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-30"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
