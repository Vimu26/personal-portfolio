import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Snackbar,
  Container,
  useTheme
} from "@mui/material";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    pno: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({
    Fname: "",
    Lname: "",
    email: "",
    pno: "",
    message: ""
  });
  const [formValid, setFormValid] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (pno) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(pno);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Prevent non-numeric characters in contact number
    if (name === "pno") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData({ ...formData, [name]: numericValue });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    if (value.trim() === "") {
      errorMessage = `${
        name === "Fname"
          ? "First Name"
          : name === "Lname"
          ? "Last Name"
          : name === "pno"
          ? "Contact Number"
          : name.charAt(0).toUpperCase() + name.slice(1)
      } is required`;
    } else if (name === "email" && !validateEmail(value)) {
      errorMessage = "Enter a valid email address";
    } else if (name === "pno" && !validatePhoneNumber(value)) {
      errorMessage = "Enter a valid 10-digit contact number";
    }

    setFormErrors({ ...formErrors, [name]: errorMessage });
  };

  const handleSubmit = () => {
    const { Fname, Lname, email, pno, message } = formData;
    const errors = {
      Fname: Fname.trim() === "" ? "First Name is required" : "",
      Lname: Lname.trim() === "" ? "Last Name is required" : "",
      email:
        email.trim() === ""
          ? "Email is required"
          : !validateEmail(email)
          ? "Enter a valid email address"
          : "",
      pno:
        pno.trim() === ""
          ? "Contact Number is required"
          : !validatePhoneNumber(pno)
          ? "Enter a valid 10-digit contact number"
          : "",
      message: message.trim() === "" ? "Message is required" : ""
    };

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) return;

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

  useEffect(() => {
    const isValid =
      formData.Fname.trim() !== "" &&
      formData.Lname.trim() !== "" &&
      formData.email.trim() !== "" &&
      validateEmail(formData.email) &&
      formData.pno.trim() !== "" &&
      validatePhoneNumber(formData.pno) &&
      formData.message.trim() !== "";
    setFormValid(isValid);
  }, [formData]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: "6rem",
        paddingBottom: "4rem",
        backgroundColor: theme.palette.mode === "dark" ? "#292828" : "#ffffff",
        color: theme.palette.text.primary
      }}
    >
      <Typography
        variant="h4"
        align="center"
        style={{ color: "cornflowerblue" }}
      >
        <b>Contact Me</b>
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ color: "grey" }}>
        Need to Hire? Please Feel Free to send a Message <br />
        I'll get in touch with you as Soon as Possible.
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
              onBlur={handleBlur}
              error={!!formErrors.Fname}
              helperText={formErrors.Fname}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  borderColor: "cornflowerblue"
                }
              }}
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
              onBlur={handleBlur}
              error={!!formErrors.Lname}
              helperText={formErrors.Lname}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  borderColor: "cornflowerblue"
                }
              }}
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
              onBlur={handleBlur}
              error={!!formErrors.email}
              helperText={formErrors.email}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  borderColor: "cornflowerblue"
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="pno"
              label="Contact Number"
              variant="outlined"
              fullWidth
              required
              type="tel"
              margin="normal"
              value={formData.pno}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!formErrors.pno}
              helperText={formErrors.pno}
              inputProps={{ maxLength: 10 }}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  borderColor: "cornflowerblue"
                }
              }}
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
          onBlur={handleBlur}
          error={!!formErrors.message}
          helperText={formErrors.message}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused": {
              borderColor: "cornflowerblue"
            }
          }}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              width: "100%",
              height: "4rem",
              marginTop: "0.6rem",
              backgroundColor: "rgb(68, 135, 255)"
            }}
            variant="contained"
            onClick={handleSubmit}
            endIcon={<SendIcon />}
            disabled={!formValid}
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
