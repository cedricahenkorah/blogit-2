import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("test@mail.com");
  const [password, setPassword] = useState("test123");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/"); // Go back to the previous page
  };

  return (
    // <form
    //   className="max-w-lg mx-auto mt-[60px] p-10 md:border-2 md:border-solid md:bg-white md:shadow-md rounded-lg"
    //   onSubmit={handleSubmit}
    // >
    //   <h2 className="text-3xl font-bold">Login</h2>
    //   <p>test user is available for use</p>
    //   <label>
    //     <span>email</span>
    //     <input
    //       type="email"
    //       required
    //       onChange={(e) => setEmail(e.target.value)}
    //       value={email}
    //     />
    //   </label>
    //   <label htmlFor="">
    //     <span>password</span>
    //     <input
    //       type="password"
    //       required
    //       onChange={(e) => setPassword(e.target.value)}
    //       value={password}
    //     />
    //   </label>

    //   {!isPending && <button className="btn">Login</button>}
    //   {isPending && (
    //     <button className="btn" disabled>
    //       Loading...
    //     </button>
    //   )}
    //   {error && <div className="error">{error}</div>}
    // </form>

    <div className="min-h-screen w-full flex bg-slate-50">
      <div className="flex justify-center items-center w-full text-white px-5 lg:px-0">
        <div className="bg-white rounded-2xl shadow-lg text-black">
          <div className="px-10 lg:px-20 py-8 lg:py-10">
            <IoMdArrowRoundBack
              size={30}
              onClick={goBack}
              className="cursor-pointer"
            />

            <h1 className="text-lg lg:text-2xl font-bold tracking-wide mt-3">
              Sign in
            </h1>

            <p className="text-gray-400 text-sm lg:text-base mt-1">
              Test user is available for use
            </p>

            {error && (
              <p className="text-red-500 mt-5 text-sm lg:text-base">{error}</p>
            )}

            <form className="mt-10 flex flex-col" onSubmit={handleSubmit}>
              <label className="text-sm lg:text-base">email</label>
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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

              {!isPending ? (
                <button className="w-full bg-black text-white lg:font-semibold py-1 lg:py-2 rounded-full mt-3">
                  Login
                </button>
              ) : (
                <button className="w-full bg-black text-white lg:font-semibold py-1 lg:py-2 rounded-full mt-3">
                  Hold on...
                </button>
              )}
            </form>

            <div className="mt-10 text-sm lg:text-base">
              Don't have an account?
              <Link to="/signup">
                <span className="font-bold text-amber-400 cursor-pointer ml-1">
                  Sign up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
