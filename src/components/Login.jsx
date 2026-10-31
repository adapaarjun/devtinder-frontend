import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";

export const Login = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /*   const isUserExits = useSelector((store)=> store.userStore.userState) */

  const onHandleForm = () => {
    setIsLogin((isLoginValue) => !isLoginValue);
  };

  const onLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.log(err.message);
    }
  };

  const onSignUp = async() => {
    try{
      const res = await axios.post(BASE_URL + 'signup',{
        firstName,
        lastName,
        emailId,
        password,
        photoUrl
      },{withCredentials:true});
      dispatch(addUser(res.data.data));
      navigate('/profile')
    }catch(err){
      setError(err?.response?.data || "Something went wrong");
      console.log(err.message);
    }
  };

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
        <h2 className="text-2xl font-bold text-white text-center">
          {isLogin ? "Sign Up" : "Login"}
        </h2>

        {isLogin && (
          <>
            <label className="floating-label">
              <input
                type="text"
                placeholder="Enter First Name"
                className="input w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <span>First Name</span>
            </label>

            <label className="floating-label">
              <input
                type="text"
                placeholder="Enter Last Name"
                className="input w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <span>Last Name</span>
            </label>

            <label className="floating-label">
              <input
                type="text"
                placeholder="Enter Photo Url"
                className="input w-full"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
              <span>PhotoUrl</span>
            </label>
          </>
        )}

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
        <div className="flex flex-col justify-center pt-2 gap-1">
          {isLogin ? (
            <button className="btn btn-primary" onClick={onSignUp}>
              Sign Up
            </button>
          ) : (
            <button className="btn btn-primary" onClick={onLogin}>
              Login
            </button>
          )}
          <p
            className="text-center cursor-pointer"
            onClick={() => onHandleForm()}
          >
            {
              isLogin ? "Existing User? Login Here":"New User?Sign Up Here"
            }
          </p>
        </div>
      </div>
    </div>
  );
};
