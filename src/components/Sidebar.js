import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

// styles
import "./Sidebar.css";

export default function Sidebar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <div className="sidebar bg-indigo-900">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>{user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/feed">
                <span>Feed</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <span>Create Blog</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
