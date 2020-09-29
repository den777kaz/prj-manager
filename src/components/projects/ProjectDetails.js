import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {getUser} from "../../store/action/projectAction";

const ProjectDetails = (props) => {

    const id = props.match.params.id;
    const {user} = props;


    useEffect(()=>{
        props.getUser(id)

    },[id])

    if(!props.user) {
        return (
            <div className="container center" >
                <p>loading...</p>
            </div>
            
        )
    }

    return (
        <div className="container section project-details" >
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{user.title}</span>
                    <p>{user.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {user.authorFirstName + " " + user.authorLastName}</div>
                    <div>3weeeeeeeee</div>
                </div>
            </div>
        </div>
    );
};
const maStateToProps = (state) => ({
    user: state.projects.user
})
export default compose(
    withRouter,
    connect(maStateToProps,{getUser})
)(ProjectDetails);
