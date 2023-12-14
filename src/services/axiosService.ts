import axios from "axios";
import { BASE_URL, REFRESH_TOKEN_URL } from "./url";
import { checkExpiredJwt } from "~/utils/jwtDecode";
import { PATH_NAME } from "~/routers/pathName";
import { toast } from "react-toastify";

let refreshTokenClosure: any = null;

const axiosService = () => {
  const accessToken = localStorage.getItem("@accessToken") || "";
  const refreshToken = localStorage.getItem("@refreshToken") || "";

  const handleRefreshToken = async () => {
    try {
      const newAccessToken = await axios({
        method: "POST",
        url: REFRESH_TOKEN_URL,
        data: {
          refreshToken: refreshToken,
        },
      })
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
      return newAccessToken;
    } catch (error) {
      console.log("Error when call refresh token", error);
    } finally {
      refreshTokenClosure = null;
    }
  };

  const axiosOptions = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // Add a request interceptor
  axiosOptions.interceptors.request.use(
    async function (config: any) {
      // Do something before request is sent
      if (!checkExpiredJwt(accessToken)) {
        refreshTokenClosure = refreshTokenClosure
          ? refreshTokenClosure
          : handleRefreshToken();
        try {
          const response = await refreshTokenClosure;
          if (response) {
            localStorage.setItem("@accessToken", response.accessToken);
            config.headers = {
              "Content-Type": "application/json",
              Authorization: `Bearer ${response.accessToken}`,
            };
            // reset token request for the next expiration
            refreshTokenClosure = null;
          }
        } catch (error: any) {
          // reset token request for the next expiration
          refreshTokenClosure = null;
          if (!error.response) {
            toast.error("Không có kết nối tới server!");
          }
          window.location.replace(PATH_NAME.LOGIN);
        }
      } else {
        config.headers = {
          Authorization: `Bearer ${accessToken}`,
        };
      }
      return config;
    },
    function (error: any) {
      // Do something with request error
      if (error.response.message == "Token is not valid") {
        window.location.replace(PATH_NAME.LOGIN);
      }
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosOptions.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error) {
        console.log({ error });
        if (error.response.message == "Token is not valid") {
          window.location.replace(PATH_NAME.LOGIN);
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosOptions;
};

export default axiosService;
