import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// import { MemoryRouter as Router, Route } from "react-router-dom";

// import routes from "./routes";
import Company from "./views/Company";
// import withTracker from "./withTracker";
import { Container, Row, Col } from "shards-react";
import MainNavbar from "./components/layout/MainNavbar/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

var CEIS = require("./data/CEIS.csv");
var weights = require("./data/weights.csv");
var Papa = require("papaparse/papaparse.min.js");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.company_CEIS = null;
    this.agency_weights = null;
  }
  componentDidMount() {
    var that = this
    // parse CEIS data
    Papa.parse(CEIS, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: function (result) {

        that.setCEIS(result);
      }
    });// parse weights data
    console.log(Papa.parse(weights, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: function (result) {

        that.setWeights(result);
      }
    }));
   
  }
   setCEIS(result) {
    this.company_CEIS = result;
    console.log(this.company_CEIS)
  }
   setWeights(result) {
    this.agency_weights = result;
    console.log( this.agency_weights)
  }
  render() {
    //search
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
  }
};

export default App;
