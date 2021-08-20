import "./SelectHostel.css";
import Girl from "./girl.PNG"
import Boy from "./boy.PNG"
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { selectUser } from "../../actions";
function Welcome() {
    let history = useHistory();
    return (

        <div className="flex">
            <h1 className="heading">Choose your Hostel</h1>
            <div className="hosteldetails">
                <div className="girlhostels"
                    onClick={() => { history.push('/selectGirlsHostel') }}
                >
                    <img className="girlimg" src={Girl} />
                    <h3>Girls Hostels</h3></div>

                <div className="boyhostels"
                    onClick={() => { history.push('/chooseHostel') }}
                >
                    <img className="boyimg" src={Boy} />
                    <h3>Boys Hostels</h3></div>
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
export default connect(mapStateToProps, mapActionsToProps)(Welcome);
