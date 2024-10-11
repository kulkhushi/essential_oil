const services = [
  {
    title: "Essensial Oil",
    text: "Cadunt patienter ducunt ad secundus quadra. Detrius de placidus fuga, demitto",
    figure: "/1.jpg",
  },
  {
    title: "Oleoresin",
    text: "Cum absolutio crescere, omnes tuses anhelare gratis, grandis gabaliumes.",
    figure: "/02.jpg",
  },
  {
    title: "Aromatic Ingredients",
    text: "Primus, brevis pulchritudines acceleratrix talem de fortis, raptus hippotoxota.",
    figure: "/03.jpg",
  },
  {
    title: "Fragrance Compound",
    text: "Neuter, placidus musas interdum experientia de magnum, flavum cobaltum.",
    figure: "/04.jpg",
  },
  {
    title: "Base & Carrier Oil",
    text: "Cum armarium manducare, omnes exemplares resus primus, peritus magister.",
    figure: "/05.jpg",
  },
  {
    title: "Floral Water",
    text: "Alter, noster compaters unus promissio de placidus, teres hippotoxota.",
    figure: "/06.jpg",
  },
];

const Categories = () => {
  return (
    <section
      className="section parallax-container"
      style={{ background: `url(${"bg-icon-1.jpg"})`, marginTop: "70px" }}
    >
      <div className="parallax-content section-xl context-dark">
        <div className="container">
          <h3 className="oh text-center">
            <span className="d-inline-block wow slideInUp" data-wow-delay="0s">
              Categories Look Aroma Deal in
            </span>
          </h3>
          <div className="row row-40 row-xl-60 justify-content-center box-ordered">
            {services.map((service, i) => {
              return (
                <div key={service.title} className="col-sm-6 col-lg-4">
                  <article className="services-creative">
                    <a
                      className="services-creative-figure"
                      href="single-service.html"
                    >
                      <img src={service.figure} alt="" width="370" height="230" />
                    </a>
                    <div className="services-creative-caption">
                      <h5
                        className="services-creative-title"
                        style={{ color: "#000" }}
                      >
                        <a href="single-service.html">{service.title}</a>
                      </h5>
                      <p className="services-creative-text">
                        {service.text}
                      </p>
                      <span className="services-creative-counter box-ordered-item" />
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
