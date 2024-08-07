import { useEffect, useMemo, useState } from "react";
import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INTIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [
         action.payload,
      ...currentPostList,
    ];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, disaptchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    console.log("posts", post)
    disaptchPostList({
      type: "ADD_POST",
      payload:post
    });
  };

  const addIntialPost = (posts) => {
    disaptchPostList({
      type: "ADD_INTIAL_POST",
      payload: {
        posts,
      },
    });
  };
  const deletePost = useCallback((postId) => {
    disaptchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  },[disaptchPostList]);

 
  // const arr=[5,3,8,9,4];
  // const sortedArr= useMemo(()=>arr.sort(),[arr])

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const default_Post_list=[{
//   id:1,
//   title:"Go to Mumbai",
//   body:"hello world, enjoy the world, mumabi, dbdcnsj jbdjncj kdjcnjs",
//   reactions:{
//     like:2,
//     dislike:5
//   },
//   userId:"user-6",
//   tags:[" vacation "," mumbai "," chwdbc "]
// },{
// id:2,
//   title:"Go to Delhi",
//   body:"hello world, enjoy the world, mumabi, dbdcnsj jbdjncj kdjcnjs",
//   reactions:{
//     like:2,
//     dislike:5
//   },
//   userId:"user-63",
//   tags:[" vacation "," mumbai "," chwdbc "]
// }]
export default PostListProvider;
