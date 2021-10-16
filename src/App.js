import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import AdminProducts from './components/AdminProducts';
import Cart from './components/Cart/Cart';

class App extends Component {
  state={
    products: [],
    selectedProduct: null
  }
  handleEdit = (product) =>{
    this.setSelectedProduct(product);
  }
  setSelectedProduct = (product) =>{
    this.setState({
      ...this.state,
      selectedProduct: product
    });
  }

  addProduct = (product) =>{
    const products = [...this.state.products];
    product.id = Math.random();
    
    products.push(product);
    this.setState({
      ...this.state,
      products: products
    });
  }
  updateProduct = (product) =>{
    const products = this.state.products;
    for (var i in products) {
      if (products[i].id == product.id) {
        products[i].title = product.title;
        products[i].imageUrl = product.imageUrl;
        products[i].price = product.price;
        products[i].description = product.description;
        break;
      }
    }
    
    this.setState({
      ...this.state,
      products: products
    });
  }
  deleteProduct = (id) =>{
    const products = this.state.products.filter(p=>p.id!== id);
    this.setState({
      ...this.state,
      products: products
    });
  }

  handleCart = (product, value) =>{
    const products = this.state.products;
    for (var i in products) {
      if (products[i].id == product.id) {
        products[i].isAddedInCart = value;
        break;
      }
    }
    this.setState({
      ...this.state,
      products: products
    });
  }
  render() {
    return (
      <BrowserRouter>
      
      <div className="App">         
            <Navbar />
            <Switch>
              <Route path="/add-product" render={ (props) => 
                this.state.selectedProduct ? 
                  <EditProduct {...props} product={this.state.selectedProduct} updateProduct={this.updateProduct} setSelectedProduct={this.setSelectedProduct} /> : 
                  <AddProduct {...props} addProduct={this.addProduct}
              /> } >              
              </Route>
              <Route path="/admin-products" render={ (props)=><AdminProducts {...props} handleEdit={this.handleEdit} deleteProduct = {this.deleteProduct} products={this.state.products}/>}></Route>
              <Route path="/cart" render={(props) => <Cart {...props} products={this.state.products} handleCart={this.handleCart} />}></Route> 
              <Route path="/" render= {(props) => <Products {...props} products={this.state.products} handleCart = { this.handleCart } />}></Route>              
            </Switch>           
      </div>               
      </BrowserRouter>
      
    
    );
  }
}

export default App;
