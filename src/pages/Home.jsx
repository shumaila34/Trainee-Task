import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { useGetPost } from "../Hooks/GetPost";
import useDeletePost from "../Hooks/DeletePost";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initialData, setInitialData] = useState({});
  const [postId, setPostId] = useState(null);

  const { posts, getPost } = useGetPost();
  const { deletePost } = useDeletePost();

  useEffect(() => {
    getPost();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/about");
  };

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      alert("Post deleted successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const editPost = (id, data) => {
    setPostId(id);
    setInitialData({
      title: data?.title,
      content: data?.body,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-gray-800 text-white w-full py-4 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">DAX University</div>
          <nav className="flex space-x-4">
            <a href="/" className="text-gray-400 hover:text-white">
              Home
            </a>
            <a href="/about" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="/login" className="text-gray-400 hover:text-white">
              Login
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-8 text-blue-600">
          Welcome to DAX University
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Empowering students to achieve their dreams.
        </p>
        {!isLoggedIn ? (
          <div className="w-full max-w-md">
            <Form postId={postId} initialData={initialData} />
            <button
              onClick={handleLogin}
              className="w-full p-2 bg-green-500 text-white rounded mt-4 hover:bg-green-600"
            >
              Login
            </button>
          </div>
        ) : (
          <p className="text-lg text-green-600">Welcome, User!</p>
        )}
        <div className="flex flex-wrap">
          {posts?.map((p) => (
            <div key={p?.id} className="w-full md:w-1/2">
              <div className="m-2 p-4 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold capitalize">
                  {p?.title}
                </h2>
                <p>{p?.body}</p>
                <div className="flex justify-evenly">
                  <button
                    type="button"
                    onClick={() => editPost(p?.id, p)}
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600 mt-4"
                  >
                    Edit Post
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(p?.id)}
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600 mt-4"
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
        {/* isko aik box m na krde home pr nzr ai wo srf */}
      </main>
      <footer className="bg-gray-800 text-white w-full py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">DAX University</h2>
              <p className="text-gray-400">
                © 2023 DAX University. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
              <a href="/about" className="text-gray-400 hover:text-white">
                About
              </a>
              <a href="/login" className="text-gray-400 hover:text-white">
                Login
              </a>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
// ;ise medlt ur update waalbutton hhe lagede take ow bhe hojai lge hath

export default Home;
