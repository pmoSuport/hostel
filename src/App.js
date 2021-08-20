
import { connect } from 'react-redux';
import { selectUser } from './actions';
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import SignIn from './Pages/SignIn';
import { useEffect } from 'react';
import db from './firebase';
import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import './App.css';
import Welcome from './Pages/Welcome/Welcome';
import SelectHostel from './Pages/SelectHostel/SelectHostel';
import ChooseHostel from './Pages/ChooseHostel/ChooseHostel';
import SelectFloor from './Pages/SelectFloor/SelectFloor';
import { auth, google, fb } from './firebase';
import SelectGirlsHostel from './Pages/SelectGirlsHostel/SelectGirlsHostel';
function App(props) {

  // useEffect(() => {
  //   db.collection("users").add({
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   })
  //     .then((docRef) => {
  //       console.log("Document written with ID: ", docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });
  // })
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user, "jjjjjj")
      props.selectUser(user)
    })
  })
  return (
    <>
      <header>
        <img src={logo} alt="img" />
        <div className="right-header">
          <img src={logo2} alt="img2" />
          {
            <p>{props?.user?.displayName}</p>
          }
        </div>
      </header>

      <Switch>


        <Route
          path={'/signIn'}
          exact={true}
          name={"sigIn"}
          render={props => (
            <SignIn {...props} />
          )}
        />

        <Route
          path={'/welcome'}
          exact={true}
          name={"welcome"}
          render={props => (
            <Welcome {...props} />
          )}
        />
        <Route
          path={'/selectHostel'}
          exact={true}
          name={"selectHostel"}
          render={props => (
            <SelectHostel {...props} />
          )}
        />
        <Route
          path={'/selectGirlsHostel'}
          exact={true}
          name={"selectGirlsHostel"}
          render={props => (
            <SelectGirlsHostel {...props} />
          )}
        />
        <Route
          path={'/chooseHostel'}
          exact={true}
          name={"chooseHostel"}
          render={props => (
            <ChooseHostel {...props} />
          )}
        />
        <Route
          path={'/selectFloor/:id/'}
          exact={true}
          name={"selectFloor"}
          render={props => (
            <SelectFloor {...props} />
          )}
        />
      </Switch>
    </>
  );
}
const mapStateToProps = (state) => {

  return {
    user: state.selectedUser
  }
}

export default connect(mapStateToProps, { selectUser })(App);
