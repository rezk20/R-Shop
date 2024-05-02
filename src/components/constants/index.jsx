import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import smartWatch from "../../assets/category/smartwatch2-removebg-preview.png";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-7.jpg";
import Img7 from "../../assets/product/p-9.jpg";

import BlogImg1 from "../../assets/blogs/blog-1.jpg";
import BlogImg2 from "../../assets/blogs/blog-2.jpg";
import BlogImg3 from "../../assets/blogs/blog-3.jpg";

import brandImg1 from "../../assets/brand/br-1.png";
import brandImg2 from "../../assets/brand/br-2.png";
import brandImg3 from "../../assets/brand/br-3.png";
import brandImg4 from "../../assets/brand/br-4.png";
import brandImg5 from "../../assets/brand/br-5.png";

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

export const DropDownLinks = [
  {
    id: 1,
    name: "Trending",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

export const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const HeroSlide = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beates Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beates Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beates Solo",
    title: "Branded",
    title2: "Laptops",
  },
];

export const serviceList = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl text-gray-400" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl text-gray-400" />,
    title: "Safe Money",
    description: "30 Day Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl text-gray-400" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl  text-gray-400" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
  },
];

export const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan To 28 Jan",
  image: Image1,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, tempore?",
  bgColor: "#f42c37",
};
export const BannerData2 = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan To 28 Jan",
  image: smartWatch,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, tempore?",
  bgColor: "",
};

export const productList = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "$120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "$420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "$340",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "$270",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Boat Headphone",
    price: "$120",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Boat Headphone",
    price: "$120",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "Boat Headphone",
    price: "$120",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img3,
    title: "Goggles",
    price: "$340",
    aosDelay: "600",
  },
];

export const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam corrupti in!",
    Published: "Jan 9, 2024 By  Rezk",
    image: BlogImg1,
    aosDelay: "0",
    aosData: "slide-right",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam corrupti in!",
    Published: "Jan 11, 2024 By  Gamal",
    image: BlogImg2,
    aosDelay: "200",
    aosData: "slide-up",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam corrupti in!",
    Published: "Jan 12, 2024 By  Rezk",
    image: BlogImg3,
    aosDelay: "400",
    aosData: "slide-left",
  },
];

export const brandImg = [
  {
    id: 1,
    image: brandImg1,
  },
  {
    id: 2,
    image: brandImg2,
  },
  {
    id: 3,
    image: brandImg3,
  },
  {
    id: 4,
    image: brandImg4,
  },
  {
    id: 5,
    image: brandImg5,
  },
];
