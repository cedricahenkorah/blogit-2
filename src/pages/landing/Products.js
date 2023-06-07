import A from "../../assets/A.png";
import B from "../../assets/B.png";
import C from "../../assets/C.png";

export default function Products() {
  return (
    <>
      <div className="bg-indigo-900 px-10 lg:px-40 text-neutral-100 w-full lg:text-justify">
        <div className=" py-20 md:flex items-center justify-center lg:gap-x-20">
          <div
            className="flex-1 text-xl lg:text-3xl text-amber-400 font-semibold"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Explore a wide range of topics and expand your horizons today.
          </div>

          <div
            className="flex-1 mt-5 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={A} alt="hero" className="" />
          </div>
        </div>
      </div>

      <div className="w-full bg-indigo-900 px-10 lg:px-40 text-justify">
        <div className=" py-20 md:flex items-center justify-center lg:gap-x-20">
          <div
            className="flex-1"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div>
              <img src={B} alt="hero" className="" />
            </div>
          </div>

          <div
            className="flex-1 text-xl lg:text-3xl text-amber-400 font-semibold mt-5 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Publish your passions, your way
          </div>
        </div>
      </div>

      <div className="bg-indigo-900 px-10 lg:px-40 text-neutral-100 w-full lg:text-justify">
        <div className=" py-20 md:flex items-center justify-center lg:gap-x-20">
          <div
            className="flex-1 text-xl lg:text-3xl text-amber-400 font-semibold"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Let the world know your beautiful thoughts oday!
          </div>

          <div
            className="flex-1 mt-5 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={C} alt="hero" className="" />
          </div>
        </div>
      </div>
    </>
  );
}
