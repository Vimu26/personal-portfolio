import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "#94b4fb",
          height: "3rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "1rem" }}
        >
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
