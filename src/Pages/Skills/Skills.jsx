import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Grid, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

const Skills = () => {
  const [selectedDecision, setSelectedDecision] = useState("EXPERIENCE");

  const onDecisionChange = (decision) => {
    setSelectedDecision(decision);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        <b>Skills & Experience</b>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div>
            <h3>Languages and Tools</h3>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap"
            }}
          >
            <div style={{ margin: "1rem " }}>
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-typescript-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-javascript-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-java-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skill-icons/html.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-css-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-c-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-angular-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skills/icons8-react-80.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skills/icons8-node-js-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-express-js-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-mongodb-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-mysql-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-express-js-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-nestjs-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skills/icons8-redux-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-github-90.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skill-icons/icons8-gitlab-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skills/icons8-bootstrap-96.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div style={{ margin: "1rem " }}>
              {" "}
              <img
                src={require("../../../src/assets/images/skills/mui.png")}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <div
              style={{
                display: "flex",
                marginTop: "1rem",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                variant={
                  selectedDecision === "EXPERIENCE" ? "contained" : "outlined"
                }
                onClick={() => onDecisionChange("EXPERIENCE")}
                startIcon={<WorkIcon />}
                sx={{ mr: 1 }}
              >
                Experience
              </Button>

              <Button
                variant={
                  selectedDecision === "EDUCATION" ? "contained" : "outlined"
                }
                onClick={() => onDecisionChange("EDUCATION")}
                startIcon={<SchoolIcon />}
              >
                Education
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
