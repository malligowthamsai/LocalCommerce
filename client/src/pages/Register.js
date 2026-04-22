import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register(){
  const { role } = useParams();
  const nav = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const submit = async () => {
    await axios.post("http://localhost:5000/api/users/register", {
      ...data,
      role
    });

    nav(`/login/${role}`);
  };

  return (
    <div>
      <h2>{role} Register</h2>

      <input placeholder="Username"
        onChange={e=>setData({...data,username:e.target.value})}/>

      <input placeholder="Password"
        type="password"
        onChange={e=>setData({...data,password:e.target.value})}/>

      <button onClick={submit}>Create Account</button>
    </div>
  );
}