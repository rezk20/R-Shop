import { serviceList } from "../constants";
function Services() {
  return (
    <div>
      <div className="container flex items-center justify-center mt-16 ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 ">
          {serviceList.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-start  gap-1 dark:text-white"
            >
              <div className="flex gap-4 items-center">
                <div className="dark:bg-neutral-900/60 rounded-full p-[10px]">
                  {data.icon}
                </div>
                <h2 className="font-bold bg-gradient-to-br from-cyan-800/90 to-cyan-500 text-transparent bg-clip-text">
                  {data.title}
                </h2>
              </div>

              <div>
                <h3 className="text-neutral-500">{data.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
