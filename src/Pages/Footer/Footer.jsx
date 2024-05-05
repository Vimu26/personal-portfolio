import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "cornflowerblue",
        height: "3rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="body2" align="center" style={{ marginTop: "1rem" }}>
        &copy; {new Date().getFullYear()} Akalanka Vimukthi Rathnayake. All
        rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
