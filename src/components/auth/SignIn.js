import React, {useState} from 'react';
import {signIn} from "../../store/action/authAction";
import {connect} from "react-redux";

const SignIn = ({signIn}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(email, password)
        // setPassword("")
        // setEmail("")
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input value={email} type="email"  onChange={(e)=>setEmail(e.currentTarget.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input value={password} type="password"
                           onChange={(e)=>setPassword(e.currentTarget.value)}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
    );
};

export default connect(null, {signIn})(SignIn);
