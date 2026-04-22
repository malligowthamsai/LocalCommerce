import { useEffect, useState } from "react";
import axios from "axios";

export default function CustomerHome(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <div key={p._id}>
          <h3>{p.name}</h3>
          <p>{p.price}</p>
          <p>{p.shopName}</p>
        </div>
      ))}
    </div>
  );
}