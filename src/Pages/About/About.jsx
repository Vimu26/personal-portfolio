import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#292828" : "#ffffff",
        color: theme.palette.text.primary,
      }}
    >
      <Grid
        container
        // spacing={2}
        sx={{ width: "100%", alignItems: "center", justifyContent: "center" }}
      >
        {!isSmallScreen && (
          <Grid item xs={12} sm={6} style={{ paddingBottom: "1rem" }}>
            <img
              src="https://thehonestcoder.com/wp-content/uploads/2022/12/logo-1-1024x831.png"
              alt=""
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                margin: "auto",
              }}
            />
          </Grid>
        )}

        <Grid item xs={12} sm={6}>
          <div
            style={{
              textAlign: isSmallScreen ? "center" : "match-parent",
              // paddingBottom: "2rem",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "cornflowerblue",
              }}
            >
              <b>About Me</b>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                marginTop: "1rem",
                marginBottom: "1.5rem",
                fontSize: "1.1rem",
                color: theme.palette.text.primary,
              }}
            >
              I'm Akalanka Vimukthi Rathnayake, a Passionate Software Engineer
              from Sri Lanka. I'm a Fast Learning, Responsible, Adaptable,
              Hardworking, and a Loyal Team Player that is driven to meet or
              exceed a company's expectations to deliver high-quality software
              products.
            </Typography>
            <Grid container>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "emoji",
                    fontSize: "1.3rem",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.palette.text.primary,
                  }}
                >
                  Name
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "emoji",
                    fontSize: "1.3rem",
                    color: "cornflowerblue",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Akalanka Vimukthi Rathnayake
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "emoji",
                    fontSize: "1.3rem",
                    marginBottom: "1rem",
                    color: theme.palette.text.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Date of Birth
                </div>
              </Grid>
              <Grid item xs={8}>
                <div
                  style={{
                    fontFamily: "emoji",
                    fontSize: "1.3rem",
                    color: "cornflowerblue",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  2000.01.26
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "emoji",
                    fontSize: "1.3rem",
                    marginBottom: "1rem",
                    color: theme.palette.text.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Address
                </div>
              </Grid>
              <Grid item xs={8}>
                <div
                  style={{
                    fontFamily: "emoji",
                    fontSize: "1.3rem",
                    color: "cornflowerblue",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  67/9B , Woodland av, Kalubowila , Dehiwala , SriLanka
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={2}
                sm={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "emoji",
                    fontSize: "1.3rem",
                    marginBottom: "1rem",
                    color: theme.palette.text.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Email
                </div>
              </Grid>
              <Grid item xs={10} sm={8}>
                <div
                  style={{
                    fontFamily: "emoji",
                    fontSize: isSmallScreen ? "1.12rem" : "1.3rem",
                    color: "cornflowerblue",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  akalankavimukthi2@gmail.com
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "emoji",
                    fontSize: "1.3rem",
                    marginBottom: "1rem",
                    color: theme.palette.text.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Phone
                </div>
              </Grid>
              <Grid item xs={8}>
                <div
                  style={{
                    fontFamily: "emoji",
                    fontSize: "1.3rem",
                    color: "cornflowerblue",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  +94 77 459 6550
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
