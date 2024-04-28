import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Snackbar,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
// import axios from 'axios';

const Contact = () => {
  //   const theme = useTheme();
  //   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    pno: "",
    message: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { Fname, Lname, email, pno, message } = formData;
    const subject = "Mail from Portfolio website";
    const to = "akalankavimukthi2@gmail.com";
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=Name: ${Fname} ${Lname}%0D%0AEmail: ${email}%0D%0AContact Number: ${pno}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;

    setFormData({ Fname: "", Lname: "", email: "", pno: "", message: "" });
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" align={"center"}>
        <b>Contact Me</b>
      </Typography>
      <Typography
        variant="subtitle1"
        align={"center"}
        sx={{
          color: "grey",
        }}
      >
        Need to Hire? Please Feel Free to send a Message <br></br>
        I'll get Touch with you as Soon as Possible.
      </Typography>

      <div style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              name="Fname"
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.Fname}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="Lname"
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.Lname}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="pno"
              label="Contact Number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.pno}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={formData.message}
          onChange={handleChange}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{ width: "100%", height: "4rem" }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            endIcon={<SendIcon />}
          >
            <b>Send</b>
          </Button>
        </div>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Message sent successfully!"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => handleCloseSnackbar}
            >
              Close
            </Button>
          }
        />
      </div>
    </Container>
  );
};

export default Contact;
