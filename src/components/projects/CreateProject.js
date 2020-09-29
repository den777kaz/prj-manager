import React, {useState} from 'react';
import {connect} from "react-redux";
import {createProject} from "../../store/action/projectAction";

const CreateProject = (props) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectData = {title, content}
        setTitle("")
        setContent("")
        props.createProject(projectData);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input value={title} type="text" id="title" onChange={(e)=>setTitle(e.currentTarget.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea className="materialize-textarea" value={content}  id="content"
                           onChange={(e)=>setContent(e.currentTarget.value)}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
createProject: (project) => dispatch(createProject(project))
})
export default connect( mapStateToProps,mapDispatchToProps )(CreateProject);
