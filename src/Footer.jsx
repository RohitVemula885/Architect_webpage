import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white py-4">
      <Container className="text-center">
        <p>📧 contact@brandbox.com | 📞 +91 98765 43210</p>
        <p>
          <a href="https://facebook.com" className="text-white me-3" target="_blank">
          <i className="bi bi-facebook"></i>
             Facebook
          </a>
          <a href="https://twitter.com" className="text-white me-3" target="_blank">
          <i className="bi bi-twitter-x"></i>
            Twitter
          </a>
          <a href="https://linkedin.com" className="text-white" target="_blank">
          <i className="bi bi-linkedin"></i>
            LinkedIn
          </a>
        </p>
        <p>Developed by <i>-ROHIT VEMULA</i></p>
        <p className="mb-0">&copy; 2025 BrandBox. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}
