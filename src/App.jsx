import { useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import LoadingScreenAnimation from "./components/LoadingScreenAnimation";
import Home from "./sections/Home";
import AnimationWaves from "./components/AnimationWaves";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const [isLoading, setIsloading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isLoading && (
        <LoadingScreenAnimation onComplete={() => setIsloading(true)} />
      )}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <AnimationWaves />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
