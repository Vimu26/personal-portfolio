import React from "react";
import Typewriter from "typewriter-effect";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{width:'100%' , alignItems:'center', justifyContent:'center'}}>
          <Grid item xs={6}>
          <div style={{
            fontFamily : 'cursive',
            fontSize : '2rem',
            color: '#82b5e2'
          }}>
                <strong>I'm</strong>
            </div>
            <div style={{
            fontFamily : 'cursive',
            fontSize : '2rem',
            color: '#82b5e2'
          }}>
             <strong>Akalanka Vimukthi Rathnayake</strong>
                
            </div>
            <div style={{
                display : 'flex',
                justifyContent:'start',
                alignItems:'center',
                textAlign:'center'}}>

            </div>
                 <div
          className="App"
          style={{
            fontFamily : 'cursive',
            fontSize : '2.8rem',
            fontWeight: 800,
            textAlign: "center",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            color: "blue"
          }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Full Stack Engineer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Full Stack Engineer")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true
            }}
          />
        </div>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://www.pngitem.com/pimgs/m/112-1127587_software-hire-developers-hd-png-download.png"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
