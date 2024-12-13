function About() {
  return (
    <>
    <main id="main">
      <section id="about" className="about">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
              <img
                src="public/img/about-img.svg"
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
              />
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">About Me</h3>
              <p data-aos="fade-up" data-aos-delay={100}>
              I am a Full Stack Developer with a strong foundation in creating user-centered web applications, proficient in HTML, CSS, JavaScript, SQL, PHP, Laravel, and React. With hands-on training from Orange Coding Academy, I have developed clean, efficient, and innovative solutions across both frontend and backend technologies. Passionate about contributing to dynamic teams, I am eager to grow and adapt in the ever-evolving field of web development, continuously exploring new technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
export default About;
