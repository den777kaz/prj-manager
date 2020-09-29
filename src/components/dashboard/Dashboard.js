import React, {useEffect} from 'react';
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import {connect} from "react-redux";
import {getProjects} from "../../store/action/projectAction";
import {projectFirestore} from "../../config/fbConfig";





const Dashboard = (props) => {

    // const {docs} = useFirestore('projects');
    const {projects,getProjects} = props;
    const collection= projectFirestore.collection("projects")
    useEffect(()=> {
        getProjects(collection);
    }, [])

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    projects: state.projects.projects
})
// const mapDispatchToProps = (dispatch) => ({
//     getProjects: (project) => dispatch(getProjects(project))
// })
export default connect(mapStateToProps, {getProjects})(Dashboard) ;
