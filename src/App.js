import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import React, { useState } from 'react';
import {  ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
       <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div style={{ position: "relative", top: "5rem" }}>
        <Home />
        <div>
          <About />
        </div>
        <div >
          <Skills />
        </div>
        <div style={{ paddingTop: "6rem", paddingBottom: "5rem" }}>
          <Projects />
        </div>
        <div style={{ paddingTop: "10rem", paddingBottom: "6rem" }}>
          <Contact />
        </div>
        <div style={{ paddingTop: "6rem" }}>
          <Footer />
        </div>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
