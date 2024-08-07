
import { useContext } from "react";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post" >
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          Enter Your UserID
        </label>
        <input
          type="text"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions1"
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
         name="reactions2"
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
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Enter tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};


export const createPostAction=async (data)=>{
  
  const formData= await  data.request.formData();
  const postData=Object.fromEntries(formData);
  console.log("postData",postData);
  postData.tags=postData.tags.split(" ");
  postData.reactions={likes:postData.reactions1, dislikes:postData.reactions2};
  

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log("post",post)
    });
  return redirect("/")
  
}
export default CreatePost;
