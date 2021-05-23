import React, {Component} from "react";
import "./Interview.css";
import DevicesCounter from "./DevicesCounter"

const devices = [
  { name: "LG Stylo" },
  { name: "iPhone 8" },
  { name: "Google Pixel" },
  { name: "Motorola Razr" },
  { name: "Samsung Galazy 999" },
];
class Devices extends Component{

  constructor(props) {
     console.log('firstprops', props)
      super(props);
      this.state = {
       devices: devices,

      };
   }

   toggleSelectDevice = (index) => {
    this.setState({
      devices: this.state.devices.map((device, i) => {
        const result =
          i === index ? { ...device, selected: !device.selected } : device;
        return result;
      }),
    });
  };

   render(){
      return (
     <div className="header-wrapper">
          <div className="header bg-blue">Devices</div>
           <DevicesCounter devices={this.state.devices} />
          <div className="box box-horizontal">
            {this.state.devices.map((item, i) => {
              return (
                <span
                  onClick={() => this.toggleSelectDevice(i)}
                  className={`row-item row-item-horizontal ${
                    item.selected ? "selected rounded" : ""
                  }`}
                >
                  {item.name}
                </span>
              );
            })}
          </div>
        </div>
  )
   }
}

export default Devices
