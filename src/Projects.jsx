function Projects() {
  return (
    <>
      <section id="projects" className="portfolio">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <p>Projects</p>
          </div>
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-6 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="/img/steam.jpg" className="img-fluid" alt="steam" />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/shahedaltrakiah/SteamProject.github.io"
                    title="More Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icofont-link" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Steam.kiddy</h4>
                  <p>HTML5, CSS3, JavaScript, JSON, Bootstrap</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="/img/gift_shop.jpg" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/lwahdan/gift_shop_final"
                    title="More Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icofont-link" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Gift Shop - E-commerce</h4>
                  <p>HTML5, CSS3, JavaScript, Bootstrap, PHP, MVC, MySQL</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="/img/unique.jpg" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/shahedaltrakiah/UniqueProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="More Details"
                  >
                    <i className="icofont-link" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Unique Thrift Shop</h4>
                  <p>
                    HTML5, CSS3, JavaScript, Bootstrap, Laravel, React, API,
                    MySQL
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="/img/amanah.jpg" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/lwahdan/amana"
                    title="More Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icofont-link" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Amanah</h4>
                  <p>HTML5, CSS3, JavaScript, Bootstrap, Laravel, MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
