import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";
import { removeUser } from "../utils/userSlice";

export const Navbar = () => {
  const userData = useSelector((store) => store.userStore.userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const onHandleLogout = async() => {
  try{
    const res = await axios.post(BASE_URL + "logout",{},{
      withCredentials:true
    });
    console.log(res.data)
    dispatch(removeUser(userData));
    navigate('/login')
  }catch(err){
    console.log(err.message)
  }
 }

  return (
    <>
      <div className="navbar bg-base-200 text-base-content">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">👨🏼‍💻DevTinder</Link>
        </div>
        {userData && (
          <div className="flex items-center">
            <p>Welcome {userData.firstName}</p>
            <div className="dropdown dropdown-end mx-6">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="user photo"
                    src={userData.photoUrl}
                  />
                </div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link to="/login" onClick={onHandleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
