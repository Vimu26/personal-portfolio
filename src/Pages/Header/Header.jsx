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
import { Link as RouterLink } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Header = ({ toggleDarkMode }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block:
              id === "skills" ? (isSmallScreen ? "start" : "end") : "center",
          });
        }
      }
    }, 300);
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        zIndex: 10,
        height: 80,
        display: "flex",
        alignItems: "center",
        paddingLeft: "1.4rem",
        backgroundColor: theme.palette.mode === "dark" ? "#292828" : "#ffffff",
        top: 0,
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
                  <RouterLink
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
                  </RouterLink>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <RouterLink
                    underline="none"
                    onClick={() => scrollToSection("about")}
                    style={{
                      textDecoration: "none",
                      color: "cornflowerblue",
                      fontSize: "20px",
                    }}
                  >
                    <b>About</b>
                  </RouterLink>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <RouterLink
                    underline="none"
                    onClick={() => scrollToSection("skills")}
                    style={{
                      textDecoration: "none",
                      color: "cornflowerblue",
                      fontSize: "20px",
                    }}
                  >
                    <b>Skills</b>
                  </RouterLink>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <RouterLink
                    underline="none"
                    onClick={() => scrollToSection("projects")}
                    style={{
                      textDecoration: "none",
                      color: "cornflowerblue",
                      fontSize: "20px",
                    }}
                  >
                    <b>Projects</b>
                  </RouterLink>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <RouterLink
                    underline="none"
                    onClick={() => scrollToSection("blogs")}
                    style={{
                      textDecoration: "none",
                      color: "cornflowerblue",
                      fontSize: "20px",
                    }}
                  >
                    <b>Blogs</b>
                  </RouterLink>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <RouterLink
                    underline="none"
                    onClick={() => scrollToSection("contact")}
                    style={{
                      textDecoration: "none",
                      color: "cornflowerblue",
                      fontSize: "20px",
                    }}
                  >
                    <b>Contact</b>
                  </RouterLink>
                </Grid>
                <Grid item style={{ paddingLeft: "0", marginTop: "-8px" }}>
                  <IconButton
                    onClick={toggleDarkMode}
                    aria-label="Toggle Dark Mode"
                  >
                    <Brightness4Icon />
                  </IconButton>
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
                style={{ color: theme.palette.primary.main }}
                aria-label="menu"
                onClick={toggleMenu}
              >
                <MenuIcon />
              </IconButton>
            ) : null}
          </Grid>
        </Grid>
      </Box>

      <Drawer
        PaperProps={{
          sx: {
            backgroundColor:
              theme.palette.mode === "light" ? "#ffffff" : "#292828",
          },
        }}
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
      >
        <Box
          sx={{
            width: 250,
            paddingTop: "1.2rem",
            paddingLeft: "1rem",
            height: "100%",
          }}
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
            <RouterLink
              onClick={() => scrollToSection("home")}
              style={{
                textDecoration: "none",
                color: "cornflowerblue",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <b>Home</b>
            </RouterLink>
            <RouterLink
              onClick={() => scrollToSection("about")}
              style={{
                textDecoration: "none",
                color: "cornflowerblue",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <b>About</b>
            </RouterLink>
            <RouterLink
              onClick={() => scrollToSection("skills")}
              style={{
                textDecoration: "none",
                color: "cornflowerblue",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <b>Skills</b>
            </RouterLink>
            <RouterLink
              onClick={() => scrollToSection("projects")}
              style={{
                textDecoration: "none",
                color: "cornflowerblue",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <b>Projects</b>
            </RouterLink>
            <RouterLink
              onClick={() => scrollToSection("blogs")}
              style={{
                textDecoration: "none",
                color: "cornflowerblue",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <b>Blogs</b>
            </RouterLink>
            <RouterLink
              onClick={() => scrollToSection("contact")}
              style={{
                textDecoration: "none",
                color: "cornflowerblue",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <b>Contact</b>
            </RouterLink>
            <IconButton onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
              <Brightness4Icon />
            </IconButton>
          </Stack>
        </Box>
      </Drawer>
    </div>
  );
};

export default Header;
