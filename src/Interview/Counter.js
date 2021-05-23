import React from "react";

function Counter(props){

  const array = props.users.filter((user) =>{
    //go into the selected key/value pair
    if (user.selected === true){
      console.log('true',true)
      return user
    }

  })

  return <div className ="secondHeader" >{array.length}</div>
}

export default Counter
