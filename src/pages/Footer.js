import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
  const iconStyle = { color: 'blue'};
  const googleMapsLink='https://www.google.com/maps/place/Arcane+programming+Infotech/@26.8918616,80.9496152,16.19z/data=!4m14!1m7!3m6!1s0x39995792721a3a51:0x433f88c9aa20030f!2sArcane+programming+Infotech!8m2!3d26.8929715!4d80.9534616!16s%2Fg%2F11j137r73y!3m5!1s0x39995792721a3a51:0x433f88c9aa20030f!8m2!3d26.8929715!4d80.9534616!16s%2Fg%2F11j137r73y?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D'
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <h3>100% Placement</h3>
          <h3>1000+ Satisfied Students</h3>
          <h3>05 Awards Received</h3>
          <h3>05-06 Years Experience</h3>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-company-info">
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="Arcane Programming InfoTech" height="70" />
          </Link>
          <p>
            Arcane programming infotech provides you the best services in the IT Industry, software training, and other training in this field with our experts.
          </p>
          <div className="footer-contact">
      <p>
        <MailOutlineIcon style={iconStyle} /> akashdattpathak@gmail.com
      </p>
      <p>
        <PhoneAndroidIcon  style={iconStyle}/> +91-9936796369 | 6306199011
      </p>
      <p>
        <PhoneIcon style={iconStyle} /> Landline: 05223529791
      </p>
      <p>
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'none' }}>
          <LocationOnIcon style={iconStyle} />
        </a>
        MM 45 Sec-L, Aliganj Lucknow 226024
      </p>
    </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="about">About Us</Link> </li>
            <li> <Link to="/">Services</Link> </li>
            <li> <Link to="contact">Contact Us</Link> </li>
            <li> <Link to="registration">Registration</Link> </li>
            <li> <Link to="/">Events</Link></li>
            <li> <Link to="login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            <li>Software Training Institute</li>
            <li>Software Training Center</li>
            <li>Software Development</li>
            <li>Android Application</li>
            <li>Free Classes On YouTube</li>
            <li>Works with new latest Technologies</li>
          </ul>
        </div>

        <div className="footer-news">
          <h4>Latest News</h4>
          <p>December 08, 2019</p>
          <p><a href="#">Our Achievement In Last Three Years</a></p>
          <p>December 08, 2019</p>
          <p><a href="#">Successful Growth With Us</a></p>
        </div>
      </div>

      <div className="footer-bottom-text">
        <p>© All rights reserved. Developed & designed by Shashikant Bind.</p>
      </div>
    </footer>
  );
};

export default Footer;
