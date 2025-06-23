"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ChangeEvent, FormEvent, useState } from "react";

type ContactFormTypes = {
  name: string;
  email: string;
  service: string;
  phone: string;
  message: string;
};

const PageBreadcrumbs = [
  {
    label: "Home",
    url: "/", 
  },
  {
    label: "Contact Us",
    url: "", 
  }
  ]

const ContactUsPage = () => {
  const [formData, setFormData] = useState<ContactFormTypes>({
    name: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });

  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <>
      <Breadcrumbs imgSrc="contact-us.png" pageTitle="Contact Us" BreadcrumbsPage={PageBreadcrumbs}/>
      <section className="section section-lg bg-default text-md-start">
        <div className="container">
          <div className="row row-60 justify-content-center">
            <div className="col-lg-8">
              <h4 className="text-spacing-25 text-transform-none">
                Get in Touch
              </h4>
              <form
                className="rd-form rd-mailform"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="row row-20 gutters-20">
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input
                        className="form-input form-control-has-validation"
                        id="contact-your-name-5"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                      <span className="form-validation"></span>
                     <label
                        className={`form-label rd-input-label ${focusedInput === "name" || formData.name ? "hidden" : ""}`}
                        htmlFor="contact-your-name-5"
                      >
                        Your Name*
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input
                        className="form-input form-control-has-validation"
                        id="contact-email-5"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <span className="form-validation"></span>
                      <label
                       className={`form-label rd-input-label ${focusedInput === "email" || formData.email ? "hidden" : ""}`}
                        htmlFor="contact-email-5"
                      >
                        Your E-mail*
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <select
                        className="form-input form-control-has-validation"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select a Service
                        </option>
                        <option value="1">Oil Platforms</option>
                        <option value="2">Gas Flares</option>
                        <option value="3">Oil Pumps</option>
                      </select>
                      <span className="form-validation"></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input
                        className="form-input form-control-has-validation"
                        id="contact-phone-5"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <span className="form-validation"></span>
                      <label
                       className={`form-label rd-input-label ${focusedInput === "phone" || formData.phone ? "hidden" : ""}`}
                        htmlFor="contact-phone-5"
                      >
                        Your Phone*
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-wrap">
                      <label
                        className="form-label rd-input-label"
                        htmlFor="contact-message-5"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-input textarea-lg form-control-has-validation"
                        id="contact-message-5"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      <span className="form-validation"></span>
                    </div>
                  </div>
                </div>
                <button
                  className="button button-secondary button-winona"
                  type="submit"
                >
                  <div className="content-original">Contact us</div>
                  <div className="content-dubbed">Contact us</div>
                </button>
              </form>
            </div>
            <div className="col-lg-4">
      <div className="aside-contacts">
        <div className="row row-30">
          <div className="col-sm-6 col-lg-12 aside-contacts-item">
            <p className="aside-contacts-title">Get social</p>
            <ul className="list-inline contacts-social-list list-inline-sm">
              <li><a className="icon mdi mdi-facebook" href="#"></a></li>
              <li><a className="icon mdi mdi-twitter" href="#"></a></li>
              <li><a className="icon mdi mdi-instagram" href="#"></a></li>
              <li><a className="icon mdi mdi-google-plus" href="#"></a></li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-12 aside-contacts-item">
            <p className="aside-contacts-title">Phone</p>
            <div className="unit unit-spacing-xs justify-content-center justify-content-md-start">
              <div className="unit-left">
                <span className="icon mdi mdi-phone"></span>
              </div>
              <div className="unit-body">
                <a className="phone" href="tel:#">+91 7607572581</a>
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
                <a className="mail" href="mailto:info@lookaroma.com">info@lookaroma.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
