import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import Banner2 from "./components/Banner/Banner2";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner />
      <Products />
      <Banner2 />
      <Blogs />
      <Partners />
      <Footer />
    </>
  );
};

export default App;
