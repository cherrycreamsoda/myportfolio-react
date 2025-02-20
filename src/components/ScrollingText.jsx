import React, { useEffect, useRef, useState } from "react";
import "./ScrollText.css";

const ScrollText = ({ onComplete }) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const text = "WELCOME TO MY PORTFOLIO .";
  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
      setScrollPosition(scrollPercentage);

      if (scrollPercentage > 50 && !isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isComplete, onComplete]);

  return (
    <div ref={containerRef} className="scroll-container">
      <div className="text-container">
        {words.map((word, index) => {
          const threshold = (index / words.length) * 50;
          return (
            <span
              key={index}
              className="word"
              style={{
                opacity: scrollPosition > threshold ? 1 : 0,
                transform: `translateX(${
                  scrollPosition > threshold ? 0 : "100px"
                })`,
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollText;
