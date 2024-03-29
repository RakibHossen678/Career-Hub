const CategoryCard = ({category}) => {
    const {availability,category_name,logo}=category
  return (
    <div className=" flex flex-col   gap-4  rounded-md shadow-md sm:py-8 px-6 ">
      <div>
        <img src={logo} alt="" />
      </div>
      
      <h2 className="text-xl font-semibold ">
        {category_name}
      </h2>
      <p className="  text-gray-400">
        {availability}
      </p>
      
    </div>
  );
};

export default CategoryCard;
