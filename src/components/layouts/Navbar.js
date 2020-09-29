import React from 'react';
import {Link} from "react-router-dom";
import SingInLinks from "./SignInLinks";
import SingOutLinks from "./SignOutLinks";
import {connect} from "react-redux";


const Navbar = ({isLogged}) => {


    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo" >DenisPlan </Link>
                {
                    !isLogged ? <SingOutLinks /> : <SingInLinks/>
                }



            </div>
        </nav>
    );
};

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(Navbar);
