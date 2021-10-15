const AdminProducts = (props) =>{
    const {products,deleteProduct,handleEdit} = props;
    function onEdit(product) {
        handleEdit(product);
        props.history.push('add-product');
    }
    const jsxProducts = products.map(product=>{
        return (
            <article className="card" key={product.id}>
                <header>{product.title}</header>
                <div className="image"><img height="150px" src={product.imageUrl} alt="Product Image"></img></div>
                <div className="details">
                    <span>Description: <b>{product.description}</b></span>
                    <span>Price: <b>{product.price}</b></span>
                </div>
                <div className="action-buttons">
                        <button onClick={()=> onEdit(product)}>Edit</button>
                        <button onClick={()=>deleteProduct(product.id)}>Delete</button>
                </div>
            </article>
        )
    })
    return (        
        <div className="admin-products-container">
            <h2>Admin Products</h2>
            <div className="admin-products-grid">
                {jsxProducts}
            </div>
        </div>
    );
}
export default AdminProducts;