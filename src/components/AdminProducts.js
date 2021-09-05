const AdminProducts = ({products,deleteProduct}) =>{
    console.log(products);
    const jsxProducts = products.map(product=>{
        return (
            <article className="card" key={product.id}>
                <header>{product.title}</header>
                <div className="image"><img height="150px" src={product.imageUrl} alt="Product Image"></img></div>
                <div className="details">
                    Description: {product.description}
                    Price: {product.price}
                </div>
                <div className="action_buttons">
                    <div>
                        <button>Edit</button>
                        <button onClick={()=>deleteProduct(product.id)}>Delete</button>
                    </div>
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