import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center">
      <div className="w-1/2">
        <img src="/path/to/your/image.jpg" alt="About Us" className="rounded-lg" />
      </div>
      <div className="w-1/2 px-6">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">Welcome to our website! We are dedicated to providing you with the best services/products in the industry.</p>
        <p className="text-lg text-gray-700 mb-4">Our team consists of passionate individuals who strive for excellence in everything we do.</p>
        <p className="text-lg text-gray-700 mb-4">Feel free to explore our site and reach out to us if you have any questions or inquiries. We're here to help!</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default About;