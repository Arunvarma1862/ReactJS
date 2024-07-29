import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-stote";
import Post from "./Post";

const PostList = () => {
  const { postList } = useContext(PostListData);
  // console.log(postList)
  return (
    <>
      {postList.map((post, index)=> (
        < Post  key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
