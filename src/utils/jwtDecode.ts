import { jwtDecode } from "jwt-decode";

export const checkExpiredJwt = (accessToken: string) => {
  const { exp } = jwtDecode(accessToken);
  if (Date.now() >= exp! * 1000) {
    return false;
  }
  return true;
};
