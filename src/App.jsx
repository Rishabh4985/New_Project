import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar
        brand="Biggies Corporation"
        links={["Home", "About Us", "Contact"]}
      />
      <HomePage />
    </div>
  );
};

export default App;
