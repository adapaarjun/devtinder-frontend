
import { Route, Routes } from "react-router-dom";
import { Body } from "./components/Body";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Provider } from "react-redux";
import Feed from "./components/Feed";
import appStore from "./utils/appStore";
import Connections from "./components/Connections";
import { RequestReceived } from "./components/RequestReceived";

import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Pricing from "./components/Pricing";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import RefundPolicy from "./components/RefundPolicy";

function App() {
  return (
    <Provider store={appStore}>
      <Routes>
        <Route path="/" element={<Body />}>

          {/* Public Landing Page */}
          <Route index element={<LandingPage />} />

          {/* Authentication */}
          <Route path="login" element={<Login />} />

          {/* Application Pages */}
          <Route path="feed" element={<Feed />} />
          <Route path="connections" element={<Connections />} />
          <Route path="requests" element={<RequestReceived />} />
          <Route path="profile" element={<Profile />} />

          {/* Company Pages */}
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="pricing" element={<Pricing />} />

          {/* Legal Pages */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
          <Route path="refund-policy" element={<RefundPolicy />} />

        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
