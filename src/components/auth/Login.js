import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        process.env.REACT_APP_BACKEND_URL + "/users/login",
        loginUser
      );
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
          <h1 class="headingmain"><span>Log in</span></h1>
          <br />
          <form onSubmit={submit}>
            <h3 class="heading3">Your Login Details</h3>
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
                  <button type="Submit" class="btn btn-success">Login</button>  
              </fieldset>
              </div>
              </form >
            </div>
            </div>
  );
}
