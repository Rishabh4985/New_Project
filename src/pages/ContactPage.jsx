import React from "react";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
        
        {/* Left Section – Info */}
        <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-blue-100 mb-6">
            Have questions about our online tuition classes?  
            Fill out the form and our team will get back to you shortly.
          </p>

          <ul className="space-y-4 text-sm">
            <li>📚 One-to-one & group classes</li>
            <li>🧑‍🏫 Experienced instructors</li>
            <li>⏱ Flexible timings</li>
            <li>🎯 Free demo available</li>
          </ul>
        </div>

        {/* Right Section – Form */}
        <div className="p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us what you're looking for..."
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
