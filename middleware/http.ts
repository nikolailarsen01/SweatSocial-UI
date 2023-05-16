import axios from "axios";
import { useToast } from "vue-toast-notification";
import { APIError } from "~/types/apiError";
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
    const toast = useToast();

    let errMsg = "";
    if (err.response) {
      if (err.response.status === 400)
        Object.keys(err.response.data).forEach((val) => {
          errMsg += err.response.data[val] + "<br />";
        });
      else errMsg = err.response.data;
    } else errMsg = err.toString();

    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    const toast = useToast();

    let errorList: string[] = [];
    if (err.response) {
      let res: APIError = err.response.data;
      if (res.errors) {
        Object.entries(res.errors!).forEach(([key, errors]) => {
          errors.forEach((x) => {
            errorList.push(x);
          });
        });
      }
      errorList.push(res.message);
      errorList.forEach((x) => {
        toast.error(x);
      });
    }
    return Promise.reject(err);
  }
);

export default http;
