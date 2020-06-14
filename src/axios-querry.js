import axios from "axios";

const instance = axios.create({
  baseURL: "https://tintshade-19cda.firebaseio.com/",
});

export default instance;
