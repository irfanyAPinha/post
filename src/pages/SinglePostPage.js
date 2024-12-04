import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { postSelector } from "../slices/post";
import { commentsSelector } from "../slices/comments";

import Post from "../components/Post";
import { Comment } from "./Comment";

const PostContainer = ({ postLoading, postHasErrros, post }) => {
  if (!post) return null;
  if (postLoading) return <p>Loading post...</p>;
  if (postHasErrros) return <p>Unable to display post.</p>;

  return <Post post={post} />;
};

const Comments = ({ commentsLoading, commentsHasErrors, comments }) => {
  if (!comments) return null;
  if (commentsLoading) return <p>Loading comments...</p>;
  if (commentsHasErrors) return <p>Unable to display comments.</p>;

  return comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
};

const SinglePostPage = ({ match }) => {
  const [statePost, setStatePost] = useState(null);
  const [stateComment, setStateComment] = useState(null);

  const fetchPost = () => {
    const id = parseInt(match.params.id, 10);
    const post = postsJson.find((p) => p.id === id);
    let comment = commentsJson.data.find((p) => p.postId === id);
    if (comment) comment = comment.comments;

    setStatePost(post);
    setStateComment(comment);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (!post) return null;

  return (
    <section>
      <PostContainer
        post={statePost}
        postLoading={false}
        postHasErrros={false}
      />
      <h2>Comments</h2>
      {stateComment && (
        <Comments
          comments={stateComment}
          commentsLoading={false}
          commentsHasErrors={false}
        />
      )}
    </section>
  );
};

export default SinglePostPage;
