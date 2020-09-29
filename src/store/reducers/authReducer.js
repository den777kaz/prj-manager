const initialState = {
    isLogged: false,
    init: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_AUTH':

            return {
                ...state, isLogged: action.status
            }

        default:
            return state
    }

}

export default authReducer;
