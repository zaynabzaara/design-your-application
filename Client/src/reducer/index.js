import{combineReducers} from 'redux';
import AuthReducer from './authReducer';
import posts from './postsReducer';



export default combineReducers({auth:AuthReducer , posts });
