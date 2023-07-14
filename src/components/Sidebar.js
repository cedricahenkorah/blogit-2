import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
// import {
//   LuFolderHeart,
//   LuFolderCog,
//   LuFolders,
//   LuLogOut,
// } from "react-icons/lu";

// styles
import "./Sidebar.css";

export default function Sidebar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    // <div className="sidebar bg-gray-800">
    //   <div className="sidebar-content">
    //     <div className="user">
    //       <Avatar src={user.photoURL} />
    //       <p>{user.displayName}</p>
    //     </div>
    //     <nav className="links">
    //       <ul>
    //         <li>
    //           <NavLink to="/feed">
    //             <span>Feed</span>
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/create">
    //             <span>Create Blog</span>
    //           </NavLink>
    //         </li>
    //         <li>
    //           <span className="ml-3">Logout</span>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </div>

    <div className="w-[200px] sbar min-h-screen lg:flex flex-col hidden bg-gray-800 shadow-xl">
      <div className="flex flex-col justify-center items-center gap-y-2 pb-5 border-b p-5">
        <Avatar src={user.photoURL} />
        <p className="text-sm text-white">{user.displayName}</p>
      </div>

      {/* navigation */}
      <nav className="h-full flex flex-col justify-between p-5 links">
        <ul className="gap-y-3 flex flex-col">
          <NavLink to="/feed">
            <li className="font-semibold text-sm">Feed</li>
          </NavLink>

          <NavLink to="/create">
            <li className="text-sm font-semibold">Create blog</li>
          </NavLink>

          <p
            className="text-sm font-semibold text-white pt-5 pl-1 cursor-pointer"
            onClick={logout}
          >
            Logout
          </p>
        </ul>
      </nav>
    </div>
  );
}
