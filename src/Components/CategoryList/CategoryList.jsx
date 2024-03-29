import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryList = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  console.log(categories);
  return (
    <div className="py-16">
      <div>
        <h2 className="text-5xl font-medium text-center py-4">
          Job Category List
        </h2>
        <p className="text-center py-2">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex gap-7 py-7 w-10/12 mx-auto">
        {
           categories.map (category=><CategoryCard key={category.id} category={category}></CategoryCard>)
        }
        
      </div>
    </div>
  );
};

export default CategoryList;
