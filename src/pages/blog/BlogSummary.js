import Avatar from "../../components/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Tooltip } from "flowbite-react";
import { FaTrashAlt } from "react-icons/fa";
import NavBlog from "../../components/NavBlog";

export default function BlogSummary({ blog }) {
  const { deleteDocument } = useFirestore("blogs");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = (e) => {
    deleteDocument(blog.id);
    navigate("/feed");
  };

  const handleBack = (e) => {
    navigate("/feed");
  };

  return (
    <>
      <div className="">
        <div className="w-full p-10 bg-white rounded-xl shadow-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{blog.name}</h2>

            <div className="flex flex-col text-sm">
              <div className="flex items-center">
                <Avatar src={blog.createdBy.photoURL} />
                <p className="ml-2">{blog.createdBy.displayName} </p>
              </div>

              {/* <p className="ml-auto hidden md:flex ml-3">
              {formatDistanceToNow(blog.createdAt.toDate(), {
                addSuffix: true,
              })}
            </p> */}
            </div>
          </div>

          {/* <div className="mt-2 border-2 border-amber-400"></div> */}

          {/* <p className="mt-2 md:hidden flex">
          {formatDistanceToNow(blog.createdAt.toDate(), {
            addSuffix: true,
          })}
        </p> */}
          <div className="bg-white rounded mt-5">
            <p className="details">{blog.details}</p>
          </div>

          <div className="flex flex-row justify-between mt-5 lg:mt-10">
            {user.uid === blog.createdBy.id && (
              <Tooltip content="delete note">
                <FaTrashAlt
                  size={15}
                  className="text-red-500"
                  onClick={handleClick}
                />
              </Tooltip>
            )}
            {/* <button className="btn w-40" onClick={handleBack}>
            back to feed
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
