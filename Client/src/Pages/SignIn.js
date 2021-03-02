import React, { useState, useEffect } from "react";
import loginUser from "../Actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const SignIn = ({ history }) => {
  const [info, setInfo] = useState({
    UserName: "",
    Password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(info));
  };

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuth) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isAuth]);

  return (
    <form className="signIn" on onSubmit={login}>
      <div className="input">
        <label>UserName</label>
        <input type="text" required name="UserName" onChange={handleChange} />
      </div>

      <div className="input">
        <label>Password</label>
        <input
          type="password"
          required
          name="Password"
          onChange={handleChange}
        />
      </div>
      <button type="submit" variant="primary">
        Submit
      </button>
    </form>
  );
};

export default SignIn;
