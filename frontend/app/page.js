"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data); // Assuming the API response has a 'data' field containing the products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>{product.name} - ${product.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}