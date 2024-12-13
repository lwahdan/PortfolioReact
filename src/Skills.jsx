function Skills() {
  return (
    <>
      <section id="skills" className="services section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <p>Skills</p>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
                  <img
                    src="/img/front.png"
                    alt="frontend"
                    style={{
                      width: "100px",
                      height: "50px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <h4 className="title">
                  <a href="">Front-End</a>
                </h4>
                <p className="description">
                  HTML5, CSS3, Bootstrap, JavaScript, React JS
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box">
                <div className="icon">
                  <img
                    src="/img/back.png"
                    alt="backend"
                    style={{
                      width: "100px",
                      height: "50px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <h4 className="title">
                  <a href="">Back-end</a>
                </h4>
                <p className="description">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PHP, Laravel
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp;{" "}
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box">
                <div className="icon">
                  <img
                    src="/img/database.png"
                    alt="backend"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <h4 className="title">
                  <a href="">Database</a>
                </h4>
                <p className="description">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; MySQL
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp;
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="icon-box">
                <div className="icon">
                  <img
                    src="/img/windows.png"
                    alt="backend"
                    style={{
                      width: "60px",
                      height: "60px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <h4 className="title">
                  <a href="">Operating System</a>
                </h4>
                <p className="description">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  Windows &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp;
                </p>
              </div>
            </div>

            <div
              className="row justify-content-center"
              style={{ width: "100%" }}
            >
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay={500}
              >
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src="/img/software.png"
                      alt="backend"
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <h4 className="title">
                    <a href=""> SDLC </a>
                  </h4>
                  <p className="description">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Agile,
                    Scrum &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp;
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay={600}
              >
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src="/img/tools.png"
                      alt="backend"
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <h4 className="title">
                    <a href="">Tools</a>
                  </h4>
                  <p className="description">
                    Visual Studio Code, Figma, Trello, GitHub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </>
  );
}
export default Skills;
