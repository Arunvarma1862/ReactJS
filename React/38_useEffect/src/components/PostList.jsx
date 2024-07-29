import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-stote";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { useEffect } from "react";

const PostList = () => {
  const { postList, addIntialPost } = useContext(PostListData);

  // const [datafetch,setDataFetch]=useState(false)

  // if(!datafetch){
  //   fetch("https://dummyjson.com/posts")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     addIntialPost(data.posts);
  //   });
  //   setDataFetch(true)
  // }

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addIntialPost(data.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post, index) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
