import Image from "next/image";
import React from "react";

const MealFoodBox = ({ food }) => {
  //   console.log(food);
  const { strMeal, strMealThumb, strYoutube } = food;
  return (
    <div className="border p-2 rounded-lg">
      <h1 className="text-lg font-bold text-white">{strMeal}</h1>
      <div className="flex justify-center">
        <Image src={strMealThumb} alt="image" width={350} height={350} />
      </div>
    </div>
  );
};

export default MealFoodBox;
