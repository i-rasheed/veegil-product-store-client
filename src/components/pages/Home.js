import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div >
      {userData.user ? (
        <h1>Welcome {userData.user.displayName}</h1>
      ) : (
      <div>
        <div>
          <div class="header-white">
    <div class="container">
      <div class="row">
        <div class="span4">
          
        </div>
        <div class="span8">
          <div class="row">
            <div class="pull-right logintext">Welcome Px,  you can <Link to="/login">login </Link>
              or <Link to="/register">Register</Link>
            </div>
          </div>
          <form class="form-search marginnull topsearch pull-right">
            <input type="text" class="input-large search-query search-icon-top" value="Search here..."  onFocus="if (this.value=='Search here...') this.value='';" onblur="if (this.value=='') this.value='Search here...';"
        />
          </form>
        </div>
      </div>
    </div>
        </div>
        </div>   
        </div>
           
      )}
    </div>
  );
}
