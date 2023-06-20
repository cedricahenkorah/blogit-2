import icon from "../../assets/blogbg.png";

export default function Hero() {
  return (
    <div className="w-full px-10 lg:px-40 bg-indigo-900 h-full">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center h-full text-neutral-100">
        <div
          className="font-extrabold xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-4xl xl:leading-[5rem] md:leading-[4rem] h-full flex items-end lg:items-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>
            Discover new perspectives with{" "}
            <span className="text-amber-400">BlogIT</span>
          </h1>
        </div>

        <div className="lg:flex-1 h-full lg:h-0 flex lg:items-center items-start">
          <img src={icon} alt="landing" className="lg:h-auto h-[300px]" />

          {/* <h1>hello world</h1> */}
        </div>
      </div>
    </div>
  );
}
