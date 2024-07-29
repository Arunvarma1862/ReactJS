import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addIntialPost: () => {},
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
      {
        id: action.payload.id,
        userId: action.payload.userid,
        title: action.payload.postTitle,
        body: action.payload.postBody,
        reactions:  {
         likes: action.payload.reactions.likes,
         dislikes: action.payload.reactions.dislikes,
        },
        tags: action.payload.hashtags,
      },
      ...currentPostList,
    ];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, disaptchPostList] = useReducer(postListReducer, []);

  const addPost = (userid, postTitle, postBody, reactions, hashtags) => {
    disaptchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userid,
        postTitle,
        postBody,
        reactions,
        hashtags,
      },
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
  const deletePost = (postId) => {
    disaptchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        addIntialPost,
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
