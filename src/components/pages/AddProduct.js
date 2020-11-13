import React, {useState, useContext} from 'react';
import Axios from "axios";
import UserContext from "../../context/UserContext";
import ErrorNotice from "../misc/ErrorNotice"
import MessageNotice from "../misc/MessageNotice"
// import { useHistory } from "react-router-dom";

const AddProduct = () => {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [error, setError] = useState()
    const [msg, setMsg] = useState()

    const { userData } = useContext(UserContext);

    const submit = async (e) => {
        e.preventDefault()
        try {
            const post = { name, price};
            const postRes = await Axios.post(
                process.env.REACT_APP_BACKEND_URL + "/products",
                post,
                { headers: { "x-auth-token": userData.token } }
              );
              console.log(postRes.data)
              setMsg(postRes.data.message);
          } catch (err) {
            err.response.data.message && setError(err.response.data.message);
          }
        };


return(
    <div>
        <div class="span9">
          <h1 class="headingmain"><span>Add Product</span></h1>
          <br />
          <form onSubmit={submit}>
            <h3 class="heading3">Your Product Details</h3>
            {error && (
              <ErrorNotice message={error} clearError={() => setError(undefined)} />
              )}
              {msg && (
              <MessageNotice message={msg} clearError={() => setMsg(undefined)} />
              )}
            <div class="registerbox">
              <fieldset>
                <div class="control-group">
                  <label class="control-label"><span class="red">*</span>Product Name: </label>
                  <div class="controls">
                    <input type="text"  class="input-xlarge" onChange={(e) => {setName(e.target.value)}}/>
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label"><span class="red">*</span> Price</label>
                  <div class="controls">
                    <input type="text"  class="input-xlarge" onChange={(e) => {setPrice(e.target.value)}} />
                  </div>
                </div>
                  <button type="Submit" class="btn btn-success">Add</button>  
              </fieldset>
              </div>
              </form >
            </div>
    </div>
)
}

export default AddProduct;