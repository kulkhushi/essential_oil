


const titlesArray = [
    "Access to Expertise and Resources",
    "Quality Assurance and Standards.",
    "Diversification of Product Portfolio",
    "Market Differentiation and Competitive Edge",
    "Consumer Trust and Brand Reputation",
    "Sustainable and Ethical Sourcing Practices",
    "Research and Development Opportunities"
  ]

const WhytoChoose = () => {
  return (
    <section
      className="section section-xl bg-default text-md-start"
      style={{ marginTop: "58px" }}
    >
      <div className="container">
        <div className="row row-50 justify-content-center justify-content-md-start">
          <div className="col-lg-7 wow fadeInLeft" data-wow-delay=".1s">
            <h3 style={{ fontSize: "35px" }}>Why to Choose Look Aroma?</h3>
            <div className="slick-team" style={{ paddingBottom: "13px" }}>
              <div className="slick-slider carousel-parent">
                <div className="item">
                  <div
                    className="card-group-custom card-group-corporate"
                    id="accordion1"
                  >
                    {
                        titlesArray.map((title,index) =>{
                            return (
                                <article className="card card-custom card-corporate" key={title}>
                                <div className="card-header" role="tab">
                                  <div className="card-title">
                                    <a
                                      id="accordion1-card-head-rbfhlrer"
                                      className="collapsed"
                                    >
                                      {title}
                                      <div className="card-arrow"></div>
                                    </a>
                                  </div>
                                </div>
                              </article>
                            )
                        })
                    }
                   
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-md-4 col-lg-5 wow fadeInLeft" data-wow-delay="0s">
      <div className="offset-left-xl-40">
        <h3></h3>
        <img
          src="/why_us.jpg"
          style={{
            width: '100%',
            margin: '74px 0px 0px 0px',
            border: '1px solid #e1e1e1',
            borderRadius: '10px',
          }}
        />
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default WhytoChoose;
