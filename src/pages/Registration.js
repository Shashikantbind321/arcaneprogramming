import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, FormHelperText, Checkbox, FormControlLabel,Dialog, DialogActions, DialogContent, Typography, DialogTitle,IconButton } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import './Registration.css'; 

const Registration = () => {
  const [formData, setFormData] = useState({
    training: '',
    enrollmentNumber: '',
    date: new Date().toISOString().split('T')[0],
    name: '',
    email: '',
    mobile: '',
    collegeName: '',
    course: '',
    aadhar: '',
    technology: '',
    year: '',
    fees: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handling input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));

    // Automatically set fees based on training selection
    if (name === 'training') {
      let fee = 0;
      if (['Summer', 'Vocational', 'Industrial', 'Winter'].includes(value)) {
        fee = 1000;
      } else if (value === 'Apprenticeship') {
        fee = 2000;
      }
      setFormData((prevData) => ({
        ...prevData,
        fees: fee.toString(),
      }));
    }
  };

  // Checkbox handling for terms acceptance and button activation
  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      termsAccepted: !prevData.termsAccepted,
    }));
    setIsButtonActive(!isButtonActive);
  };

  // Validation functions for email, Aadhar, mobile, and college name
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validateAadhar = (aadhar) => /^\d{12}$/.test(aadhar);
  const validateMobile = (mobile) => /^\d{10}$/.test(mobile);
  const validateCollegeName = (collegeName) => collegeName.trim() !== '';

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation checks
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.training) {
      newErrors.training = 'Training selection is required';
    }
    if (!formData.course) {
      newErrors.course = 'Course selection is required';
    }
    if (!formData.technology) {
      newErrors.technology = 'Technology selection is required';
    }
    if (!formData.year) {
      newErrors.year = 'Year selection is required';
    }
    if (!validateCollegeName(formData.collegeName)) {
      newErrors.collegeName = 'College name is required';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!validateAadhar(formData.aadhar)) {
      newErrors.aadhar = 'Aadhar number must be exactly 12 digits';
    }
    if (!validateMobile(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be exactly 10 digits';
    }

    // If errors exist, set errors state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, show modal
    setIsModalOpen(true);
    console.log(formData); // Log the form data for further processing
  };

  // Close modal handler
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="full-screen-">
      <div className="full-screen-form">
        <h2 className="text-center text-danger fw-bold">Student Registration Form</h2>
        <p className="text-center">Please Fill Required Fields Carefully...</p>

        <form onSubmit={handleSubmit} className='full-screen-form'>
          {/* First Row */}
          <div className="row mb-3">
            <div className="col-12 col-md-4">
              <FormControl fullWidth error={Boolean(errors.training)}>
                <InputLabel>Please Choose Training</InputLabel>
                <Select
                  id="training"
                  name="training"
                  value={formData.training}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Training</MenuItem>
                  <MenuItem value="Summer">Summer Training</MenuItem>
                  <MenuItem value="Vocational">Vocational Training</MenuItem>
                  <MenuItem value="Industrial">Industrial Training</MenuItem>
                  <MenuItem value="Winter">Winter Training</MenuItem>
                  <MenuItem value="Apprenticeship">Apprenticeship Training</MenuItem>
                </Select>
                <FormHelperText>{errors.training}</FormHelperText>
              </FormControl>
            </div>
            <div className="col-12 col-md-4">
              <TextField
                label="Your Enrollment Number"
                name="enrollmentNumber"
                value={formData.enrollmentNumber}
                disabled
                fullWidth
              />
            </div>
            <div className="col-12 col-md-4">
              <TextField
                label="Today Current Date"
                name="date"
                value={formData.date}
                readOnly
                disabled
                fullWidth
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="row mb-3">
            <div className="col-12 col-md-4">
              <TextField
                label="Please Enter Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={Boolean(errors.name)}
                helperText={errors.name}
                fullWidth
              />
            </div>
            <div className="col-12 col-md-4">
              <TextField
                label="Please Enter Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                fullWidth
              />
            </div>
            <div className="col-12 col-md-4">
              <FormControl fullWidth error={Boolean(errors.course)}>
                <InputLabel>Please Choose Course</InputLabel>
                <Select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Course</MenuItem>
                  <MenuItem value="btechcsit">B-Tech(CS/IT)</MenuItem>
                  <MenuItem value="btechee">B-Tech(EE)</MenuItem>
                  <MenuItem value="mca">MCA</MenuItem>
                  <MenuItem value="bca">BCA</MenuItem>
                  <MenuItem value="diploma">Diploma(CS/IT/EC)</MenuItem>
                  <MenuItem value="pgdca">PGDCA/PGDCN</MenuItem>
                </Select>
                <FormHelperText>{errors.course}</FormHelperText>
              </FormControl>
            </div>
          </div>

          {/* Third Row */}
          <div className="row mb-3">
            <div className="col-12 col-md-4">
              <TextField
                label="Please Enter Your Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                error={Boolean(errors.mobile)}
                helperText={errors.mobile}
                fullWidth
                inputProps={{ maxLength: 10 }}
              />
            </div>
            <div className="col-12 col-md-4">
              <TextField
                label="Please Enter College Name"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                error={Boolean(errors.collegeName)}
                helperText={errors.collegeName}
                fullWidth
              />
            </div>
            <div className="col-12 col-md-4">
              <TextField
                label="Please Enter Aadhar Number"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                error={Boolean(errors.aadhar)}
                helperText={errors.aadhar}
                fullWidth
                inputProps={{ maxLength: 12 }}
              />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="row mb-3">
            <div className="col-12 col-md-4">
              <FormControl fullWidth error={Boolean(errors.technology)}>
                <InputLabel>Please Choose Technology</InputLabel>
                <Select
                  id="technology"
                  name="technology"
                  value={formData.technology}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Technology</MenuItem>
                  <MenuItem value="python">Python</MenuItem>
                  <MenuItem value="java">Java</MenuItem>
                  <MenuItem value="mlai">ML & AI</MenuItem>
                  <MenuItem value="datascience">Data Science</MenuItem>
                  <MenuItem value="php">PHP</MenuItem>
                  <MenuItem value="bigdata">Big Data</MenuItem>
                </Select>
                <FormHelperText>{errors.technology}</FormHelperText>
              </FormControl>
            </div>
            <div className="col-12 col-md-4">
              <FormControl fullWidth error={Boolean(errors.year)}>
                <InputLabel>Please Choose Year</InputLabel>
                <Select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Year</MenuItem>
                  <MenuItem value="first">First</MenuItem>
                  <MenuItem value="second">Second</MenuItem>
                  <MenuItem value="third">Third</MenuItem>
                  <MenuItem value="fourth">Fourth</MenuItem>
                  <MenuItem value="fifth">Fifth</MenuItem>
                </Select>
                <FormHelperText>{errors.year}</FormHelperText>
              </FormControl>
            </div>
            <div className="col-12 col-md-4">
              <TextField
                label="Fees"
                name="fees"
                value={formData.fees}
                disabled
                fullWidth
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-3">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.termsAccepted}
                  onChange={handleCheckboxChange}
                />
              }
              label="I have read and accepted the terms and conditions."
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isButtonActive}
            fullWidth
          >
            Submit
          </Button>
        </form>
      </div>
   {/* Success Modal */}
   <Dialog open={isModalOpen} onClose={handleCloseModal} className="custom-dialog">
        <DialogTitle disableTypography class="dialog-title">
          <IconButton aria-label="close" class="close-button" onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent class="dialog-content">
          <CheckCircleOutline className="success-icon" />
          <Typography variant="h6" class="success-message">
            Success
          </Typography>
          <Typography variant="body1" className="additional-text">
            Additional details saved successfully!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} class="okay-button"  variant="contained">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Registration;
