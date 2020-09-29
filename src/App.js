import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import {connect} from "react-redux";
import {initApp} from "./store/reducers/appReducer";


const App = ({init, initApp}) => {


    useEffect(()=> {
        initApp()
        console.log("render###########")
    }, [init])

//TODO initialized
    if (!init) {
        return <p>loading...</p>;
    }

    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/" render={() => <Dashboard/>} />
                    <Route path="/project/:id" render={() => <ProjectDetails/>} />
                    <Route path="/signin" render={() => <SignIn />} />
                    <Route path="/signup" render={() => <SignUp />} />
                    <Route path="/create" render={() => <CreateProject />} />
                </Switch>
            </div>
        </Router>
    );
}
const mapStateToProps = (state) => ({
    init: state.app.init
})
export default connect(mapStateToProps, {initApp})(App);
