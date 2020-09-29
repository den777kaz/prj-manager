import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../store/action/authAction";


const SingInLinks = ({signOut}) => {


    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/" onClick={signOut}>Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">DK</NavLink></li>
        </ul>
    );
};

export default connect(null, {
    signOut
})(SingInLinks);
