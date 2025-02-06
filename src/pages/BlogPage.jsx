import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { base_url } from "../config/config";
import { convert } from "html-to-text";
import scrollTop from "../helpers/scrollTop";

const BlogPage = () => {
  const [blog, setBlog] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await axios.get(`${base_url}/api/allBlogForWebsite`);
      setBlog(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="w-full relative top-10 xs:top-16 sm:top-24 px-4 lg:px-14 pt-16 pb-56 flex flex-col gap-y-12">
      {blog.map((item, index) => {
        return (
          <div
            className="w-full flex bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2"
            key={index}
          >
            <div className="w-full ">
              <img
                src={item?.blogImage[0]?.url}
                className="w-full h-full object-cover object-center rounded-lg"
                alt={item.blogTitle}
              />
            </div>
            <div className="p-6 lg:p-8">
              <span className="block text-[#a0810e] text-sm lg:text-base mb-2">
                {item.date}
              </span>
              <Link
                to={"#"}
                className="text-2xl lg:text-4xl font-bold text-gray-800 hover:text-[#a0810e] transition-colors duration-200"
              >
                {item.blogTitle}
              </Link>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mt-4 mb-6">
                {convert(item.description).slice(0, 250)}...
              </p>
              <Link
                to={`/blog/${item.slug}`}
                onClick={scrollTop}
                className="inline-block px-4 py-2 bg-[#a0810e] text-white uppercase text-sm font-semibold rounded hover:bg-[#8b6d0c] transition-colors duration-300"
              >
                Learn more
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
