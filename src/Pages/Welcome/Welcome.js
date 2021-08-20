
import React from 'react';
import { connect } from 'react-redux';
import { selectUser } from "../../actions";
import './Welcome.css';
const Welcome = () => {
  return (
    <>
      <div className="main">
        <h1>Welcome Alvin kumar</h1>
        <div className="paragraph">
          <h4>You have already booked a room</h4>
          <h3>Your room details are as follows:</h3>

          <h4>Hostel No.  <span>B4</span></h4>
          <h4>Room no. <span>8</span></h4>
        </div>

      </div>
    </>


  )
}

const mapStateToProps = (state) => {

  return {
    user: state.selectedUser
  }
}
const mapActionsToProps = () => {
  return {
    selectUser
  }
}
export default connect(mapStateToProps, mapActionsToProps)(Welcome);