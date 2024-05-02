import { brandImg } from "../constants";

const Partners = () => {
  return (
    <div className="py-8 mt-24  bg-gray-200 dark:bg-white/10">
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
          {brandImg.map(({ image, id }) => (
            <div data-aos="zoom-out" key={id}>
              <img src={image} alt="" className="w-[80px] dark:invert" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
