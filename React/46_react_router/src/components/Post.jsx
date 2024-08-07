import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-stote";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card  " style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}

          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}

        <div className="alert alert-success reactions" role="alert">
          The post has been reacted by likes= {post.reactions.likes} dislikes={" "}
          {post.reactions.dislikes} people
        </div>
      </div>
    </div>
  );
};
export default Post;
