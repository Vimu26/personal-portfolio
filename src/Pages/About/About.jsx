import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
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
        padding: "2rem 1rem"
      }}
    >
      <Grid container sx={{ width: "100%", alignItems: "center" }}>
        {!isSmallScreen && (
          <Grid item xs={12} sm={6} sx={{ paddingBottom: "1rem" }}>
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*dbp0mouy8vkUXC5y-NosiQ.jpeg"
              alt="Profile"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Grid>
        )}

        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: "start" }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "cornflowerblue" }}
            >
              <b>About Me</b>
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: "1rem", fontSize: "1.1rem" }}
            >
              I'm Akalanka Vimukthi Rathnayake, a Passionate Software Engineer
              from Sri Lanka. I'm a Fast Learning, Responsible, Adaptable,
              Hardworking, and a Loyal Team Player that is driven to meet or
              exceed a company's expectations to deliver high-quality software
              products.
            </Typography>

            {[
              { label: "Name", value: "Akalanka Vimukthi Rathnayake" },
              { label: "Date of Birth", value: "2000.01.26" },
              {
                label: "Address",
                value: "67/9B , Woodland av, Kalubowila , Dehiwala , SriLanka"
              },
              { label: "Email", value: "akalankavimukthi2@gmail.com" },
              { label: "Phone", value: "+94 77 459 6550" }
            ].map((item, index) => (
              <Grid
                container
                key={index}
                sx={{ alignItems: "center", marginBottom: "0.5rem" }}
              >
                <Grid
                  item
                  xs={3}
                  sx={{ fontSize: "1.2rem", color: theme.palette.text.primary }}
                >
                  {item.label}
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                >
                  {item.value}
                </Grid>
              </Grid>
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
