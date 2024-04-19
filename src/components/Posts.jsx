import { useGetPostsQuery } from "../features/api/baseApi";

const Posts = () => {
  const { data, error, isLoading } = useGetPostsQuery();
  console.log(data);
};

export default Posts;
