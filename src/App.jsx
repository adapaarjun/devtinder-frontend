import { Route, Routes } from "react-router-dom";
import { Body } from "./components/Body";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Provider } from "react-redux";
import Feed from "./components/Feed";
import appStore from "./utils/appStore";
import Connections from "./components/Connections";
import { RequestReceived } from "./components/RequestReceived";

function App() {
  return (
    <Provider store={appStore}>
      <Routes>
        <Route path="/" element={<Body />}>
         <Route path="/feed" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connections" element={<Connections/>} />
          <Route path="/requests" element={<RequestReceived/>}/>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
