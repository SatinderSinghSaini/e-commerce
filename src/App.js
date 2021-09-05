import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import AdminProducts from './components/AdminProducts';

class App extends Component {
  state={
    products: []
  }

  addProduct = (product) =>{
    const products = [...this.state.products];
    product.id = Math.random();
    
    products.push(product);
    this.setState({
      products
    });
  }
  deleteProduct = (id) =>{
    const products = this.state.products.filter(p=>p.id!== id);
    this.setState({
      products
    });
  }
  render() {
    return (
      <BrowserRouter>
      
      <div className="App">         
            <Navbar />
            <Switch>
              <Route path="/add-product" render={ (props) => <AddProduct {...props} addProduct={this.addProduct}/> }></Route>
              <Route path="/admin-products" render={ (props)=><AdminProducts {...props} deleteProduct = {this.deleteProduct} products={this.state.products}/>}></Route>
              <Route path="/" component={Products}></Route>              
            </Switch>           
      </div>   
               
      </BrowserRouter>
      
    
    );
  }
}

export default App;
