import React from "react";
import GridPattern from "./components/GridPattern";
import { FloatingBlobs } from "./components/FloatingBlobs";

export default function App() {
  return (
    <>
      <GridPattern squareSize={20} lineColor="rgba(255, 255, 255, 0.11)" />
      <FloatingBlobs />
      <main>
        <h1>Hello World.</h1>
      </main>
    </>
  );
}
