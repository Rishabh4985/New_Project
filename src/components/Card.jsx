import React from "react";

const Card = ({ name, title, description, image, buttonText }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="w-full h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h1 className="text-sm text-gray-500 font-medium">{name}</h1>

        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Button */}
      <div className="p-5 pt-0">
        <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
