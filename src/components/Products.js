const Products = (props) =>{
    const {products} = props;

    const jsxProducts = products.map(product=>{
        return (
            <article className="card" key={product.id}>
                <header>{product.title}</header>
                <div className="image"><img height="150px" src={product.imageUrl} alt="Product Image"></img></div>
                <div className="details">
                    <span>Description: <b>{product.description}</b></span>
                    <span>Price: <b>{product.price}</b></span>
                </div>
            </article>
        );
    });
    return (        
        <div className="products-container">
            <h2>Products</h2>
            <div className="products-grid">
                {jsxProducts}
            </div>
        </div>
    );
}
export default Products;