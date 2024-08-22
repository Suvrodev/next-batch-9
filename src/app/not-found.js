import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-red-600 text-center h-[100vh] w-[100vw] flex flex-col items-center justify-center">
      <h1>404</h1>
      <h1 className="">Page Not Found</h1>
      <Link href={`/`}>
        <button className="btn btn-primary">Go to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
