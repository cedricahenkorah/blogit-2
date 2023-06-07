import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { GiFeather } from "react-icons/gi";
import { Dropdown } from "flowbite-react";
import Avatar from "./Avatar";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    // <nav className=" md:py-10 md:mb-10 mb-3 md:px-20 py-5 px-6">
    //   <ul className="flex mx-auto items-center justify-end">
    //     <li className="mr-auto flex gap-2 font-semibold md:text-2xl text-xl tracking-widest text-blue-700">
    //       {/* <span>
    //         <GiFeather />
    //       </span> */}
    //       <Link to="/">blogIt</Link>
    //     </li>

    //     <li className="mr-5 md:flex hidden">
    //       <Link to="/about">About</Link>
    //     </li>

    //     {!user && (
    //       <>
    //         <li className="mr-5">
    //           <Link to="/login">Login</Link>
    //         </li>
    //         <li className="mr-5">
    //           <Link to="/signup">Signup</Link>
    //         </li>
    //       </>
    //     )}

    //     {user && (
    //       <li>
    //         <button className="btn md:flex hidden" onClick={logout}>
    //           Logout
    //         </button>
    //       </li>
    //     )}

    //     {user && (
    //       <li className="flex md:hidden">
    //         <Dropdown
    //           arrowIcon={false}
    //           inline={true}
    //           label={<Avatar src={user.photoURL} />}
    //         >
    //           <Dropdown.Header>
    //             <span className="block text-sm font-semibold">
    //               {user.displayName}
    //             </span>
    //           </Dropdown.Header>
    //           <Dropdown.Item>
    //             <Link to="/feed">Feed</Link>
    //           </Dropdown.Item>
    //           <Dropdown.Item>
    //             <Link to="/create">Create Blog</Link>
    //           </Dropdown.Item>

    //           <Dropdown.Divider />
    //           <Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
    //         </Dropdown>
    //       </li>
    //     )}
    //   </ul>
    // </nav>

    <nav className="w-full h-20 flex justify-between items-center px-10 lg:px-40 bg-indigo-900 text-neutral-100">
      <div>
        <h1 className="text-amber-300 font-bold text-xl">BlogIt</h1>
      </div>

      {/* menu */}
      {!user && (
        <ul className="hidden md:flex cursor-pointer">
          <Link to="/">
            <li className="pr-4">Home</li>
          </Link>
          <Link to="/">
            <li className="pr-4">About</li>
          </Link>
          <Link to="/">
            <li className="pr-4">Blogs</li>
          </Link>
        </ul>
      )}

      {!user && (
        <div className="hidden md:flex items-center">
          <Link to="/login">
            <button className="bg-amber-400 text-neutral-100 py-2 px-4 rounded-sm font-semibold">
              Try Demo
            </button>
          </Link>
        </div>
      )}

      {user && (
        <div className="hidden md:flex items-center">
          <button
            className="bg-amber-400 text-neutral-100 py-2 px-4 rounded-sm font-semibold"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}

      {/* hamburger */}
      {!user && (
        <>
          <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <GiHamburgerMenu /> : <GrClose />}
          </div>

          {/* mobile menu  */}
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-slate-800 flex flex-col justify-center items-center text-neutral-100"
            }
          >
            <Link to="/">
              <li className="py-6 text-4xl">Home</li>
              <li className="py-6 text-4xl">About</li>
              <li className="py-6 text-4xl">Blogs</li>
            </Link>

            <Link to="/login">
              <li className="py-6 text-4xl">Try Demo</li>
            </Link>
          </ul>
        </>
      )}

      {user && (
        <li className="flex md:hidden">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avatar src={user.photoURL} />}
          >
            <Dropdown.Header>
              <span className="block text-sm font-semibold">
                {user.displayName}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to="/feed">Feed</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/create">Create Blog</Link>
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
          </Dropdown>
        </li>
      )}
    </nav>
  );
}
