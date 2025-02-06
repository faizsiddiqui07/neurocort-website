import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_url } from "../config/config";
import htmlParser from "html-react-parser";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  const get_blog = async () => {
    try {
      const response = await axios.get(`${base_url}/api/singleBlog`, {
        params: { slug },
      });
      setBlog(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_blog();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Image Section */}
      <div className="w-full h-[500px] relative">
        <img
          src={blog?.blogImage[0]?.url}
          className="w-full h-full object-cover object-top"
          alt="Blog cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
            {blog?.blogTitle || "Blog Title"}
          </h1>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="w-full max-w-5xl px-4 lg:px-16 my-12 flex flex-col gap-y-8">
        <span className="text-gray-500 text-sm">{blog?.date}</span>
        <h2 className="text-3xl lg:text-4xl text-gray-400 font-bold text-left">
          {blog?.blogTitle}
        </h2>
        {blog?.description ? (
          <div className="text-gray-300 text-base xs:text-lg leading-relaxed">
            {htmlParser(blog.description)}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            No description available for this blog.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
