import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./NavBar";
import { Footer } from "./Footer";
import axios from "axios";
import BASE_URL from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

export const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=>store.userStore.userState);

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
    }
  };

  useEffect(()=>{
    if(!userData){
      fetchUser();
    }
  },[])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex flex-1 items-center justify-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
