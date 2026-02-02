import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-blue-100">
          We provide high-quality online tuition to help students learn better,
          score higher, and grow with confidence.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make quality education accessible to every
              student through personalized online tuition. We focus on
              conceptual clarity, practical learning, and consistent progress.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">What We Believe</h3>
            <ul className="space-y-3 text-gray-600">
              <li>✔ Every student learns differently</li>
              <li>✔ Strong basics create strong results</li>
              <li>✔ Learning should be engaging</li>
              <li>✔ Confidence leads to success</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Experienced Teachers",
              "Personal Attention",
              "Flexible Timings",
              "Affordable Pricing",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <h3 className="font-medium text-gray-800">{item}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Designed to support students at every level.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Approach */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-3xl font-semibold mb-4">
              Our Teaching Approach
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We combine live classes, doubt-solving sessions, and regular
              assessments to ensure students stay on track. Our approach focuses
              on understanding concepts rather than memorization.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              📌 Concept-based learning
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              📌 Regular performance tracking
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              📌 One-to-one mentorship
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              📌 Free demo classes
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-600 text-white py-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Start Learning With Us Today
          </h2>
          <p className="mb-6 text-blue-100">
            Book a free demo class and experience our teaching style.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Book Free Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
