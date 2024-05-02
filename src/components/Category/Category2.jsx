/* eslint-disable no-unused-vars */
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/speaker.png";
import Image3 from "../../assets/category/vr.png";
import Button from "../shared/Button";

function Category2() {
  return (
    <div className="pb-6">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-8">
          {/* firs col  */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl opacity-30 font-bold mb-3 ">
                  Playstation
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-neutral-800"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={Image1}
              alt="Earphone"
              className="w-[270px] lg:w-[300px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* second col  */}
          <div className="col-span-1 py-10 pl-5 bg-gradient-to-br from-cyan-600 to-cyan-300/90  text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl opacity-20 font-bold mb-3 ">
                  Speaker
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-neutral-800"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="Earphone"
              className="w-[150px] lg:w-[200px] absolute right-0 top-1/2 -translate-y-1/2 "
            />
          </div>
          {/* third col  */}
          <div className="col-span-1 py-10 pl-5 bg-gradient-to-br from-fuchsia-950 to-fuchsia-700/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px] ">With</p>
                <p className="text-4xl xl:text-5xl opacity-30 font-bold mb-3 ">
                  Virtual
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-brandBlue"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="Earphone"
              className="w-[150px] lg:w-[200px]  absolute  right-0 self-center  lg:right-0 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category2;
