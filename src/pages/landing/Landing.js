// styles
import "./Landing.css";
import Navbar from "../../components/Navbar";
import About from "../about/About";
import Hero from "./Hero";
import Footer from "./Footer";
import Partners from "./Partners";
import Products from "./Products";

export default function Landing() {
  return (
    // <div className="md:px-20 w-full lg:flex px-5 my-auto">
    //   <div className="flex flex-col xl:pt-12 lg:pt-10 sm:pt-36 pt-36 lg:w-[800px]">
    //     <h1 className="font-extrabold xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl xl:leading-[5rem] md:leading-[4rem]">
    //       Discover new perspectives and stay informed with{" "}
    //       <span className="text-blue-700">blogIt.</span>
    //     </h1>
    //     <p className="mt-5">
    //       Explore a wide range of topics and expand your horizons today
    //     </p>
    //   </div>
    //   <div className="pr-24 lg:pr-0 mt-5 lg:mt-0">
    //     <div className="illustration">
    //       <img src={icon} alt="landing" className="" />
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Products />
      <Partners />
      <Footer />
    </>
  );
}
