import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:8899/`,
  // withCredentials: false,
  // headers: {
  //   post: { "Content-Type": "application/json" },
  //   put: { "Content-Type": "application/json" },
  // },
});
