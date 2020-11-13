import React from 'react';


const DeleteModal = (props) => {
return(
    <div className="delmodal">
        <p>Are you sure you want to delete this product?</p>
        <button className="cancel" onClick={props.cancel}>cancel</button>
        <button className="yes" onClick={props.deleteIt}>Yes</button>
    </div>
)
}

export default DeleteModal;
