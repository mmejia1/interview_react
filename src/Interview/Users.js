import React, {Component} from "react";
import Counter from "./Counter"
import "./Interview.css";

const users = [
  { name: "Korra" },
  { name: "Frank" },
  { name: "Josh" },
  { name: "Heather" },
];


class Users extends Component{

  constructor(props) {
     console.log('firstprops', props)
      super(props);
      this.state = {
        users: users,

      };
   }

   toggleSelectUser = (index) => {

    this.setState({
      users: this.state.users.map((user, i) => {
        // result handles wether user or device has been selected and key/value pair added
        const result =
          i === index ? { ...user, selected: !user.selected } : user;
           console.log('user', user.selected)
        return result;
      })
    });
   }


render() {
   const {users} = this.props
   console.log('users', users)
  return (

    <div className="header-wrapper">
          <div className="header bg-greenyellow">Users</div>
          <Counter users={this.state.users} />
          <div className="box">
            {this.state.users.map((item, i) => {
              return (
                <div
                  onClick={() => this.toggleSelectUser(i)}
                  className={`row-item ${item.selected ? "selected" : ""}`}

                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>


  )
}
}



export default Users
