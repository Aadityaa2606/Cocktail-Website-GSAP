import "./App.css";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}

export default App;
