import React from "react";

const BlogBox = ({ blog }) => {
  const { id, name } = blog;
  return (
    <div className="border rounded-xl p-4">
      <h1>{id}</h1>
      <p>{name}</p>
      <div>
        <button className="btn btn-success text-white mt-6">Detail</button>
      </div>
    </div>
  );
};

export default BlogBox;
