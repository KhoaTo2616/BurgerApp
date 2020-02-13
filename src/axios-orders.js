import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-87a25.firebaseio.com/"
});

export default instance;
