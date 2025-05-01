'use client';
import { useState } from 'react';
import Image from 'next/image';
import codingBackground from '../../public/coding.png';

export default function LandingPage() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('There was an issue subscribing. Please try again.');
      }
    } catch (error) {
      alert('Error connecting to server.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 font-sans relative overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-10 opacity-50">
        <Image
          src={codingBackground}
          alt="Background pattern"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Foreground White Box */}
      <div className="max-w-2xl w-full bg-white rounded-3xl p-6 sm:p-10 text-center relative z-20 border-t-8 border-teal-400 text-black shadow-xl">
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-teal-700 mb-4">
          Feel Alive Again
        </h1>
        <p className="text-md sm:text-lg text-gray-800 mb-6 leading-relaxed">
          Join the <span className="font-semibold text-teal-600">Breakthrough Movement</span> — reconnect to your authentic identity, shed limiting patterns, and receive exclusive insights from <em>UNBECOMING</em> blending neuroscience, nature, and vitality.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-xl p-3 placeholder-black text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-xl p-3 placeholder-black text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-xl hover:bg-teal-600 transition text-lg font-semibold"
            >
              Join the Movement
            </button>
          </form>
        ) : (
          <p className="text-green-700 text-lg font-semibold">
            Thank you! You’re on the list. Check your inbox soon.
          </p>
        )}

        <p className="text-sm text-gray-600 mt-4">
          We honor your privacy. No spam, only life-changing insights.
        </p>
      </div>
    </div>
  );
}
