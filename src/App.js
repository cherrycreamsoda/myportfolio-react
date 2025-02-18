import React, { useEffect } from "react";
import GridPattern from "./components/GridPattern";
import { FloatingBlobs } from "./components/FloatingBlobs";
import ScrollText from "./components/ScrollingText";
import "./App.css";

export default function App() {
  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", appHeight);
    appHeight();
    return () => window.removeEventListener("resize", appHeight);
  }, []);

  return (
    <>
      <GridPattern squareSize={20} lineColor="rgba(255, 255, 255, 0.11)" />
      <FloatingBlobs />
      <main
        style={{
          minHeight: "200vh",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <ScrollText />
      </main>
    </>
  );
}
