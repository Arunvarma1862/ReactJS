import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-stote";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addIntialPost } = useContext(PostListData);
  // console.log(postList)
  const handlePostData = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addIntialPost(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onClickPostData={handlePostData} />
      )}
      {postList.map((post, index) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
