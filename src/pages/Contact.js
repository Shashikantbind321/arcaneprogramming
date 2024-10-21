import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "./Contact.css";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setIsButtonEnabled(
      fullName.trim() !== "" &&
        email.trim() !== "" &&
        mobile.trim() !== "" &&
        message.trim() !== ""
    );
  }, [fullName, email, mobile, message]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError("");
    setMobileError("");

    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regular expression for mobile validation (10 digits)
    const mobilePattern = /^[0-9]{10}$/;

    // Validate email format
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Validate mobile format
    if (!mobilePattern.test(mobile)) {
      setMobileError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Proceed with form submission
    alert("Message sent Successfully!");
  };

  return (
    <section>
      <Container>
        <div className="section-header">
          <Typography variant="h2" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </div>

        <Grid container spacing={3} className="contact-info">
          <Grid item xs={12} sm={4}>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <LocationOnIcon />
              </div>
              <div className="contact-info-content">
                <Typography variant="h4">Address</Typography>
                <Typography>
                  MM 45 Sec-L Aliganj Lucknow,
                  <br /> 226024
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <PhoneIcon />
              </div>
              <div className="contact-info-content">
                <Typography variant="h4">Phone</Typography>
                <Typography>+91-9936796369 | 6306199011</Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <EmailIcon />
              </div>
              <div className="contact-info-content">
                <Typography variant="h4">Email</Typography>
                <Typography>arcanepinfotech@gmail.com</Typography>
              </div>
            </div>
          </Grid>
        </Grid>

        <div
          className="contact-form"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            style={{
              width: "400px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h4" align="center">
              Send Message
            </Typography>

            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
            />

            <TextField
              label="Mobile"
              type="tel"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              error={!!mobileError}
              helperText={mobileError}
              inputProps={{
                pattern: "[0-9]{10}", // Example pattern for 10 digit mobile number
              }}
            />

            <TextField
              label="Type your Message..."
              variant="outlined"
              fullWidth
              required
              multiline
              rows={3} // Adjusted height
              margin="normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={!isButtonEnabled}
            >
              Send
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
