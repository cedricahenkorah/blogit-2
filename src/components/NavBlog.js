import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { GiFeather } from "react-icons/gi";
import Avatar from "./Avatar";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBlog = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="w-full flex lg:hidden justify-between items-center px-5 lg:px-20 pt-5 bg-gray-50">
      {/* dropdown */}
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
};

export default NavBlog;
