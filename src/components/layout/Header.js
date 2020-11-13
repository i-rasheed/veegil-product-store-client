import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

export default function Header() {
  return (
    <header>
      <div class="navbar navbar-fixed-top" id="main-nav">
    <div className="container">
      <button data-target=".nav-collapse" data-toggle="collapse" class="btn btn-navbar" type="button">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      </button>
      <nav class="nav-collapse collapse" style={{height:"0px"}}>
        <ul class="nav">
          <li class="active"><Link to="/">Home</Link>
          </li>
          <li><a href="#">My Account </a>
          </li>
          <li><a href="#">Shopping Cart</a>
          </li>
          <li><a href="#">Checkout</a>
          </li>
        </ul>
      </nav>
      <ul class="nav pull-right left-tablet">
        <li class="dropdown hover">
          <a data-toggle="" class="dropdown-toggle" href="#">US Doller <b class="caret"></b></a>
          <ul class="dropdown-menu currency">
            <li><a href="#">US Doller</a>
            </li>
            <li><a href="#">Euro </a>
            </li>
            <li><a href="#">British Pound</a>
            </li>
          </ul>
        </li>
        <li class="dropdown hover">
          <a data-toggle="" class="dropdown-toggle" href="#">English <b class="caret"></b></a>
          <ul class="dropdown-menu language">
            <li><a href="#">English</a>
            </li>
            <li><a href="#">Spanish</a>
            </li>
            <li><a href="#">German</a>
            </li>
          </ul>
        </li>
        <li class="dropdown hover topcart">
          <a  class="dropdown-toggle" href="#">
            <i class="carticon"></i> Shopping Cart <span class="label label-success font14">1 item(s)</span> - $589.50<b class="caret"></b></a>
          <ul class="dropdown-menu topcartopen">
            <li>
              <table>
                <tbody>
                  <tr>
                    <td class="image"><a href="product.html"><img title="product" alt="product" src="assets/img/prodcut-40x40.jpg" height="50" width="50" /></a></td>
                    <td class="name"><a href="product.html">MacBook</a></td>
                    <td class="quantity">x&nbsp;1</td>
                    <td class="total">$589.50</td>
                    <td class="remove"><i class="icon-remove"></i></td>
                  </tr>
                  <tr>
                    <td class="image"><a href="product.html"><img title="product" alt="product" src="assets/img/prodcut-40x40.jpg" height="50" width="50" /></a></td>
                    <td class="name"><a href="product.html">MacBook</a></td>
                    <td class="quantity">x&nbsp;1</td>
                    <td class="total">$589.50</td>
                    <td class="remove"><i class="icon-remove "></i></td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td class="textright"><b>Sub-Total:</b></td>
                    <td class="textright">$500.00</td>
                  </tr>
                  <tr>
                    <td class="textright"><b>Eco Tax (-2.00):</b></td>
                    <td class="textright">$2.00</td>
                  </tr>
                  <tr>
                    <td class="textright"><b>VAT (17.5%):</b></td>
                    <td class="textright">$87.50</td>
                  </tr>
                  <tr>
                    <td class="textright"><b>Total:</b></td>
                    <td class="textright">$589.50</td>
                  </tr>
                </tbody>
              </table>
              <div class="well pull-right">
                <a href="#" class="btn btn-success">View Cart</a>
                <a href="#" class="btn btn-success">Checkout</a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <div class="header-white">
    <div class="container">
      <div class="row">
        <div class="span4">
          <Link to="/"><h1>Veegil Product Store</h1></Link>
        </div>
        <div class="span8">
          <div class="row">
            <div class="pull-right logintext">Welcome,  you can <AuthOptions />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
      
    </header>
  );
}
