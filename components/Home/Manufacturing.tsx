const Manufacturing = () => {
  return (
    <>
      <section className="section parallax-container homeManufacture designCommon" style={{ marginTop: 58 }}>
        <div className="parallax-content section-xl context-dark">
          <div className="container">
            <h3 className="oh text-center" style={{ fontSize: 40, color: "#000" }} data-aos="fade-up">
              <span className="d-inline-block">
                Manufacturing of Essential Oil
              </span>
            </h3>
            <div>{/* Quote Creative */}</div>
          </div>
        </div>
      </section>
      <section className="section bg-image-4">
        <div className="container-fluid container-inset-0">
          <div className="row g-0">
            <div className="col-md-4 col-lg-5 col-xl-6 box-transform-wrap">
              <div className="box-transform">
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img src="hydra.jpg" alt="Hydra Image" />
              </div>
            </div>
            <div className="col-md-8 col-lg-7 col-xl-6 position-relative bg-image-3">
              <div className="tabs-custom tabs-custom-3" id="tabs-12">
                <div className="tab-content tab-content-4 section-inset-7">
                  <div
                    className="tab-pane fade show active"
                    id="tabs-12-1"
                    role="tabpanel"
                  >
                    <h4 className="oh-desktop">
                      <span
                        className="d-inline-block"
                        data-aos="fade-left"                       
                      >
                        Hydro Distillation
                      </span>
                    </h4>
                    <p
                      data-aos="fade-right"
                      style={{                       
                        marginTop: 22,
                      }}
                    >
                      Hydro distillation is a traditional yet effective
                      technique for extracting essential oil from various
                      botanical sources. Unlike steam distillation, which uses
                      steam as the solvent, hydro distillation involves direct
                      contact of plant material with water
                    </p>
                    <p
                      data-aos="fade-right"
                      style={{
                        visibility: "visible",                     
                        marginTop: 22,
                      }}
                    >
                      Our method is simple, cost-effective, and suitable for
                      delicate botanicals while retaining natural essential oil
                      properties.
                    </p>
                    <div className="button-wrap oh-desktop">
                      <a
                        className="button button-icon button-icon-right button-primary"
                         data-aos="fade-up"
                        href="about-us.html"
                        style={{
                          visibility: "visible",                        
                        }}
                      >
                        <span className="icon mdi mdi-chevron-right"></span>Read
                        more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-image-4">
      <div className="container-fluid container-inset-0">
        <div className="row g-0">
          <div className="col-md-8 col-lg-7 col-xl-6 position-relative bg-image-3">
            <div
              className="tabs-custom tabs-custom-3"
              id="tabs-12"
              style={{ padding: '25px 0px 0px 0px' }}
            >
              <div className="tab-content tab-content-4 section-inset-7">
                <div
                  className="tab-pane fade show active"
                  id="tabs-12-1"
                  role="tabpanel"
                >
                  <h4 className="oh-desktop">
                    <span
                    data-aos="fade-left"
                      className="d-inline-block"
                      style={{
                        visibility: 'visible',                      
                        margin: '0px 0px 0px 33px',
                      }}
                    >
                      Steam Distillation
                    </span>
                  </h4>
                  <p
                  
                     data-aos="fade-right"
                    style={{
                      visibility: 'visible',                     
                      margin: '19px 0px 0px 35px',
                    }}
                  >
                    Steam distillation is a popular method for extracting essential oil from plants. It&#39;s a gentle
                    process that preserves the delicate aromatic compounds present in botanicals.
                  </p>
                  <p
                   data-aos="fade-right"
                    style={{
                      visibility: 'visible',                    
                      margin: '19px 0px 0px 35px',
                    }}
                  >
                    Our extraction process efficiently captures a wide range of botanicals while preserving essential oils&#39;
                    natural properties with minimal degradation of compounds.
                  </p>
                  <div
                    className="button-wrap oh-desktop"
                    style={{ margin: '30px 0px 0px 37px' }}
                  >
                    <a
                      className="button button-icon button-icon-right button-primary"
                      data-aos="fade-up"
                      href="/about-us"
                      style={{
                        visibility: 'visible',                       
                      }}
                    >
                      <span className="icon mdi mdi-chevron-right"></span>Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-5 col-xl-6 box-transform-wrap">
            <div className="box-transform">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="steam.jpg" alt="Steam Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Manufacturing;
