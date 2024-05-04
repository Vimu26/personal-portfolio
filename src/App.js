import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ position: "relative", top: "6rem" }} id="home">
        <Home />
        <div style={{ marginTop: "5rem", marginBottom: "6rem" }} id="about">
          <About />
        </div>
        <div style={{ marginTop: "6rem", marginBottom: "3rem" }} id="skills">
          <Skills />
        </div>
        <div style={{ marginTop: "6rem", marginBottom: "5rem" }} id="projects">
          <Projects />
        </div>
        <div style={{ marginTop: "10rem", marginBottom: "6rem" }} id="contact">
          <Contact />
        </div>
        <div style={{ marginTop: "6rem" }}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
