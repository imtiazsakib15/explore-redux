import { useSavePostMutation } from "../features/api/baseApi";

const Feed = () => {
  const [setPost, { data: postData }] = useSavePostMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.title.value;
    setPost({ title: data, body: "This is a body.", userId: 333 });
  };
  console.log(postData);
  return (
    <>
      <form className="py-6" onSubmit={handleSubmit}>
        <h3 className="text-center text-xl sm:text-2xl lg:text-3xl">
          Post Submit
        </h3>
        <input
          className="border-2 p-2"
          type="text"
          name="title"
          id=""
          required
        />
        <button className="px-4 py-2 bg-green-300" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Feed;
