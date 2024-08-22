import Link from "next/link";
import React from "react";

const AboutContents = () => {
  return (
    <div className="bg-orange-600 p-4 rounded-md flex gap-4 text-white w-4/12 mx-auto justify-center my-10">
      <Link href={"/about/history"}>History</Link>
      <Link href={"/about/mission"}>Mission</Link>
    </div>
  );
};

export default AboutContents;
