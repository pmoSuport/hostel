import './SelectGirlsHostel.css'

import { connect } from 'react-redux';
import { selectUser } from "../../actions";
import { useHistory } from "react-router-dom";
function SelectGirlsHostel() {
  let history = useHistory()
  return (

    <div className="flex">
      <h1>Choose a Hostel</h1>
      <div className="flex3">
        <div className="flex2">

          <h2 className="b1"
            onClick={() => { history.push('/selectFloor/G1/') }}
          >G1</h2>
          <h2 className="b1"
            onClick={() => { history.push('/selectFloor/G2/') }}
          >G2</h2>
          <h2 className="b1"
            onClick={() => { history.push('/selectFloor/G3/') }}
          >G3</h2>
        </div>
        <div className="flex2">
          <h2 className="b1"
            onClick={() => { history.push('/selectFloor/G4/') }}
          >G4</h2>
          <h2 className="b1"
            onClick={() => { history.push('/selectFloor/G5/') }}
          >G5</h2>
          <h2 className="b1"
            onClick={() => { history.push('/selectFloor/G6/') }}
          >G6</h2>
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

export default connect(mapStateToProps, { selectUser })(SelectGirlsHostel);