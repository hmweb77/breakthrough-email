'use client';
import { useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add actual submit logic (API, etc.)
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto  rounded-xl p-8 text-center shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Be the First to Know When Breakthrough Methods Launches
      </h2>
      <p className="text-gray-700 mb-6">
        Join the waitlist for early access, exclusive content, launch bonuses, and insider insights
        to start your breakthrough before the doors even open!
        <br />
        Drop your name and email below + follow us on socials to be the first to know and experience
        the launch journey.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Join Waitlist
          </button>
        </form>
      ) : (
        <p className="text-green-700 font-semibold text-lg">
          Thank you! You’re on the waitlist. Check your inbox soon.
        </p>
      )}

      <div className="flex justify-center space-x-6 mt-6">
        <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-yellow-500 text-2xl">
          <FaInstagram />
        </a>
        <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-yellow-500 text-2xl">
          <FaFacebook />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-yellow-500 text-2xl">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
