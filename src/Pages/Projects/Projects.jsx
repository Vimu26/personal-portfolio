import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
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
      image: require("../../assets/images/projects/foddie.png"),
      title: "Foodie",
      link: "https://github.com/Vimu26/Foodie",
      description:
        "This is a Web application for Restaurants, Restaurant owners can add their restaurant here including their dishes with dish categories and Customers can add or remove foods to cart and place orders for the food as their preferences ,as well as Riders can take orders and deliver food (2023 - present)",
      stack: "Angular , Bootstrap ExpressJS , MongoDB , FireBase",
      video:
        "https://drive.google.com/file/d/17EHjLkvYFCYKigixvABBXFObn2ayRXy_/view?usp=sharing",
      objectFit: "fill"
    },
    {
      image: require("../../assets/images/projects/sociafy img.png"),
      title: "Sociafy",
      link: "https://github.com/Vimu26/sociafy-react-app",
      description:
        "This is a Social Media web application that users can Communicate each other globally, users can add or remove friends. users are available to add new posts and those posts can see by all users and they can like or remove like and comment to posts as well. (2024-present) ",
      stack: "React , ExpressJS , MongoDB , REDUX , MUI",
      video:
        "https://drive.google.com/file/d/1ksbmrYmDjmmprLW7wkIPSY_zsn2L568D/view?usp=drive_link",
      objectFit: "fill"
    },
    {
      image: require("../../assets/images/projects/mobile app.png"),
      title: "Rent a Car Mobile App",
      link: "https://github.com/Vimu26/Rent-a-Car-Mobile-App",
      description:
        "This is a Mobile application suitable for IOS and for Android Platforms, this is developed for rent car community , Users can select their own cars, add as favorites remove if not. (2024 - present)",
      stack: "React Native , Typescript , NestJs , MongoDB",
      video:
        "https://drive.google.com/file/d/1Q53pCGOB9yuC9vFaPoKBrLnnsahJIlIF/view?usp=drive_link",
      objectFit: "contain"
    },
    {
      image: require("../../assets/images/projects/emp man img.png"),
      title: "Employee Management System",
      link: "https://github.com/Vimu26/Employ-Management-System",
      video:
        "https://drive.google.com/file/d/1sS7WbvuWNKvdvDaKqSQOSMQpcArM-Zaq/view?usp=sharing",
      description:
        "This is a Web Application that manages Employees in a company , Admin can add , edit , delete and create and view and users according to their details ,Employee details of the company can be manages using this BackEnd application ",
      stack: "React , MUI , ExpressJS , MySQL",
      objectFit: "contain"
    },
    {
      image: require("../../assets/images/projects/book.jpg"),
      title: "Book Store",
      link: "https://github.com/Vimu26/Books-Store-api",
      description:
        "This is a BackEnd that manages books and their details in a book store , store owners can add their books to the web app and search  books and add books , edit book details and delete books (2024)",
      stack: " NestJS , MongoDB"
    },
    {
      image: require("../../assets/images/projects/contact.jpg"),
      title: "Contact Manager App",
      link: "https://github.com/Vimu26/contact-manger-app",
      description:
        "This is a BackEnd that manages Contacts of a specific user, users can save their contact and details in it , and search contacts , edit contact and details and delete contacts also available in this BackEnd application (2023)",
      stack: " ExpressJs , MongoDB"
    },
    {
      image: require("../../assets/images/projects/rock img.png"),
      title: "Rock Paper Scissors",
      link: "https://github.com/Vimu26/Rock-Paper-Scissors---JS",
      description:
        "This is a App for play the game named as rock paper scissors,  anyone can play this game with the compute , and the score is displaying on the screen (2023)",
      stack: "HTML , CSS , Javascript",
      video:
        "https://drive.google.com/file/d/1QeTgbbQT--Gsl_kRugZT4pUAo_uepyCH/view?usp=sharing",
      objectFit: "contain"
    },
    {
      image: require("../../assets/images/projects/weather img.png"),
      title: "Weather App",
      link: "https://github.com/Vimu26/Weather-App",
      description:
        "This is a Web Application that see the real time weather details in a specific place in the world (2023)",
      stack: "HTML , CSS , Javascript",
      video:
        "https://drive.google.com/file/d/1p5XDnzYX1xJ3a5Qem4k6ZSbcdRQm1rxh/view?usp=sharing",
      objectFit: "contain"
    }
  ];

  const handleClick = (link) => {
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
      gap: 40
    },
    {
      breakpoint: theme?.breakpoints?.values?.md,
      cols: 2,
      rows: 1,
      gap: 60
    },
    {
      breakpoint: theme?.breakpoints?.values?.lg,
      cols: 2,
      rows: 1,
      gap: 60
    },
    {
      breakpoint: theme?.breakpoints?.values?.xl,
      cols: 2,
      rows: 1,
      gap: 60
    }
  ];

  return (
    <Container
      maxWidth="xl"
      style={{
        paddingTop: "1rem",
        backgroundColor: theme.palette.mode === "dark" ? "#292828" : "#ffffff"
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
                  theme.palette.mode === "dark" ? "rgb(29 29 29)" : "#ffffff"
              }}
            >
              {/* {slide.image ? (
                <CardMedia
                  component="img"
                  height="300"
                  image={slide.image}
                  style={{
                    objectFit: slide.objectFit,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  alt=""
                />
              ) : null} */}
              <CardContent style={{ minHeight: "160px" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    color: "cornflowerblue"
                  }}
                >
                  <b>{slide.title}</b>
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    color:
                      theme.palette.mode === "dark" ? "#ffffff" : "#575757",
                    marginBottom: 10
                  }}
                >
                  {slide.description}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    color: "rgb(144, 101, 255)"
                  }}
                >
                  Technologies : {slide.stack}
                </Typography>
              </CardContent>
              {!isSmallScreen ? (
                <CardActions
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Button
                    style={{ width: "45%" }}
                    variant="outlined"
                    // color="rgb(68 135 255)"
                    onClick={() => handleClick(slide.link)}
                    startIcon={<GitHubIcon />}
                  >
                    Go to GitHub
                  </Button>
                  {slide.video ? (
                    <Button
                      style={{
                        width: "45%",
                        backgroundColor: "rgb(68 135 255)"
                      }}
                      variant="contained"
                      onClick={() => handleClick(slide.video)}
                      startIcon={<PreviewIcon />}
                    >
                      Watch Video
                    </Button>
                  ) : null}
                </CardActions>
              ) : (
                <CardActions
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <IconButton
                    aria-label="github"
                    size="large"
                    onClick={() => handleClick(slide.link)}
                    color="primary"
                  >
                    <GitHubIcon fontSize="inherit" />
                  </IconButton>
                  {slide.video ? (
                    <IconButton
                      aria-label="preview"
                      size="large"
                      onClick={() => handleClick(slide.video)}
                      color="primary"
                    >
                      <PreviewIcon fontSize="inherit" />
                    </IconButton>
                  ) : null}
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
