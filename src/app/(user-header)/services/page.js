import MealFood from "@/components/MealFood";
import React from "react";

export const metadata = {
  title: {
    absolute: "Services",
  },
  description: "Generated by create next app",
};
const Service = () => {
  return (
    <div>
      <h1 className="text-2xl text-white font-bold my-4">Food Service</h1>
      <MealFood />
    </div>
  );
};

export default Service;
