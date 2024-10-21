import React from 'react';
import logo from '../assets/slider1.jpg';
import logo1 from '../assets/slider2.jpg';
import logo2 from '../assets/slider3.jpg';
import logo3 from '../assets/Navnit.jpg';
import logo4 from '../assets/Zainab.png';
import './Home.css';
import { FaYoutube } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';


const testimonials = [
  {
    name: 'Zainab Fatma',
    institute: 'Compucom Institute of Information Technology, Jaipur Rajasthan',
    education: 'B.Tech',
    position: 'Software Developer',
    image: logo3, // Replace with actual image path
    feedback: `Thank you for a great course. The presentation style was fantastic with many opportunities to ask questions and discuss real-life examples. It made the course both enjoyable and informative. Thanks to Akash Sir!`,
    rating: 5,
  },
  {
    name: 'Navneet Pathak',
    institute: 'Seth Vishambhar Nath Institute of Engineering and Technology, Lucknow',
    education: 'B.Tech',
    position: 'Software Developer',
    image: logo4, // Replace with actual image path
    feedback: `I am very grateful to Arcane Programming Infotech. The knowledge I gained was beyond my expectations. I achieved a job as a Software Developer very quickly.`,
    rating: 5,
  },
];

const youtubeLink = 'https://www.youtube.com/c/ArcaneProgrammingInfotech';
const Home = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div className="carousel-container">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={logo} className="d-block w-100" alt="Slider 1" />
            </div>
            <div className="carousel-item">
              <img src={logo1} className="d-block w-100" alt="Slider 2" />
            </div>
            <div className="carousel-item">
              <img src={logo2} className="d-block w-100" alt="Slider 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-container">
        <h2>OUR SERVICES</h2>
        <h3>We Creating Solutions For Your Establishment</h3>
        {/* first card of row  */}
        <div className="services-cards">
          <div className="service-card">
            <strong>Software Development</strong>
            <p>Web Application, Website, Android Development, Windows Application, Single Page Application, Angular Application</p>
          </div>
          <div className="service-card">
            <strong>Learn Technologies</strong>
            <p>Asp.net MVC, Asp.net, Asp.net Core, Java, JSP, Hibernate, Spring, Android with Java, Angular 7, 8, Python, Django, Jython, Php, Laravel etc.</p>
          </div>
          <div className="service-card">
            <strong>Summer/Vocational & Winter Training (45-50 Days)</strong>
            <p>Summer Training, Vocational Training, Winter Training, Internship, Project Training for B Tech, MCA, BCA, Diploma CS/IT etc.</p>
          </div>
        </div>
         {/* second card of rows  */}
        <div className="services-cards">
          <div className="service-card">
            <strong> Project Training</strong>
            <p>We can consecrate project based training and develope project according to our need.</p>
          </div>
          <div className="service-card">
            <strong>Internship/Industrial Training</strong> 
            <p>Arcane provide Intership and industrial training.This training is fully job oriented and duration of this training is 4 to 6 month.</p>
          </div>
          <div className="service-card">
           <strong>Online training</strong> 
            <p>In pandemic situation Arcane provide Online training and online free of cost programming language course.</p>
          </div>
        </div>
      </div>
    {/* YouTube-style banner  */}
<div className="youtube-banner">
<div className="youtube-icon">
  <a href={youtubeLink} target="_blank">
      <FaYoutube className="play-icon" />
      </a>
    </div>
  <h3>Feedback of Arcane Programming Infotech</h3>
  <h2 className="text-center">
  <div className="mb-2">We can watch all free of</div>
  <div className="mb-2"> of programming</div>
  <div>language classes</div>
</h2>

  <a href={youtubeLink} target="_blank" className="btn-red">View more services</a>
</div>
{/* Testimonial Section */}
<div className="testimonial-section">
        <h2 className="testimonial-heading">SOME VALUABLE FEEDBACK BY SATISFIED STUDENTS</h2>
        <h1 className="testimonial-subheading">
          The Best Solutions For Developing <span style={{ color: '#f44336' }}>future for students</span>
        </h1>

        {/* Testimonial Carousel */}
        <Carousel indicators interval={3000}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index} className="testimonial-carousel">
              <div className="testimonial-card">
                <div className="d-flex">
                  <div className="mr-3">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-details">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.institute}</p>
                    <p><strong>{testimonial.education}</strong></p>
                    <p className="position"><strong>{testimonial.position}</strong></p>
                  </div>
                </div>
                <div className="testimonial-feedback">
                  <p>{testimonial.feedback}</p>
                </div>
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
