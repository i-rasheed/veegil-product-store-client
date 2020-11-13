import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import {Link} from "react-router-dom"

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [role, setRole] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName, role };
      await Axios.post(process.env.REACT_APP_BACKEND_URL + "/users/register", newUser);
      const loginRes = await Axios.post(process.env.REACT_APP_BACKEND_URL + "/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  };

  return (
    <div>
      <div class="span9">
          <h1 class="headingmain"><span>Register Account</span></h1>
          <p> If you already have an account with us, please login at the <Link to="/login">login page.</Link></p>
          <br />
          <form onSubmit={submit}>
            <h3 class="heading3">Your Personal Details</h3>
            {error && (
              <ErrorNotice message={error} clearError={() => setError(undefined)} />
              )}
            <div class="registerbox">
              <fieldset>
                <div class="control-group">
                  <label class="control-label"><span class="red">*</span> Email: </label>
                  <div class="controls">
                    <input type="text"  class="input-xlarge" onChange={(e) => {setEmail(e.target.value)}}/>
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label"><span class="red">*</span> Password:</label>
                  <div class="controls">
                    <input type="password"  class="input-xlarge" onChange={(e) => {setPassword(e.target.value)}} />
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label"><span class="red">*</span> Retype Password:</label>
                  <div class="controls">
                    <input type="password"  class="input-xlarge" onChange={(e) => {setPasswordCheck(e.target.value)}}/>
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label"><span class="red">*</span> Display Name:</label>
                  <div class="controls">
                    <input type="text"  class="input-xlarge" onChange={(e) => {setDisplayName(e.target.value)}}/>
                  </div>
                </div>
                <label for="cars">Choose a role:</label>
                  <select id="cars" name="carlist" form="carform" onChange={(e) => setRole(e.target.value)}>
                    <option value="basic">basic</option>
                    <option value="admin">admin</option>
                  </select> <br/>
                  <button type="Submit" class="btn btn-success" >Submit</button>  
              </fieldset>
              </div>
              </form >
            </div>
            </div>
  );
}



