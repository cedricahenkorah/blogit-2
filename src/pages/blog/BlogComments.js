import Avatar from "../../components/Avatar";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Timeline } from "flowbite-react";
import { CgComment } from "react-icons/cg";

export default function BlogComments({ blog }) {
  const { updateDocument, response } = useFirestore("blogs");
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    await updateDocument(blog.id, {
      comments: [...blog.comments, commentToAdd],
    });

    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <div className="project-comments">
      <h4>Blog Comments</h4>

      <Timeline>
        {blog.comments.length > 0 &&
          blog.comments.map((comment) => (
            <Timeline.Item key={comment.id}>
              <Timeline.Point icon={CgComment} />
              <Timeline.Content>
                <Timeline.Time>
                  {formatDistanceToNow(comment.createdAt.toDate(), {
                    addSuffix: true,
                  })}
                </Timeline.Time>
                <Timeline.Title></Timeline.Title>
                <Timeline.Body>
                  <div className="comment-author my-2">
                    <Avatar src={comment.photoURL} />
                    <p className="font-semibold">{comment.displayName}</p>
                  </div>
                  <div className="comment-content">
                    <p className="text-black">{comment.content}</p>
                  </div>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          ))}
      </Timeline>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add comment</button>
      </form>
    </div>
  );
}
