import { Outlet, Navigate } from "react-router-dom";
import { PATH_NAME } from "./pathName";

const PrivateRouters = () => {
  let authenticated: boolean = true;

  return authenticated ? <Outlet /> : <Navigate to={PATH_NAME.LOGIN} />;
};

export default PrivateRouters;
