import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about-container full-screen-form">
      <h1 className="text-danger fw-bold">About Us</h1>
      <p>
        Welcome to [ Arcane Programming Infotech], your premier destination for
        software training and professional development. Our mission is to
        empower individuals with the skills and knowledge needed to thrive in
        the fast-paced tech industry.
      </p>
      <p>
        Founded in [2024], we have helped thousands of students achieve their
        career goals through our comprehensive training programs in various
        domains including web development, data science, mobile app development,
        and more.
      </p>
      <h2>Our Vision</h2>
      <p>
        To be a leading software training institute that provides high-quality
        education and fosters a culture of continuous learning and innovation.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Excellence</li>
        <li>Integrity</li>
        <li>Collaboration</li>
        <li>Innovation</li>
      </ul>
      <h2>Why Choose Us?</h2>
      <p>
        - Experienced Instructors
        <br />
        - Hands-on Training
        <br />
        - Flexible Learning Options
        <br />- Strong Industry Connections
      </p>
      <h2>Contact Us</h2>
      <p>
        For more information about our programs and enrollment, please contact
        us
        <span className="icon-email">
          <FontAwesomeIcon icon={faHandPointRight} />
          <a href="mailto:email@example.com"> email@example.com</a>
        </span>
        or call us at [+91-9936796369 | 6306199011].
      </p>
    </div>
  );
};

export default About;
