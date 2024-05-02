import { DropDownLinks, MenuLinks } from "../constants";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import Logo from "../shared/Logo";

const Footer = () => {
  return (
    <div className="dark:bg-black bg-gray-400/60">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 pb-8 pt-5 gap-y-4">
          {/* col 1 */}
          <div className="py-5 px-4 space-y-4 flex flex-col justify-between items-center">
            <Logo />
            <div>
              <p className="dark:text-white text-lg tracking-wider">
                Made With 💖 By
                <p>
                  <span className="text-pink-500">{"<"}</span>{" "}
                  <span className="bg-gradient-to-br from-blue-600 to-pink-500 to-%50 text-transparent bg-clip-text">
                    Rezk Gamal
                  </span>{" "}
                  <span className="text-cyan-400">{"/>"}</span>
                </p>
              </p>
            </div>
          </div>

          {/* col 2 */}
          <div className="dark:text-white flex flex-col items-center">
            <h3 className="text-lg font-semibold my-3 ">Important Links</h3>

            <ul className="dark:text-neutral-400 space-y-3 ">
              {MenuLinks.map(({ name, id, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="dark:hover:text-white hover:text-neutral-500 duration-200"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* col 3 */}
          <div className="dark:text-white flex flex-col items-center">
            <h3 className="text-lg font-semibold my-3 ">Quick Links</h3>

            <ul className="dark:text-neutral-400 space-y-3  ">
              {DropDownLinks.map(({ name, id, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="dark:hover:text-white hover:text-neutral-500 duration-200"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* col 4 */}
          <div className="dark:text-white flex flex-col justify-between pb-4 items-center">
            <div>
              <h3 className="text-lg font-semibold my-3 ">Location</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <p>
                    <FaLocationDot />
                  </p>
                  <h4>Egypt, Mansoura</h4>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    <FaPhone />
                  </p>
                  <h4>+201011111111</h4>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold my-3 ">Social Media</h3>
              <div className="flex gap-4">
                <a
                  href=""
                  className="text-lg duration-200 hover:text-blue-900 "
                >
                  <FaFacebook />
                </a>
                <a href="" className="text-lg duration-200 hover:text-rose-800">
                  <FaInstagram />
                </a>
                <a href="" className="text-lg duration-200 hover:text-cyan-700">
                  <FaTwitter />
                </a>
                <a
                  href=""
                  className="text-lg duration-200 hover:text-green-600"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
