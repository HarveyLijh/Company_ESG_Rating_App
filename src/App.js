import React from "react";
// import { MemoryRouter as Router, Route } from "react-router-dom";

// import routes from "./routes";
import Company from "./views/Company";
// import withTracker from "./withTracker";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "./components/layout/MainNavbar/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

const App = () => {
  // const CEIS_data = 
  return (
    <Container fluid>
      <Row>

        <Col
          className="main-content p-0"
          sm="12"
          tag="main"
        >
          <MainNavbar />

          <Company />
          {/* {!noFooter && <MainFooter />} */}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
