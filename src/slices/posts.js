import { createSlice } from "@reduxjs/toolkit";
import postsJson from "../data/posts.json";

export const initialState = {
  loading: false,
  hasErrors: false,
  posts: postsJson,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPostsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getPosts, getPostsSuccess, getPostsFailure } =
  postsSlice.actions;
export const postsSelector = (state) => state.posts;
export default postsSlice.reducer;
