import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Counter: <span className="text-blue-600">{count}</span>
      </h1>

      <div className="flex gap-4">
        <button
          className="px-5 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
          onClick={increment}
        >
          Increment
        </button>

        <button
          className="px-5 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
          onClick={decrement}
        >
          Decrement
        </button>

        <button
          className="px-5 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
