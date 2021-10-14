import React, { Component } from 'react' 

class UserGreeting extends Component {
 constructor(props) {
     super(props)
     this.state = {
         isLoggedIn: false
     }
 }


    render() {
        return this.state.isLoggedIn ? (
            <div>Welcome to the Teacher</div>
             ) : (
            <div>Welcome Prem Rawat</div>
        )
             }
        // **** Second approach ****
        //let message
        //if (this.state.isLoggedIn) {
       //     message = <div>Welcome to the Teacher</div>
        //} else {
        //    message = <div>Welcome Prem Rawat</div>
        //}
        //return <div>{message}</div>
        // **** First approach ****
        //if (this.state.isLoggedIn) {
        //    return <div>Welcome to the Teacher</div>
       // } else {
        //    return <div>Welcome Prem Rawat</div>
      //  }
      //  return (
      //      <div>
       //         Welcome to the Teacher
       //         Welcome Prem Rawat
        //    </div>
       // // **** End First approach ****)
    }

export default UserGreeting