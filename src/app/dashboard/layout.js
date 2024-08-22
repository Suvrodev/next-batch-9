import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-[30%] bg-yellow-400 h-[100vh]">
        <Sidebar />
      </div>
      <div className="w-[70%] p-10">{children}</div>
    </div>
  );
};

export default layout;
