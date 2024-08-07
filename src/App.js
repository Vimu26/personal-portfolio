import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import Blogs from './Pages/Blogs/Blogs'
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div
          style={{
            position: "relative",
            paddingTop: "5rem",
            overflow: "hidden",
          }}
          id="home"
        >
          <Home darkMode={darkMode} />
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="blogs">
            <Blogs/>
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
