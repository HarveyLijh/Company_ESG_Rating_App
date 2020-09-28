import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import shortid from "shortid";
import { Card, CardBody, Button } from "shards-react";
import { useHistory, BrowserRouter as Router, Link,Switch,Route, } from "react-router-dom";
import "../../assets/style.css"
import Chart from "../../utils/chart";

class Agency extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartOptions = {
      ...{

        maintainAspectRatio: true,
        responsive: true,
        legend: {
          display: false
        },
        tooltips: {
          mode: 'index',
          enabled: true,
          intersect: false,
          callbacks: {
            label: function (tooltipItem) {
              return '在此等级中共有' + Number(tooltipItem.yLabel) + '家公司';
            }
          }
          // custom: function (tooltipModel) {
          //   // Tooltip Element
          //   var tooltipEl = document.getElementById('chartjs-tooltip');

          //   // Create element on first render
          //   if (!tooltipEl) {
          //     tooltipEl = document.createElement('div');
          //     tooltipEl.id = 'chartjs-tooltip';
          //     tooltipEl.innerHTML = '<table></table>';
          //     document.body.appendChild(tooltipEl);
          //   }

          //   // Hide if no tooltip
          //   if (tooltipModel.opacity === 0) {
          //     tooltipEl.style.opacity = 0;
          //     return;
          //   }

          //   // Set caret Position
          //   tooltipEl.classList.remove('above', 'below', 'no-transform');
          //   if (tooltipModel.yAlign) {
          //     tooltipEl.classList.add(tooltipModel.yAlign);
          //   } else {
          //     tooltipEl.classList.add('no-transform');
          //   }

          //   function getBody(bodyItem) {
          //     var lines = bodyItem.lines[0];
          //     return lines.split(":")[1];
          //   }

          //   // Set Text
          //   if (tooltipModel.body) {
          //     var titleLines = tooltipModel.title || [];
          //     var bodyLines = tooltipModel.body.map(getBody);

          //     var innerHtml = '<thead>';

          //     titleLines.forEach(function (title) {
          //       innerHtml += '<tr><th>' + title;
          //     });

          //     bodyLines.forEach(function (body, i) {
          //       var colors = tooltipModel.labelColors[i];
          //       var style = 'background:black'
          //       style += '; border-color:' + colors.borderColor;
          //       style += '; border-width: 2px';
          //       style += '; margin-top: -2px';
          //       var span = '<span style="' + style + '"></span>';
          //       innerHtml += span + body;
          //     });
          //     innerHtml += '</th></tr></thead>';

          //     var tableRoot = tooltipEl.querySelector('table');
          //     tableRoot.innerHTML = innerHtml;
          //   }

          //   // `this` will be the overall tooltip
          //   var position = this._chart.canvas.getBoundingClientRect();

          //   // Display, position, and set styles for font
          //   tooltipEl.style.opacity = 1;
          //   tooltipEl.style.position = 'absolute';
          //   tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
          //   tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
          //   tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
          //   tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
          //   tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
          //   tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
          //   tooltipEl.style.pointerEvents = 'none';

          // }
        },
        hover: {
          mode: 'index',
          intersect: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0.33
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                beginAtZero: true,
                display: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: false,
              scaleLabel: false,
              ticks: {
                beginAtZero: true,
                display: false,
                isplay: false,
                // Avoid getting the graph line cut of at the top of the canvas.
                // Chart.js bug link: https://github.com/chartjs/Chart.js/issues/4790
                suggestedMax: Math.max(...this.props.chartData[0].data) + 1
              }
            }
          ]
        },
        // shows labels above bars
        // animation: {
        //   duration: 1,
        //   onComplete: function () {
        //     var chartInstance = this.chart,
        //       ctx = chartInstance.ctx;
        //     ctx.textAlign = 'center';
        //     ctx.fillStyle = "rgba(0, 0, 0, 1)";
        //     ctx.textBaseline = 'bottom';

        //     this.data.datasets.forEach(function (dataset, i) {
        //       var meta = chartInstance.controller.getDatasetMeta(i);
        //       meta.data.forEach(function (bar, index) {
        //         console.log(chartInstance.chart.config.data.labels)
        //         var data = chartInstance.chart.config.data.labels[index];
        //         ctx.fillText(data, bar._model.x, bar._model.y - 5);

        //       });
        //     });
        //   }
        // }
      },
      ...this.props.chartOptions
    };

    const chartConfig = {
      ...{
        type: "bar",
        data: {
          ...{
            labels: this.props.chartLabels
          },
          ...{
            datasets: this.props.chartData
          }
        },
        options: chartOptions
      },
      ...this.props.chartConfig
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  // customize = () => {
  //   let path = `./customize`;
  //   let history = useHistory();
  //   history.push(path);
  //   console.log("AAAA")
  // }
  render() {
    const { variation, agency_name, season, edit, value, percentage, increase } = this.props;

    const cardClasses = classNames(
      "stats-small",
      variation && `stats-small--${variation}`
    );

    const cardBodyClasses = classNames(
      variation === "1" ? "p-0 d-flex" : "px-0 pb-0"
    );

    const innerWrapperClasses = classNames(
      "d-flex",
      variation === "1" ? "flex-column m-auto" : "px-3"
    );

    const dataFieldClasses = classNames(
      "stats-small__data",
      variation === "1" && "text-center"
    );

    const agencyClasses = classNames(
      "stats-small__label",
      "text-uppercase",
      variation !== "1" && "mb-1"
    );

    const valueClasses = classNames(
      "stats-small__value",
      "count",
      variation === "1" ? "my-3" : "m-0"
    );

    const innerDataFieldClasses = classNames(
      "stats-small__data",
      variation !== "1" && "text-right align-items-center"
    );

    const percentageClasses = classNames(
      "stats-small__percentage",
      `stats-small__percentage--${increase ? "increase" : "decrease"}`
    );
    const seasonClasses = classNames(
      "stats-small__label",
      "season_label"
    );
    const editClass = classNames(
      "edit_card",
      `edit_card--${edit ? "on" : "off"}`
    );
    const canvasHeight = variation === "1" ? 120 : 60;
    
    function Customize() {
      return (
        <div>
          <h2>Customize</h2>
        </div>
      );
    }
    return (
      <Router>
        <Card small className={cardClasses}>
          <CardBody className={cardBodyClasses}>
            <div className={innerWrapperClasses}>
              <div className={dataFieldClasses}>
                <Button className={editClass} outline theme="accent" size="sm" onClick={this.customize}>
                  <Link to='/customize'>
                    <i className="material-icons">edit</i>编辑
                    </Link>
                </Button>
                <span className={agencyClasses}>{agency_name}</span>
                <span className={seasonClasses}>{season}</span>
                <h6 className={valueClasses}>{value}</h6>
              </div>
              <div className={innerDataFieldClasses}>
                {/* <span className={percentageClasses}>{percentage}</span> */}
              </div>
            </div>
            <canvas
              height={canvasHeight}
              ref={this.canvasRef}
              className={`stats-small-${shortid()}`}
            />
          </CardBody>
        </Card>
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route exact path="/customize">
            <Customize />
          </Route>
        </Switch>

      </Router>
    );
  }
}

Agency.propTypes = {
  /**
   * The Small Stats variation.
   */
  variation: PropTypes.string,
  /**
   * The agency_name.
   */
  agency_name: PropTypes.string,
  /**
   * The edit.
   */
  edit: PropTypes.bool,
  /**
  * The rating season.
  */
  season: PropTypes.string,
  /**
   * The value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The percentage number or string.
   */
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Whether is a value increase, or not.
   */
  increase: PropTypes.bool,
  /**
   * The Chart.js configuration object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options object.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.array.isRequired,
  /**
   * The chart labels.
   */
  chartLabels: PropTypes.array
};

Agency.defaultProps = {
  increase: true,
  percentage: 0,
  value: 0,
  edit: false,
  agency_name: "Agency",
  season: "",
  chartOptions: Object.create(null),
  chartConfig: Object.create(null),
  chartData: [],
  chartLabels: []
};

export default Agency;
