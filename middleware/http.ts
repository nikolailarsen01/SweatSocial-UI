import axios from "axios";
//import { useToast } from 'vue-toast-notification'
import { useAuthStore } from "~/stores/auth";

let http = axios.create({
  baseURL: "https://eee2-185-19-132-71.ngrok-free.app/api",
  withCredentials: true,
});
http.interceptors.request.use(
  function (config) {
    const authStore = useAuthStore();
    if (authStore.$state.token) {
      const text = `Bearer ${authStore.$state.token}`;
      config.headers.Authorization = text;
    }
    return config;
  },
  function (err) {
    //  const toast = useToast()

    let errMsg = "";
    if (err.response) {
      if (err.response.status === 400)
        Object.keys(err.response.data).forEach((val) => {
          errMsg += err.response.data[val] + "<br />";
        });
      else errMsg = err.response.data;
    } else errMsg = err.toString();

    //  toast.error(errMsg)

    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    // const toast = useToast()

    let errMsg = "";
    if (err.response) {
      if (err.response.status === 400)
        Object.keys(err.response.data).forEach((val) => {
          errMsg += err.response.data[val] + "<br />";
        });
      else errMsg = err.response.data;
    } else errMsg = err.toString();

    // toast.error(errMsg)

    return Promise.reject(err);
  }
);

export default http;
