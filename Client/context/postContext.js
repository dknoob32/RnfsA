import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

//context
const PostContext = createContext();

//provider
const PostProvider = ({ children }) => {
  //state
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getAllPostss = async (req, res) => {
    setLoading(true);
    try {
      const { data } = await axios.get("/post/get-all-post");
      setLoading(false);
      setPosts(data?.posts);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPostss();
  }, [])
  

  return (
    <PostContext.Provider value={[posts, setPosts]}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
