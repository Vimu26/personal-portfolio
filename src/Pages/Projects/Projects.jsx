import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import PreviewIcon from "@mui/icons-material/Preview";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  //   const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  //TODO @akalanka add the projects and do the stuff
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 2,
    slidesToScroll: 1,
    infinite: true,
    centerMode: false,
    arrows: true,
    centerPadding: isSmallScreen ? 0 : "2rem"
  };

  const slides = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard1",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard2",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard3",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard4",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard5",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard6",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&s",
      title: "Lizard7",
      link: "www.google.com",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
  ];

  const handleGitHubClick = (link) => {
    if (!/^https?:\/\//i.test(link)) {
      link = `http://${link}`;
    }
    window.open(link, "_blank");
  };

  return (
    <Container maxWidth="xl">
      <Grid container justifyContent={isSmallScreen ? "center" : "flex-start"}>
        <Grid item>
          <Typography variant="h4">
            <b>Projects</b>
          </Typography>
        </Grid>
      </Grid>
      <div
        style={{
          width: "100%",
          marginTop: "3rem",
          display: "flex!important",
          justifyContent: "center !important"
        }}
      >
        <Slider
          {...settings}
          style={{
            display: "flex!important",
            justifyContent: "center !important"
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index + 1}
              style={{
                width: "100%",
                display: "flex !important",
                justifyContent: "space-evenly !important",
                alignItems: "center !important",
                margin: "1rem 0",
                textAlign: "center"
              }}
            >
              <Card
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  textAlign: "center"
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={slide.image}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {slide.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {slide.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => handleGitHubClick(slide.link)}
                      startIcon={<GitHubIcon />}
                    >
                      Go to GitHub
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleGitHubClick(slide.link)}
                      startIcon={<PreviewIcon />}
                    >
                      Show More Images
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Projects;
