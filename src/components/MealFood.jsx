"use client";
import React, { useEffect, useRef, useState } from "react";
import MealFoodBox from "./MealFoodBox";

const MealFood = () => {
  const searchRef = useRef();

  const [searchFood, setSearchFood] = useState("");
  const [foods, setFoods] = useState([]);
  const handlesearchFood = (e) => {
    if (searchRef.current) {
      setSearchFood(searchRef.current.value);
    }
  };
  console.log("searchFood: ", searchFood);

  //   const [foods, setFoods] = useState([]);
  //   const loadFoods = async (searchFood) => {
  //     try {
  //       const res = await fetch(
  //         `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchFood}`
  //       );
  //       const data = await res.json();
  //       console.log("Foods: ", data?.meals);
  //       setFoods(data?.meals);
  //     } catch (error) {
  //       console.log("error: ", error);
  //     }
  //   };

  //   useEffect(() => {
  //     if (searchFood) {
  //       loadFoods();
  //     } else {
  //       return;
  //     }
  //   }, []);

  useEffect(() => {
    if (searchFood) {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchFood}`
      )
        .then((res) => res.json())
        .then((data) => setFoods(data?.meals));
    }
  }, [searchFood]);
  console.log("Foods: ", foods);

  return (
    <div>
      <div className="flex gap-2 items-center">
        <input
          type="text"
          name=""
          id=""
          className="bg-transparent border p-2 rounded-md"
          ref={searchRef}
        />
        <button className="btn btn-primary" onClick={handlesearchFood}>
          Search
        </button>
      </div>

      <div>
        {foods.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {foods.map((food, idx) => (
              <MealFoodBox key={idx} food={food} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MealFood;
