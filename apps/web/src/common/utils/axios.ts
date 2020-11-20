import axios from "axios";

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.defaults.headers.post["Content-Type"] =
	"application/json;charset=utf-8";
axiosInstance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default axiosInstance;
