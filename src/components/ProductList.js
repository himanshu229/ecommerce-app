import React from 'react';

const ProductList = ({ products, loading }) => {
    if (loading) return <p>Loading...</p>;
  
    return (
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;