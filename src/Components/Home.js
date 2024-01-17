import React from "react";
import data from "../Data/Profile.json";

const Home = () => {
  return (
    <>
      <h2>Hello, I am {data.fullname}!</h2>
      <p className="text-justify">{data.description}</p>
    </>
  );
};

export default Home;
