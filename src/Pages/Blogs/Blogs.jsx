import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid, useTheme, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "better-react-carousel";
import DescriptionIcon from "@mui/icons-material/Description";

const Blogs = () => {
  const theme = useTheme();

  const slides = [
    {
      title: "Communication Between Components in Angular",
      link: "https://medium.com/@akalankavimukthi2/communication-between-components-in-angular-2dedeaeeb8d3",
      description:
        "This Article is about communication between among components in Angular ,  this Absolutely for beginners and for intermediate level Angular Developers",
      objectFit: "fill"
    },
    {
      title: "Callbacks , Promises and Async/Await in Javascript",
      link: "https://medium.com/@akalankavimukthi2/understanding-callbacks-promises-and-async-await-in-javascript-cd3bcaa3c25b",
      description:
        "This Article is about Asynchronous Programming in javascript, that is the concept, most of the javascript developers struggles.This article includes about callbacks , promises and async/await ",
      objectFit: "fill"
    },
    {
      title: "Authentication using Json Web Token (JWT)",
      link: "https://medium.com/@akalankavimukthi2/understanding-json-web-tokens-jwt-for-authentication-6c22d1a52ca1",
      description:
        "This Article is about Authentication using Json Web Token (JWT), this article explains all about the JWT, for node js developers , the code also included in this article.",
      objectFit: "fill"
    },
    {
      title: "Exploring TypeScript Utility Types",
      link: "https://medium.com/@akalankavimukthi2/exploring-typescript-utility-types-6d88efab5cc9",
      description:
        "This Article is about utility types in Typescript, using these, reduces number of line in the code and make it more clear and improves the readability.",
      objectFit: "fill"
    },
    {
      title: "Basics of MongoDB Aggregation",
      link: "https://medium.com/@akalankavimukthi2/basics-operators-in-mongodb-aggregation-d71c6696183e",
      description:
        "This Article is about Basics of MongoDB Aggregation, If you are using MongoDB, MongoDB Aggregations are essential for querying, transforming, and combining data from multiple collections, enabling efficient data processing and improved application performance",
      objectFit: "fill"
    },
    {
      title: "Mastering JavaScript Array Methods",
      link: "https://medium.com/@akalankavimukthi2/mastering-javascript-array-methods-9b305a29bd99",
      description:
        "This Article is about Array Methods in Javascript,  Understanding the available array methods is essential for efficiently manipulating, transforming, and processing data.",
      objectFit: "fill"
    },
    {
      title: "Understanding Map and Set in JavaScript",
      link: "https://medium.com/@akalankavimukthi2/understanding-map-and-set-in-javascript-10563315966b",
      description:
        "This Article is about Map and Set in Javascript, JavaScript provides two powerful data structures, Map and Set, which offer unique advantages over traditional objects and arrays. These structures allow developers to efficiently manage and manipulate collections of data.",
      objectFit: "fill"
    },
    {
      title:
        "Understanding Memory Management and Garbage Collection in JavaScript",
      link: "https://medium.com/@akalankavimukthi2/understanding-memory-management-and-garbage-collection-in-javascript-f466a45b6b00",
      description:
        "This Article is about Memory Management and Garbage collection in javascript, In JavaScript and other languages, Memory management is automatic and performed by the JavaScript engine.",
      objectFit: "fill"
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
      cols: 3,
      rows: 1,
      gap: 60
    },
    {
      breakpoint: theme?.breakpoints?.values?.lg,
      cols: 3,
      rows: 1,
      gap: 60
    },
    {
      breakpoint: theme?.breakpoints?.values?.xl,
      cols: 3,
      rows: 1,
      gap: 60
    }
  ];

  return (
    <Container
      maxWidth="xl"
      style={{
        paddingTop: "2rem",
        backgroundColor: theme.palette.mode === "dark" ? "#292828" : "#ffffff"
      }}
    >
      <Grid container justifyContent="center" style={{ marginBottom: "2rem" }}>
        <Grid item>
          <Typography
            variant="h4"
            style={{ color: "cornflowerblue", marginBottom: "1rem" }}
          >
            <b>Blogs</b>
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
              <CardContent style={{ minHeight: "185px" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    color: "cornflowerblue",
                    textAlign: "center"
                  }}
                >
                  <b>{slide.title}</b>
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    color:
                      theme.palette.mode === "dark" ? "#ffffff" : "#575757",
                    textAlign: "center"
                  }}
                >
                  {slide.description}
                </Typography>
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Button
                  style={{ width: "80%" }}
                  variant="contained"
                  onClick={() => handleClick(slide.link)}
                  startIcon={<DescriptionIcon />}
                >
                  Read the Article
                </Button>
              </CardActions>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Blogs;
