import React from "react";

const HomeCard = ({ title, description, image, buttonText, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 bg-white rounded-2xl shadow-lg p-6 md:p-10`}
    >
      {/* Text */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {title}
        </h2>

        <p className="text-gray-600 text-base md:text-lg">{description}</p>

        <button className="mt-2 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 w-full h-64 md:h-80">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default HomeCard;
