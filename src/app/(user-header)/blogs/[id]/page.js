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

const SingleBlog = ({ params }) => {
  const { id } = params;

  const findBlog = students.find((student) => student.id == id);
  console.log(findBlog);
  return (
    <div>
      <h1>Single Blog: {id} </h1>
      <h1 className="text-white font-bold"> {findBlog.name}</h1>
    </div>
  );
};

export default SingleBlog;
