import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom';
import UserContext from "../../context/UserContext"
import DeleteModal from "../misc/DeleteModal"

const ProductItem = (props) => {
const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  const { userData } = useContext(UserContext)


  const showDeleteModal = () => {
    setDeleteModalVisible(true)
  }

  const cancelDeleteModal = () => {
    setDeleteModalVisible(false)
  }

    return(
        <div className="itemwrapper">
          {userData.user.role === "admin" ? (
            <section>
    <div class="container">
      {/* <h1 class="headingfull"><span>Products</span></h1> */}
      <section id="thumbnails">
        <ul class="thumbnails">
          <li class="span3">
            <a href="#" class="prdocutname">{props.name}</a>
            <div class="thumbnail">
              <span  class="sale tooltip-test">Sale</span>
              <a href="product.html"><img src="assets/img/product-l1.jpg" alt="" /></a>
              <div class="caption">
                <div class="price pull-left">
                  <span class="oldprice">{props.price}</span>
                  <span class="newprice">{props.price}</span>
                </div>
                <div class="links pull-left">
                  <Link to={"/edit/" + props.id}><button className="editbutton">edit</button></Link>
                  {/* <button className="delbutton" onClick={() => props.deleteItem(props.id)}>delete</button> */}
                  <button className="delbutton" onClick={showDeleteModal}>delete</button><br />
                  {deleteModalVisible && <DeleteModal 
                  cancel={cancelDeleteModal}
                  deleteIt={() => props.deleteItem(props.id)}/>}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </section>
          ):(<section>
            <div class="container">
              {/* <h1 class="headingfull"><span>Products</span></h1> */}
              <section id="thumbnails">
                <ul class="thumbnails">
                  <li class="span3">
                    <a href="#" class="prdocutname">{props.name}</a>
                    <div class="thumbnail">
                      <span  class="sale tooltip-test">Sale</span>
                      <a href="product.html"><img src="assets/img/product-l1.jpg" alt="" /></a>
                      <div class="caption">
                        <div class="price pull-left">
                          <span class="oldprice">{props.price}</span>
                          <span class="newprice">{props.price}</span>
                        </div>
                        <a class="cartadd pull-right tooltip-test" data-original-title="Add to Cart"> Add to Cart </a>
                        <div class="links pull-left"><a href="product.html" class="info">info</a>
                          <a href="wishlist.html" class="wishlist">wishlist</a>
                          <a href="compare.html" class="compare">compare</a><br />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </section>) }
            
        </div>
    )
}

export default ProductItem;