import React, {useState} from "react";

function DevicesCounter(props){

  const array = props.devices.filter((device) =>{
    if (device.selected === true){
      console.log('true',true)
return device
    }
  })

  return <div className ="secondHeader" >{array.length}</div>

}

export default DevicesCounter
