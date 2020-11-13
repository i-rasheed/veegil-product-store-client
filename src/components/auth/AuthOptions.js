import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const products = () => history.push("/products")
  const addProduct = () => history.push("/NewProduct")
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/")
  };

  return (
    <nav className="auth-options">
      {userData.user ? (
        <>
        <button onClick={logout}>Log out</button> |
        <button className="login" onClick={products}>View Products</button>|
        <button className="login" onClick={addProduct}>Add Product</button>
        </>
      ) : (
        <>
          <button onClick={register}>Register</button> |
          <button className="login" onClick={login}>Log in</button>
        </>
      )}
    </nav>
  );
}
