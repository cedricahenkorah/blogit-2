import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import BlogSummary from "./BlogSummary";
import BlogComments from "./BlogComments";

// styles
import "./Blog.css";

export default function Blog() {
  const { id } = useParams();
  const { error, document } = useDocument("blogs", id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="md:px-20 lg:pt-1 px-5 flex-grow pb-5">
      <div className="grid grid-cols-1 gap-10">
        <BlogSummary blog={document} />
        <BlogComments blog={document} />
      </div>
    </div>
  );
}
