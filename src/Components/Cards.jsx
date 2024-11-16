import React from "react";

const Cards = ({data,handleClick,index}) => {
  const {image,name,artists,added}=data;
  return (
   
      <div className=" w-60 bg-white p-3 rounded-lg flex gap-6 relative pb-8 mt-24 ml-10">
        <div className=" w-20 bg-orange-600 h-20 rounded-lg overflow-hidden">
          <img className=" w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className=" leading-none">
          <h1 className=" font-semibold text-lg leading-none">{name}</h1>
          <h2 className="text-sm text-slate-700">{artists}</h2>
        </div>
        <div onClick={()=>handleClick(index)} className={`absolute w-44 text-center bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] whitespace-nowrap ${added===false?"bg-orange-600":"bg-teal-700"} text-white font-semibold px-2 py-[5px] rounded-full hover:cursor-pointer`}>
        <h1>{added === false ? "Added to Favourites":"Added"}</h1>
      </div>
      </div>

      
  
  );
};

export default Cards;
