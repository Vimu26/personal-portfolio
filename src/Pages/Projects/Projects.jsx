import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid, useMediaQuery, useTheme, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import PreviewIcon from "@mui/icons-material/Preview";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import Carousel from "better-react-carousel";
import IconButton from "@mui/material/IconButton";

const Projects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const slides = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard1",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard2",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard3",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard4",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard5",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard6",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard7",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ];

  const handleGitHubClick = (link) => {
    if (!/^https?:\/\//i.test(link)) {
      link = `http://${link}`;
    }
    window.open(link, "_blank");
  };

  const responsiveLayout = [
    {
      breakpoint: theme?.breakpoints?.values?.sm,
      cols: 1,
      rows: 1,
      gap: 40,
    },
    {
      breakpoint: theme?.breakpoints?.values?.md,
      cols: 2,
      rows: 1,
      gap: 60,
    },
    {
      breakpoint: theme?.breakpoints?.values?.lg,
      cols: 2,
      rows: 1,
      gap: 60,
    },
    {
      breakpoint: theme?.breakpoints?.values?.xl,
      cols: 2,
      rows: 1,
      gap: 60,
    },
  ];

  return (
    <Container
      maxWidth="xl"
      style={{
        paddingTop: "4rem",
        backgroundColor: theme.palette.mode === "dark" ? "#292828" : "#ffffff",
      }}
    >
      <Grid container justifyContent="center" style={{ marginBottom: "2rem" }}>
        <Grid item>
          <Typography
            variant="h4"
            style={{ color: "cornflowerblue", marginBottom: "2rem" }}
          >
            <b>Projects</b>
          </Typography>
        </Grid>
      </Grid>
      <Carousel
        responsiveLayout={responsiveLayout}
        loop={true}
        scrollSnap={true}
        showDots={false}
        dotColorActive={"cornflowerblue"}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index + 1}>
            <Card
              variant="outlined"
              style={{
                paddingBottom: "1rem",
                marginBottom: "2rem",
                backgroundColor:
                  theme.palette.mode === "dark" ? "rgb(29 29 29)" : "#ffffff",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={slide.image}
                alt=""
              />
              <CardContent style={{ height: "103px" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    color: theme.palette.mode === "dark" ? "#ffffff" : "black",
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    color: theme.palette.mode === "dark" ? "#ffffff" : "black",
                  }}
                >
                  {slide.description}
                </Typography>
              </CardContent>
              {!isSmallScreen ? (
                <CardActions
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Button
                    style={{ width: "40%" }}
                    variant="outlined"
                    onClick={() => handleGitHubClick(slide.link)}
                    startIcon={<GitHubIcon />}
                  >
                    Go to GitHub
                  </Button>
                  <Button
                    style={{ width: "40%" }}
                    variant="contained"
                    onClick={() => handleGitHubClick(slide.link)}
                    startIcon={<PreviewIcon />}
                  >
                    Show More Images
                  </Button>
                </CardActions>
              ) : (
                <CardActions
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <IconButton
                    aria-label="github"
                    size="large"
                    onClick={() => handleGitHubClick(slide.link)}
                    color="primary"
                  >
                    <GitHubIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    aria-label="preview"
                    size="large"
                    onClick={() => handleGitHubClick(slide.link)}
                    color="primary"
                  >
                    <PreviewIcon fontSize="inherit" />
                  </IconButton>
                </CardActions>
              )}
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Projects;
