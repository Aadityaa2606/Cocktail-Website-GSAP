import "./App.css";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="flex-center h-screen">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
