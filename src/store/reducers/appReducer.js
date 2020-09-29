import {getAuth} from "../action/authAction";

const initialState = {
    init: null
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'INIT_SUCCESS':
            return {
                ...state, init: true
            }

        default:
            return state
    }

}


export const initApp = () => {
    return (dispatch) => {
        dispatch(getAuth());
        dispatch({type: "INIT_SUCCESS"});

        setTimeout(() => {

        }, 500)


    }
}


export default appReducer;
