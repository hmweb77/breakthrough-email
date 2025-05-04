"use client"
import "./globals.css";
import { useEffect } from "react";



export default function RootLayout({ children }) {
  useEffect(() => {
    const audio = document.getElementById("bg-audio");
    const handleUserInteraction = () => {
      audio.play();
      window.removeEventListener("click", handleUserInteraction);
    };
    window.addEventListener("click", handleUserInteraction);
    return () => window.removeEventListener("click", handleUserInteraction);
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Background Audio */}
        <audio id="bg-audio" loop>
          <source src="/clip.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {/* Main Page Content */}
        {children}
      </body>
    </html>
  );
}
