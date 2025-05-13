"use client";
import { useState, useEffect } from "react";

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
    text: "Breakthrough Methods™ helped me reconnect with parts of myself I didn’t even realize I had - buried strengths, quiet desires, and a deeper wisdom that had <em>been hidden under years of survival</em>. It felt like remembering who I was before I started trying to be who the world expected. This work didn’t just shift how I show up - it reawakened the real me.",
  },
  {
    name: "David M., Director of Strategy & Innovation",
    text: "I spent years searching for answers outside myself - books, mentors, strategies - hoping something would finally click. But nothing truly did until Breakthrough Methods™ helped me access the clarity I’d been chasing, hear my own truth, and actually trust it. The answers were never out there - they were within me all along.",
  },
  {
    name: "Jorg V., Regional Director",
    text: "Before Breakthrough Methods™, I was stuck in a loop of overthinking and self-doubt - constantly second-guessing myself and struggling to move forward with confidence. <strong>This work helped me cut through the noise of my mind and drop into my body, where I could finally hear my truth and trust it</strong>. I began meeting each moment with clarity, courage, and choices I didn’t even know I had. Breakthrough Methods™ unlocked a new level of self-trust - and with it, opportunities I’d been blind to for years.",
  },
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const currentWord = dynamicWords[wordIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % dynamicWords.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 30000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="relative w-full  overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/underwater_converted.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#004859]/80 to-transparent z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:min-h-screen">
        <div className="w-full md:w-1/2 text-center md:text-left prose prose-invert mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white my-12 sm:mb-16">
            Set yourself free from <br />
            <span className="text-[#00BAE5] border-r-2 border-[#00DBFF] pr-1">
              {displayText}
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white mb-12 sm:mb-16">
            <span className="italic">
              Breakthrough Methods™ is a proven transformational system that
              clears the internal
            </span>{" "}
            resistance blocking you from becoming who you're meant to be, doing
            what you're here to do, and having what you truly want and desire.
          </p>
          <button
            onClick={() => {
              const section = document.getElementById("email");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-[#00BAE5] text-[#004859] font-semibold mb-4 px-6 py-3 rounded-lg hover:bg-[#0092BF] transition w-full sm:w-auto"
          >
            Join the waitlist
          </button>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left prose prose-invert max-w-md">
          <div
            className="italic transition-opacity text-white duration-500 text-base sm:text-xl"
            dangerouslySetInnerHTML={{
              __html: `“${testimonials[activeTestimonial].text}”`,
            }}
          />
          <p className="mt-2 text-xs sm:text-sm md:text-base text-white">
            – {testimonials[activeTestimonial].name}
          </p>
          <div className="flex justify-center md:justify-start space-x-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  idx === activeTestimonial ? "bg-white" : "bg-[#00DBFF]"
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
