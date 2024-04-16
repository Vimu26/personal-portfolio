import About from "./Pages/About/About";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <div>
      <Header />
      <div style={{ position: "relative", top: "8rem" }}>
        <Home />
        <div style={{ marginTop: "5rem", marginBottom: "6rem" }}>
          <About />
        </div>
        <div style={{ marginTop: "6rem", marginBottom: "3rem" }}>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
