import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import Parallax from "./pages/Public/Parallax";
import Dashboard from "./pages/Protected/Dashboard/Dashboard";
import Register from "./pages/Public/features/registration/Register";
import Login from "./pages/Public/features/auth/Login";
import Exchange from "./pages/Protected/Exchange/Exchange";
import DarkWeb from "./pages/Protected/DarkWeb/DarkWeb";
import AddExchange from "./pages/Protected/Exchange/AddExchange";
import AddDarkWeb from "./pages/Protected/DarkWeb/AddDarkWeb";
import Verify from "./pages/Public/Verify";
import Bitcoin from "./pages/Protected/Bitcoin/Bitcoin";
import AddBitcoin from "./pages/Protected/Bitcoin/AddBitcoin";
import Logout from "./pages/Protected/Logout";
import AlertPage from "./pages/Public/features/alert/AlertPage";
import Monitor from "./pages/Protected/Monitor Asset/Monitor";
import DarkWebSearch from "./pages/Protected/DarkWeb/DarkWebSearch";
import { AnimatePresence } from "framer-motion";
import Asset from "./pages/Protected/Monitor Asset/Asset";
import AssetActivity from "./pages/Protected/Monitor Asset/AssetActivity";
import SearchAddress from "./pages/Protected/Transaction/SearchAddress";
import AddressDetail from "./pages/Protected/Transaction/AddressDetail";
import AddAsset from "./pages/Protected/Monitor Asset/AddAsset";
import Profile from "./pages/Protected/Profile/Profile";
import Demo from "./pages/Public/Demo";
import Content from "./pages/Home/Content";
import Products from "./pages/Products/Products";
import About from "./pages/Home/About";
import PrivacyPolicy from "./pages/Public/PrivacyPolicy";
import Team from "./pages/Public/Team";
import Documentation from "./pages/Products/Documentation";

const App = () => {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Parallax />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute accessBy="authenticated">
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exchange"
            element={
              <ProtectedRoute accessBy="authenticated">
                <Exchange />
              </ProtectedRoute>
            }
          />
          <Route
            path="/DarkWeb"
            element={
              <ProtectedRoute accessBy="authenticated">
                <DarkWeb />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addExchange"
            element={
              <ProtectedRoute accessBy="authenticated">
                <AddExchange />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addDarkWeb"
            element={
              <ProtectedRoute accessBy="authenticated">
                <AddDarkWeb />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cryptoTransactions"
            element={
              <ProtectedRoute accessBy="authenticated">
                <Bitcoin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addCryptoTransactions"
            element={
              <ProtectedRoute accessBy="authenticated">
                <AddBitcoin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedRoute accessBy="authenticated">
                <Logout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/DarkWebSearch"
            element={
              <ProtectedRoute accessBy="authenticated">
                <DarkWebSearch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/searchAddress"
            element={
              <ProtectedRoute accessBy="authenticated">
                <SearchAddress />
              </ProtectedRoute>
            }
          />
          <Route
            path="/searchDetail"
            element={
              <ProtectedRoute accessBy="authenticated">
                <AddressDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute accessBy="authenticated">
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/alert"
            element={
              <ProtectedRoute accessBy="authenticated">
                <AlertPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/monitor"
            element={
              <ProtectedRoute accessBy="authenticated">
                <Monitor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assetDetails"
            element={
              <ProtectedRoute accessBy="authenticated">
                <Asset />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assetActivity"
            element={
              <ProtectedRoute accessBy="authenticated">
                <AssetActivity />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addAsset"
            element={
              <ProtectedRoute accessBy="authenticated">
                <AddAsset />
              </ProtectedRoute>
            }
          />
          <Route path="/requestDemo" element={<Demo />} />
          <Route path="/learnMore" element={<Content />} />
          <Route path="/product" element={<Products />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/team" element={<Team />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
