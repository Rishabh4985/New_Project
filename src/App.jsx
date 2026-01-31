import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

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
      <AppRoutes />
    </div>
  );
};

export default App;
