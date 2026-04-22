import { useState } from "react";
import axios from "axios";

export default function RetailerDashboard(){
  const [p, setP] = useState({
    name:"", price:"", category:"", shopName:""
  });

  const add = async () => {
    await axios.post("http://localhost:5000/api/products/add", p);
    alert("Added");
  };

  return (
    <div>
      <h2>Retailer Dashboard</h2>

      <input placeholder="Name"
        onChange={e=>setP({...p,name:e.target.value})}/>

      <input placeholder="Price"
        onChange={e=>setP({...p,price:e.target.value})}/>

      <input placeholder="Category"
        onChange={e=>setP({...p,category:e.target.value})}/>

      <input placeholder="Shop Name"
        onChange={e=>setP({...p,shopName:e.target.value})}/>

      <button onClick={add}>Add Product</button>
    </div>
  );
}