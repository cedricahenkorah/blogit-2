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
