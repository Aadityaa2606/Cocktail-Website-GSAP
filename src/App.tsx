import "./App.css";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Cocktails />
    </div>
  );
}

export default App;
