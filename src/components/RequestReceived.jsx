import { useDispatch, useSelector } from "react-redux";
import BASE_URL from "../utils/constants";
import axios from "axios";
import { addRequest } from "../utils/requestSlice";
import { useEffect } from "react";
import RequestCard from "./RequestCard";

export const RequestReceived = () => {
  const dispatch = useDispatch();
  const requestStore = useSelector((store) => store.requestStore.requestData);
  const fetchRequest = async () => {
    const res = await axios.get(BASE_URL + "requests", {
      withCredentials: true,
    });
    dispatch(addRequest(res.data.data));
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requestStore) {
    return <h1>Requests Loading..</h1>;
  }

  if (requestStore.length <= 0) {
    return <h1>No Request</h1>;
  }

  return (
    <div className="mx-auto flex h-[80vh] w-full max-w-xl flex-col p-4">
      <h1 className="mb-4 text-xl font-bold">Your Requests</h1>

      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto pr-2 scrollbar-none">
        {requestStore.map((item) => (
          <RequestCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};
