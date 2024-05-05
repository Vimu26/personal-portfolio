import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Header = ({ darkMode, toggleDarkMode }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 10,
        padding: "2rem 1.4rem 0rem 1.4rem",
        backgroundColor: theme.palette.background.default,
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
                  <Button
                    color="inherit"
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      color: theme.palette.text.primary,
                    }}
                  >
                    Home
                  </Button>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <Button
                    color="inherit"
                    style={{ color: theme.palette.text.primary }}
                  >
                    About
                  </Button>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <Button
                    color="inherit"
                    style={{ color: theme.palette.text.primary }}
                  >
                    Skills
                  </Button>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <Button
                    color="inherit"
                    style={{ color: theme.palette.text.primary }}
                  >
                    Projects
                  </Button>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
                  <Button
                    color="inherit"
                    style={{ color: theme.palette.text.primary }}
                  >
                    Contact
                  </Button>
                </Grid>
                <Grid item style={{ paddingLeft: "0" }}>
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
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Contact</Button>
          </Stack>
        </Box>
        <IconButton
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          // Adjust position as needed
        >
          <Brightness4Icon />
        </IconButton>
      </Drawer>
    </div>
  );
};

export default Header;
