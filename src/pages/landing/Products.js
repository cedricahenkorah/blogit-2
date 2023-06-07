import A from "../../assets/A.png";
import B from "../../assets/B.png";
import C from "../../assets/C.png";
import Fade from "react-reveal/Fade";

export default function Products() {
  return (
    <>
      <div className="bg-indigo-900 px-10 lg:px-40 text-neutral-100 w-full lg:text-justify">
        <div className=" py-20 md:flex items-center justify-center lg:gap-x-20">
          <Fade left cascade>
            <div className="flex-1 text-xl lg:text-3xl text-amber-400 font-semibold">
              Explore a wide range of topics and expand your horizons today.
            </div>
          </Fade>
          <Fade right cascade>
            <div className="flex-1 mt-5 lg:mt-0">
              <img src={A} alt="hero" className="" />
            </div>
          </Fade>
        </div>
      </div>

      <div className="w-full bg-indigo-900 px-10 lg:px-40 text-justify">
        <div className=" py-20 md:flex items-center justify-center lg:gap-x-20">
          <Fade left cascade>
            <div className="flex-1">
              <div>
                <img src={B} alt="hero" className="" />
              </div>
            </div>
          </Fade>
          <Fade right cascade>
            <div className="flex-1 text-xl lg:text-3xl text-amber-400 font-semibold mt-5 lg:mt-0">
              Publish your passions, your way
            </div>
          </Fade>
        </div>
      </div>

      <div className="bg-indigo-900 px-10 lg:px-40 text-neutral-100 w-full lg:text-justify">
        <div className=" py-20 md:flex items-center justify-center lg:gap-x-20">
          <Fade left cascade>
            <div className="flex-1 text-xl lg:text-3xl text-amber-400 font-semibold">
              Let the world know your beautiful thoughts oday!
            </div>
          </Fade>
          <Fade right cascade>
            <div className="flex-1 mt-5 lg:mt-0">
              <img src={C} alt="hero" className="" />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
