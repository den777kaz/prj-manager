const initialState = {
    projects: [],
    user: null
};

const projectReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':

            return state
        case 'CREATE_PROJECT_ERROR':
            return state

        case 'SET_PROJECTS':
            return {
                ...state, projects: action.documents
            }

        case 'SET_PROJECTS_USER':
            return {
                ...state, user: action.user
            }

        default:
            return state
    }

}


export default projectReducer;
