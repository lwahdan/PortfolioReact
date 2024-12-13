function Hero() {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
              <h1>Leen Wahdan</h1>
              <h1>Full Stack Developer</h1>
              <h2>Building elegant, scalable web solutions</h2>
              <a href="#projects" className="btn-get-started scrollto">
                View My Work
              </a>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img
                src="public/img/hero-img.svg"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
