import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Agency from "../components/common/Agency";
// import UsersOverview from "./../components/blog/UsersOverview";
// import UsersByDevice from "./../components/blog/UsersByDevice";
// import NewDraft from "./../components/blog/NewDraft";
// import Discussions from "./../components/blog/Discussions";
// import TopReferrals from "./../components/common/TopReferrals";
const getLocalDate = () => {
  var date = new Date().toLocaleDateString();
  var arr = date.split("/");
  return arr[2]+"/" + arr[0]+"/" +arr[1];
}
const Company = ({ agency_props }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="中国平安" subtitle="SH601318" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      {agency_props.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <Agency
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            // chartOptions={stats.chartOptions}
            agency_name={stats.agency_name}
            season={stats.season}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            decrease={stats.decrease}
          />
        </Col>
      ))}
    </Row>

    {/* <Row> */}
    {/* Users Overview */}
    {/* <Col lg="8" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col> */}

    {/* Users by Device */}
    {/* <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col> */}

    {/* New Draft */}
    {/* <Col lg="4" md="6" sm="12" className="mb-4">
        <NewDraft />
      </Col> */}

    {/* Discussions */}
    {/* <Col lg="5" md="12" sm="12" className="mb-4">
        <Discussions />
      </Col> */}

    {/* Top Referrals */}
    {/* <Col lg="3" md="12" sm="12" className="mb-4">
        <TopReferrals />
      </Col>
    </Row> */}
  </Container>
);

Company.propTypes = {
  /**
   * The small stats dataset.
   */
  agency_props: PropTypes.array
};

Company.defaultProps = {
  agency_props: [
    {
      agency_name: "商道融绿",
      season: "2020Q4",
      value: "A+",
      percentage: "4.7%",
      increase: true,
      chartLabels: ["Rate", "Rate", "Rate", "Rate", "Rate", "Rate", "Rate"],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Agency",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216,0.8)",
          borderColor: "rgb(0,0,0,0)",
          data: [1, 1, 2, 1, 3, 5, 4, 7],
          barPercentage: 1.0,
        }
      ],
    },
    {
      agency_name: "社投盟",
      season: "2020Q2",
      value: "B+",
      percentage: "12.4",
      increase: true,
      chartLabels: ["Rate", "Rate", "Rate", "Rate", "Rate", "Rate", "Rate"],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Agency",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.8)",
          borderColor: "rgb(0,0,0,0)",
          data: [1, 2, 3, 3, 3, 4, 4],
          barPercentage: 1.0,
        }
      ]
    },
    {
      agency_name: "富时罗素",
      season: "2020Q3",
      value: "51.83",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      chartLabels: ["Rate", "Rate", "Rate", "Rate", "Rate", "Rate", "Rate"],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Agency",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.8)",
          borderColor: "rgb(0,0,0,0)",
          data: [2, 3, 3, 3, 4, 3, 3],
          barPercentage: 1.0,
        }
      ]
    },
    {
      agency_name: "自定义",
      season: getLocalDate(),
      value: "AAA",
      percentage: "2.71%",
      increase: false,
      decrease: true,
      chartLabels: ["Rate", "Rate", "Rate", "Rate", "Rate", "Rate", "Rate"],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Agency",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,65,105,0.8)",
          borderColor: "rgb(0,0,0,0)",
          data: [1, 7, 1, 3, 1, 4, 8],
          barPercentage: 1.0,
        }
      ]
    },
  ]
};

export default Company;
