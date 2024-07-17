import React from "react";
import {FaQuoteLeft, FaQuoteRight, FaAngleLeft,FaAngleRight} from "react-icons/fa"

const Card = (props) => {
  let review = props.review 
  return (
    <div className="flex flex-col md:relative ">
      <div className="absolute top-[-7rem] z-[10] mx-auto ">
        
        <img
         className=" aspect-square object-cover rounded-full w-[140px] h-[140px] z-25" 
         src={review.image} />
         <div className=" bg-violet-500 absolute top-[-6px] -z-20 rounded-full w-[140px] h-[140px] left-[10px] "></div>
      </div>

      <div className=" text-center mt-7">
        <p className=" font-bold  text-2xl capitalize tracking-wider">{review.name}</p>
        <p className=" text-violet-300 uppercase text-sm">{review.job}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-4 ">
        <FaQuoteLeft/>
      </div>

      <div className="text-center mt-4 text-slate-600">
        <p>{review.text}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-4 ">
        <FaQuoteRight/>
      </div>


      
    </div>
  );
};

export default Card;