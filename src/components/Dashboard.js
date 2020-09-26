import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/style.css";
import Company from "./Company"
class Dashboard extends Component {
   
    render() {
        return (
            <div className="container">
                <div className="title">Dashboard</div>
                <Company></Company>
            </div>
        );
    }
}

export default Dashboard;