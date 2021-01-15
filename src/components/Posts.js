import React, { useContext } from "react";
import { ContextProvider } from "../Global/Context";
import Comments from "./Comments";

const Posts = () => {
  const { posts } = useContext(ContextProvider);
  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          {console.log("--", post)}
          <div className="posts__header">
            <div className="posts__header-avator">{post.username[0]}</div>
            <div className="posts__header-name">{post.username}</div>
          </div>
          <div className="posts__img">
            <img src={post.image} alt="kk" />
          </div>
          <Comments id={post.id}/>
        </div>
      ))}
    </>
  );
};

export default Posts;
