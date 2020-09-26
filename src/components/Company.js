import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/style.css";
import Agency from "./Agency"
class Company extends Component {
   
    render() {
        return (
            <div className="container">
                <div className="title">Company</div>
                <Agency></Agency>
            </div>
        );
    }
}

export default Company;