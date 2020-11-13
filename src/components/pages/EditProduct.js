import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import UserContext from "../../context/UserContext"
// import MessageNotice from "../misc/MessageNotice"

const EditProduct = (props) => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();

    const { userData } = useContext(UserContext)
    const history = useHistory();

useEffect(() => {
    const getTheProduct = async() => {
        const productRes = await Axios.get(process.env.REACT_APP_BACKEND_URL + "/products/" + props.match.params.id);
        setName(productRes.data.products.name);
        setPrice(productRes.data.products.price);
    }
    getTheProduct()
}, [props.match.params.id])

const submit = async (e) => {
    e.preventDefault();
    const newProduct ={
        name,
        price
    }
    const postRes = await Axios.put(process.env.REACT_APP_BACKEND_URL + "/products/" + props.match.params.id, newProduct, { headers: { "x-auth-token": userData.token } })
    console.log(postRes.data);
    history.push("/products")
}

  


  
    return (
        <div>
        <div class="span9">
          <h1 class="headingmain"><span>Edit Product</span></h1>
          <br />
          <form onSubmit={submit}>
            <h3 class="heading3">Your Product Details</h3>
              {/* {this.state.msg && (
              <MessageNotice message={this.state.msg} clearError={() => this.setState({msg : undefined})} />
              )} */}
            <div class="registerbox">
              <fieldset>
                <div class="control-group">
                  <label class="control-label"><span class="red">*</span>Product Name: </label>
                  <div class="controls">
                    <input type="text"  class="input-xlarge" value={name} onChange={(e) => {setName(e.target.value)}}/>
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label"><span class="red">*</span> Price</label>
                  <div class="controls">
                    <input type="text"  class="input-xlarge" value={price} onChange={(e) => {setPrice(e.target.value)}} />
                  </div>
                </div>
                  <button type="submit" class="btn btn-success">Submit</button>  
              </fieldset>
              </div>
              </form >
            </div>
    </div>
     )
  }

  export default EditProduct
