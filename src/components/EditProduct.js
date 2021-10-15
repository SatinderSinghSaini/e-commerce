import React, { Component } from "react";

class EditProduct extends Component{
    state = {...this.props.product}
    handleChange= (e)=> {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }
    handleSubmit= (e) => {
        e.preventDefault();
        this.props.updateProduct(this.state);
        this.props.setSelectedProduct(null);
        this.props.history.push('/admin-products');
    }

    render() {
        return(
            <div className="edit-container">
                <h2>Edit Product</h2>
                <form className="edit-product-form" onSubmit={this.handleSubmit}>
                    <div className="edit-product-form-field">
                        <label className="edit-product-label">Title: </label>
                        <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div className="edit-product-form-field">
                        <label className="edit-product-label">Image Url: </label>
                        <input type="text" id="imageUrl" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange}/>
                    </div>
                    <div className="edit-product-form-field">
                        <label className="edit-product-label">Price: </label>
                        <input type="number" id="price" name="price" value={this.state.price} onChange={this.handleChange}/>
                    </div>
                    <div className="edit-product-form-field">
                        <label className="edit-product-label">Description: </label>
                        <textarea type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange}/>
                    </div>
                    <div className="edit-product-form-field">
                        <button>Save Changes</button>
                    </div>                  
                </form>
            </div>
        )
    }
}

export default EditProduct;