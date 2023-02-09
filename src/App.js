import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SecoundaryNavbar from "./components/SecoundaryNavbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecoundaryNavbar />
      <Hero />
    </div>
  );
}

export default App;
