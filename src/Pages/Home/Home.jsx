import React from "react";
import Typewriter from "typewriter-effect";
import Container from "@mui/material/Container";
import {
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  Button,
  IconButton
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

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

  const goToContactSection = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadButtonClick = () => {
    const anchorElement = document.createElement("a");
    anchorElement.href =
      "https://drive.google.com/uc?export=download&id=1ciyUv3KWPzZseTtKFwxYCn8uNnfRA-zb";
    anchorElement.download = "Akalanka Vimukthi CV 2024.pdf";
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  };

  return (
    <div
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#292828" : "#ffffff",
        color: theme.palette.text.primary,
        paddingBottom: "6rem",
        paddingTop: "2rem",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          flexGrow: 1
        }}
      >
        <Box
          sx={{
            flexGrow: 1
          }}
        >
          <Grid
            container
            // spacing={2}
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {!isSmallScreen && (
              <Grid item xs={12} sm={7}>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "2.6rem",
                    color: "cornflowerblue",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1rem"
                  }}
                >
                  <strong>I'm,</strong>
                </div>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "2.6rem",
                    color: "cornflowerblue",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    textAlign: "center"
                  }}
                >
                  <strong>Akalanka Vimukthi Rathnayake</strong>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  <div
                    className="App"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "rgb(144 101 255)",
                      marginBottom: "1rem"
                    }}
                  >
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Full Stack Engineer")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Web Developer")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Mobile App Developer")
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
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem"
                  }}
                >
                  <Button
                    style={{ backgroundColor: "rgb(68 135 255)" }}
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    onClick={handleDownloadButtonClick}
                  >
                    Download CV
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CallIcon />}
                    onClick={goToContactSection}
                  >
                    Contact Me
                  </Button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2rem"
                  }}
                >
                  <IconButton
                    color="primary"
                    aria-label="fb"
                    onClick={() => {
                      window.open(
                        "https://web.facebook.com/akalanka.rathnayaka.58/",
                        "_blank"
                      );
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    aria-label="link"
                    onClick={() => {
                      window.open("https://github.com/Vimu26", "_blank");
                    }}
                  >
                    <GitHubIcon />
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
                    onClick={handleEmailButtonClick}
                  >
                    <EmailIcon />
                  </IconButton>
                </div>
              </Grid>
            )}
            {isSmallScreen && (
              <Grid
                item
                xs={12}
                sm={12}
                style={{ paddingTop: "2rem", width: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "sans-serif",
                    fontSize: "2rem",
                    color: theme.palette.primary.main,
                    marginBottom: "1rem"
                  }}
                >
                  <strong>I'm,</strong>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "sans-serif",
                    fontSize: "2rem",
                    color: theme.palette.primary.main,
                    textAlign: "center",
                    marginBottom: "1rem"
                  }}
                >
                  <strong>Akalanka Vimukthi Rathnayake</strong>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  <div
                    className="App"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "1.95rem",
                      fontWeight: 800,
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      color: "rgb(144 101 255)",
                      marginBottom: "1rem"
                    }}
                  >
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Full Stack Engineer")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Web Developer")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Mobile App Developer")
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
                <div
                  style={{
                    paddingTop: "1rem",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    gap: 20
                  }}
                >
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "rgb(68 135 255)" }}
                    startIcon={<DownloadIcon />}
                    onClick={handleDownloadButtonClick}
                  >
                    Download CV
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CallIcon />}
                    onClick={goToContactSection}
                  >
                    Contact Me
                  </Button>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2rem"
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
                    aria-label="link"
                    onClick={() => {
                      window.open("https://github.com/Vimu26", "_blank");
                    }}
                  >
                    <GitHubIcon />
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
                    onClick={handleEmailButtonClick}
                  >
                    <EmailIcon />
                  </IconButton>
                </div>
              </Grid>
            )}

            <Grid item xs={12} sm={5} style={{ marginTop: "2rem" }}>
              <img
                src="https://r2.erweima.ai/imgcompressed/compressed_46c4b22d420b61d8e93934c35a64586b.webp"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  margin: "auto"
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
