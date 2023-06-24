import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Viewwork from "./components/Viewwork";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-black">
      
      <Navbar />
      <Home />
      <Viewwork />
      <About />
      <Skills />
      <Contact />

      
    </div>
  );
}

export default App;
