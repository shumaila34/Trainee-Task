import React, { useEffect, useState } from "react";
import { useCreatePost } from "../Hooks/CreatePost";
import { useUpdatePost } from "../Hooks/UpdatePost";

const Form = ({ postId, initialData }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const { createPost } = useCreatePost();
  const { updatePost } = useUpdatePost();

  useEffect(() => {
    if (initialData?.title) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (postId) {
        response = await updatePost(postId, { title, content });
        setMessage("Post updated successfully!");
        setStatus("success");
      } else {
        response = await createPost({ title, content });
        setMessage("Post created successfully!");
        setStatus("success");
      }
      console.log("Response:", response);
    } catch (error) {
      setMessage("Error in submission!");
      setStatus("error");
      console.error("Error:", error);
    }
  };

  // const handlePatch = async () => {
  //   try {
  //     await patchPost(postId, { title, content });
  //     setMessage("Post patched successfully!");
  //     setStatus("success");
  //   } catch (error) {
  //     setMessage("Error patching post!");
  //     setStatus("error");
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <div className="flex space-x-4">
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {postId ? "Update Post" : "Create Post"}
        </button>
        {/* {postId && (
          <button
            type="button"
            onClick={handleDelete}
            className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete Post
          </button>
        )} */}
        {/* {postId && (
          <button
            type="button"
            onClick={handlePatch}
            className="w-full p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Patch Post
          </button>
        )} */}
      </div>
      {message && (
        <div
          className={`text-center ${status === "success" ? "text-green-500" : "text-red-500"}`}
        >
          {message}
        </div>
      )}
    </form>
  );
};

export default Form;
