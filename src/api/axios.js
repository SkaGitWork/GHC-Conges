
import { Platform } from "react-native"
import axios from "axios"
const Axios = axios.create({
  baseURL:
    Platform.OS === "web"
      ? "http://localhost:8001"
      : "https://cardio-fit-shema.herokuapp.com",
      // : "http://192.168.1.13:8001",
})
export default Axios
