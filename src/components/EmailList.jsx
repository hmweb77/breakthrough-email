'use client';
import Link from 'next/link';
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
    setSubmitted(true);

    const section = document.querySelector('#email');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="email" className="relative w-full flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 py-16 bg-[#004859] mx-auto prose prose-invert ">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center text-white leading-tight">
        Be the First to Know When Breakthrough Methods™ Launches
      </h2>
      <p className="text-base sm:text-lg mb-10 text-center text-white max-w-3xl">
        Join the waitlist for early access, exclusive content, launch bonuses, and insider insights
        to start your breakthrough before the doors even open!
      </p>
      <p className="text-base sm:text-lg mb-12 text-center text-white max-w-3xl">
        Drop your name and email below + follow us on socials to be the first to know and experience
        the launch journey.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="md:w-3xl w-full space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg px-5 py-4 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#00DBFF] text-base"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg px-5 py-4 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#00DBFF] text-base"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#00DBFF] text-[#004859] font-semibold py-4 rounded-lg hover:bg-[#0092BF] transition text-base"
          >
            Join the waitlist
          </button>
        </form>
      ) : (
        <div className="mt-10 p-6 bg-[#006b74] rounded-lg shadow text-center max-w-2xl">
          <p className="text-white font-semibold text-2xl mb-4">
            Thank you for joining the waitlist
          </p>
          <p className="text-[#CAF8FF] text-lg">
            You’re one step closer to the breakthrough you’ve been waiting for!
          </p>
        </div>
      )}

      <div className="flex justify-center space-x-8 mt-10">
        <Link href="https://www.instagram.com/breakthroughmethods" target="_blank" aria-label="Instagram" className="text-white hover:text-[#00DBFF] text-2xl">
          <FaInstagram />
        </Link>
        <Link href="https://www.facebook.com/breakthroughmethods" target="_blank" aria-label="Facebook" className="text-white hover:text-[#00DBFF] text-2xl">
          <FaFacebook />
        </Link>
        <Link href="https://www.linkedin.com/company/breakthroughmethods/" target="_blank" aria-label="LinkedIn" className="text-white hover:text-[#00DBFF] text-2xl">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}