import { Outlet, Navigate } from "react-router-dom";
import { PATH_NAME } from "./pathName";
import { checkExpiredJwt } from "~/utils/jwtDecode";

const accessToken = localStorage.getItem("@accessToken") || "";

const PrivateRouters = () => {
  const isAuthentication = checkExpiredJwt(accessToken);

  return isAuthentication ? <Outlet /> : <Navigate to={PATH_NAME.LOGIN} />;
};

export default PrivateRouters;
