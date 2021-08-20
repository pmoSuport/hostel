import './ChooseHostel.css'

import { connect } from 'react-redux';
import { selectUser } from "../../actions";
import { useHistory } from "react-router-dom";
function ChooseHostel() {
  let history = useHistory()
  return (

    <div className="flex">
      <h1>Choose a Hostel</h1>
      <div className="flex3">
        <div className="flex2">

          <h2 className="b1"
            onClick={() => { history.push('/selectFloor/B1/') }}
          >B1</h2>
          <h2 className="b1"
            onClick={() => { history.push('/selectFloor/B2/') }}
          >B2</h2>
          <h2 className="b1"
            onClick={() => { history.push('/selectFloor/B3/') }}
          >B3</h2>
        </div>
        <div className="flex2">
          <h2 className="b1"
            onClick={() => { history.push('/selectFloor/B4/') }}
          >B4</h2>
          <h2 className="b1"
            onClick={() => { history.push('/selectFloor/B5/') }}
          >B5</h2>
          <h2 className="b1"
            onClick={() => { history.push('/selectFloor/B6/') }}
          >B6</h2>
        </div>
      </div>

    </div>
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
export default connect(mapStateToProps, mapActionsToProps)(ChooseHostel);