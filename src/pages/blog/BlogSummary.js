import Avatar from "../../components/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

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
      <div className="project-summary">
        <h2 className="font-medium text-indigo-700 text-xl">{blog.name}</h2>
        <div className="mt-2 border-2 border-amber-400"></div>
        <div className="flex items-center lg:mt-5 mt-2">
          <Avatar src={blog.createdBy.photoURL} />
          <p className="ml-2">By: {blog.createdBy.displayName} </p>
          <p className="ml-auto hidden md:flex">
            {formatDistanceToNow(blog.createdAt.toDate(), {
              addSuffix: true,
            })}
          </p>
        </div>
        <p className="mt-2 md:hidden flex">
          {formatDistanceToNow(blog.createdAt.toDate(), {
            addSuffix: true,
          })}
        </p>
        <div className="bg-indigo-100 rounded p-3 mt-5">
          <p className="details">{blog.details}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        {user.uid === blog.createdBy.id && (
          <button className="btn w-40 " onClick={handleClick}>
            delete blog
          </button>
        )}
        <button className="btn w-40" onClick={handleBack}>
          back to feed
        </button>
      </div>
    </>
  );
}
