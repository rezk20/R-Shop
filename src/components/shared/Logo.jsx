import LogoImg from "../../assets/Logo.png";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center">
        <img src={LogoImg} alt="logo" className="w-10 " />
        <a
          href="/#"
          className="text-xl font-bold ml-1 bg-gradient-to-br  to-pink-600  via-cyan-500  from-orange-600 text-transparent bg-clip-text"
        >
          R-Shop
        </a>
      </div>
    </div>
  );
};

export default Logo;
