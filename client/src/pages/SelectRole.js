import { useNavigate } from "react-router-dom";

export default function SelectRole(){
  const nav = useNavigate();

  return (
    <div>
      <h1>Select Role</h1>

      <button onClick={()=>nav("/register/retailer")}>
        Retailer
      </button>

      <button onClick={()=>nav("/register/customer")}>
        Customer
      </button>
    </div>
  );
}