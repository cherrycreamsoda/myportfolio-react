import React from "react";
import GridPattern from "./components/GridPattern";
import { FloatingBlobs } from "./components/FloatingBlobs";
import ScrollText from "./components/ScrollingText";

export default function App() {
  return (
    <>
      <GridPattern squareSize={20} lineColor="rgba(255, 255, 255, 0.11)" />
      <FloatingBlobs />
      <main style={{ height: "200vh", position: "relative" }}>
        <ScrollText />
      </main>
    </>
  );
}
