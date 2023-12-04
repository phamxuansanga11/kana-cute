import { Outlet, Navigate } from "react-router-dom";
import { PATH_NAME } from "./pathName";

const PrivateRouters = () => {
  let authenticated: boolean = false;

  return authenticated ? <Outlet /> : <Navigate to={PATH_NAME.LOGIN} />;
};

export default PrivateRouters;
