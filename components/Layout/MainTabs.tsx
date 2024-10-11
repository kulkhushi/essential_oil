"use client";
import { useEffect, useState } from "react";
import { Tab, Col, Nav, Row } from "react-bootstrap";
import ModalContainer from "../Modal";
import Modal from "../Modal";
import DownloadForm from "../Form/DownloadForm";

type ContentItem = {
  title: string;
  content: string[];
};

const MainContent = ({ tabsContent }: { tabsContent: ContentItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [mounted, setMounted] = useState(false);
  const [showModal, setshowModal]= useState<boolean>(false);

  const sethandleModalClose=()=>{
    setshowModal(false);
  }

const sethandleModalOpen = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault(); // Prevent default anchor behavior
  setshowModal(true);
};

  // Ensure the component has mounted on the client side before rendering content
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className="section section-lg bg-default">
      <ModalContainer showModal={showModal} sethandleClose={sethandleModalClose}>
      <div className="modal-content">
      <div className="modal-header">
        <div className="modal-title h5">Download Brochure</div>
        <button type="button" className="btn-close" aria-label="Close" onClick={sethandleModalClose}></button>
      </div>
      <div className="modal-body">
        <DownloadForm/>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={sethandleModalClose}>Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div> */}
    </div>
        </ModalContainer>
      <Tab.Container>
        <div className="container">
          <Row className="tabs-custom row row-50 justify-content-center flex-lg-row-reverse text-center text-md-start">
            <Col sm={4} xl={3}>
            <h5 className="text-spacing-200 font-normal mb-5">
                Founded 45 years ago, Look Aroma
              </h5>
              <Nav variant="pills" className="flex-column">
                {tabsContent.map((section, index) => (
                  <Nav.Item key={index} className="list-category-item wow fadeInRight">
                    <Nav.Link
                      eventKey={index + 1}
                      active={currentIndex === index + 1}
                      onClick={()=>setCurrentIndex(index+1)}
                    >
                      {section.title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <a
        className="button button-lg button-primary button-winona"
        href="contacts.html"
      >
        <div className="content-original">Contact us</div>
        <div className="content-dubbed">Contact us</div>
      </a>
      <a
        id="downloadBrochureButton"
        className="button button-icon button-icon-left button-white button-winona"
        style={{ background: '#54c1e5', color: '#fff' }}
        href="#"
        onClick={(e)=>sethandleModalOpen(e)}
      >
        <span className="icon mdi mdi-download"></span>
        <span>Download brochure</span>
      </a>
            </Col>
            <Col sm={8} xl={9}>
              <Tab.Content className="tab-content-1">
                {tabsContent.map((section, index) => (
                  <Tab.Pane key={index} eventKey={index + 1}  active={currentIndex === index + 1}>
                    {/* Display the title once for each Tab.Pane */}

                    {/* Loop through the content */}
                    {section.content.map((htmlString, i) => (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: htmlString }}
                      />
                    ))}
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </div>
      </Tab.Container>
    </section>
  );
};

export default MainContent;
