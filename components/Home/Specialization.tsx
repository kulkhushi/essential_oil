import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GridBoxStyle1 from '../GridBoxStyle1';

const Specialization = () => {
  const [key, setKey] = useState<string>('home');
  return (
    <section
    className="section section-xl bg-default text-center"
    style={{ marginTop: 58 }}
  >
    <div className="container">
      <div className="title-group">
        <h3 className="oh">
          <span
            className="d-inline-block wow slideInUp"
            data-wow-delay="0s"
          >
            Look Aroma’s Specialization
          </span>
        </h3>
      </div>
      <div className="tabs-custom tabs-horizontal tabs-corporate" id="tabs-1">
      <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k as string)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Manufacturing of Natural Attars">
            <div className='row row-lg row-40 justify-content-center'>
              <GridBoxStyle1/>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Extraction of essential oil">
            Tab content for Profile
          </Tab>
          <Tab eventKey="contact" title="Fragrance Compound">
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
    </div>
  </section>

  )
}

export default Specialization