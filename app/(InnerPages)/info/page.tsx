
import Breadcrumbs from '@/components/Breadcrumbs'


const PageBreadcrumbs = [
  {
    label: "Home",
    url: "/", 
  },
  {
    label: "Contacts with Us",
    url: "", 
  }
  ]

const InfoPage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2500);
  })
  return (
    <>
    <Breadcrumbs imgSrc="contact-us.png" pageTitle="Contacts with Us" BreadcrumbsPage={PageBreadcrumbs}/>
    <section className="section section-lg bg-default text-md-start">
      <div className="container">
        <div className="row row-60 justify-content-center">
          <div className="col-lg-8">
            <h4 className="text-spacing-25 text-transform-none">Contact With Us</h4>
            <form
              className="rd-form rd-mailform"
              data-form-output="form-output-global"
              data-form-type="contact"
              method="post"
              action=""
              noValidate
            >
              <div className="row row-20 gutters-20">
                <div className="col-md-12">
                  <div className="form-wrap">
                    <input
                      className="form-input form-control-has-validation"
                      id="contact-your-name-5"
                      type="text"
                      name="name"
                      data-constraints="@Required"
                    />
                    <span className="form-validation"></span>
                    <label className="form-label rd-input-label" htmlFor="contact-your-name-5">
                      Your Name*
                    </label>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-wrap">
                    <input
                      className="form-input form-control-has-validation"
                      id="contact-email-5"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                    />
                    <span className="form-validation"></span>
                    <label className="form-label rd-input-label" htmlFor="contact-email-5">
                      Your E-mail*
                    </label>
                  </div>
                </div>
              </div>

              <button className="button button-secondary button-winona text-zinc-900" type="submit">
                <div className="content-original">
                  <a href="pdf/Absolute_Oil.pdf" download className='text-zinc-900'>
                    Submit
                  </a>
                </div>
                <div className="content-dubbed">
                  <a href="pdf/Absolute_Oil.pdf" download className='text-yellow-50'>
                    Submit
                  </a>
                </div>
              </button>
            </form>
          </div>

          <div className="col-lg-4">
            <div className="aside-contacts">
              <div className="row row-30">
                <div className="col-sm-6 col-lg-12 aside-contacts-item">
                  <p className="aside-contacts-title">Get social</p>
                  <ul className="list-inline contacts-social-list list-inline-sm">
                    <li>
                      <a className="icon mdi mdi-facebook" href="#"></a>
                    </li>
                    <li>
                      <a className="icon mdi mdi-twitter" href="#"></a>
                    </li>
                    <li>
                      <a className="icon mdi mdi-instagram" href="#"></a>
                    </li>
                    <li>
                      <a className="icon mdi mdi-google-plus" href="#"></a>
                    </li>
                  </ul>
                </div>

                <div className="col-sm-6 col-lg-12 aside-contacts-item">
                  <p className="aside-contacts-title">Phone</p>
                  <div className="unit unit-spacing-xs justify-content-center justify-content-md-start">
                    <div className="unit-left">
                      <span className="icon mdi mdi-phone"></span>
                    </div>
                    <div className="unit-body">
                      <a className="phone" href="tel:#">
                        +91 8953537557
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-12 aside-contacts-item">
                  <p className="aside-contacts-title">E-mail</p>
                  <div className="unit unit-spacing-xs justify-content-center justify-content-md-start">
                    <div className="unit-left">
                      <span className="icon mdi mdi-email-outline"></span>
                    </div>
                    <div className="unit-body">
                      <a className="mail" href="mailto:#">
                        info@lookaroma.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>  )
}

export default InfoPage