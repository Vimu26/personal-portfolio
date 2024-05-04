import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Grid, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useMediaQuery, useTheme } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const Skills = () => {
  const [selectedDecision, setSelectedDecision] = useState("EXPERIENCE");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const onDecisionChange = (decision) => {
    setSelectedDecision(decision);
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
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            marginBottom: "2rem",
            display: "ruby",
            marginTop: isSmallScreen ? 0 : "4%",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <Typography
              variant="h4"
              gutterBottom
              style={{ textAlign: isSmallScreen ? "center" : "match-parent" }}
            >
              <b>Skills & Experience</b>
            </Typography>
          </div>{" "}
          <br></br>
          <div>
            <Typography variant="h5">Languages and Tools</Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
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
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div
              style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant={
                    selectedDecision === "EXPERIENCE" ? "contained" : "outlined"
                  }
                  onClick={() => onDecisionChange("EXPERIENCE")}
                  startIcon={<WorkIcon />}
                  sx={{ mr: 1, mb: 2 }}
                >
                  Experience
                </Button>

                <Button
                  variant={
                    selectedDecision === "EDUCATION" ? "contained" : "outlined"
                  }
                  onClick={() => onDecisionChange("EDUCATION")}
                  startIcon={<SchoolIcon />}
                  sx={{ mb: 2 }}
                >
                  Education
                </Button>
              </div>
              {selectedDecision === "EXPERIENCE" ? (
                <Grid container spacing={2}>
                  {!isSmallScreen ? (
                    <Grid container spacing={2}>
                      <Grid item xs={2}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <Divider
                            orientation="vertical"
                            variant="middle"
                            style={{
                              height: "80%",
                              marginBottom: "65px",
                            }}
                          />
                        </div>
                      </Grid>
                      <Grid item xs={10} style={{ paddingLeft: "0" }}>
                        <Stack spacing={2}>
                          <Grid container spacing={2}>
                            <Grid
                              item
                              xs={1}
                              style={{
                                paddingLeft: "0",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Divider
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              ></Divider>
                            </Grid>
                            <Grid item xs={10} style={{ paddingLeft: "0" }}>
                              <Card
                                variant="outlined"
                                style={{ marginTop: "1rem" }}
                              >
                                <CardContent>
                                  <Typography variant="h6" gutterBottom>
                                    Full-Time Trainee Software Engineer
                                  </Typography>
                                  <Typography variant="body1" gutterBottom>
                                    Echonlabs (PVT) LTD | (2024 Mar - Present)
                                  </Typography>
                                  <Typography variant="body1">
                                    Currently Working as a Trainee Software
                                    Engineer
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>

                          <Grid container spacing={2}>
                            <Grid
                              item
                              xs={1}
                              style={{
                                paddingLeft: "0",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Divider
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              ></Divider>
                            </Grid>
                            <Grid item xs={10} style={{ paddingLeft: "0" }}>
                              <Card
                                variant="outlined"
                                style={{ marginTop: "1rem" }}
                              >
                                <CardContent>
                                  <Typography variant="h6" gutterBottom>
                                    Part-Time Trainee Software Engineer
                                  </Typography>
                                  <Typography variant="body1" gutterBottom>
                                    Echonlabs (PVT) LTD | (2023 Jan - 2023 Feb)
                                  </Typography>
                                  <Typography variant="body1">
                                    Worked as a Trainee Software Engineer
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>

                          <Grid
                            container
                            spacing={2}
                            style={{ marginBottom: "1rem" }}
                          >
                            <Grid
                              item
                              xs={1}
                              style={{
                                paddingLeft: "0",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Divider
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              ></Divider>
                            </Grid>
                            <Grid item xs={10} style={{ paddingLeft: "0" }}>
                              <Card
                                variant="outlined"
                                style={{ marginTop: "1rem" }}
                              >
                                <CardContent>
                                  <Typography variant="h6" gutterBottom>
                                    Software Engineer
                                  </Typography>
                                  <Typography variant="body1" gutterBottom>
                                    National Child Protection Authorization
                                    (NCPA) | ( 2023 - 2024)
                                  </Typography>
                                  <Typography variant="body1">
                                    Leading the Government Project NCPA , and
                                    Handling the client
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>
                        </Stack>
                        <div
                          style={{
                            marginTop: "1rem",
                            marginBottom: "2rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Button
                            variant="contained"
                            startIcon={<DownloadIcon />}
                            onClick={handleDownloadButtonClick}
                          >
                            Download CV
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  ) : (
                    <Container maxWidth="lg" style={{ paddingRight: "0" }}>
                      <Stack style={{ marginBottom: "2rem" }}>
                        <Card variant="outlined" style={{ marginTop: "1rem" }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Full-Time Trainee Software Engineer
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Echonlabs (PVT) LTD | (2024 Mar - Present)
                            </Typography>
                            <Typography variant="body1">
                              Currently Working as a Trainee Software Engineer
                            </Typography>
                          </CardContent>
                        </Card>
                        <Card variant="outlined" style={{ marginTop: "1rem" }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Part-Time Trainee Software Engineer
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Echonlabs (PVT) LTD | (2023 Jan - 2023 Feb)
                            </Typography>
                            <Typography variant="body1">
                              Worked as a Trainee Software Engineer
                            </Typography>
                          </CardContent>
                        </Card>
                        <Card variant="outlined" style={{ marginTop: "1rem" }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Software Engineer
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              National Child Protection Authorization (NCPA)
                            </Typography>
                            <Typography variant="body1">
                              Leading the Government Project NCPA , and Handling
                              the client
                            </Typography>
                          </CardContent>
                        </Card>
                      </Stack>
                      <div
                        style={{
                          marginBottom: "2rem",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          variant="contained"
                          startIcon={<DownloadIcon />}
                          onClick={handleDownloadButtonClick}
                        >
                          Download CV
                        </Button>
                      </div>
                    </Container>
                  )}
                </Grid>
              ) : (
                <div
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Container maxWidth="lg" style={{ paddingRight: "0" }}>
                    <Stack xs={10} style={{ marginBottom: "2rem" }}>
                      <Card
                        variant="outlined"
                        style={{ maxWidth: isSmallScreen ? "95%" : "90%" }}
                      >
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            Undergraduate Student
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            University of Sri Jayawardenapura , SriLanka | (2021
                            - 2024)
                          </Typography>
                          <Typography variant="body1">
                            Computer Science related Degree
                          </Typography>
                        </CardContent>
                      </Card>
                    </Stack>
                    <div
                      style={{
                        marginBottom: "2rem",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        onClick={handleDownloadButtonClick}
                      >
                        Download CV
                      </Button>
                    </div>
                  </Container>
                </div>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
