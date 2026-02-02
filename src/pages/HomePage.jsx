import React from "react";
import HomeCard from "../components/HomeCard";

const HomePage = () => {
  return (
    <div className="space-y-16 px-4 md:px-8 py-10 bg-gray-100">
      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Quality Online Tuition for Every Student
        </h1>
        <p className="text-gray-600 text-lg">
          Live interactive classes by experienced teachers from the comfort of
          your home.
        </p>
        <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Book Free Demo
        </button>
      </section>

      {/* Feature cards */}
      <section className="max-w-6xl mx-auto space-y-12">
        <HomeCard
          title="Experienced & Qualified Teachers"
          description="Learn from subject experts with years of teaching experience and proven results."
          image="https://source.unsplash.com/800x600/?teacher,classroom"
          buttonText="Meet Our Teachers"
        />

        <HomeCard
          reverse
          title="Live Interactive Online Classes"
          description="Ask questions in real-time, clear doubts instantly, and stay engaged throughout the class."
          image="https://source.unsplash.com/800x600/?online,class"
          buttonText="View Class Demo"
        />

        <HomeCard
          title="Affordable & Flexible Fee Structure"
          description="High-quality education at prices every parent can afford, with flexible batch timings."
          image="https://source.unsplash.com/800x600/?education,study"
          buttonText="View Courses"
        />
      </section>
    </div>
  );
};

export default HomePage;
