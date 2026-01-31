import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div>
      <Navbar
        brand="Biggies Corporation"
        links={[
          {
            label: "Home",
            path: "/",
          },
          {
            label: "Contact Us",
            path: "contact-us",
          },
          {
            label: "About Us",
            path: "about-us",
          },
        ]}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;
