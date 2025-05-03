"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import codingBackground from "../../public/sage-friedman-HS5CLnQbCOc-unsplash.jpg";

const dynamicWords = [
  "anxiety",
  "stress",
  "procrastination",
  "anger",
  "low self-esteem",
  "self-doubt",
  "perfectionism",
  "guilt",
  "people-pleasing",
  "fear of failure",
  "codependency",
  "self-sabotage",
  "triggers",
  "limiting beliefs",
  "excuses",
  "avoidance",
  "overwhelm",
  "need to control",
  "emotional wounds",
  "emotional reactivity",
  "childhood conditioning",
  "money blocks",
  "lack of self-worth",
  "deepest fears",
  "holding yourself back",
  "shame around past choices",
  "subconscious patterns and loops",
];

const testimonials = [
  {
    name: "Martha P., Founder of a Tech Startup",
    text: "Breakthrough Methods helped me reconnect with parts of myself I didn’t even realize I had — buried strengths, quiet desires, and a deeper wisdom that had been hidden under years of survival. It felt like remembering who I was before I started trying to be who the world expected. This work didn’t just shift how I show up — it reawakened the real me.",
  },
  {
    name: "David M., Director of Strategy & Innovation",
    text: "I spent years searching for answers outside myself - books, mentors, strategies - hoping something would finally click. But nothing truly did until Breakthrough Methods helped me access the clarity I’d been chasing, hear my own truth, and actually trust it. The answers were never out there — they were within me all along.",
  },
  {
    name: "Jorg V., Regional Director",
    text: "Before Breakthrough Methods, I was stuck in a loop of overthinking and self-doubt — constantly second-guessing myself and struggling to move forward with confidence. This work helped me cut through the noise of my mind and drop into my body, where I could finally hear my truth and trust it. I began meeting each moment with clarity, courage, and choices I didn’t even know I had. Breakthrough Methods unlocked a new level of self-trust — and with it, opportunities I’d been blind to for years.",
  },
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentWord = dynamicWords[wordIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return currentWord.slice(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % dynamicWords.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 15000);

    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={codingBackground}
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>


      {/* Main Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 w-full">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-18">
          Set yourself free from <br />
            <span className="text-yellow-400 border-r-2 border-yellow-400 pr-1">
              {displayText}
            </span>
          </h1>
          <p className="text-gray-200 text-lg mb-18">
            Breakthrough Methods is a proven transformational system that clears
            the internal resistance blocking you from becoming who you're meant
            to be, doing what you're here to do, and having what you truly want
            and desire.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition">
            Join the waitlist
          </button>
        </div>

        {/* Right Section (Testimonials) */}
        <div className="md:w-1/2  mt-12 md:mt-0 md:pl-48 text-center md:text-left">
          <div className="flex justify-center md:justify-start space-x-2 mb-4">
            {/* You can add testimonial avatars here if needed */}
          </div>
          <p className="text-white italic max-w-md transition-opacity duration-500">
            “{testimonials[activeTestimonial].text}”
          </p>
          <p className="text-gray-300 mt-2">
            – {testimonials[activeTestimonial].name}
          </p>
          <div className="flex justify-center md:justify-start space-x-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  idx === activeTestimonial ? "bg-white" : "bg-yellow-500"
                }`}
                onClick={() => setActiveTestimonial(idx)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
