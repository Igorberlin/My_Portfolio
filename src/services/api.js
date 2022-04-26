import axios from "axios";

const radio = axios.create({
  baseURL: "https://jobapi.teclead-ventures.de/recruiting/radios"
});

export default radio;
