import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Teck from "./Components/Teck";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Statistics from "./Components/Statistics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Teck />
      <Projects />
      <Statistics />
      <Contact />
    </div>
  );
}

export default App;
