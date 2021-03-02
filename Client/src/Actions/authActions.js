import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  // LOAD_USER_SUCCESS,
  // LOAD_USER_FAIL,
} from "./Types";

// import setToken from "../setToken";

import axios from "axios";

// register
export const registerUser = (info) => (dispatch) => {
  axios
    .post("/register", info)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response,
      })
    );
};

// load User

// export const loadUser = () => (dispatch) => {
//   setToken();
//   axios
//     .get("/login")
//     .then((res) =>
//       dispatch({
//         type: LOAD_USER_SUCCESS,
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch({
//         type: LOAD_USER_FAIL,
//         payload: err.response.data.msg,
//       })
//     );
// };

// loginUser
const loginUser = (data) => (dispatch) => {
  axios
    .post("/login", data)

    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      })
    );
};

export default loginUser;
