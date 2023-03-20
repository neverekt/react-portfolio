import React from 'react';

function Footer() {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>My Links</h3>
            <ul className="list-unstyled">
              <li><a href="https://github.com/neverekt">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/drjet1">LinkedIn</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>About Me</h3>
            <p>My name is Jack Turner, and I'm a web developer based in the United Kingdom. I love building things for the web, and I'm always looking for new challenges.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Me</h3>
            <ul className="list-unstyled">
              <li>Email: jack.turner@example.com</li>
              <li>Phone: +44 1234 567890</li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p>&copy; 2023 Jack Turner. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
