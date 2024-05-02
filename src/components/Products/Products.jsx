import { productList as data } from "../constants";

const Products = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h2 className="text-5xl font-bold text-black dark:text-white self-center">
          Products
        </h2>
      </div>
      <div className="mt-10 container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="p-2 rounded-md bg-black/20 dark:bg-white/10 backdrop-blur-2xl relative overflow-hidden hover:scale-105 duration-300 "
            >
              <div className="w-20 h-20 bg-black dark:bg-white -z-10 absolute top-0 blur-2xl"></div>
              <div className="w-10 h-10 bg-black dark:bg-white -z-10 absolute bottom-0 right-0 blur-2xl"></div>
              <img src={data.img} alt="" className="rounded-t-md " />
              <div className="my-2">
                <h5 className="font-semibold text-lg dark:text-white">
                  {data.title}
                </h5>
                <div className="flex justify-between ">
                  <span className="text-sm text-black/80 dark:text-gray-300 ">
                    Price : {data.price}
                  </span>
                  <button className="p-2 bg-neutral-400 dark:bg-neutral-400 rounded-full text-sm font-semibold hover:scale-110 duration-200 border ">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
