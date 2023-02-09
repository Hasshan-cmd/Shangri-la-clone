import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondaryNavbar />
      <Hero />
    </div>
  );
}

export default App;
