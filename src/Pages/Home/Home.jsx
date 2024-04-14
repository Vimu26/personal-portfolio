import React from "react";
import Typewriter from "typewriter-effect";
import Container from "@mui/material/Container";
import { Box, Grid, useMediaQuery, useTheme, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleEmailButtonClick = () => {
    const emailAddress = "akalankavimukthi2@gmail.com";
    const subject = "";
    const body = "";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  const handleDownloadButtonClick = () => {
    const anchorElement = document.createElement("a");
    anchorElement.href =
      "https://drive.google.com/file/d/1cJ4ANWS5KQXe1o1wzpsS1uW_0TpLc-Ap/view?usp=drive_link";
    anchorElement.download = "Akalanka Vimukthi CV 2024.pdf";
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  };

  return (
    <Container maxWidth="false">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ width: "100%", alignItems: "center", justifyContent: "center" }}
        >
          {!isSmallScreen && (
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  fontFamily: "cursive",
                  fontSize: "2rem",
                  color: "#82b5e2"
                }}
              >
                <strong>I'm,</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "cursive",
                  fontSize: "2rem",
                  color: "#82b5e2"
                }}
              >
                <strong>Akalanka Vimukthi Rathnayake</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: isSmallScreen ? "center" : "start",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                <div
                  className="App"
                  style={{
                    fontFamily: "cursive",
                    fontSize: "2.8rem",
                    fontWeight: 800,
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    color: "blue"
                  }}
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Full Stack Engineer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Full Stack Engineer")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                    options={{
                      autoStart: true,
                      loop: true
                    }}
                  />
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  onClick={handleDownloadButtonClick}
                >
                  Download CV
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  marginTop: "1rem"
                }}
              >
                <IconButton
                  color="primary"
                  aria-label="fb"
                  onClick={() => {
                    window.open("https://www.facebook.com", "_blank");
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="link"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/vimu26/",
                      "_blank"
                    );
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  aria-label="link"
                  onClick={() => {
                    window.open("https://github.com/Vimu26", "_blank");
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton aria-label="link" onClick={handleEmailButtonClick}>
                  <EmailIcon />
                </IconButton>
              </div>
            </Grid>
          )}
          {isSmallScreen && (
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontFamily: "cursive",
                  fontSize: "2rem",
                  color: "#82b5e2"
                }}
              >
                <strong>I'm,</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontFamily: "cursive",
                  fontSize: "2rem",
                  color: "#82b5e2",
                  textAlign: "center"
                }}
              >
                <strong>Akalanka Vimukthi Rathnayake</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: isSmallScreen ? "center" : "start",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                <div
                  className="App"
                  style={{
                    fontFamily: "cursive",
                    fontSize: "2.1rem",
                    fontWeight: 800,
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    color: "blue"
                  }}
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Full Stack Engineer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Full Stack Engineer")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                    options={{
                      autoStart: true,
                      loop: true
                    }}
                  />
                </div>
              </div>
              <div style={{ marginTop: "1rem", textAlign: "center" }}>
                <Button variant="contained" startIcon={<DownloadIcon />}>
                  Download CV
                </Button>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem"
                }}
              >
                <IconButton
                  color="primary"
                  aria-label="fb"
                  onClick={() => {
                    window.open("https://www.facebook.com", "_blank");
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="link"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/vimu26/",
                      "_blank"
                    );
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  aria-label="link"
                  onClick={() => {
                    window.open("https://github.com/Vimu26", "_blank");
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton aria-label="link" onClick={handleEmailButtonClick}>
                  <EmailIcon />
                </IconButton>
              </div>
            </Grid>
          )}

          <Grid item xs={12} sm={6}>
            <img
              src="https://www.pngitem.com/pimgs/m/112-1127587_software-hire-developers-hd-png-download.png"
              alt=""
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                margin: "auto"
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
