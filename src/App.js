import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Room from "./components/Room";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondaryNavbar />
      <Hero />
      <About />
      <Room />
    </div>
  );
}

export default App;
