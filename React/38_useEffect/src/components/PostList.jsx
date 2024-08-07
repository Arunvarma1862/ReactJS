import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-stote";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addIntialPost } = useContext(PostListData);
  const [fetching, setFetchingData] = useState(false);

  // const [datafetch, setDataFetch] = useState(false);

  // if (!datafetch) {
  //   setFetchingData(true);
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addIntialPost(data.posts);
  //       setFetchingData(false);
  //     });
  //   setDataFetch(true);
  // }

  useEffect(() => {
    setFetchingData(true)
    const controller= new AbortController();
    const singal =controller.signal
    fetch("https://dummyjson.com/posts",{singal})
      .then((res) => res.json())
      .then((data) => {
        addIntialPost(data.posts);
        setFetchingData(false)
      });
      return (()=>{
        console.log("cleanup Effect")
        controller.abort()
      })
  },[]);
  

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post, index) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
