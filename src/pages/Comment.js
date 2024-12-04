import React from "react";

export const Comment = ({ comment }) => (
  <aside className="comment">
    <h3>{comment.email}</h3>
    <p>{comment.body}</p>
  </aside>
);
