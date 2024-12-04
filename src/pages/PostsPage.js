import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postsSelector } from "../slices/posts";

import Post from "../components/Post";

const PostsPage = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    localStorage.getItem("items");
  }, []);

  const renderPosts = () => {
    if (!posts || posts.lengt < 1) return null;
    return posts.map((post) => <Post key={post.id} post={post} excerpt />);
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

export default PostsPage;
