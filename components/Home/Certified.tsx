import ImageCarousel from "../OwlCarousal";

const Certified = () => {
  return (
    <section
      className="section parallax-container"
      data-parallax-img="certificate.jpg"
      style={{ marginTop: "60px",  backgroundImage: `url(${'certificate.jpg'})`, }}
    >
      <div className="parallax-content section-xl context-dark">
        <div className="container">
          <h3 className="oh" style={{ textAlign: "center" }}>
            <span className="d-inline-block wow slideInUp" data-wow-delay="0s">
              Certified With
            </span>
          </h3>
          <ImageCarousel/>
        </div>
      </div>
    </section>
  );
};

export default Certified;
