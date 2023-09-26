import React from "react";
import "../../Layout/Main.css";
import Home_Article from "./Home_Article";
import Home_Card from "./Home_Card";


const Home = () => {

  return (  
    <section className="flex items-center p-[40px]">
      <Home_Article></Home_Article>
      <div className="w-1/2">
        <Home_Card></Home_Card>
      </div>
    </section>
  );
};

export default Home;
