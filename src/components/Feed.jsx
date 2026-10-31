import axios from "axios";
import BASE_URL from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed, removeUserFromFeed } from "../utils/feedSlice";
import { UsersFeed } from "./UsersFeed";
import Alert from "../utils/Alert";

function Feed() {
  const dispatch = useDispatch();
  const getFeedStore = useSelector(
    (store) => store.feedStore.feedData
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [showAlert,setShowAlert] = useState(false);
  const [selectedUser,setSelectedUser] = useState(null);

  const fetchFeed = async () => {
    if (getFeedStore.length > 0) return;

    try {
      const res = await axios.get(BASE_URL + "feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  const onShowAlert = (item,userId,status) => {
    setSelectedUser({...item,status});
    setShowAlert(true);
    dispatch(removeUserFromFeed(userId));
    setTimeout(()=>{
      setShowAlert(false);
      setSelectedUser(null);
    },5000)
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center p-4">
      {
        showAlert && selectedUser && (<Alert item={selectedUser}/>)
      }
      <div className="relative w-full max-w-87.5">

        {/* Third user: back card */}
        {getFeedStore[activeIndex + 2] && (
          <div className="absolute inset-0 translate-x-3 translate-y-3 overflow-hidden rounded-2xl">
            <img
              src={getFeedStore[activeIndex + 2].photoUrl}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        {/* Second user: middle card */}
        {getFeedStore[activeIndex + 1] && (
          <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 overflow-hidden rounded-2xl">
            <img
              src={getFeedStore[activeIndex + 1].photoUrl}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        {/* Main carousel */}
        <div
          className="carousel relative z-10 w-full overflow-x-auto overflow-y-hidden rounded-2xl"
          onScroll={(e) => {
            const width = e.currentTarget.clientWidth;
            if (width > 0) {
              const index = Math.round(
                e.currentTarget.scrollLeft / width
              );
              setActiveIndex(index);
            }
          }}
        >
          {getFeedStore.map((item) => (
            <UsersFeed key={item._id} item={item} onRequesthandler={onShowAlert}/>
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default Feed;