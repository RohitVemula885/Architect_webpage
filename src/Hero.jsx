import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./index.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="hero-carousel">
      <Carousel fade controls={true} indicators interval={3000}>
        <Carousel.Item>
          <div className="hero-slide slide1 d-flex flex-column justify-content-center align-items-center text-center text-white">
            <h1 className="display-3 fw-bold mb-4 text-light">
              DESIGNING SPACES THAT INSPIRE
            </h1>
            <p className="fw-bold mb-4 text-light fst-italic">
                  "Your trusted partner for modern architectural solutions."
            </p>
            <Button variant="light" size="lg" className="hero-btn"   as={Link}   to="project"   smooth={true} duration={300} offset={-50}>
              View Projects
            </Button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="hero-slide slide2 d-flex flex-column justify-content-center align-items-center text-center text-white">
            <h1 className="display-3 fw-bold mb-4">
              INNOVATIVE ARCHITECTURE SOLUTIONS
            </h1>
            <p className="fw-bold mb-4 text-light fst-italic">
                "Transforming ideas into timeless architectural designs."
            </p>
            <Button variant="light" size="lg" className="hero-btn" as={Link}   to="about"   smooth={true} duration={300} offset={-50}>
              Learn More
            </Button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="hero-slide slide3 d-flex flex-column justify-content-center align-items-center text-center text-white">
            <h1 className="display-3 fw-bold mb-4">
              BUILDING DREAMS WITH PASSION
            </h1>
            <p className="fw-bold mb-4 text-light fst-italic">
                "Crafting innovative spaces that inspire and endure."
            </p>
            <Button variant="light" size="lg" className="hero-btn" as={Link}   to="contact"   smooth={true} duration={100} offset={-50}>
              Contact Us
            </Button>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Hero;
