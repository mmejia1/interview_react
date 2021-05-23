import React, { Component } from "react";
import Users from "./Users"
import Devices from "./Devices"
import "./Interview.css";


class Interview extends Component {

  render = () => {
    return (
      <div className="interview-container">
        <Users />
        <Devices />
      </div>
    );
  };
}

export default Interview;



