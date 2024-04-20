const PostCard = ({ post }) => {
  return (
    <>
      <div className="border-2 p-4">
        <h4 className="text-xl font-bold">{post?.title}</h4>
        <p>{post?.body}</p>
      </div>
    </>
  );
};

export default PostCard;
