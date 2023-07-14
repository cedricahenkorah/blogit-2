import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

// styles
import icon from "../../assets/signupicon.svg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/"); // Go back to the previous page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 400000) {
      setThumbnailError("Image file size must be less than 400kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };

  return (
    // <div className="md:px-20 w-full lg:flex lg:pt-1 px-5">
    //   <form
    //     className="max-w-lg mx-auto mt-[2px] mb-20 p-10 md:border-2 md:border-solid md:bg-white md:shadow-md rounded-lg"
    //     onSubmit={handleSubmit}
    //   >
    //     <h2 className="text-3xl font-bold">Create new account</h2>
    //     {/* <p>begin your blogging journey here</p> */}
    //     <label>
    //       <span>email</span>
    //       <input
    //         type="email"
    //         required
    //         onChange={(e) => setEmail(e.target.value)}
    //         value={email}
    //       />
    //     </label>
    //     <label htmlFor="">
    //       <span>password</span>
    //       <input
    //         type="password"
    //         required
    //         onChange={(e) => setPassword(e.target.value)}
    //         value={password}
    //       />
    //     </label>
    //     <label>
    //       <span>username</span>
    //       <input
    //         type="text"
    //         required
    //         onChange={(e) => setDisplayName(e.target.value)}
    //         value={displayName}
    //       />
    //     </label>
    //     <label>
    //       <span>avatar</span>
    //       <input type="file" required onChange={handleFileChange} />
    //       {thumbnailError && <div className="error">{thumbnailError}</div>}
    //     </label>

    //     {!isPending && <button className="btn">Sign up</button>}
    //     {isPending && (
    //       <button className="btn" disabled>
    //         Loading...
    //       </button>
    //     )}
    //     {error && <div className="error">{error}</div>}
    //   </form>
    //   <div className="pr-24 lg:pr-0 mt-5 lg:mt-0 hidden md:block">
    //     <div className="illustration">
    //       <img src={icon} alt="landing" className="" />
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen w-full flex bg-slate-50">
      <div className="flex justify-center items-center w-full text-white px-5 lg:px-0">
        <div className="bg-white rounded-2xl shadow-lg text-black">
          <div className="px-10 lg:px-20 py-8 lg:py-10">
            <IoMdArrowRoundBack size={30} onClick={goBack} />

            <h1 className="text-lg lg:text-2xl font-bold tracking-wide mt-3">
              Sign up
            </h1>

            {/* <p className="text-gray-400 text-sm lg:text-base mt-1">
        Create an account to start organizing your notes
      </p> */}

            {error && (
              <p className="text-red-500 mt-5 text-sm lg:text-base">{error}</p>
            )}

            <form className="mt-10 flex flex-col" onSubmit={handleSubmit}>
              <label className="text-sm lg:text-base">Email</label>
              <input
                type="email"
                placeholder="user@mail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full mb-3 lg:mb-5 mt-2 p-2 lg:p-3 rounded-md border border-gray-200 focus:ring-offset-4 focus:ring-2"
              />

              <label className="text-sm lg:text-base">Username</label>
              <input
                type="text"
                placeholder="username"
                required
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
                className="w-full mb-3 lg:mb-5 mt-2 p-2 lg:p-3 rounded-md border border-gray-200 focus:ring-offset-4 focus:ring-2"
              />

              <label className="text-sm lg:text-base">Password</label>
              <input
                type="password"
                placeholder="********"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full mb-3 lg:mb-5 mt-2 p-2 lg:p-3 rounded-md border border-gray-200 focus:ring-offset-4 focus:ring-2"
              />

              <label className="text-sm lg:text-base">avatar</label>
              <input
                type="file"
                required
                onChange={handleFileChange}
                className="w-full mb-3 lg:mb-5 mt-2 p-2 lg:p-3 rounded-md border border-gray-200 focus:ring-offset-4 focus:ring-2"
              />

              {!isPending ? (
                <button className="w-full bg-black text-white lg:font-semibold py-1 lg:py-2 rounded-full mt-3">
                  Create account
                </button>
              ) : (
                <button
                  className="w-full bg-black text-white lg:font-semibold py-1 lg:py-2 rounded-full mt-3"
                  disabled
                >
                  Hold on we're setting up your account...
                </button>
              )}
            </form>

            <div className="mt-10 text-sm lg:text-base">
              Already have an account?
              <Link to="/login">
                <span className="font-bold text-amber-400 cursor-pointer ml-1">
                  Sign in
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
