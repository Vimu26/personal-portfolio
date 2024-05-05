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

const Contact = () => {
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    pno: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    Fname: false,
    Lname: false,
    email: false,
    pno: false,
    message: false,
  });
  const [formValid, setFormValid] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: value.trim() === "" });
  };

  const handleSubmit = () => {
    const { Fname, Lname, email, pno, message } = formData;
    // Check if any required field is empty
    if (
      Fname.trim() === "" ||
      Lname.trim() === "" ||
      email.trim() === "" ||
      pno.trim() === "" ||
      message.trim() === ""
    ) {
      // Set errors for all empty required fields
      setFormErrors({
        Fname: Fname.trim() === "",
        Lname: Lname.trim() === "",
        email: email.trim() === "",
        pno: pno.trim() === "",
        message: message.trim() === "",
      });
      return;
    }
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

  // Check overall form validity
  React.useEffect(() => {
    const isValid = Object.values(formErrors).every((error) => !error);
    setFormValid(isValid);
  }, [formErrors]);

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
        Need to Hire? Please Feel Free to send a Message <br />
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
              required
              margin="normal"
              value={formData.Fname}
              onChange={handleChange}
              error={formErrors.Fname}
              helperText={formErrors.Fname && "First Name is required"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="Lname"
              label="Last Name"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={formData.Lname}
              onChange={handleChange}
              error={formErrors.Lname}
              helperText={formErrors.Lname && "Last Name is required"}
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
              required
              type="email"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              error={formErrors.email}
              helperText={formErrors.email && "Email is required"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="pno"
              label="Contact Number"
              variant="outlined"
              fullWidth
              required
              type="number"
              margin="normal"
              value={formData.pno}
              onChange={handleChange}
              error={formErrors.pno}
              helperText={formErrors.pno && "Contact Number is required"}
            />
          </Grid>
        </Grid>

        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          required
          rows={4}
          margin="normal"
          value={formData.message}
          onChange={handleChange}
          error={formErrors.message}
          helperText={formErrors.message && "Message is required"}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{ width: "100%", height: "4rem", marginTop: "0.6rem" }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            endIcon={<SendIcon />}
            disabled={
              !formValid &&
              (formData.Fname.trim() === "" ||
                formData.Lname.trim() === "" ||
                formData.email.trim() === "" ||
                formData.pno.trim() === "" ||
                formData.message.trim() === "")
            }
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
            <Button color="inherit" size="small" onClick={handleCloseSnackbar}>
              Close
            </Button>
          }
        />
      </div>
    </Container>
  );
};

export default Contact;
