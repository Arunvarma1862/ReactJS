import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-stote";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const useridElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const rectionsElement1 = useRef();
  const rectionsElement2 = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const userid = useridElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = { likes: rectionsElement1.current.value, dislikes: rectionsElement2.current.value };
    const hashtags = tagsElement.current.value.split(" ");
    

    useridElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    rectionsElement1.current.value = "";
    rectionsElement2.current.value = "";
    tagsElement.current.value = "";
    addPost(userid, postTitle, postBody, reactions, hashtags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          Enter Your UserID
        </label>
        <input
          type="text"
          ref={useridElement}
          className="form-control"
          id="UserId"
          placeholder="Enter userid"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="Enter Title Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Enter Body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Likes
        </label>
        <input
          type="text"
          ref={rectionsElement1}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Dislikes
        </label>
        <input
          type="text"
          ref={rectionsElement2}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted "
        />
      </div>
     
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Hashtag
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
