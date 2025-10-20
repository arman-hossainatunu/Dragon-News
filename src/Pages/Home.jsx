// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import NewsCard from "../Components/NewsCard";

const Home = () => {
  
  const data = useLoaderData();
  // console.log( data);
 

  return (
    <div>
      
      {data.map((news) => (
        <NewsCard key={news.id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Home;
