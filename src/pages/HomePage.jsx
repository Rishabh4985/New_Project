import React from "react";
import Counter from "../components/Counter";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar links={["Home", "About Us"]} brand="Biggies Corporations" />
      <Counter />
    </div>
  );
};

export default HomePage;
