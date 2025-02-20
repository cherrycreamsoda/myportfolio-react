import React, { useState, useEffect } from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import GridPattern from "./components/GridPattern";
import { FloatingBlobs } from "./components/FloatingBlobs";
import ScrollText from "./components/ScrollingText";

import "./App.css";

export default function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (showContent) {
        const scrolled = Math.max(
          0,
          ((window.scrollY - window.innerHeight) / window.innerHeight) * 100
        );
        document.documentElement.style.setProperty(
          "--scroll-progress",
          `${scrolled}%`
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showContent]);

  return (
    <>
      <GridPattern squareSize={20} lineColor="rgba(255, 255, 255, 0.11)" />
      <FloatingBlobs />
      <main
        style={{
          minHeight: "300vh",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className="social-links">
          <div className="social-icons">
            <a
              href="https://github.com/cherrycreamsoda"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.instagram.com/thehamzazain/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/hamzazain2003/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
        <ScrollText onComplete={() => setShowContent(true)} />
        <div
          className={`content-section ${showContent ? "visible" : ""}`}
        ></div>
      </main>
    </>
  );
}
