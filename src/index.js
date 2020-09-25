import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

class Dashboard extends Component {
   
    render() {
        return (
            <div className="container">
                <div className="title">ESG_Rating_App</div>
            </div>
        );
    }
}

ReactDOM.render(<Dashboard />, document.getElementById("root"));