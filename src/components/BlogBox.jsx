"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BlogBox = ({ post }) => {
  const { id, title, body } = post;
  // console.log(post);
  const router = useRouter();

  const handlesingleBlog = () => {
    router.push(`blogs/${post?.id}`);
  };
  return (
    <div className="border rounded-xl p-4 h-[420px] relative">
      <h1 className="text-white text-xl font-bold">{id}</h1>
      <p className="text-xl text-white font-bold truncate my-4">{title}</p>
      <p>{body}</p>
      <div className="absolute bottom-10" onClick={handlesingleBlog}>
        <button className="btn btn-success text-white mt-6">Detail</button>
      </div>
    </div>
  );
};

export default BlogBox;
