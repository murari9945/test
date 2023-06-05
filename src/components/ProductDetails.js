import React from 'react';

const ProductDetails = ({ productDetails,onDelete }) => {
    const totalPrice = productDetails.reduce(
        (total, product) => total + parseFloat(product.SellingPrice),
        0
      );
      const handleDelete = (index) => {
        onDelete(index);
      };
    
  return (
    <div>
      <h2>Product Details:</h2>
      {productDetails.map((product, index) => (
        <div key={index}>
          <p>ProductId: {product.ProductId}</p>
          <p>SellingPrice: {product.SellingPrice}</p>
          <p>ProductName: {product.ProductName}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>

          <hr />
        </div>
      ))}
      <p>TotalPrice:{totalPrice}</p>
    </div>
  );
};

export default ProductDetails;
