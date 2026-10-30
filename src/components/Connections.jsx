import axios from "axios";
import BASE_URL from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionsSlice";
import { useEffect } from "react";
import ConnectionsCard from "./ConnectionsCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connectionsStore = useSelector(
    (store) => store.connectionStore.connections,
  );
  console.log(connectionsStore);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connectionsStore) {
    return <h1>Connections Loading..</h1>;
  }

  if (connectionsStore.length <= 0) {
    return <h1>No Connections</h1>;
  }

return (
  <div className="mx-auto flex h-[80vh] w-full max-w-xl flex-col p-4">
    <h1 className="mb-4 text-xl font-bold">Your Connections</h1>

    <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto pr-2 scrollbar-none">
      {connectionsStore.map((item) => (
        <ConnectionsCard key={item._id} item={item} />
      ))}
    </div>
  </div>
);
};

export default Connections;
