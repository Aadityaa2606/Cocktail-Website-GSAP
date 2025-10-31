import "./App.css";
import gsap from "gsap";
import { ScrollTrigger, SplitText, ScrambleTextPlugin } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </div>
  );
}

export default App;
