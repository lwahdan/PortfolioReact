function Experience() {
  return (
    <>
      <section id="experience" className="faq section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <p>Experience</p>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay={100}
            style={{ color: "#eb5d1e" , marginBottom: "40px" }}
          >
            Full Stack Web Development Bootcamp (September 2024 – Present){" "}
          </h2>

          <ul className="faq-list">
            <li data-aos="fade-up" data-aos-delay={200}>
              <a data-toggle="collapse" href="#faq2" className="collapsed">
              Engaged in an intensive, hands-on full-stack development program covering HTML, CSS, 
              JavaScript, PHP, Laravel, and React. 
              </a>
            </li>
            <li data-aos="fade-up" data-aos-delay={300}>
              <a data-toggle="collapse" href="#faq3" className="collapsed">
              Developed responsive and dynamic web applications, focusing on both front-end and back-end 
              technologies.  
              </a>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <a data-toggle="collapse" href="#faq4" className="collapsed">
              Collaborated on team projects simulating real-world development environments, enhancing skills 
              in problem-solving, debugging, and version control.  {" "}
              </a>
            </li>
            <li data-aos="fade-up" data-aos-delay={500}>
              <a data-toggle="collapse" href="#faq5" className="collapsed">
              Built and deployed a range of projects, showcasing proficiency in MVC architecture, RESTful 
              APIs, and user experience design. 
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Experience;
