function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 footer-links"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#contact">Contact Me</a>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-3 col-md-6 footer-links"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <h4>Reach Me</h4>
                <p>
                  <strong>Email: </strong> leenwahdan01@gmail.com <br />
                </p>
                <div className="social-links mt-3">
                  <a
                    href="https://www.linkedin.com/in/leenwahdan"
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-linkedin" />
                  </a>
                  <a
                    href="https://github.com/lwahdan"
                    className="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-github" />
                  </a>
                  <a
                    href="/resume.pdf" 
                    className="resume"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bx-download" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="copyright">
            © 2024{" "}
            <strong>
              <span>Leen Wahdan</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up" />
      </a>
    </>
  );
}
export default Footer;
