import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Link } from "react-router-dom";

const Header = ({ location }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: id==="skills" ? isSmallScreen ? "start" :"end" : "center" });
      }
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 10,
        padding: "2rem 1.4rem 0rem 1.4rem",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={6}
            sm={5}
            justifyContent="start"
            container
            fontSize="2rem"
            fontFamily="cursive"
            color="cornflowerblue"
          >
            Akalanka
          </Grid>
          {!isSmallScreen && (
            <Grid item xs={6} sm={7} md={7} lg={7}>
              <Grid container justifyContent="space-evenly" spacing={2}>
                <Grid item style={{ paddingLeft: "0" }}>
                  <Link
                    component="button"
                    underline="none"
      
                    onClick={() => scrollToSection("home")}
                    style={{
                      textDecoration: "none",
                      color: "cornflowerblue",
                      fontSize: "20px",
                    }}
                  >
                    <b>Home</b>
                  </Link>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <Link
                       underline="none"
                    onClick={() => scrollToSection("about")}
                    style={{
                      textDecoration: "none",
                      color: "cornflowerblue",
                      fontSize: "20px",
                    }}
                  >
                    <b>About</b>
                  </Link>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <Link
                 
                    underline="none"
                    onClick={() => scrollToSection("skills")}
                    style={{
                      textDecoration: "none",
                      color: "cornflowerblue",
                      fontSize: "20px",
                    }}
                  >
                    <b>Skills</b>
                  </Link>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <Link
                 
                    underline="none"
                    onClick={() => scrollToSection("projects")}
                    style={{
                      textDecoration: "none",
                      color: "cornflowerblue",
                      fontSize: "20px",
                    }}
                  >
                    <b>Projects</b>
                  </Link>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <Link
            
                    underline="none"
                    onClick={() => scrollToSection("contact")}
                    style={{
                      textDecoration: "none",
                      color: "cornflowerblue",
                      fontSize: "20px",
                    }}
                  >
                    <b>Contact</b>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid
            item
            xs={6}
            sm={9}
            md={3}
            lg={3}
            justifyContent="center"
            container
          >
            {isSmallScreen ? (
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={toggleMenu}
              >
                <MenuIcon />
              </IconButton>
            ) : null}
          </Grid>
        </Grid>
      </Box>
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <Box
          sx={{ width: 250, paddingTop: "1.2rem", paddingLeft: "1rem" }}
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
        >
          <IconButton
            color="inherit"
            aria-label="close"
            onClick={toggleMenu}
            sx={{ marginBottom: "1rem" }}
          >
            <CancelOutlinedIcon />
          </IconButton>
          <Stack direction="column" spacing={2}>
            <Link
              onClick={() => scrollToSection("home")}
              style={{
                textDecoration: "none",
                color: "cornflowerblue",
                fontSize: "20px",
              }}
            >
              <b>Home</b>
            </Link>
            <Link
        
              onClick={() => scrollToSection("about")}
              style={{
                textDecoration: "none",
                color: "cornflowerblue",
                fontSize: "20px",
              }}
            >
              <b>About</b>
            </Link>
            <Link
          
              onClick={() => scrollToSection("skills")}
              style={{
                textDecoration: "none",
                color: "cornflowerblue",
                fontSize: "20px",
              }}
            >
              <b>Skills</b>
            </Link>
            <Link
         
              onClick={() => scrollToSection("projects")}
              style={{
                textDecoration: "none",
                color: "cornflowerblue",
                fontSize: "20px",
              }}
            >
              <b>Projects</b>
            </Link>
            <Link
           
              onClick={() => scrollToSection("contact")}
              style={{
                textDecoration: "none",
                color: "cornflowerblue",
                fontSize: "20px",
              }}
            >
              <b>Contact</b>
            </Link>
          </Stack>
        </Box>
      </Drawer>
    </div>
  );
};

export default Header;
