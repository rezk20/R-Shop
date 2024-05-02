import { BlogData } from "./../constants/index";
const Blogs = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-center">
          <h2 className="text-5xl font-bold dark:text-white mb-10">
            Recent News
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-7 gap-y-8 ">
          {BlogData.map((blog, index) => (
            <div data-aos="fade-up" data-aos-delay={blog.aosDelay} key={index}>
              <div>
                <img
                  src={blog.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              <div className="space-y-2 mt-3">
                <h5 className="text-xs text-neutral-500">{blog.Published}</h5>
                <hr className=" border-neutral-500" />
                <p className="font-bold dark:text-white">{blog.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600">
                  {blog.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
