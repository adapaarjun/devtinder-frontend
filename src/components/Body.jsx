
import { Outlet } from "react-router-dom";
import { NavBarComponent } from "./NavBarComponent";
import { Footer } from "./Footer";
import axios from "axios";
import BASE_URL from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

export const Body = () => {
  const dispatch = useDispatch();

  const userData = useSelector(
    (store) => store.userStore.userState
  );

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(res.data));
    } catch (err) {
      // User is not logged in.
      // Do not redirect to login here.
      console.log(err.mesage,"No active user session");
    }
  };

  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <NavBarComponent />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
