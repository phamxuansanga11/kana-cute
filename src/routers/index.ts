import React from "react";
import Login from "~/pages/authentication/login";
import { KEY_NAME, PATH_NAME } from "./pathName";
import Home from "~/pages/home";

type Router = {
  key: any;
  path: string;
  component: () => React.ReactNode;
};

const publicRouters: Router[] = [
  {
    key: KEY_NAME.LOGIN,
    path: PATH_NAME.LOGIN,
    component: Login,
  },
];

const privateRouters: Router[] = [
  {
    key: KEY_NAME.HOME,
    path: PATH_NAME.HOME,
    component: Home,
  },
];

export { publicRouters, privateRouters };
