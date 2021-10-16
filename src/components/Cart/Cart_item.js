import React from "react";

const CartItem = (props) =>{
    const {product, handleCart} = props;

    if(product){
        return (
            <article className="card">
                <header>{product.title}</header>
                <div className="image"><img height="150px" src={product.imageUrl} alt="Product Image"></img></div>
                <div className="details">
                    <span>Description: <b>{product.description}</b></span>
                    <span>Price: <b>{product.price}</b></span>
                </div>
                <div className="action-buttons">
                    <button onClick={ () => handleCart(product, false) }>Remove Item</button>
                </div>
            </article>
        )
    }
    return null;
}
export default CartItem;