import React from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Header />;
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
export default App;
