import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import Dashboard from "./components/Dashboard"
class App extends Component {
   
    render() {
        return (
            <div className="container">
                <div className="title">ESG_Rating_App</div>
                <Dashboard></Dashboard>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));