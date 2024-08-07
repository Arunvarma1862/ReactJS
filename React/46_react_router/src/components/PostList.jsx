
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";


const PostList = () => {

  const postList = useLoaderData();
  return (
    <>
      {postList.length === 0 && <WelcomeMessage/>}
      {postList.map((post, index) => <Post key={index} post={post} />)}
    </>
  );
};

export const postLoader=async()=>{
return await fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then((data) => {
    return data.posts
  });
}

export default PostList;
