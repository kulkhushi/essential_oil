'use client'
import Breadcrumbs from "@/components/Breadcrumbs";
import { faqData } from "@/data.js";
import { useState, useRef, useEffect } from "react";

const PageBreadcrumbs = [
  {
    label: "Home",
    url: "/", 
  },
  {
    label: "FAQ",
    url: "", 
  }
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]); // Store references for all accordion items
  const [heights, setHeights] = useState<string[]>(Array(faqData.length).fill("0px"));

  const toggleAccordion = (index: number, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor behavior
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Update the height for the currently opened item
    const updatedHeights = faqData.map((_, idx) => {
      if (contentRefs.current[idx]) {
        return openIndex === idx ? `${contentRefs.current[idx]?.scrollHeight}px` : "0px";
      }
      return "0px";
    });
    setHeights(updatedHeights);
  }, [openIndex]);

  return (
    <>
      <Breadcrumbs imgSrc="about_usInside.jpg" pageTitle="FAQ" BreadcrumbsPage={PageBreadcrumbs} />
      <section className="section section-sm section-last bg-default text-md-start">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-xl-12">
              <h4>Other Frequently Asked Questions</h4>
              <div
                className="card-group-custom card-group-corporate"
                id="accordion1"
                role="tablist"
                aria-multiselectable="false"
              >
                {faqData.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <article className="card card-custom card-corporate" key={index}>
                      <div className="card-header" role="tab">
                        <div className="card-title">
                          <a
                            id={`accordion-card-head-${index}`}
                            onClick={(e) => toggleAccordion(index, e)}
                            href={`#accordion-card-body-${index}`}
                            aria-controls={`accordion-card-body-${index}`}
                            aria-expanded={isOpen}
                            role="button"
                            className={isOpen ? "" : "collapsed"}
                          >
                            {faq?.header}
                            <div className="card-arrow"></div>
                          </a>
                        </div>
                      </div>
                      <div
                        id={`accordion-card-body-${index}`}
                        aria-labelledby={`accordion-card-head-${index}`}
                        role="tabpanel"
                        style={{
                          maxHeight: heights[index],
                          transition: "max-height 0.4s ease",
                          overflow: "hidden",
                        }}
                        ref={(el) => {
                          contentRefs.current[index] = el;
                        }} // Corrected ref assignment
                      >
                        <div className="card-body">
                          <div dangerouslySetInnerHTML={{ __html: faq?.body }} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
