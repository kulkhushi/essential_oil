

const AboutSection = () => {
  return (
    <section
      className="section section-xl bg-default text-md-start"
      style={{ marginTop: 40 }}
    >
      <div className="container">
        <div
          className="tabs-custom row row-50 align-items-center flex-xl-row-reverse text-center text-md-start"
          id="tabs-6"
        >
          <div className="col-xl-5">
            <div
              className="img_about "
              data-aos="fade-right"
            >
              <a className="services-classic-figure" href="single-service.html">
                <img src="/about.png" alt="About Image" />
              </a>
            </div>
          </div>
          <div className="col-xl-7">
            <div
              className="tab-content tab-content-1 wow fadeInLeft"
              data-wow-delay="0s"
            >
              <div className="tab-pane fade show active" id="tabs-6-1">
                <div
                  className="row row-40 align-items-center justify-content-center justify-content-md-start"
                >
                  <div className="col-sm-11 col-md-6 col-lg-11">
                    <h3>About Look Aroma</h3>
                    <p style={{ textAlign: 'justify' }}>
                      Discover the power of nature with our premium essential oils. Elevate your well-being and transform
                      your space with our meticulously crafted blends. Experience the pure essence of wellness with our
                      essential oils. Our oils are designed to enhance your well-being and create a serene atmosphere.
                      Experience the pure essence of nature with every drop. Explore our products today and indulge in
                      nature. Transform your space and uplift your senses.
                    </p>
                    <a
                      className="button button-lg button-width-auto button-outline button-default-outline-2 button-winona"
                      href="/about-us"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;