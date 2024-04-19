import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseApi = createApi({
  reducerpath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (name) => `/posts`,
    }),
  }),
});

export const { useGetPostsQuery } = baseApi;

export default baseApi;
