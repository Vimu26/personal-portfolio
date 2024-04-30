import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <div>
      <Header />
      <div style={{ position: "relative", top: "6rem" }}>
        <Home />
        <div style={{ marginTop: "5rem", marginBottom: "6rem" }}>
          <About />
        </div>
        <div style={{ marginTop: "6rem", marginBottom: "3rem" }}>
          <Skills />
        </div>
        <div style={{ marginTop: "6rem", marginBottom: "5rem" }}>
          <Projects />
        </div>
        <div style={{ marginTop: "10rem", marginBottom: "10rem" }}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
