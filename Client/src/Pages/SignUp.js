
import React, { useState,useEffect } from "react";
import {useDispatch, useSelector,} from 'react-redux';
import {registerUser} from '../Actions/authActions';



function SignUp({history, setErrors}) {
  const [info, setInfo] = useState({
    Name: "",
    UserName: "",
    Country: "",
    Email: "",
    Password: "",
  });

const dispatch = useDispatch()
const auth = useSelector((state) => state.auth);

useEffect(()=> {
if (auth.isAuth){
history.push("/");
}


}


// eslint-disable-next-line react-hooks/exhaustive-deps
, [auth.isAuth]);




const handleChange = e => {
  setInfo({...info, [e.target.name] : e.target.value})
}
const registerNow = e => {
  e.preventDefault()
  dispatch(registerUser(info));
  
}



  return (
    <form onSubmit={registerNow} className="signUp">
      <div>
        <label>Name</label>
        <input  type="text" required name="Name" onChange={handleChange}/>
      </div>

      <div>
        <label>UserName</label>
        <input type="text" required name="UserName" onChange={handleChange}/>
      </div>

      <div>
        <label>Country</label>
        <input type="text" required  name="Country" onChange={handleChange}/>
      </div>

      <div>
        <label>Email</label>
        <input type="text" required name="Email" onChange={handleChange}/>
      </div>

      <div>
        <label>Password</label>
        <input type="password" required name="Password" onChange={handleChange}/>
      </div>
      
      <div>
        <h6 style={{color:'red'}}>{!auth.errors? null:auth.errors.data.map(el => <h3 > {el.msg} </h3>)} </h6>
        </div>

{/* {auth.errors.data && auth.errors.data.map(el => <h6 > {el.msg} </h6>)} */}

      <button type='submit' variant="contained">Submit</button>

      
    </form>
  );
}

export default SignUp;
