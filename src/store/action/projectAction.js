import {projectFirestore} from "../../config/fbConfig";

export const createProject = (project) => {
    return (dispatch, getState) => {
        //make async call to database;
        projectFirestore.collection('projects')
            .add({
                ...project,
                authorFirstName: "john",
                authorLastName: "wicke",
                authorId: 12344,
                createAt: new Date()
            }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })

    }
};

export const getProjects = (collection) => {

    return (dispatch) => {
        collection
            .orderBy('createAt', 'desc')
            .get()
            .then((querySnapshot) => {
                let documents = [];
                querySnapshot.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                    // console.log("getProjects")
                    console.log(doc.id)
                })
                // projectFirestore.collection("projects")
                //     .orderBy('createAt', 'desc')
                //     .onSnapshot((snap) => {
                //         let documents = [];
                //         snap.forEach(doc => {
                //             documents.push({...doc.data(), id: doc.id})
                //             console.log("getProjects")
                //         });
                dispatch({type: "SET_PROJECTS", documents})
            })
    }
};

export const getUser = (id) => {

    return (dispatch) => {
        projectFirestore.collection('projects')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    dispatch({type: "SET_PROJECTS_USER", user:doc.data()})
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }
};