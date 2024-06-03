import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "cornflowerblue",
        height: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="body2" align="center" style={{ margin: "1rem" }}>
        &copy; {new Date().getFullYear()} Akalanka Vimukthi Rathnayake. All
        rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
