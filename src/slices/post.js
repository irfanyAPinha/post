import { createSlice } from "@reduxjs/toolkit";

import postsJson from "../data/posts.json";

export const initialState = {
  loading: false,
  hasErrors: false,
  post: {},
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPost: (state) => {
      const id = match.params.id;
      const post = postsJson.filter((p) => p.id === id);
      state.post = { ...post };
    },
    getPostSuccess: (state, { payload }) => {
      state.post = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPostFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getPost, getPostSuccess, getPostFailure } = postSlice.actions;
export const postSelector = (state) => state.post;
export default postSlice.reducer;
