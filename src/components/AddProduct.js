import React, {Component} from 'react';
class AddProduct extends Component{
    state = {
        title: '',
        imageUrl: '',
        price: '',
        description: ''
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addProduct(this.state);
    }
    handleChange = (e)=>{
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }
    render(){
        return (
            <div className="add-product-container">
                <h2>Add Product</h2>
                <form className="add-product-form" onSubmit={this.handleSubmit}>
                    <div className="add-product-form-field">
                        <label className="add-product-label">Title: </label>
                        <input type="text" id="title" name="title" onChange={this.handleChange}/>
                    </div>
                    <div className="add-product-form-field">
                        <label className="add-product-label">Image Url: </label>
                        <input type="text" id="imageUrl" name="imageUrl" onChange={this.handleChange}/>
                    </div>
                    <div className="add-product-form-field">
                        <label className="add-product-label">Price: </label>
                        <input type="number" id="price" name="price" onChange={this.handleChange}/>
                    </div>
                    <div className="add-product-form-field">
                        <label className="add-product-label">Description: </label>
                        <textarea type="text" id="description" name="description" onChange={this.handleChange}/>
                    </div>
                    <div className="add-product-form-field">
                        <button>Add Product</button>
                    </div>                  
                </form>
            </div>
        );
    }
}
export default AddProduct;