import * as React from "react";
import Container from "@mui/material/Container";
import { Grid, Button } from "@mui/material";
import Typography from '@mui/material/Typography';

const Skills = () => {
  return (
    <Container>
           <Typography variant="h4" gutterBottom>
       <b>Skills & Experience</b>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <div>
            <h3>Languages and Tools</h3>
            
          </div>

          <div style={{display:"flex" , justifyContent : "start", alignItems:"center" , flexWrap: "wrap", }}>
            <div style={{margin: '1rem '}}><img
                  src="../../assets/images/skill-icons/icons8-typescript-96.png"
                  alt=""
                  style={{width: '70px' , height: '70px'}}
              /></div>
            <div style={{margin: '1rem '}}><img
                  src="../../assets/images/skills/icons8-react-80.png"
                  alt=""
                  style={{width: '70px' , height: '70px'}}
              /></div>
            <div style={{margin: '1rem '}}>html</div>
            <div style={{margin: '1rem '}}>html</div>
            <div style={{margin: '1rem '}}>html</div>
            <div style={{margin: '1rem '}}>html</div>
            <div style={{margin: '1rem '}}>html</div>
            <div style={{margin: '1rem '}}>html</div>
            <div style={{margin: '1rem '}}>html</div>
            <div style={{margin: '1rem '}}>html</div>




          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <h3>Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
