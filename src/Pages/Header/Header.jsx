import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Header = () => {
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
        backgroundColor: "#f0fff8",
        padding: "1.2rem"
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={6}
            sm={4}
            justifyContent="start"
            container
            fontSize="2rem"
            fontFamily="cursive"
            color="cornflowerblue"
          >
            Akalanka
          </Grid>
          {!isSmallScreen && (
            <Grid item xs={6} sm={8} md={8} lg={8}>
              <Grid container justifyContent="space-around" spacing={2}>
                <Grid item>
                  <Button color="inherit">Home</Button>
                </Grid>
                <Grid item>
                  <Button color="inherit">About</Button>
                </Grid>
                <Grid item>
                  <Button color="inherit">Skills</Button>
                </Grid>
                <Grid item>
                  <Button color="inherit">Projects</Button>
                </Grid>
                <Grid item>
                  <Button color="inherit">Contact</Button>
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
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Contact</Button>
          </Stack>
        </Box>
      </Drawer>
    </div>
  );
};

export default Header;