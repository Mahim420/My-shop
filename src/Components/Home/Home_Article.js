import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home_Article = () => {
  return (
    <div className="w-[45%]">
      <h1 className="text-6xl font-bold text-white">COX'S BAZAR</h1>
      <p className="text-white text-xl mt-[26px]">
        Cox'Bazar is a city fishing port tourism centre and district
        headquarters in southeastern Bangladesh. It is a famous mostly for its
        long natural sandy beach and its ...
      </p>
      <button className="btn btn-warning mt-6">
        Booking
        <AiOutlineArrowRight></AiOutlineArrowRight>
      </button>
    </div>
  );
};

export default Home_Article;
