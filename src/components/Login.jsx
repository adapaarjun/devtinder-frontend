import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";


export const Login = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(" ");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = async() => {
      try{
      const res = await axios.post(BASE_URL + 'login',{
      emailId,
      password
     },{
      withCredentials:true
     })
       dispatch(addUser(res.data))
       navigate('/feed')
      }catch(err){
        setError(err?.response?.data || "Something went wrong")
        console.log(err.message);
      }
  }

  return (
    <div className="relative isolate w-96 overflow-hidden rounded-2xl shadow-xl">
      {/* Background image */}
      <img
        src="../src/assets/devtinder.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/30" />

      {/* Login form */}
      <div className="relative flex min-h-105 flex-col justify-center gap-6 p-8">
        <h2 className="text-2xl font-bold text-white text-center">Login</h2>

        <label className="floating-label">
          <input
            type="email"
            placeholder="Enter EmailId"
            className="input w-full"
            value={emailId}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>EmailID:{emailId}</span>
        </label>

        <label className="floating-label">
          <input
            type="password"
            placeholder="Enter Password"
            className="input w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password:{password}</span>
        </label>


        <p className="text-red-500">{error}</p>
        <div className="flex justify-center pt-2">
          <button className="btn btn-primary" onClick={onLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};
