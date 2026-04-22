import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login(){
  const { role } = useParams();
  const nav = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/users/login", data);

    localStorage.setItem("user", JSON.stringify(res.data));

    if(role === "retailer") nav("/retailer");
    else nav("/customer");
  };

  return (
    <div>
      <h2>{role} Login</h2>

      <input placeholder="Username"
        onChange={e=>setData({...data,username:e.target.value})}/>

      <input placeholder="Password"
        type="password"
        onChange={e=>setData({...data,password:e.target.value})}/>

      <button onClick={login}>Login</button>
    </div>
  );
}