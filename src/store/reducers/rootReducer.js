
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';
import appReducer from "./appReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectReducer,
    app: appReducer
});

export default rootReducer;








