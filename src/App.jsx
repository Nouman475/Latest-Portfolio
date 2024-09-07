import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Project from "./components/Projects";
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Hero/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
