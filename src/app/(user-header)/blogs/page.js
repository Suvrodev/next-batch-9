import BlogBox from "@/components/BlogBox";
import Link from "next/link";
import React from "react";

const students = [
  {
    id: "1",
    name: "Wusan",
  },
  {
    id: "2",
    name: "Zahur",
  },
  {
    id: "5",
    name: "Dilruba",
  },
  {
    id: "6",
    name: "Sohan",
  },
  {
    id: "9",
    name: "Sajib",
  },
  {
    id: "10",
    name: "Rintu",
  },
  {
    id: "11",
    name: "Suvrodeb",
  },
  {
    id: "14",
    name: "Lamyea",
  },
  {
    id: "14",
    name: "Lamyea",
  },
  {
    id: "15",
    name: "Tasnim",
  },
  {
    id: "17",
    name: "Kona",
  },
  {
    id: "20",
    name: "Hridoy",
  },
  {
    id: "21",
    name: "Dhrubo",
  },
  {
    id: "1017",
    name: "Antu",
  },
  {
    id: "1071",
    name: "Munia",
  },
  {
    id: "1091",
    name: "Tirtha",
  },
  {
    id: "1092",
    name: "Zannat",
  },
  {
    id: "1099",
    name: "Galib",
  },
  {
    id: "1105",
    name: "Sharmistha",
  },
];

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl my-10">Blogs Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {students.map((student, idx) => (
          <div key={idx}>
            <Link href={`blogs/${student?.id}`}>
              <BlogBox blog={student} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
