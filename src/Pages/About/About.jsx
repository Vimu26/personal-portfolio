import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{ width: "100%", alignItems: "center", justifyContent: "center" }}
      >
        {!isSmallScreen && (
          <Grid item xs={12} sm={6}>
            <img
              src="https://www.interviewbit.com/blog/wp-content/uploads/2021/11/Software-Engineer.png"
              alt=""
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                margin: "auto"
              }}
            />
          </Grid>
        )}

        <Grid item xs={12} sm={6}>
          <div>
            <h2>About Me</h2>
            <p
              style={{
                marginTop: "1rem",
                marginBottom: "1.5rem",
                fontSize: "1.3rem",
                color: "#717171"
              }}
            >
              I'm Akalanka Vimukthi Rathnayake , a Passionate Software Engineer
              From SriLanka
            </p>
            <Grid container>
              <Grid item xs={4}>
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: "1.3rem",
                    marginBottom: "1rem"
                  }}
                >
                  Name
                </div>
              </Grid>
              <Grid item xs={8}>
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: "1.3rem",
                    color: "cornflowerblue",
                    marginBottom: "1rem"
                  }}
                >
                  Akalanka Vimukthi Rathnayake
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: "1.3rem",
                    marginBottom: "1rem"
                  }}
                >
                  Date of Birth
                </div>
              </Grid>
              <Grid item xs={8}>
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: "1.3rem",
                    color: "cornflowerblue",
                    marginBottom: "1rem"
                  }}
                >
                  2000.01.26
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: "1.3rem",
                    marginBottom: "1rem"
                  }}
                >
                  Address
                </div>
              </Grid>
              <Grid item xs={8}>
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: "1.3rem",
                    color: "cornflowerblue",
                    marginBottom: "1rem"
                  }}
                >
                  67/9B , Woodland av, Kalubowila , Dehiwala , SriLanka
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2} sm={4}>
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: "1.3rem",
                    marginBottom: "1rem"
                  }}
                >
                  Email
                </div>
              </Grid>
              <Grid item xs={10} sm={8}>
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: "1.3rem",
                    color: "cornflowerblue",
                    marginBottom: "1rem"
                  }}
                >
                  akalankavimukthi2@gmail.com
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: "1.3rem",
                    marginBottom: "1rem"
                  }}
                >
                  Phone
                </div>
              </Grid>
              <Grid item xs={8}>
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: "1.3rem",
                    color: "cornflowerblue",
                    marginBottom: "1rem"
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