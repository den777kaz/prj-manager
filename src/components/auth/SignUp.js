import React, {useState} from 'react';

const SignUp = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            firstName,lastName,email,password
        }
        setPassword("")
        setEmail("")
        setFirstName("")
        setLastName("")


    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input value={firstName} name="firstName" type="text"  onChange={(e)=>setFirstName(e.currentTarget.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input value={lastName} type="text"  name="lastName"
                           onChange={(e)=>setLastName(e.currentTarget.value)}/>
                </div>
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

export default SignUp;
