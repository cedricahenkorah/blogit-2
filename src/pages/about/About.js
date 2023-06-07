export default function About() {
  return (
    <>
      <div className="bg-indigo-800 px-10 lg:px-40 text-neutral-100 w-full lg:text-justify">
        <div className=" py-20 md:flex items-center justify-center lg:gap-x-20">
          <div
            className="flex-1 text-xl lg:text-3xl"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Explore a wide range of topics and expand your horizons today. Find
            a new source of knowledge for yourself with BlogIt
          </div>

          <div
            className="flex-1 mt-5 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div>Find articles, stories of other people's experiences</div>{" "}
            <div className="flex mt-5 gap-x-32">
              <div>
                <h1 className="font-bold text-2xl text-amber-400">100+</h1>
                <p>Users</p>
              </div>
              <div>
                <h1 className="font-bold text-2xl text-amber-400">200+</h1>
                <p>Blogs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-indigo-800 px-10 lg:px-40 text-justify">
        <div className=" py-20 md:flex items-center justify-center lg:gap-x-20">
          <div
            className="flex-1"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div>
              <h1 className="text-neutral-100">
                Create a unique and beautiful blog easily. Set up your account
                with us and share your ideas to the world.
              </h1>
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
    </>
  );
}
