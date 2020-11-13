import React, { useEffect, useState, useContext } from 'react'
import ProductItem from "../layout/ProductItem"
import Axios from 'axios'
import UserContext from "../../context/UserContext"
import MessageNotice from "../misc/MessageNotice"

const ProductList = () => {
const [allProducts, setAllProducts] = useState([]);
const [msg, setMsg] = useState();


const { userData } = useContext(UserContext)



    useEffect(() => {
        const getProducts = async () => {
        const productRes = await Axios.get(process.env.REACT_APP_BACKEND_URL + "/products/all", { headers: { "x-auth-token": userData.token } });
        console.log(productRes);
        setAllProducts(productRes.data);
        console.log(allProducts)
}
getProducts();
    }, [allProducts, userData.token])

const deleteItem = async(id) => {
    const deleteRes = await Axios.delete(process.env.REACT_APP_BACKEND_URL + "/products/" + id, { headers: { "x-auth-token": userData.token } })
    console.log(deleteRes.data);
   let remainingProducts = allProducts.filter(el => el._id !== id);
   setAllProducts(remainingProducts);
   setMsg(deleteRes.data.message);
}





    return(
        <div>
            {msg && (
              <MessageNotice message={msg} clearError={() => setMsg(undefined)} />
              )}
            <ul className="listwrapper">
                {allProducts.map(el =><ProductItem
                key={el._id}
                name={el.name}
                price={el.price}
                deleteItem={deleteItem}
                id={el._id}
                />)}
            </ul>
        </div>     
    )
}

export default ProductList;