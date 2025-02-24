import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Detail.css"

function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="detail-container">
     <img src={product.thumbnail} alt={product.title} />
    <div className="container-items">
      <h2>Title:{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Brand: {product.brand}</p>
      <Link to="/product">
        <button>← Go Back</button>
      </Link>
     </div>
    </div>
  );
}

export default ProductDetails;
