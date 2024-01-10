import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="py-14">
      <h2 className="text-4xl font-bold">Post With Redux Toolkit</h2>
      <h4 className="text-2xl font-bold pt-4">
        {isLoading
          ? "Post is Loading"
          : error
          ? "An Error Occured"
          : `Total Post = ${posts?.length}`}
      </h4>
      {posts && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
          {posts?.map((post) => (
            <div key={post.id} className="border-2 p-4">
              <h4 className="text-xl font-bold">{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostView;
