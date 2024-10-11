import React from 'react';

const Collaboration = () => {
  return (
    <section className="section bg-image-4" style={{ margin: '70px 0px 0px 0px' }}>
      <div className="container-fluid container-inset-0">
        <div className="row g-0">
          <div className="col-md-4 col-lg-5 col-xl-6  box-transform-wrap">
            <div className="box-transform">
              <img src="/collabration.jpg" alt="Collaboration" />
            </div>
          </div>
          <div className="col-md-8 col-lg-7 col-xl-6 position-relative bg-image-3">
            <div className="tabs-custom tabs-custom-3" id="tabs-12">
              <div className="tab-content tab-content-4 section-inset-7" style={{ padding: '25px 0px 49px 0px !important' }}>
                <div className="tab-pane fade show active" id="tabs-12-1" role="tabpanel">
                  <h4 className="oh-desktop">
                    <span className="d-inline-block wow slideInLeft" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
                      Collaboration
                    </span>
                  </h4>
                  <p className="wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight', marginTop: '22px' }}>
                    In the current competitive market, forming strategic partnerships can be a game-changer for
                    businesses that want to grow and innovate. By teaming up with Look Aroma Fragrances & Flavours
                    Company, businesses can enjoy a range of benefits, including improving product quality and
                    accessing new markets.
                  </p>
                  <p className="wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight', marginTop: '22px' }}>
                    Whether you are a skincare brand looking for natural ingredients or a wellness company exploring
                    aromatherapy solutions, partnering with Look Aroma Fragrances & Flavours, an essential oil
                    company can be a smart move towards achieving your business objectives.
                  </p>
                  <div className="button-wrap oh-desktop">
                    <a className="button button-icon button-icon-right button-primary wow slideInUp" href="about-us.html" style={{ visibility: 'visible', animationName: 'slideInUp' }}>
                      <span className="icon mdi mdi-chevron-right"></span>Read more
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

export default Collaboration;
