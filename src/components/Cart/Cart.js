import React, { Component } from "react";
import CartItem from './Cart_item';

class Cart extends Component{
    state = {
        products: []
    }
    constructor(props) {
        super(props);
        this.state = { products: this.setQuantity(this.props.products) }
    }
    setQuantity(products){
        return products.map(product=>{
            if(product.isAddedInCart){
                product.quantity = 1;
                return product;
            }
            return null;          
        });
    }
    handleCart(product, value) {
        this.props.handleCart(product, value);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ products: this.setQuantity(nextProps.products) }); 
    }
    render(){
        return (
        <div className="cart-container">
            <h2>My Cart</h2>
            <div className="cart-grid">
                {                    
                    this.state.products.map(product=>{
                    return (
                        <CartItem product={product} handleCart={this.props.handleCart}/>
                        );
                    })
                }
            </div>            
        </div>
        );
    }
}

export default Cart;