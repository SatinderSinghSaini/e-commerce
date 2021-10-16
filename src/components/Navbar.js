import AddProduct from "./AddProduct";
import AdminProducts from "./AdminProducts";
import Products from "./Products";
import { Link, NavLink } from 'react-router-dom';

const Navbar = ()=>{
    return (
        <div className="navbar-container">
            <span className="nav-item"><NavLink className="nav-content" to="/">Products</NavLink></span>
            <span className="nav-item"><NavLink className="nav-content" to="/cart">Cart</NavLink></span>
            <span className="nav-item"><NavLink className="nav-content" to="/add-product">Add Product</NavLink></span>
            <span className="nav-item"><NavLink className="nav-content" to="/admin-products">Admin Products</NavLink></span>
        </div>
    )
}
export default Navbar;