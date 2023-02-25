import { Route, Routes, useLocation } from "react-router-dom";
import Basket from "../Pages/Basket";
import { Home } from "../Pages/Home";
import Title from "./Title";
import Campaign from "../Pages/Campaign";
import { PrivateRoute } from "./PrivateRoute";
import Header from "./Header";
import Membership from "../Pages/Membership";
import Details from "./Details";
import DetailToys from "./DetailToys";

export const RouteLayout = () => {
  const { state } = useLocation();
  return (
    <>
      {state?.some ? (
        <Membership />

      ) : (
        <>       
          <Header />
          <Routes>
            <Route element={<PrivateRoute />} />
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/membership" element={<Membership/>} />
            <Route path="/Campaign" element={<Campaign />} />
            <Route path="/cart-detail/1" element={<Details/>}/>
            <Route path="/cart-detailtoy/1" element={<DetailToys/>}/>
          </Routes>
          <Title />
        </>
      )}
    </>
  );
};
