import Header from "@/components/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
